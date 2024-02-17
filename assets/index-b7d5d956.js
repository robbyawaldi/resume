(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const v of i.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();function o(){}function A(e){return e()}function E(){return Object.create(null)}function y(e){e.forEach(A)}function L(e){return typeof e=="function"}function j(e,l){return e!=e?l==l:e!==l||e&&typeof e=="object"||typeof e=="function"}function B(e){return Object.keys(e).length===0}function I(e,l,s){e.insertBefore(l,s||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function M(e){return document.createElement(e)}function z(e,l,s){s==null?e.removeAttribute(l):e.getAttribute(l)!==s&&e.setAttribute(l,s)}function C(e){return Array.from(e.childNodes)}let p;function n(e){p=e}const r=[],O=[];let c=[];const k=[],T=Promise.resolve();let g=!1;function q(){g||(g=!0,T.then(P))}function h(e){c.push(e)}const w=new Set;let f=0;function P(){if(f!==0)return;const e=p;do{try{for(;f<r.length;){const l=r[f];f++,n(l),F(l.$$)}}catch(l){throw r.length=0,f=0,l}for(n(null),r.length=0,f=0;O.length;)O.pop()();for(let l=0;l<c.length;l+=1){const s=c[l];w.has(s)||(w.add(s),s())}c.length=0}while(r.length);for(;k.length;)k.pop()();g=!1,w.clear(),n(e)}function F(e){if(e.fragment!==null){e.update(),y(e.before_update);const l=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,l),e.after_update.forEach(h)}}function H(e){const l=[],s=[];c.forEach(d=>e.indexOf(d)===-1?l.push(d):s.push(d)),s.forEach(d=>d()),c=l}const K=new Set;function D(e,l){e&&e.i&&(K.delete(e),e.i(l))}function G(e,l,s,d){const{fragment:t,after_update:i}=e.$$;t&&t.m(l,s),d||h(()=>{const v=e.$$.on_mount.map(A).filter(L);e.$$.on_destroy?e.$$.on_destroy.push(...v):y(v),e.$$.on_mount=[]}),i.forEach(h)}function J(e,l){const s=e.$$;s.fragment!==null&&(H(s.after_update),y(s.on_destroy),s.fragment&&s.fragment.d(l),s.on_destroy=s.fragment=null,s.ctx=[])}function Q(e,l){e.$$.dirty[0]===-1&&(r.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[l/31|0]|=1<<l%31}function R(e,l,s,d,t,i,v,S=[-1]){const u=p;n(e);const _=e.$$={fragment:null,ctx:[],props:i,update:o,not_equal:t,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(u?u.$$.context:[])),callbacks:E(),dirty:S,skip_bound:!1,root:l.target||u.$$.root};v&&v(_.root);let m=!1;if(_.ctx=s?s(e,l.props||{},(a,$,...b)=>{const x=b.length?b[0]:$;return _.ctx&&t(_.ctx[a],_.ctx[a]=x)&&(!_.skip_bound&&_.bound[a]&&_.bound[a](x),m&&Q(e,a)),$}):[],_.update(),m=!0,y(_.before_update),_.fragment=d?d(_.ctx):!1,l.target){if(l.hydrate){const a=C(l.target);_.fragment&&_.fragment.l(a),a.forEach(N)}else _.fragment&&_.fragment.c();l.intro&&D(e.$$.fragment),G(e,l.target,l.anchor,l.customElement),P()}n(u)}class U{$destroy(){J(this,1),this.$destroy=o}$on(l,s){if(!L(s))return o;const d=this.$$.callbacks[l]||(this.$$.callbacks[l]=[]);return d.push(s),()=>{const t=d.indexOf(s);t!==-1&&d.splice(t,1)}}$set(l){this.$$set&&!B(l)&&(this.$$.skip_bound=!0,this.$$set(l),this.$$.skip_bound=!1)}}function V(e){let l;return{c(){l=M("body"),l.innerHTML=`<div class="night svelte-1ytu7d4"></div> 
  <div id="name" class="text absolute top-1/3 opacity-0 transition-opacity duration-1000 svelte-1ytu7d4">Sabila Az-zahra</div> 
  <div class="flowers svelte-1ytu7d4"><div class="flower flower--1 svelte-1ytu7d4"><div class="flower__leafs flower__leafs--1 svelte-1ytu7d4"><div class="flower__leaf flower__leaf--1 svelte-1ytu7d4"></div> 
        <div class="flower__leaf flower__leaf--2 svelte-1ytu7d4"></div> 
        <div class="flower__leaf flower__leaf--3 svelte-1ytu7d4"></div> 
        <div class="flower__leaf flower__leaf--4 svelte-1ytu7d4"></div> 
        <div class="flower__white-circle svelte-1ytu7d4"></div> 

        <div class="flower__light flower__light--1 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--2 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--3 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--4 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--5 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--6 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--7 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--8 svelte-1ytu7d4"></div></div> 
      <div class="flower__line svelte-1ytu7d4"><div class="flower__line__leaf flower__line__leaf--1 svelte-1ytu7d4"></div> 
        <div class="flower__line__leaf flower__line__leaf--2 svelte-1ytu7d4"></div> 
        <div class="flower__line__leaf flower__line__leaf--3 svelte-1ytu7d4"></div> 
        <div class="flower__line__leaf flower__line__leaf--4 svelte-1ytu7d4"></div> 
        <div class="flower__line__leaf flower__line__leaf--5 svelte-1ytu7d4"></div> 
        <div class="flower__line__leaf flower__line__leaf--6 svelte-1ytu7d4"></div></div></div> 

    <div class="flower flower--2 svelte-1ytu7d4"><div class="flower__leafs flower__leafs--2 svelte-1ytu7d4"><div class="flower__leaf flower__leaf--1 svelte-1ytu7d4"></div> 
        <div class="flower__leaf flower__leaf--2 svelte-1ytu7d4"></div> 
        <div class="flower__leaf flower__leaf--3 svelte-1ytu7d4"></div> 
        <div class="flower__leaf flower__leaf--4 svelte-1ytu7d4"></div> 
        <div class="flower__white-circle svelte-1ytu7d4"></div> 

        <div class="flower__light flower__light--1 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--2 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--3 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--4 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--5 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--6 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--7 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--8 svelte-1ytu7d4"></div></div> 
      <div class="flower__line svelte-1ytu7d4"><div class="flower__line__leaf flower__line__leaf--1 svelte-1ytu7d4"></div> 
        <div class="flower__line__leaf flower__line__leaf--2 svelte-1ytu7d4"></div> 
        <div class="flower__line__leaf flower__line__leaf--3 svelte-1ytu7d4"></div> 
        <div class="flower__line__leaf flower__line__leaf--4 svelte-1ytu7d4"></div></div></div> 

    <div class="flower flower--3 svelte-1ytu7d4"><div class="flower__leafs flower__leafs--3 svelte-1ytu7d4"><div class="flower__leaf flower__leaf--1 svelte-1ytu7d4"></div> 
        <div class="flower__leaf flower__leaf--2 svelte-1ytu7d4"></div> 
        <div class="flower__leaf flower__leaf--3 svelte-1ytu7d4"></div> 
        <div class="flower__leaf flower__leaf--4 svelte-1ytu7d4"></div> 
        <div class="flower__white-circle svelte-1ytu7d4"></div> 

        <div class="flower__light flower__light--1 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--2 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--3 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--4 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--5 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--6 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--7 svelte-1ytu7d4"></div> 
        <div class="flower__light flower__light--8 svelte-1ytu7d4"></div></div> 
      <div class="flower__line svelte-1ytu7d4"><div class="flower__line__leaf flower__line__leaf--1 svelte-1ytu7d4"></div> 
        <div class="flower__line__leaf flower__line__leaf--2 svelte-1ytu7d4"></div> 
        <div class="flower__line__leaf flower__line__leaf--3 svelte-1ytu7d4"></div> 
        <div class="flower__line__leaf flower__line__leaf--4 svelte-1ytu7d4"></div></div></div> 

    <div class="grow-ans svelte-1ytu7d4" style="--d:1.2s"><div class="flower__g-long svelte-1ytu7d4"><div class="flower__g-long__top svelte-1ytu7d4"></div> 
        <div class="flower__g-long__bottom svelte-1ytu7d4"></div></div></div> 

    <div class="growing-grass svelte-1ytu7d4"><div class="flower__grass flower__grass--1 svelte-1ytu7d4"><div class="flower__grass--top svelte-1ytu7d4"></div> 
        <div class="flower__grass--bottom svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--1 svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--2 svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--3 svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--4 svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--5 svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--6 svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--7 svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--8 svelte-1ytu7d4"></div> 
        <div class="flower__grass__overlay svelte-1ytu7d4"></div></div></div> 

    <div class="growing-grass svelte-1ytu7d4"><div class="flower__grass flower__grass--2 svelte-1ytu7d4"><div class="flower__grass--top svelte-1ytu7d4"></div> 
        <div class="flower__grass--bottom svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--1 svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--2 svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--3 svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--4 svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--5 svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--6 svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--7 svelte-1ytu7d4"></div> 
        <div class="flower__grass__leaf flower__grass__leaf--8 svelte-1ytu7d4"></div> 
        <div class="flower__grass__overlay svelte-1ytu7d4"></div></div></div> 

    <div class="grow-ans svelte-1ytu7d4" style="--d:2.4s"><div class="flower__g-right flower__g-right--1 svelte-1ytu7d4"><div class="leaf svelte-1ytu7d4"></div></div></div> 

    <div class="grow-ans svelte-1ytu7d4" style="--d:2.8s"><div class="flower__g-right flower__g-right--2 svelte-1ytu7d4"><div class="leaf svelte-1ytu7d4"></div></div></div> 

    <div class="grow-ans svelte-1ytu7d4" style="--d:2.8s"><div class="flower__g-front svelte-1ytu7d4"><div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1 svelte-1ytu7d4"><div class="flower__g-front__leaf svelte-1ytu7d4"></div></div> 
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2 svelte-1ytu7d4"><div class="flower__g-front__leaf svelte-1ytu7d4"></div></div> 
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3 svelte-1ytu7d4"><div class="flower__g-front__leaf svelte-1ytu7d4"></div></div> 
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4 svelte-1ytu7d4"><div class="flower__g-front__leaf svelte-1ytu7d4"></div></div> 
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5 svelte-1ytu7d4"><div class="flower__g-front__leaf svelte-1ytu7d4"></div></div> 
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6 svelte-1ytu7d4"><div class="flower__g-front__leaf svelte-1ytu7d4"></div></div> 
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7 svelte-1ytu7d4"><div class="flower__g-front__leaf svelte-1ytu7d4"></div></div> 
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8 svelte-1ytu7d4"><div class="flower__g-front__leaf svelte-1ytu7d4"></div></div> 
        <div class="flower__g-front__line svelte-1ytu7d4"></div></div></div> 

    <div class="grow-ans svelte-1ytu7d4" style="--d:3.2s"><div class="flower__g-fr svelte-1ytu7d4"><div class="leaf svelte-1ytu7d4"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--1 svelte-1ytu7d4"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--2 svelte-1ytu7d4"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--3 svelte-1ytu7d4"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--4 svelte-1ytu7d4"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--5 svelte-1ytu7d4"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--6 svelte-1ytu7d4"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--7 svelte-1ytu7d4"></div> 
        <div class="flower__g-fr__leaf flower__g-fr__leaf--8 svelte-1ytu7d4"></div></div></div> 

    <div class="long-g long-g--0 svelte-1ytu7d4"><div class="grow-ans svelte-1ytu7d4" style="--d:3s"><div class="leaf leaf--0 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:2.2s"><div class="leaf leaf--1 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:3.4s"><div class="leaf leaf--2 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:3.6s"><div class="leaf leaf--3 svelte-1ytu7d4"></div></div></div> 

    <div class="long-g long-g--1 svelte-1ytu7d4"><div class="grow-ans svelte-1ytu7d4" style="--d:3.6s"><div class="leaf leaf--0 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:3.8s"><div class="leaf leaf--1 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:4s"><div class="leaf leaf--2 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:4.2s"><div class="leaf leaf--3 svelte-1ytu7d4"></div></div></div> 

    <div class="long-g long-g--2 svelte-1ytu7d4"><div class="grow-ans svelte-1ytu7d4" style="--d:4s"><div class="leaf leaf--0 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:4.2s"><div class="leaf leaf--1 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:4.4s"><div class="leaf leaf--2 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:4.6s"><div class="leaf leaf--3 svelte-1ytu7d4"></div></div></div> 

    <div class="long-g long-g--3 svelte-1ytu7d4"><div class="grow-ans svelte-1ytu7d4" style="--d:4s"><div class="leaf leaf--0 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:4.2s"><div class="leaf leaf--1 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:3s"><div class="leaf leaf--2 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:3.6s"><div class="leaf leaf--3 svelte-1ytu7d4"></div></div></div> 

    <div class="long-g long-g--4 svelte-1ytu7d4"><div class="grow-ans svelte-1ytu7d4" style="--d:4s"><div class="leaf leaf--0 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:4.2s"><div class="leaf leaf--1 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:3s"><div class="leaf leaf--2 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:3.6s"><div class="leaf leaf--3 svelte-1ytu7d4"></div></div></div> 

    <div class="long-g long-g--5 svelte-1ytu7d4"><div class="grow-ans svelte-1ytu7d4" style="--d:4s"><div class="leaf leaf--0 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:4.2s"><div class="leaf leaf--1 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:3s"><div class="leaf leaf--2 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:3.6s"><div class="leaf leaf--3 svelte-1ytu7d4"></div></div></div> 

    <div class="long-g long-g--6 svelte-1ytu7d4"><div class="grow-ans svelte-1ytu7d4" style="--d:4.2s"><div class="leaf leaf--0 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:4.4s"><div class="leaf leaf--1 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:4.6s"><div class="leaf leaf--2 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:4.8s"><div class="leaf leaf--3 svelte-1ytu7d4"></div></div></div> 

    <div class="long-g long-g--7 svelte-1ytu7d4"><div class="grow-ans svelte-1ytu7d4" style="--d:3s"><div class="leaf leaf--0 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:3.2s"><div class="leaf leaf--1 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:3.5s"><div class="leaf leaf--2 svelte-1ytu7d4"></div></div> 
      <div class="grow-ans svelte-1ytu7d4" style="--d:3.6s"><div class="leaf leaf--3 svelte-1ytu7d4"></div></div></div></div>`,z(l,"class","svelte-1ytu7d4")},m(s,d){I(s,l,d)},p:o,i:o,o,d(s){s&&N(l)}}}function W(e){return setTimeout(()=>{document.getElementById("name").classList.add("opacity-100")},3e3),[]}class X extends U{constructor(l){super(),R(this,l,W,V,j,{})}}new X({target:document.getElementById("app")});
