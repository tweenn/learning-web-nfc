import{h as s,render as l,createElement as f}from"https://unpkg.com/preact@latest?module";import u from"https://unpkg.com/htm?module";import"https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module";import"https://1.www.s81c.com/common/carbon/web-components/tag/latest/ui-shell.min.js";import"https://1.www.s81c.com/common/carbon/web-components/tag/latest/button.min.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerpolicy&&(e.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?e.credentials="include":n.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(n){if(n.ep)return;n.ep=!0;const e=o(n);fetch(n.href,e)}})();const d=u.bind(s),m=()=>d`
		<bx-header aria-label="Tweenn">
			<bx-header-name href="javascript:void 0" prefix="Tweenn">
				Learning Web NFC
			</bx-header-name>
		</bx-header>
	`,b=({href:t="",text:a="",cssClass:o="",onClick:r=n=>{console.log("Button component default click action executed, please provide me an action",n)}})=>d`
		<bx-btn
			href='${t}'
			onclick='${r}'
			class='${o}'
			dangerouslySetInnerHTML='${{__html:a}}'
		>
		</bx-btn>
	`,g=()=>{const t=o=>{const r=document.getElementById("reader-log");r.innerHTML=r.innerHTML+`<br />${o}`};return d`
		<${b}
			onClick='${async()=>{t("Clicked!");try{const o=new NDEFReader;await o.scan(),t(""),t("Scan started"),o.addEventListener("readingerror",()=>{t(""),t("Argh! Couldn't read data from the NFC tag.")}),o.addEventListener("reading",({message:r,serialNumber:n})=>{t(""),t(`> Serial Number: ${n}`),t(`> Records: (${r.records.length})`),r.records.forEach(e=>{if(["encoding","id","lang","mediaType","recordType"].forEach(i=>{t(`> ${i}: ${e==null?void 0:e[i]}`)}),e.recordType==="text"){const c=new TextDecoder(e.encoding).decode(e.data);t(`> Data: ${c}`)}else if(e.recordType==="url"){const c=new TextDecoder(e.encoding).decode(e.data);t(`> Data: ${c}`)}else if(e.recordType===":act"){const i=e.data.getUint8(0);t(`> Data: ${i}`)}})})}catch(o){t(""),t("Argh! "+o)}}}'
			text='Read Tag'
		/>
	`},p=()=>{const t=`
		bx--col-md-4 bx--offset-md-2
		bx--col-lg-6 bx--offset-lg-3
		bx--col-xlg-6 bx--offset-xlg-3
		bx--col-max-6 bx--offset-max-3
	`;return d`
		<div class="App">
			<header>
				<${m} />
			</header>
			<main>
				<div class="bx--grid">
					<div class="bx--row">
						<div class="bx--col ${t}">
							<h3>
								Learning Web NFC
							</h3>
						</div>
					</div>
					<div class="bx--row pt-2">
						<div class="bx--col ${t}">
							<${g} />
						</div>
					</div>
					<div class="bx--row pt-2">
						<div class="bx--col ${t}">
							<p id='reader-log' />
						</div>
					</div>
				</div>
			</main>
		</div>
	`},x=async()=>{l(f(p),document.body)};x();
