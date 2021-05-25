
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.31.2' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src\App.svelte generated by Svelte v3.31.2 */

    const file = "src\\App.svelte";

    function create_fragment(ctx) {
    	let main;
    	let img;
    	let img_src_value;
    	let t0;
    	let div0;
    	let h10;
    	let t1;
    	let span0;
    	let t3;
    	let p0;
    	let span1;
    	let t5;
    	let t6;
    	let div2;
    	let h11;
    	let t8;
    	let div1;
    	let ul;
    	let li;
    	let h2;
    	let t10;
    	let p1;
    	let t12;
    	let div3;
    	let h12;
    	let t14;
    	let p2;
    	let t16;
    	let div5;
    	let h13;
    	let t18;
    	let div4;
    	let span2;
    	let t20;
    	let span3;
    	let t22;
    	let span4;
    	let t24;
    	let span5;
    	let t26;
    	let span6;
    	let t28;
    	let span7;
    	let t30;
    	let span8;
    	let t32;
    	let span9;
    	let t34;
    	let span10;
    	let t36;
    	let span11;
    	let t38;
    	let span12;
    	let t40;
    	let span13;
    	let t42;
    	let span14;
    	let t44;
    	let span15;
    	let t46;
    	let span16;
    	let t48;
    	let span17;

    	const block = {
    		c: function create() {
    			main = element("main");
    			img = element("img");
    			t0 = space();
    			div0 = element("div");
    			h10 = element("h1");
    			t1 = text("About ");
    			span0 = element("span");
    			span0.textContent = "Me";
    			t3 = space();
    			p0 = element("p");
    			span1 = element("span");
    			span1.textContent = "Hi 👋, I'am Robby Awaldi";
    			t5 = text("\n\t\t\tA passionate Full Stack Software Developer having an experience of building\n\t\t\tWeb with Javascript, React js, Svelte, Node JS, Docker, Laravel, Django\n\t\t\tand some other cool libraries and frameworks.");
    			t6 = space();
    			div2 = element("div");
    			h11 = element("h1");
    			h11.textContent = "Experience";
    			t8 = space();
    			div1 = element("div");
    			ul = element("ul");
    			li = element("li");
    			h2 = element("h2");
    			h2.textContent = "PT Mitra Erat Technology";
    			t10 = space();
    			p1 = element("p");
    			p1.textContent = "Building the CMS application, designing the flow and\n\t\t\t\t\t\tplanning of the Indihome Study learning platform provide\n\t\t\t\t\t\tservices that support business needs, build REST APIs,\n\t\t\t\t\t\tetc.";
    			t12 = space();
    			div3 = element("div");
    			h12 = element("h1");
    			h12.textContent = "Education";
    			t14 = space();
    			p2 = element("p");
    			p2.textContent = "Universitas Indraprasta PGRI / Bachelor of Informatics Engineering";
    			t16 = space();
    			div5 = element("div");
    			h13 = element("h1");
    			h13.textContent = "What Skill I have";
    			t18 = space();
    			div4 = element("div");
    			span2 = element("span");
    			span2.textContent = "Javascript";
    			t20 = space();
    			span3 = element("span");
    			span3.textContent = "Python";
    			t22 = space();
    			span4 = element("span");
    			span4.textContent = "PHP";
    			t24 = space();
    			span5 = element("span");
    			span5.textContent = "CSS";
    			t26 = space();
    			span6 = element("span");
    			span6.textContent = "SASS";
    			t28 = space();
    			span7 = element("span");
    			span7.textContent = "Github";
    			t30 = space();
    			span8 = element("span");
    			span8.textContent = "MySQL";
    			t32 = space();
    			span9 = element("span");
    			span9.textContent = "PostgreSQL";
    			t34 = space();
    			span10 = element("span");
    			span10.textContent = "Regex";
    			t36 = space();
    			span11 = element("span");
    			span11.textContent = "Docker";
    			t38 = space();
    			span12 = element("span");
    			span12.textContent = "Laravel";
    			t40 = space();
    			span13 = element("span");
    			span13.textContent = "Django";
    			t42 = space();
    			span14 = element("span");
    			span14.textContent = "Node JS";
    			t44 = space();
    			span15 = element("span");
    			span15.textContent = "React JS";
    			t46 = space();
    			span16 = element("span");
    			span16.textContent = "Svelte JS";
    			t48 = space();
    			span17 = element("span");
    			span17.textContent = "Tailwindcss";
    			if (img.src !== (img_src_value = "/assets/nrrbbbbby.svg")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "");
    			attr_dev(img, "width", "500");
    			add_location(img, file, 1, 1, 8);
    			attr_dev(span0, "class", "font-semibold text-lg text-blue-400");
    			add_location(span0, file, 5, 9, 166);
    			attr_dev(h10, "class", "text-3xl font-thin md:text-left text-center leading-3");
    			add_location(h10, file, 4, 2, 90);
    			attr_dev(span1, "class", "block mt-3 font-semibold text-lg");
    			add_location(span1, file, 8, 3, 243);
    			add_location(p0, file, 7, 2, 236);
    			attr_dev(div0, "class", "content1");
    			add_location(div0, file, 3, 1, 65);
    			attr_dev(h11, "class", "font-semibold text-lg");
    			add_location(h11, file, 18, 2, 576);
    			add_location(h2, file, 22, 5, 693);
    			add_location(p1, file, 23, 5, 732);
    			add_location(li, file, 21, 4, 683);
    			attr_dev(ul, "class", "ml-3");
    			add_location(ul, file, 20, 3, 661);
    			attr_dev(div1, "class", "border-l-2 ml-2");
    			add_location(div1, file, 19, 2, 628);
    			attr_dev(div2, "class", "content2");
    			add_location(div2, file, 17, 1, 551);
    			attr_dev(h12, "class", "font-semibold text-lg");
    			add_location(h12, file, 35, 2, 1003);
    			add_location(p2, file, 36, 2, 1054);
    			attr_dev(div3, "class", "content3");
    			add_location(div3, file, 34, 1, 978);
    			attr_dev(h13, "class", "font-semibold text-lg");
    			add_location(h13, file, 42, 2, 1170);
    			attr_dev(span2, "class", "chip");
    			add_location(span2, file, 44, 3, 1267);
    			attr_dev(span3, "class", "chip");
    			add_location(span3, file, 45, 3, 1307);
    			attr_dev(span4, "class", "chip");
    			add_location(span4, file, 46, 3, 1343);
    			attr_dev(span5, "class", "chip");
    			add_location(span5, file, 47, 3, 1376);
    			attr_dev(span6, "class", "chip");
    			add_location(span6, file, 48, 3, 1409);
    			attr_dev(span7, "class", "chip");
    			add_location(span7, file, 49, 3, 1443);
    			attr_dev(span8, "class", "chip");
    			add_location(span8, file, 50, 3, 1479);
    			attr_dev(span9, "class", "chip");
    			add_location(span9, file, 51, 3, 1514);
    			attr_dev(span10, "class", "chip");
    			add_location(span10, file, 52, 3, 1554);
    			attr_dev(span11, "class", "chip");
    			add_location(span11, file, 53, 3, 1589);
    			attr_dev(span12, "class", "chip");
    			add_location(span12, file, 54, 3, 1625);
    			attr_dev(span13, "class", "chip");
    			add_location(span13, file, 55, 3, 1662);
    			attr_dev(span14, "class", "chip");
    			add_location(span14, file, 56, 3, 1698);
    			attr_dev(span15, "class", "chip");
    			add_location(span15, file, 57, 3, 1735);
    			attr_dev(span16, "class", "chip");
    			add_location(span16, file, 58, 3, 1773);
    			attr_dev(span17, "class", "chip");
    			add_location(span17, file, 59, 3, 1812);
    			attr_dev(div4, "class", "flex gap-2 flex-wrap");
    			add_location(div4, file, 43, 2, 1229);
    			attr_dev(div5, "class", "content4");
    			add_location(div5, file, 41, 1, 1145);
    			add_location(main, file, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			append_dev(main, img);
    			append_dev(main, t0);
    			append_dev(main, div0);
    			append_dev(div0, h10);
    			append_dev(h10, t1);
    			append_dev(h10, span0);
    			append_dev(div0, t3);
    			append_dev(div0, p0);
    			append_dev(p0, span1);
    			append_dev(p0, t5);
    			append_dev(main, t6);
    			append_dev(main, div2);
    			append_dev(div2, h11);
    			append_dev(div2, t8);
    			append_dev(div2, div1);
    			append_dev(div1, ul);
    			append_dev(ul, li);
    			append_dev(li, h2);
    			append_dev(li, t10);
    			append_dev(li, p1);
    			append_dev(main, t12);
    			append_dev(main, div3);
    			append_dev(div3, h12);
    			append_dev(div3, t14);
    			append_dev(div3, p2);
    			append_dev(main, t16);
    			append_dev(main, div5);
    			append_dev(div5, h13);
    			append_dev(div5, t18);
    			append_dev(div5, div4);
    			append_dev(div4, span2);
    			append_dev(div4, t20);
    			append_dev(div4, span3);
    			append_dev(div4, t22);
    			append_dev(div4, span4);
    			append_dev(div4, t24);
    			append_dev(div4, span5);
    			append_dev(div4, t26);
    			append_dev(div4, span6);
    			append_dev(div4, t28);
    			append_dev(div4, span7);
    			append_dev(div4, t30);
    			append_dev(div4, span8);
    			append_dev(div4, t32);
    			append_dev(div4, span9);
    			append_dev(div4, t34);
    			append_dev(div4, span10);
    			append_dev(div4, t36);
    			append_dev(div4, span11);
    			append_dev(div4, t38);
    			append_dev(div4, span12);
    			append_dev(div4, t40);
    			append_dev(div4, span13);
    			append_dev(div4, t42);
    			append_dev(div4, span14);
    			append_dev(div4, t44);
    			append_dev(div4, span15);
    			append_dev(div4, t46);
    			append_dev(div4, span16);
    			append_dev(div4, t48);
    			append_dev(div4, span17);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("App", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
        target: document.body,
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
