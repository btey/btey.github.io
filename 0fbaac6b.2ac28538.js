(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=b(n),u=a,h=m["".concat(i,".").concat(u)]||m[u]||s[u]||r;return n?o.a.createElement(h,l(l({ref:t},p),{},{components:n})):o.a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(106)),i={slug:"maya-hotkey-selection-highlighting",title:"Autodesk Maya - HotKey for Selection Highlighting",author:"Ben Tey",author_url:"https://github.com/btey",author_image_url:null,tags:["Autodesk","Maya","HotKey","Viewport","MEL"]},l={permalink:"/blog/maya-hotkey-selection-highlighting",editUrl:"https://github.com/btey/MyDocs/edit/master/blog/2020-12-01-maya-hotkey-selection-highlighting.md",source:"@site/blog/2020-12-01-maya-hotkey-selection-highlighting.md",description:"To add a new HotKey in Autodesk Maya to switch the Selection Highlighting option in the Show menu of the viewport follow this steps:",date:"2020-12-01T00:00:00.000Z",tags:[{label:"Autodesk",permalink:"/blog/tags/autodesk"},{label:"Maya",permalink:"/blog/tags/maya"},{label:"HotKey",permalink:"/blog/tags/hot-key"},{label:"Viewport",permalink:"/blog/tags/viewport"},{label:"MEL",permalink:"/blog/tags/mel"}],title:"Autodesk Maya - HotKey for Selection Highlighting",readingTime:1.025,truncated:!1},c=[],p={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To add a new HotKey in Autodesk Maya to switch the ",Object(r.b)("inlineCode",{parentName:"p"},"Selection Highlighting")," option in the ",Object(r.b)("inlineCode",{parentName:"p"},"Show")," menu of the viewport follow this steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to ",Object(r.b)("inlineCode",{parentName:"p"},"Windows > Settings/Preferences > HotKey Editor"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the right side you can see a keyboard, showing which keys are already assigned.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Found an unassigned key or combination, go to Runtime Command Editor and press the ",Object(r.b)("inlineCode",{parentName:"p"},"New")," button.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Choose a name for this command (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"SelectionHighlighting"),") and be sure that MEL is the selected language.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Paste the following string in the text field:"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-mel"}),"string $mp = `getPanel -wf`; modelEditor -e -sel (!`modelEditor -q -sel $mp`) $mp;\n")),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Press the ",Object(r.b)("inlineCode",{parentName:"p"},"Save Runtime Command")," button. A message should pop up, confirming that your runtime command has been saved.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the dropdown menu close to ",Object(r.b)("inlineCode",{parentName:"p"},"Search By")," choose ",Object(r.b)("inlineCode",{parentName:"p"},"Runtime Command")," and write in the text field the name of the command you have just created.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The command will appear in the ",Object(r.b)("inlineCode",{parentName:"p"},"Custom Scripts")," list.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Doubleclick in the ",Object(r.b)("inlineCode",{parentName:"p"},"HotKey")," column and enter the key or the keys combination you have chosen before.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Press the ",Object(r.b)("inlineCode",{parentName:"p"},"Save and Close")," button."))),Object(r.b)("p",null,"Now you should be able to switch the ",Object(r.b)("inlineCode",{parentName:"p"},"Selection Highlighting")," option with your new hotkey."))}b.isMDXComponent=!0}}]);