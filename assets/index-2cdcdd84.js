(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function f(){}function S(e){return e()}function I(){return Object.create(null)}function m(e){e.forEach(S)}function O(e){return typeof e=="function"}function j(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function R(e){return Object.keys(e).length===0}function T(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function C(e){return document.createElement(e)}function L(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function M(e){return Array.from(e.childNodes)}let _;function p(e){_=e}const d=[],E=[];let u=[];const k=[],D=Promise.resolve();let b=!1;function J(){b||(b=!0,D.then(N))}function y(e){u.push(e)}const g=new Set;let c=0;function N(){if(c!==0)return;const e=_;do{try{for(;c<d.length;){const t=d[c];c++,p(t),B(t.$$)}}catch(t){throw d.length=0,c=0,t}for(p(null),d.length=0,c=0;E.length;)E.pop()();for(let t=0;t<u.length;t+=1){const n=u[t];g.has(n)||(g.add(n),n())}u.length=0}while(d.length);for(;k.length;)k.pop()();b=!1,g.clear(),p(e)}function B(e){if(e.fragment!==null){e.update(),m(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}function z(e){const t=[],n=[];u.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),u=t}const F=new Set;function G(e,t){e&&e.i&&(F.delete(e),e.i(t))}function H(e,t,n,r){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,n),r||y(()=>{const a=e.$$.on_mount.map(S).filter(O);e.$$.on_destroy?e.$$.on_destroy.push(...a):m(a),e.$$.on_mount=[]}),i.forEach(y)}function W(e,t){const n=e.$$;n.fragment!==null&&(z(n.after_update),m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function q(e,t){e.$$.dirty[0]===-1&&(d.push(e),J(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,n,r,s,i,a,P=[-1]){const h=_;p(e);const o=e.$$={fragment:null,ctx:[],props:i,update:f,not_equal:s,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:I(),dirty:P,skip_bound:!1,root:t.target||h.$$.root};a&&a(o.root);let x=!1;if(o.ctx=n?n(e,t.props||{},(l,v,...w)=>{const $=w.length?w[0]:v;return o.ctx&&s(o.ctx[l],o.ctx[l]=$)&&(!o.skip_bound&&o.bound[l]&&o.bound[l]($),x&&q(e,l)),v}):[],o.update(),x=!0,m(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const l=M(t.target);o.fragment&&o.fragment.l(l),l.forEach(A)}else o.fragment&&o.fragment.c();t.intro&&G(e.$$.fragment),H(e,t.target,t.anchor,t.customElement),N()}p(h)}class U{$destroy(){W(this,1),this.$destroy=f}$on(t,n){if(!O(n))return f;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!R(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(e){let t;return{c(){t=C("main"),t.innerHTML=`<div class="self-center rounded-full md:w-[200px] w-[150px] md:h-[200px] h-[150px] bg-[url(&#39;/profile.jpeg&#39;)] bg-bottom bg-cover"></div> 

  <div class=""><h1 class="text-3xl font-thin md:text-left text-center leading-3">About <span class="font-semibold text-lg text-blue-400">Me</span></h1> 
    <p><span class="block mt-3 font-semibold text-lg">Hi 👋, I&#39;am Robby Awaldi</span>
      A passionate Frontend Developer having an experience of building Web with Javascript,
      React js, Node JS, Docker and some other cool libraries and frameworks.</p></div> 

  <div class=""><h1 class="font-semibold text-lg">Experience</h1> 
    <div class="border-l-2 ml-2"><ul class="ml-3"><li><h2 class="font-bold">Mitra Erat Technology (2019 - 2021)</h2> 
          <p>Building the CMS application, designing the flow and planning of the
            Indihome Study learning platform provide services that support
            business needs, build REST APIs, etc.</p></li> 
        <li><h2 class="font-bold">Neural Technologies Indonesia (2021 - Present)</h2> 
          <p>I worked at Neural Technologies Indonesia as a team leader for
            several years. During my time there, I was responsible for
            overseeing various projects related to the development of
            dashboards, ERP platforms, and business intelligence systems. In
            addition, I developed a reusable library that was utilized for
            internal purposes, which helped to streamline our development
            processes.</p> 
          <p>One of my primary responsibilities as a team leader was to ensure
            that each project was completed efficiently and effectively. To
            accomplish this, I worked closely with my team to design processes
            such as flow, CI/CD, and other development practices. I also led the
            effort to implement these processes throughout the organization,
            ensuring that they were followed consistently by all team members.</p></li></ul></div></div> 

  <div class=""><h1 class="font-semibold text-lg">Education</h1> 
    <p>Universitas Indraprasta PGRI / Bachelor of Informatics Engineering</p></div> 

  <div class=""><h1 class="font-semibold text-lg">What Skill I have</h1> 
    <div class="flex gap-2 flex-wrap"><span class="chip">Javascript</span> 
      <span class="chip">CSS</span> 
      <span class="chip">Github</span> 
      <span class="chip">Regex</span> 
      <span class="chip">Docker</span> 
      <span class="chip">Node JS</span> 
      <span class="chip">React JS</span> 
      <span class="chip">Tailwindcss</span></div></div>`,L(t,"class","p-4 flex flex-col gap-8 max-w-2xl m-auto")},m(n,r){T(n,t,r)},p:f,i:f,o:f,d(n){n&&A(t)}}}class V extends U{constructor(t){super(),K(this,t,null,Q,j,{})}}new V({target:document.getElementById("app")});
