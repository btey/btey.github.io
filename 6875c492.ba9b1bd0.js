(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{109:function(e,a,t){"use strict";t.d(a,"c",(function(){return r})),t.d(a,"d",(function(){return n})),t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return m})),t.d(a,"f",(function(){return c})),t.d(a,"e",(function(){return i}));t(107);var r=["en"],n=!1,l=null,m="e84fc861",c=8,i=50},114:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t(0),n=t.n(r),l=t(103),m=t(104),c=t(53),i=t.n(c);function s(e){var a=e.sidebar;return 0===a.items.length?null:n.a.createElement("div",{className:Object(l.a)(i.a.sidebar,"thin-scrollbar")},n.a.createElement("h3",{className:i.a.sidebarItemTitle},a.title),n.a.createElement("ul",{className:i.a.sidebarItemList},a.items.map((function(e){return n.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},n.a.createElement(m.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))}))))}},118:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(103),m=t(106),c=t(24),i=t(104),s=t(124),o=t(108),u=t(55),d=t.n(u),g=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,u,E,v=e.children,b=e.frontMatter,p=e.metadata,f=e.truncated,h=e.isBlogPostPage,N=void 0!==h&&h,k=p.date,w=p.permalink,_=p.tags,y=p.readingTime,I=b.author,T=b.title,M=b.image,L=b.keywords,P=b.author_url||b.authorURL,J=b.author_title||b.authorTitle,j=b.author_image_url||b.authorImageURL,A=Object(o.a)(M,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,L&&L.length&&n.a.createElement("meta",{name:"keywords",content:L.join(",")}),M&&n.a.createElement("meta",{property:"og:image",content:A}),M&&n.a.createElement("meta",{property:"twitter:image",content:A}),M&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+T})),n.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=k.substring(0,10).split("-"),r=t[0],u=g[parseInt(t[1],10)-1],E=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},N?T:n.a.createElement(i.a,{to:w},T)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:k,className:d.a.blogPostDate},u," ",E,", ",r," ",y&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},j&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:P,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:j,alt:I})),n.a.createElement("div",{className:"avatar__intro"},I&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:P,target:"_blank",rel:"noreferrer noopener"},I)),n.a.createElement("small",{className:"avatar__subtitle"},J)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.a,{components:s.a},v)),(_.length>0||f)&&n.a.createElement("footer",{className:"row margin-vert--lg"},_.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),_.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),f&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(i.a,{to:p.permalink,"aria-label":"Read more about "+T},n.a.createElement("strong",null,"Read More"))))))}},81:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(111),m=t(118),c=t(104),i=t(114);a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,s=a.allTagsPath,o=a.name,u=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+o+'"',description:'Blog | Tagged "'+o+'"',wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(i.a,{sidebar:r})),n.a.createElement("main",{className:"col col--8"},n.a.createElement("h1",null,u," ",function(e,a){return e>1?a+"s":a}(u,"post"),' tagged with "',o,'"'),n.a.createElement(c.a,{href:s},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return n.a.createElement(m.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})))))))}}}]);