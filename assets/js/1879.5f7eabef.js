"use strict";(self.webpackChunksolidspoon_site=self.webpackChunksolidspoon_site||[]).push([[1879],{6489:(e,t,s)=>{s.d(t,{Z:()=>g});s(7294);var r=s(6010),n=s(1764),l=s(3488),o=s(4503),a=s(3699),i=s(129),c=s(3086),m=s(5893);function u(e){let{sidebar:t}=e;const s=(0,i.c)(t.items);return(0,m.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,m.jsx)("li",{className:"menu__list-item",children:(0,m.jsx)(a.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function d(e){return(0,m.jsx)(c.Zo,{component:u,props:e})}function h(e){let{sidebar:t}=e;const s=(0,l.i)();return t?.items.length?"mobile"===s?(0,m.jsx)(d,{sidebar:t}):(0,m.jsx)(o.Z,{sidebar:t}):null}function g(e){const{sidebar:t,toc:s,children:l,...o}=e,a=t&&t.items.length>0;return(0,m.jsx)(n.Z,{...o,children:(0,m.jsx)("div",{className:"container margin-vert--lg",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)(h,{sidebar:t}),(0,m.jsx)("main",{className:(0,r.Z)("col",{"col--7":a,"col--9 col--offset-1":!a}),itemScope:!0,itemType:"https://schema.org/Blog",children:l}),s&&(0,m.jsx)("div",{className:"col col--2",children:s})]})})})}},1116:(e,t,s)=>{s.d(t,{Z:()=>B});s(7294);var r=s(6010),n=s(9107),l=s(9524),o=s(5893);function a(e){let{children:t,className:s}=e;const{frontMatter:r,assets:a,metadata:{description:i}}=(0,n.C)(),{withBaseUrl:c}=(0,l.C)(),m=a.image??r.image,u=r.keywords??[];return(0,o.jsxs)("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[i&&(0,o.jsx)("meta",{itemProp:"description",content:i}),m&&(0,o.jsx)("link",{itemProp:"image",href:c(m,{absolute:!0})}),u.length>0&&(0,o.jsx)("meta",{itemProp:"keywords",content:u.join(",")}),t]})}var i=s(3699);const c={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:s,isBlogPostPage:l}=(0,n.C)(),{permalink:a,title:m}=s,u=l?"h1":"h2";return(0,o.jsx)(u,{className:(0,r.Z)(c.title,t),itemProp:"headline",children:l?m:(0,o.jsx)(i.Z,{itemProp:"url",to:a,children:m})})}var u=s(7325),d=s(3777);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,d.c)();return t=>{const s=Math.ceil(t);return e(s,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,o.jsx)(o.Fragment,{children:s(t)})}function p(e){let{date:t,formattedDate:s}=e;return(0,o.jsx)("time",{dateTime:t,itemProp:"datePublished",children:s})}function x(){return(0,o.jsx)(o.Fragment,{children:" \xb7 "})}function f(e){let{className:t}=e;const{metadata:s}=(0,n.C)(),{date:l,formattedDate:a,readingTime:i}=s;return(0,o.jsxs)("div",{className:(0,r.Z)(h.container,"margin-vert--md",t),children:[(0,o.jsx)(p,{date:l,formattedDate:a}),void 0!==i&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{}),(0,o.jsx)(g,{readingTime:i})]})]})}function j(e){return e.href?(0,o.jsx)(i.Z,{...e}):(0,o.jsx)(o.Fragment,{children:e.children})}function P(e){let{author:t,className:s}=e;const{name:n,title:l,url:a,imageURL:i,email:c}=t,m=a||c&&`mailto:${c}`||void 0;return(0,o.jsxs)("div",{className:(0,r.Z)("avatar margin-bottom--sm",s),children:[i&&(0,o.jsx)(j,{href:m,className:"avatar__photo-link",children:(0,o.jsx)("img",{className:"avatar__photo",src:i,alt:n,itemProp:"image"})}),n&&(0,o.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,o.jsx)("div",{className:"avatar__name",children:(0,o.jsx)(j,{href:m,itemProp:"url",children:(0,o.jsx)("span",{itemProp:"name",children:n})})}),l&&(0,o.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:l})]})]})}const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function b(e){let{className:t}=e;const{metadata:{authors:s},assets:l}=(0,n.C)();if(0===s.length)return null;const a=s.every((e=>{let{name:t}=e;return!t}));return(0,o.jsx)("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",a?v.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,o.jsx)("div",{className:(0,r.Z)(!a&&"col col--6",a?v.imageOnlyAuthorCol:v.authorCol),children:(0,o.jsx)(P,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,o.jsxs)("header",{children:[(0,o.jsx)(m,{}),(0,o.jsx)(f,{}),(0,o.jsx)(b,{})]})}var _=s(3905),Z=s(1746);function C(e){let{children:t,className:s}=e;const{isBlogPostPage:l}=(0,n.C)();return(0,o.jsx)("div",{id:l?_.blogPostContainerID:void 0,className:(0,r.Z)("markdown",s),itemProp:"articleBody",children:(0,o.jsx)(Z.Z,{children:t})})}var k=s(4850),w=s(4597);function y(){return(0,o.jsx)("b",{children:(0,o.jsx)(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function F(e){const{blogPostTitle:t,...s}=e;return(0,o.jsx)(i.Z,{"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,o.jsx)(y,{})})}const T={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function M(){const{metadata:e,isBlogPostPage:t}=(0,n.C)(),{tags:s,title:l,editUrl:a,hasTruncateMarker:i}=e,c=!t&&i,m=s.length>0;return m||c||a?(0,o.jsxs)("footer",{className:(0,r.Z)("row docusaurus-mt-lg",t&&T.blogPostFooterDetailsFull),children:[m&&(0,o.jsx)("div",{className:(0,r.Z)("col",{"col--9":c}),children:(0,o.jsx)(w.Z,{tags:s})}),t&&a&&(0,o.jsx)("div",{className:"col margin-top--sm",children:(0,o.jsx)(k.Z,{editUrl:a})}),c&&(0,o.jsx)("div",{className:(0,r.Z)("col text--right",{"col--3":m}),children:(0,o.jsx)(F,{blogPostTitle:l,to:e.permalink})})]}):null}function B(e){let{children:t,className:s}=e;const l=function(){const{isBlogPostPage:e}=(0,n.C)();return e?void 0:"margin-bottom--xl"}();return(0,o.jsxs)(a,{className:(0,r.Z)(l,s),children:[(0,o.jsx)(N,{}),(0,o.jsx)(C,{children:t}),(0,o.jsx)(M,{})]})}},9107:(e,t,s)=>{s.d(t,{C:()=>i,n:()=>a});var r=s(7294),n=s(3768),l=s(5893);const o=r.createContext(null);function a(e){let{children:t,content:s,isBlogPostPage:n=!1}=e;const a=function(e){let{content:t,isBlogPostPage:s}=e;return(0,r.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:n});return(0,l.jsx)(o.Provider,{value:a,children:t})}function i(){const e=(0,r.useContext)(o);if(null===e)throw new n.i6("BlogPostProvider");return e}},129:(e,t,s)=>{s.d(t,{c:()=>o});var r=s(7294),n=s(6550),l=s(9003);function o(e){const{pathname:t}=(0,n.TH)();return(0,r.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,l.Mg)(e.permalink,t))}(e,t)))),[e,t])}},3777:(e,t,s)=>{s.d(t,{c:()=>c});var r=s(7294),n=s(9962);const l=["zero","one","two","few","many","other"];function o(e){return l.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function c(){const e=i();return{selectMessage:(t,s)=>function(e,t,s){const r=e.split("|");if(1===r.length)return r[0];r.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=s.select(t),l=s.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(s,t,e)}}}}]);