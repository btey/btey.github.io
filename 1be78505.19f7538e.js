(window.webpackJsonp=window.webpackJsonp||[]).push([[9,34],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(106),i=a(22),r=a(26),o=a(111),s=a(3),u=a(7),m=a(103),d=a(105),b=a(138),f=a(146),p=a(147),v=a(145),h=a(104),E=a(120),k=a(162),O=a(71),j=a.n(O);var C=function e(t,a){return"link"===t.type?Object(d.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function g(e){var t,a,l,i=e.item,r=e.onItemClick,o=e.collapsible,d=e.activePath,b=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),f=i.items,p=i.label,v=C(i,d),h=(a=v,l=Object(n.useRef)(a),Object(n.useEffect)((function(){l.current=a}),[a]),l.current),E=Object(n.useState)((function(){return!!o&&(!v&&i.collapsed)})),k=E[0],O=E[1],g=Object(n.useRef)(null),N=Object(n.useState)(void 0),w=N[0],y=N[1],M=function(e){var t;void 0===e&&(e=!0),y(e?(null===(t=g.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){v&&!h&&k&&O(!1)}),[v,h,k]);var S=Object(n.useCallback)((function(e){e.preventDefault(),w||M(),setTimeout((function(){return O((function(e){return!e}))}),100)}),[w]);return 0===f.length?null:c.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":k}),key:p},c.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&v},t[j.a.menuLinkText]=!o,t)),onClick:o?S:void 0,href:o?"#!":void 0},b),p),c.a.createElement("ul",{className:"menu__list",ref:g,style:{height:w},onTransitionEnd:function(){k||M(!1)}},f.map((function(e){return c.a.createElement(_,{tabIndex:k?"-1":"0",key:e.label,item:e,onItemClick:r,collapsible:o,activePath:d})}))))}function N(e){var t=e.item,a=e.onItemClick,n=e.activePath,l=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),i=t.href,r=t.label,o=C(t,n);return c.a.createElement("li",{className:"menu__list-item",key:r},c.a.createElement(h.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":o}),to:i},Object(E.a)(i)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},l),r))}function _(e){switch(e.item.type){case"category":return c.a.createElement(g,e);case"link":default:return c.a.createElement(N,e)}}var w=function(e){var t,a,l=e.path,i=e.sidebar,r=e.sidebarCollapsible,o=void 0===r||r,s=e.onCollapse,u=e.isHidden,h=Object(n.useState)(!1),E=h[0],O=h[1],C=Object(d.useThemeConfig)(),g=C.navbar.hideOnScroll,N=C.hideableSidebar,w=Object(b.a)().isAnnouncementBarClosed,y=Object(v.a)().scrollY;Object(f.a)(E);var M=Object(p.a)();return Object(n.useEffect)((function(){M===p.b.desktop&&O(!1)}),[M]),c.a.createElement("div",{className:Object(m.a)(j.a.sidebar,(t={},t[j.a.sidebarWithHideableNavbar]=g,t[j.a.sidebarHidden]=u,t))},g&&c.a.createElement(k.a,{tabIndex:-1,className:j.a.sidebarLogo}),c.a.createElement("div",{className:Object(m.a)("menu","menu--responsive","thin-scrollbar",j.a.menu,(a={"menu--show":E},a[j.a.menuWithAnnouncementBar]=!w&&0===y,a))},c.a.createElement("button",{"aria-label":E?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){O(!E)}},E?c.a.createElement("span",{className:Object(m.a)(j.a.sidebarMenuIcon,j.a.sidebarMenuCloseIcon)},"\xd7"):c.a.createElement("svg",{"aria-label":"Menu",className:j.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement("ul",{className:"menu__list"},i.map((function(e){return c.a.createElement(_,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),O(!1)},collapsible:o,activePath:l})})))),N&&c.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(m.a)("button button--secondary button--outline",j.a.collapseSidebarButton),onClick:s}))},y=a(124),M=a(134),S=a(113),I=a(77),P=a.n(I);function x(e){var t,a,r,s,u=e.currentDocRoute,b=e.versionMetadata,f=e.children,p=Object(i.default)(),v=p.siteConfig,h=p.isClient,E=b.pluginId,k=b.permalinkToSidebar,O=b.docsSidebars,j=b.version,C=k[u.path],g=O[C],N=Object(n.useState)(!1),_=N[0],M=N[1],S=Object(n.useState)(!1),I=S[0],x=S[1],T=Object(n.useCallback)((function(){I&&x(!1),M(!_)}),[I]);return c.a.createElement(o.a,{key:h,searchMetadatas:{version:j,tag:Object(d.docVersionSearchTag)(E,j)}},c.a.createElement("div",{className:P.a.docPage},g&&c.a.createElement("div",{className:Object(m.a)(P.a.docSidebarContainer,(t={},t[P.a.docSidebarContainerHidden]=_,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(P.a.docSidebarContainer)&&_&&x(!0)},role:"complementary"},c.a.createElement(w,{key:C,sidebar:g,path:u.path,sidebarCollapsible:null===(a=null===(r=v.themeConfig)||void 0===r?void 0:r.sidebarCollapsible)||void 0===a||a,onCollapse:T,isHidden:I}),I&&c.a.createElement("div",{className:P.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:T,onClick:T})),c.a.createElement("main",{className:P.a.docMainContainer},c.a.createElement("div",{className:Object(m.a)("container padding-vert--lg",P.a.docItemWrapper,(s={},s[P.a.docItemWrapperEnhanced]=_,s))},c.a.createElement(l.a,{components:y.a},f)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,l=t.find((function(e){return Object(S.matchPath)(n.pathname,e)}));return l?c.a.createElement(x,{currentDocRoute:l,versionMetadata:a},Object(r.a)(t)):c.a.createElement(M.default,e)}},109:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"f",(function(){return r})),a.d(t,"e",(function(){return o}));a(107);var n=["en"],c=!1,l=null,i="e84fc861",r=8,o=50},134:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(111);t.default=function(){return c.a.createElement(l.a,{title:"Page Not Found"},c.a.createElement("main",{className:"container margin-vert--xl"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--6 col--offset-3"},c.a.createElement("h1",{className:"hero__title"},"Page Not Found"),c.a.createElement("p",null,"We could not find what you were looking for."),c.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);