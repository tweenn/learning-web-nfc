import{h as j,createElement as A,render as k}from"https://unpkg.com/preact@latest?module";import R from"https://unpkg.com/htm?module";import{useEffect as L,useReducer as W}from"https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module";import"https://1.www.s81c.com/common/carbon/web-components/tag/latest/ui-shell.min.js";import"https://1.www.s81c.com/common/carbon/web-components/tag/latest/button.min.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();const v=R.bind(j),H=()=>v`
		<bx-header aria-label="Tweenn">
			<bx-header-name href="javascript:void 0" prefix="Tweenn">
				Learning Web NFC
			</bx-header-name>
		</bx-header>
	`,I=({href:e="",text:s="",cssClass:o="",onClick:l=i=>{console.log("Button component default click action executed, please provide me an action",i)}})=>v`
		<bx-btn
			href='${e}'
			onclick='${l}'
			class='${o}'
			dangerouslySetInnerHTML='${{__html:s}}'
		>
		</bx-btn>
	`;let B=1,E=2,O=3,T=4,f=".",N=[];function C(e={},s){let o=U(),l=e;o._subscribe(f,s);let i={_path:[],_getHoC(t,c,n,d){let a=t.displayName||t.name||"",p=b=>{let y=c.length-1,h=c.length?c.reduce((m,x,_)=>_===y?m[x](n,d):m[x],u):u(n,d);return A(t,{...b,store:h})};return p.displayName=`withStore(${a})`,p},get(t,c){return c==="prototype"?{}:(this._path.push(c),new Proxy(t,i))},apply(t,c,n){let d=t(),a=n[0],p=n[1],b=this._path.slice();if(this._path=[],d===O)return this._getHoC(n[0],b,n[1],n[2]);if(!b.length){let _=D();return d===E&&w(f,p),d===T?_(a):[l,_]}let y=b.join(f),h=D(y),m=S(y),x=a!==void 0&&!P(b);return d===T?h(a):(x&&(m=a,l=$(l,b,m)),d===E&&(L(()=>{x&&h(m)},[]),w(f+y,p)),[m,h])}},r=t=>new Proxy(()=>t,i),u=r(E),g=r(B),F=r(O),M=r(T);function w(t,c){let n=W(()=>[])[1];L(()=>(o._subscribe(t,n),o._subscribe(f,c),()=>{o._unsubscribe(t,n),o._unsubscribe(f,c)}),[t])}function D(t=""){let c=Array.isArray(t)?t:t.split(f);return n=>{let d=l,a=n;typeof n=="function"&&(a=n(S(t))),l=t?$(l,c,a):a,o._notify(f+t,{prevStore:d,store:l})}}function S(t,c=(n,d)=>n==null?void 0:n[d]){return t?(Array.isArray(t)?t:t.split(f)).reduce(c,l):l}function $(t,[c,...n],d){let a=Array.isArray(t)?[...t]:{...t};return a[c]=n.length?$(t[c],n,d):d,a}function P(t){return S(t,(c,n,d,a)=>d===a.length-1?n in(c||{}):c==null?void 0:c[n])}return N.reduce((t,c)=>{let n=c(t,o);return typeof n=="object"?{...t,...n}:t},{useStore:u,getStore:g,withStore:F,setStore:M})}C.ext=e=>typeof e=="function"&&N.push(e);function U(){let e={};return{_subscribe(s,o){typeof o=="function"&&(e[s]||(e[s]=new Set),e[s].add(o))},_notify(s,o){Object.keys(e).forEach(l=>{(s.startsWith(l)||l.startsWith(s))&&e[l].forEach(i=>i(o))})},_unsubscribe(s,o){typeof o=="function"&&(e[s].delete(o),e[s].size===0&&delete e[s])}}}const z={nfcData:[]},{useStore:q,getStore:G}=C(z),J=()=>{const e=o=>{const[l,i]=G.nfcData();console.log(l),i([...l,o])};return v`
		<${I}
			onClick='${async()=>{e("Clicked!");try{const o=new NDEFReader;await o.scan(),e(""),e("Scan started"),o.addEventListener("readingerror",()=>{e(""),e("Argh! Couldn't read data from the NFC tag.")}),o.addEventListener("reading",({message:l,serialNumber:i})=>{e(""),e(`> Serial Number: ${i}`),e(`> Records: (${l.records.length})`),l.records.forEach(r=>{if(["encoding","id","lang","mediaType","recordType"].forEach(u=>{e(`> ${u}: ${r==null?void 0:r[u]}`)}),r.recordType==="text"){const g=new TextDecoder(r.encoding).decode(r.data);e(`> Data: ${g}`)}else if(r.recordType==="url"){const g=new TextDecoder(r.encoding).decode(r.data);e(`> Data: ${g}`)}else if(r.recordType===":act"){const u=r.data.getUint8(0);e(`> Data: ${u}`)}})})}catch(o){e(""),e("Argh! "+o)}}}'
			text='Read Tag'
		/>
	`},Q=()=>{const[e]=q.nfcData();return v`
		<p
			id='reader-log'
			dangerouslySetInnerHTML='${{__html:e.join("<br />")}}'
		/>
	`},X=()=>{const e=`
		bx--col-md-4 bx--offset-md-2
		bx--col-lg-6 bx--offset-lg-3
		bx--col-xlg-6 bx--offset-xlg-3
		bx--col-max-6 bx--offset-max-3
	`;return v`
		<div class="App">
			<header>
				<${H} />
			</header>
			<main>
				<div class="bx--grid">
					<div class="bx--row">
						<div class="bx--col ${e}">
							<h3>
								Learning Web NFC
							</h3>
						</div>
					</div>
					<div class="bx--row pt-2">
						<div class="bx--col ${e}">
							<${J} />
						</div>
					</div>
					<div class="bx--row pt-2">
						<div class="bx--col ${e}">
							<${Q} />
						</div>
					</div>
				</div>
			</main>
		</div>
	`},Y=async()=>{k(A(X),document.body)};Y();
