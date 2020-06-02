!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=27)}([function(t,e){t.exports=wp.i18n},function(t,e){t.exports=wp.components},function(t,e){t.exports=wp.data},function(t,e){t.exports=wp.element},function(t,e){t.exports=lodash},,function(t,e){t.exports=wp.richText},function(t,e){t.exports=wp.url},,function(t,e){t.exports=wp.blockEditor},,,,,function(t,e){t.exports=wp.htmlEntities},,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(4),o=n(0),i=n(3),a=n(2),c=n(1),u=n(6),l=n(7),s=n(9);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:window).navigator.platform;return!!~t.indexOf("Mac")||Object(r.includes)(["iPad","iPhone"],t)}var d="alt",h="ctrl",m="meta",y="shift",v={primary:function(t){return t()?[m]:[h]},primaryShift:function(t){return t()?[y,m]:[h,y]},primaryAlt:function(t){return t()?[d,m]:[h,d]},secondary:function(t){return t()?[y,d,m]:[h,y,d]},access:function(t){return t()?[h,d]:[y,d]},ctrl:function(){return[h]},alt:function(){return[d]},ctrlShift:function(){return[h,y]},shift:function(){return[y]},shiftAlt:function(){return[y,d]}},O=(Object(r.mapValues)(v,(function(t){return function(e){return[].concat(f(t(1<arguments.length&&void 0!==arguments[1]?arguments[1]:b)),[e.toLowerCase()]).join("+")}})),Object(r.mapValues)(v,(function(t){return function(e){var n,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:b,i=o(),a=(p(n={},d,i?"⌥":"Alt"),p(n,h,i?"^":"Ctrl"),p(n,m,"⌘"),p(n,y,i?"⇧":"Shift"),n),c=t(o).reduce((function(t,e){var n=Object(r.get)(a,e,e);return[].concat(f(t),i?[n]:[n,"+"])}),[]),u=Object(r.capitalize)(e);return[].concat(f(c),[u])}})));function g(t){if(!t)return!1;var e=t.trim();if(!e)return!1;if(/^\S+:/.test(e)){var n=Object(l.getProtocol)(e);if(!Object(l.isValidProtocol)(n))return!1;if(Object(r.startsWith)(n,"http")&&!/^https?:\/\/[^\/\s]/i.test(e))return!1;var o=Object(l.getAuthority)(e);if(!Object(l.isValidAuthority)(o))return!1;var i=Object(l.getPath)(e);if(i&&!Object(l.isValidPath)(i))return!1;var a=Object(l.getQueryString)(e);if(a&&!Object(l.isValidQueryString)(a))return!1;var c=Object(l.getFragment)(e);if(c&&!Object(l.isValidFragment)(c))return!1}return!(Object(r.startsWith)(e,"#")&&!Object(l.isValidFragment)(e))}function j(t){var e=t.noFollow,n=t.sponsored,r=t.text,i={type:"rankmath/link",attributes:{url:t.url}},a=[];if(t.opensInNewWindow){var c=Object(o.sprintf)(Object(o.__)("%s (opens in a new tab)","rank-math"),r);i.attributes.target="_blank",i.attributes["aria-label"]=c,a.push("noreferrer noopener")}return e&&a.push("nofollow"),n&&a.push("sponsored"),0<a.length&&(i.attributes.rel=a.join(" ")),i}function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function L(){return(L=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function F(t){return t.stopPropagation()}function P(t,e){return t.addingLink||e.editLink}function x(t){var e=t.isActive,n=t.addingLink,r=t.value,o=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)~e.indexOf(n=i[r])||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)~e.indexOf(n=i[r])||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,["isActive","addingLink","value"]),a=Object(i.useMemo)((function(){var t=window.getSelection();if(t.rangeCount){var e=t.getRangeAt(0);if(n)return function(t){if(!t.collapsed)return t.getBoundingClientRect();var e=t.startContainer;if("BR"===e.nodeName){var n=e.parentNode,r=Array.from(n.childNodes).indexOf(e);(t=document.createRange()).setStart(n,r),t.setEnd(n,r)}var o=t.getClientRects()[0];if(!o){var i=document.createTextNode("​");(t=t.cloneRange()).insertNode(i),o=t.getClientRects()[0],i.parentNode.removeChild(i)}return o}(e);var r=e.startContainer;for(r=r.nextElementSibling||r;r.nodeType!==window.Node.ELEMENT_NODE;)r=r.parentNode;var o=r.closest("a");return o?o.getBoundingClientRect():void 0}}),[e,n,r.start,r.end]);return a?wp.element.createElement(s.URLPopover,L({anchorRect:a},o)):null}Object(r.mapValues)(O,(function(t){return function(e){return t(e,1<arguments.length&&void 0!==arguments[1]?arguments[1]:b).join("")}})),Object(r.mapValues)(v,(function(t){return function(e){var n,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:b,a=i(),c=(p(n={},y,"Shift"),p(n,m,a?"Command":"Control"),p(n,h,"Control"),p(n,d,a?"Option":"Alt"),p(n,",",Object(o.__)("Comma")),p(n,".",Object(o.__)("Period")),p(n,"`",Object(o.__)("Backtick")),n);return[].concat(f(t(i)),[e]).map((function(t){return Object(r.capitalize)(Object(r.get)(c,t,t))})).join(a?" ":" + ")}})),Object(r.mapValues)(v,(function(t){return function(e,n){var o=t(2<arguments.length&&void 0!==arguments[2]?arguments[2]:b);return o.every((function(t){return e["".concat(t,"Key")]}))&&(n?e.key===n:Object(r.includes)(o,e.key.toLowerCase()))}})),window,window;var T=function(){function t(){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(t,e){return!e||"object"!==k(e)&&"function"!=typeof e?_(t):e}(this,S(t).apply(this,arguments))).editLink=e.editLink.bind(_(e)),e.submitLink=e.submitLink.bind(_(e)),e.onKeyDown=e.onKeyDown.bind(_(e)),e.onChangeInputValue=e.onChangeInputValue.bind(_(e)),e.setLinkTarget=e.setLinkTarget.bind(_(e)),e.setNoFollow=e.setNoFollow.bind(_(e)),e.setSponsored=e.setSponsored.bind(_(e)),e.onFocusOutside=e.onFocusOutside.bind(_(e)),e.resetState=e.resetState.bind(_(e)),e.autocompleteRef=Object(i.createRef)(),e.state={opensInNewWindow:!1,noFollow:!1,sponsored:!1,inputValue:""},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(t,i.Component),function(t,e,n){e&&w(t.prototype,e),n&&w(t,n)}(t,[{key:"onKeyDown",value:function(t){~[37,40,39,38,8,13].indexOf(t.keyCode)&&t.stopPropagation()}},{key:"onChangeInputValue",value:function(t){this.setState({inputValue:t})}},{key:"setLinkTarget",value:function(t){var e=this.props,n=e.activeAttributes.url,r=void 0===n?"":n,o=e.value,i=e.onChange;if(this.setState({opensInNewWindow:t}),!P(this.props,this.state)){var a=Object(u.getTextContent)(Object(u.slice)(o));i(Object(u.applyFormat)(o,j({url:r,opensInNewWindow:t,noFollow:this.state.noFollow,sponsored:this.state.sponsored,text:a})))}}},{key:"setNoFollow",value:function(t){var e=this.props,n=e.activeAttributes.url,r=void 0===n?"":n,o=e.value,i=e.onChange;if(this.setState({noFollow:t}),!P(this.props,this.state)){var a=Object(u.getTextContent)(Object(u.slice)(o));i(Object(u.applyFormat)(o,j({url:r,opensInNewWindow:this.state.opensInNewWindow,noFollow:t,sponsored:this.state.sponsored,text:a})))}}},{key:"setSponsored",value:function(t){var e=this.props,n=e.activeAttributes.url,r=void 0===n?"":n,o=e.value,i=e.onChange;if(this.setState({sponsored:t}),!P(this.props,this.state)){var a=Object(u.getTextContent)(Object(u.slice)(o));i(Object(u.applyFormat)(o,j({url:r,opensInNewWindow:this.state.opensInNewWindow,noFollow:this.state.noFollow,sponsored:t,text:a})))}}},{key:"editLink",value:function(t){this.setState({editLink:!0}),t.preventDefault()}},{key:"submitLink",value:function(t){var e=this.props,n=e.isActive,r=e.value,i=e.onChange,a=e.speak,c=this.state,s=c.inputValue,p=c.opensInNewWindow,f=c.noFollow,b=c.sponsored,d=Object(l.prependHTTP)(s),h=j({url:d,opensInNewWindow:p,noFollow:f,sponsored:b,text:Object(u.getTextContent)(Object(u.slice)(r))});if(t.preventDefault(),Object(u.isCollapsed)(r)&&!n){var m=Object(u.applyFormat)(Object(u.create)({text:d}),h,0,d.length);i(Object(u.insert)(r,m))}else i(Object(u.applyFormat)(r,h));this.resetState(),g(d)?a(Object(o.__)(n?"Link edited.":"Link inserted.","rank-math"),"assertive"):a(Object(o.__)("Warning: the link has been inserted but may have errors. Please test it.","rank-math"),"assertive")}},{key:"onFocusOutside",value:function(){var t=this.autocompleteRef.current;t&&t.contains(document.activeElement)||this.resetState()}},{key:"resetState",value:function(){this.props.stopAddingLink(),this.setState({editLink:!1})}},{key:"render",value:function(){var t=this,e=this.props,n=e.isActive,r=e.activeAttributes.url,a=e.addingLink,u=e.value;if(!n&&!a)return null;var p=this.state,f=p.inputValue,b=p.opensInNewWindow,d=p.noFollow,h=p.sponsored,m=P(this.props,this.state);return wp.element.createElement(x,{value:u,isActive:n,addingLink:a,onFocusOutside:this.onFocusOutside,onClose:this.resetState,focusOnMount:!!m&&"firstElement",renderSettings:function(){return wp.element.createElement(i.Fragment,null,wp.element.createElement(c.ToggleControl,{label:Object(o.__)("Open in New Tab","rank-math"),checked:b,onChange:t.setLinkTarget}),wp.element.createElement(c.ToggleControl,{label:Object(o.__)("No Follow","rank-math"),checked:d,onChange:t.setNoFollow}),wp.element.createElement(c.ToggleControl,{label:Object(o.__)("Sponsored","rank-math"),checked:h,onChange:t.setSponsored}))}},m?wp.element.createElement(s.URLPopover.LinkEditor,{className:"editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",value:f,onChangeInputValue:this.onChangeInputValue,onKeyDown:this.onKeyDown,onKeyPress:F,onSubmit:this.submitLink,autocompleteRef:this.autocompleteRef}):wp.element.createElement(s.URLPopover.LinkViewer,{className:"editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",onKeyPress:F,url:r,onEditLinkClick:this.editLink,linkClassName:g(Object(l.prependHTTP)(r))?void 0:"has-invalid-link"}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=t.activeAttributes,r=n.url,o=n.rel,i="_blank"===n.target;if(P(t,e))return null;var a={};if(r!==e.inputValue&&(a.inputValue=r),i!==e.opensInNewWindow&&(a.opensInNewWindow=i),"string"==typeof o){var c=o.split(" ").includes("nofollow"),u=o.split(" ").includes("sponsored");c!==e.noFollow&&(a.noFollow=c),u!==e.sponsored&&(a.sponsored=u)}return Object.keys(a).length?a:null}}]),t}(),E=Object(c.withSpokenMessages)(T);function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){V(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function W(t){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function D(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var K="rankmath/link",U=function(){function t(){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(t,e){return!e||"object"!==A(e)&&"function"!=typeof e?D(t):e}(this,W(t).apply(this,arguments))).addLink=e.addLink.bind(D(e)),e.stopAddingLink=e.stopAddingLink.bind(D(e)),e.onRemoveFormat=e.onRemoveFormat.bind(D(e)),e.state={addingLink:!1},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(t,i.Component),function(t,e,n){e&&I(t.prototype,e)}(t,[{key:"componentDidMount",value:function(){var t=Object(a.select)("core/rich-text").getFormatType("core/link");t&&(t.edit=null,Object(a.dispatch)("core/rich-text").addFormatTypes(t))}},{key:"addLink",value:function(){var t=this.props,e=t.value,n=t.onChange,r=Object(u.getTextContent)(Object(u.slice)(e));r&&Object(l.isURL)(r)?n(Object(u.applyFormat)(e,{type:K,attributes:{url:r}})):r&&Object(l.isEmail)(r)?n(Object(u.applyFormat)(e,{type:K,attributes:{url:"mailto:".concat(r)}})):this.setState({addingLink:!0})}},{key:"stopAddingLink",value:function(){this.setState({addingLink:!1})}},{key:"onRemoveFormat",value:function(){var t=this.props,e=t.onChange,n=t.speak,i=t.value;Object(r.map)(["core/link","rankmath/link"],(function(t){i=Object(u.removeFormat)(i,t)})),e(R({},i)),n(Object(o.__)("Link removed.","rank-math"),"assertive")}},{key:"render",value:function(){var t=this.props,e=t.activeAttributes,n=t.onChange,r=this.props,a=r.isActive,c=r.value,l=Object(u.getActiveFormat)(c,"core/link");if(l){l.type=K;var p=c;p=Object(u.applyFormat)(p,l),n(R({},p=Object(u.removeFormat)(p,"core/link"))),c=p,a=!0}return wp.element.createElement(i.Fragment,null,wp.element.createElement(s.RichTextShortcut,{type:"primary",character:"k",onUse:this.addLink}),wp.element.createElement(s.RichTextShortcut,{type:"primaryShift",character:"k",onUse:this.onRemoveFormat}),a&&wp.element.createElement(s.RichTextToolbarButton,{name:"link",icon:"editor-unlink",title:Object(o.__)("Unlink","rank-math"),onClick:this.onRemoveFormat,isActive:a,shortcutType:"primaryShift",shortcutCharacter:"k"}),!a&&wp.element.createElement(s.RichTextToolbarButton,{name:"link",icon:"admin-links",title:Object(o.__)("Add Link","rank-math"),onClick:this.addLink,isActive:a,shortcutType:"primary",shortcutCharacter:"k"}),wp.element.createElement(E,{addingLink:this.state.addingLink,stopAddingLink:this.stopAddingLink,isActive:a,activeAttributes:e,value:c,onChange:n}))}}]),t}(),B=Object(c.withSpokenMessages)(U),z=n(14),H="rankmath/link";wp.domReady(Object(u.registerFormatType)(H,{name:H,title:Object(o.__)("Link","rank-math"),tagName:"a",className:"rank-math-link",attributes:{url:"href",target:"target",rel:"rel"},__unstablePasteRule:function(t,e){var n=e.html,r=e.plainText;if(Object(u.isCollapsed)(t))return t;var o=(n||r).replace(/<[^>]+>/g,"").trim();return Object(l.isURL)(o)?(window.console.log("Created link:\n\n",o),Object(u.applyFormat)(t,{type:H,attributes:{url:Object(z.decodeEntities)(o)}})):t},edit:B}))}]);