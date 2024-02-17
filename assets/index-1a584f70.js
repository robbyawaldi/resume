(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))_(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const v of t.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&_(v)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function _(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();function w(){}function A(e){return e()}function E(){return Object.create(null)}function g(e){e.forEach(A)}function L(e){return typeof e=="function"}function j(e,l){return e!=e?l==l:e!==l||e&&typeof e=="object"||typeof e=="function"}function B(e){return Object.keys(e).length===0}function I(e,l,s){e.insertBefore(l,s||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function M(e){return document.createElement(e)}function C(e,l,s){s==null?e.removeAttribute(l):e.getAttribute(l)!==s&&e.setAttribute(l,s)}function T(e){return Array.from(e.childNodes)}let p;function c(e){p=e}const d=[],O=[];let o=[];const k=[],q=Promise.resolve();let u=!1;function z(){u||(u=!0,q.then(P))}function h(e){o.push(e)}const x=new Set;let f=0;function P(){if(f!==0)return;const e=p;do{try{for(;f<d.length;){const l=d[f];f++,c(l),F(l.$$)}}catch(l){throw d.length=0,f=0,l}for(c(null),d.length=0,f=0;O.length;)O.pop()();for(let l=0;l<o.length;l+=1){const s=o[l];x.has(s)||(x.add(s),s())}o.length=0}while(d.length);for(;k.length;)k.pop()();u=!1,x.clear(),c(e)}function F(e){if(e.fragment!==null){e.update(),g(e.before_update);const l=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,l),e.after_update.forEach(h)}}function H(e){const l=[],s=[];o.forEach(_=>e.indexOf(_)===-1?l.push(_):s.push(_)),s.forEach(_=>_()),o=l}const K=new Set;function Z(e,l){e&&e.i&&(K.delete(e),e.i(l))}function D(e,l,s,_){const{fragment:r,after_update:t}=e.$$;r&&r.m(l,s),_||h(()=>{const v=e.$$.on_mount.map(A).filter(L);e.$$.on_destroy?e.$$.on_destroy.push(...v):g(v),e.$$.on_mount=[]}),t.forEach(h)}function G(e,l){const s=e.$$;s.fragment!==null&&(H(s.after_update),g(s.on_destroy),s.fragment&&s.fragment.d(l),s.on_destroy=s.fragment=null,s.ctx=[])}function J(e,l){e.$$.dirty[0]===-1&&(d.push(e),z(),e.$$.dirty.fill(0)),e.$$.dirty[l/31|0]|=1<<l%31}function Q(e,l,s,_,r,t,v,S=[-1]){const n=p;c(e);const i=e.$$={fragment:null,ctx:[],props:t,update:w,not_equal:r,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(n?n.$$.context:[])),callbacks:E(),dirty:S,skip_bound:!1,root:l.target||n.$$.root};v&&v(i.root);let y=!1;if(i.ctx=s?s(e,l.props||{},(a,m,...$)=>{const b=$.length?$[0]:m;return i.ctx&&r(i.ctx[a],i.ctx[a]=b)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](b),y&&J(e,a)),m}):[],i.update(),y=!0,g(i.before_update),i.fragment=_?_(i.ctx):!1,l.target){if(l.hydrate){const a=T(l.target);i.fragment&&i.fragment.l(a),a.forEach(N)}else i.fragment&&i.fragment.c();l.intro&&Z(e.$$.fragment),D(e,l.target,l.anchor,l.customElement),P()}c(n)}class R{$destroy(){G(this,1),this.$destroy=w}$on(l,s){if(!L(s))return w;const _=this.$$.callbacks[l]||(this.$$.callbacks[l]=[]);return _.push(s),()=>{const r=_.indexOf(s);r!==-1&&_.splice(r,1)}}$set(l){this.$$set&&!B(l)&&(this.$$.skip_bound=!0,this.$$set(l),this.$$.skip_bound=!1)}}function U(e){let l;return{c(){l=M("body"),l.innerHTML=`<div class="night svelte-1x2re4w"></div> 
  <div id="name" class="text absolute top-1/3 opacity-0 transition-opacity duration-1000 text-center w-full svelte-1x2re4w">Sabila Az-Zahra</div> 
  <div class="flowers svelte-1x2re4w"><div class="flower flower--1 svelte-1x2re4w"><div class="flower__leafs flower__leafs--1 svelte-1x2re4w"><div class="flower__leaf flower__leaf--1 svelte-1x2re4w"></div> 
        <div class="flower__leaf flower__leaf--2 svelte-1x2re4w"></div> 
        <div class="flower__leaf flower__leaf--3 svelte-1x2re4w"></div> 
        <div class="flower__leaf flower__leaf--4 svelte-1x2re4w"></div> 
        <div class="flower__white-circle svelte-1x2re4w"></div> 

        <div class="flower__light flower__light--1 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--2 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--3 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--4 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--5 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--6 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--7 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--8 svelte-1x2re4w"></div></div> 
      <div class="flower__line svelte-1x2re4w"><div class="flower__line__leaf flower__line__leaf--1 svelte-1x2re4w"></div> 
        <div class="flower__line__leaf flower__line__leaf--2 svelte-1x2re4w"></div> 
        <div class="flower__line__leaf flower__line__leaf--3 svelte-1x2re4w"></div> 
        <div class="flower__line__leaf flower__line__leaf--4 svelte-1x2re4w"></div> 
        <div class="flower__line__leaf flower__line__leaf--5 svelte-1x2re4w"></div> 
        <div class="flower__line__leaf flower__line__leaf--6 svelte-1x2re4w"></div></div></div> 

    <div class="flower flower--2 svelte-1x2re4w"><div class="flower__leafs flower__leafs--2 svelte-1x2re4w"><div class="flower__leaf flower__leaf--1 svelte-1x2re4w"></div> 
        <div class="flower__leaf flower__leaf--2 svelte-1x2re4w"></div> 
        <div class="flower__leaf flower__leaf--3 svelte-1x2re4w"></div> 
        <div class="flower__leaf flower__leaf--4 svelte-1x2re4w"></div> 
        <div class="flower__white-circle svelte-1x2re4w"></div> 

        <div class="flower__light flower__light--1 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--2 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--3 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--4 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--5 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--6 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--7 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--8 svelte-1x2re4w"></div></div> 
      <div class="flower__line svelte-1x2re4w"><div class="flower__line__leaf flower__line__leaf--1 svelte-1x2re4w"></div> 
        <div class="flower__line__leaf flower__line__leaf--2 svelte-1x2re4w"></div> 
        <div class="flower__line__leaf flower__line__leaf--3 svelte-1x2re4w"></div> 
        <div class="flower__line__leaf flower__line__leaf--4 svelte-1x2re4w"></div></div></div> 

    <div class="flower flower--3 svelte-1x2re4w"><div class="flower__leafs flower__leafs--3 svelte-1x2re4w"><div class="flower__leaf flower__leaf--1 svelte-1x2re4w"></div> 
        <div class="flower__leaf flower__leaf--2 svelte-1x2re4w"></div> 
        <div class="flower__leaf flower__leaf--3 svelte-1x2re4w"></div> 
        <div class="flower__leaf flower__leaf--4 svelte-1x2re4w"></div> 
        <div class="flower__white-circle svelte-1x2re4w"></div> 

        <div class="flower__light flower__light--1 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--2 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--3 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--4 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--5 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--6 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--7 svelte-1x2re4w"></div> 
        <div class="flower__light flower__light--8 svelte-1x2re4w"></div></div> 
      <div class="flower__line svelte-1x2re4w"><div class="flower__line__leaf flower__line__leaf--1 svelte-1x2re4w"></div> 
        <div class="flower__line__leaf flower__line__leaf--2 svelte-1x2re4w"></div> 
        <div class="flower__line__leaf flower__line__leaf--3 svelte-1x2re4w"></div> 
        <div class="flower__line__leaf flower__line__leaf--4 svelte-1x2re4w"></div></div></div> 

    <div class="grow-ans svelte-1x2re4w" style="--d:1.2s"><div class="flower__g-long svelte-1x2re4w"><div class="flower__g-long__top svelte-1x2re4w"></div> 
        <div class="flower__g-long__bottom svelte-1x2re4w"></div></div></div> 

    <div class="growing-grass svelte-1x2re4w"><div class="flower__grass flower__grass--1 svelte-1x2re4w"><div class="flower__grass--top svelte-1x2re4w"></div> 
        <div class="flower__grass--bottom svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--1 svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--2 svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--3 svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--4 svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--5 svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--6 svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--7 svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--8 svelte-1x2re4w"></div> 
        <div class="flower__grass__overlay svelte-1x2re4w"></div></div></div> 

    <div class="growing-grass svelte-1x2re4w"><div class="flower__grass flower__grass--2 svelte-1x2re4w"><div class="flower__grass--top svelte-1x2re4w"></div> 
        <div class="flower__grass--bottom svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--1 svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--2 svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--3 svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--4 svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--5 svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--6 svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--7 svelte-1x2re4w"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--8 svelte-1x2re4w"></div> 
        <div class="flower__grass__overlay svelte-1x2re4w"></div></div></div> 

    <div class="grow-ans svelte-1x2re4w" style="--d:2.4s"><div class="flower__g-right flower__g-right--1 svelte-1x2re4w"><div class="leaf svelte-1x2re4w"></div></div></div> 

    <div class="grow-ans svelte-1x2re4w" style="--d:2.8s"><div class="flower__g-right flower__g-right--2 svelte-1x2re4w"><div class="leaf svelte-1x2re4w"></div></div></div> 

    <div class="grow-ans svelte-1x2re4w" style="--d:2.8s"><div class="flower__g-front svelte-1x2re4w"><div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1 svelte-1x2re4w"><div class="flower__g-front__leaf svelte-1x2re4w"></div></div> 
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2 svelte-1x2re4w"><div class="flower__g-front__leaf svelte-1x2re4w"></div></div> 
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3 svelte-1x2re4w"><div class="flower__g-front__leaf svelte-1x2re4w"></div></div> 
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4 svelte-1x2re4w"><div class="flower__g-front__leaf svelte-1x2re4w"></div></div> 
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5 svelte-1x2re4w"><div class="flower__g-front__leaf svelte-1x2re4w"></div></div> 
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6 svelte-1x2re4w"><div class="flower__g-front__leaf svelte-1x2re4w"></div></div> 
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7 svelte-1x2re4w"><div class="flower__g-front__leaf svelte-1x2re4w"></div></div> 
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8 svelte-1x2re4w"><div class="flower__g-front__leaf svelte-1x2re4w"></div></div> 
        <div class="flower__g-front__line svelte-1x2re4w"></div></div></div> 

    <div class="grow-ans svelte-1x2re4w" style="--d:3.2s"><div class="flower__g-fr svelte-1x2re4w"><div class="leaf svelte-1x2re4w"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--1 svelte-1x2re4w"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--2 svelte-1x2re4w"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--3 svelte-1x2re4w"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--4 svelte-1x2re4w"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--5 svelte-1x2re4w"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--6 svelte-1x2re4w"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--7 svelte-1x2re4w"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--8 svelte-1x2re4w"></div></div></div> 

    <div class="long-g long-g--0 svelte-1x2re4w"><div class="grow-ans svelte-1x2re4w" style="--d:3s"><div class="leaf leaf--0 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:2.2s"><div class="leaf leaf--1 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:3.4s"><div class="leaf leaf--2 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:3.6s"><div class="leaf leaf--3 svelte-1x2re4w"></div></div></div> 

    <div class="long-g long-g--1 svelte-1x2re4w"><div class="grow-ans svelte-1x2re4w" style="--d:3.6s"><div class="leaf leaf--0 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:3.8s"><div class="leaf leaf--1 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:4s"><div class="leaf leaf--2 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:4.2s"><div class="leaf leaf--3 svelte-1x2re4w"></div></div></div> 

    <div class="long-g long-g--2 svelte-1x2re4w"><div class="grow-ans svelte-1x2re4w" style="--d:4s"><div class="leaf leaf--0 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:4.2s"><div class="leaf leaf--1 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:4.4s"><div class="leaf leaf--2 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:4.6s"><div class="leaf leaf--3 svelte-1x2re4w"></div></div></div> 

    <div class="long-g long-g--3 svelte-1x2re4w"><div class="grow-ans svelte-1x2re4w" style="--d:4s"><div class="leaf leaf--0 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:4.2s"><div class="leaf leaf--1 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:3s"><div class="leaf leaf--2 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:3.6s"><div class="leaf leaf--3 svelte-1x2re4w"></div></div></div> 

    <div class="long-g long-g--4 svelte-1x2re4w"><div class="grow-ans svelte-1x2re4w" style="--d:4s"><div class="leaf leaf--0 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:4.2s"><div class="leaf leaf--1 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:3s"><div class="leaf leaf--2 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:3.6s"><div class="leaf leaf--3 svelte-1x2re4w"></div></div></div> 

    <div class="long-g long-g--5 svelte-1x2re4w"><div class="grow-ans svelte-1x2re4w" style="--d:4s"><div class="leaf leaf--0 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:4.2s"><div class="leaf leaf--1 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:3s"><div class="leaf leaf--2 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:3.6s"><div class="leaf leaf--3 svelte-1x2re4w"></div></div></div> 

    <div class="long-g long-g--6 svelte-1x2re4w"><div class="grow-ans svelte-1x2re4w" style="--d:4.2s"><div class="leaf leaf--0 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:4.4s"><div class="leaf leaf--1 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:4.6s"><div class="leaf leaf--2 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:4.8s"><div class="leaf leaf--3 svelte-1x2re4w"></div></div></div> 

    <div class="long-g long-g--7 svelte-1x2re4w"><div class="grow-ans svelte-1x2re4w" style="--d:3s"><div class="leaf leaf--0 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:3.2s"><div class="leaf leaf--1 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:3.5s"><div class="leaf leaf--2 svelte-1x2re4w"></div></div> 
      <div class="grow-ans svelte-1x2re4w" style="--d:3.6s"><div class="leaf leaf--3 svelte-1x2re4w"></div></div></div></div>`,C(l,"class","svelte-1x2re4w")},m(s,_){I(s,l,_)},p:w,i:w,o:w,d(s){s&&N(l)}}}function V(e){return setTimeout(()=>{document.getElementById("name").classList.add("opacity-100")},3e3),[]}class W extends R{constructor(l){super(),Q(this,l,V,U,j,{})}}new W({target:document.getElementById("app")});
