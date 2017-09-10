(function (window) {
	'use strict';

	var check = function () { try { eval("var foo = (x)=>x+1"); } catch (e) { return false; } return true; };

	// Check if ES6 then apply the shim
	if (check()) {
		// Trick so ES6 code won't throw in IE11
		(new Function("(()=>{'use strict';if(!window.customElements)return;const a=window.HTMLElement,b=window.customElements.define,c=window.customElements.get,d=new Map,e=new Map;let f=!1,g=!1;window.HTMLElement=function(){if(!f){const j=d.get(this.constructor),k=c.call(window.customElements,j);g=!0;const l=new k;return l}f=!1;},window.HTMLElement.prototype=a.prototype;Object.defineProperty(window,'customElements',{value:window.customElements,configurable:!0,writable:!0}),Object.defineProperty(window.customElements,'define',{value:(j,k)=>{const l=k.prototype,m=class extends a{constructor(){super(),Object.setPrototypeOf(this,l),g||(f=!0,k.call(this)),g=!1;}},n=m.prototype;m.observedAttributes=k.observedAttributes,n.connectedCallback=l.connectedCallback,n.disconnectedCallback=l.disconnectedCallback,n.attributeChangedCallback=l.attributeChangedCallback,n.adoptedCallback=l.adoptedCallback,d.set(k,j),e.set(j,k),b.call(window.customElements,j,m);},configurable:!0,writable:!0}),Object.defineProperty(window.customElements,'get',{value:(j)=>e.get(j),configurable:!0,writable:!0});})()"))();
	}

	// IE
	function CustomEvent(event, params) { params = params || { bubbles: false, cancelable: false, detail: undefined }; var evt = document.createEvent('CustomEvent'); evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail); return evt; } CustomEvent.prototype = window.CustomEvent.prototype; window.CustomEvent = CustomEvent;

})(window);
