"use strict";(self.webpackChunksolidspoon_site=self.webpackChunksolidspoon_site||[]).push([[5351],{2028:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var i=n(5893),o=n(1151);const s={slug:"building-a-simple-and-user-friendly-note-taking-system",title:"\u642d\u5efa\u7b80\u5355\u597d\u7528\u7684\u7b14\u8bb0\u7cfb\u7edf",authors:["solidSpoon"],tags:["\u6548\u7387"]},r="\u642d\u5efa\u7b80\u5355\u597d\u7528\u7684\u7b14\u8bb0\u7cfb\u7edf",a={permalink:"/blog/building-a-simple-and-user-friendly-note-taking-system",editUrl:"https://github.com/solidSpoon/solidSpoon.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2021-02-16-building-a-simple-and-user-friendly-note-taking-system/index.md",source:"@site/blog/2021-02-16-building-a-simple-and-user-friendly-note-taking-system/index.md",title:"\u642d\u5efa\u7b80\u5355\u597d\u7528\u7684\u7b14\u8bb0\u7cfb\u7edf",description:"\u4f60\u662f\u4e0d\u662f\u4e5f\u4e00\u76f4\u89c9\u5f97 OneNote\u3001\u5370\u8c61\u7b14\u8bb0\u3001\u6709\u9053\u4e91\u7b14\u8bb0\u7b49\u7b49\u5de5\u5177\u7528\u8d77\u6765\u90fd\u6709\u4e00\u70b9\u4e0d\u592a\u8212\u670d\u3002\u6211\u53ea\u60f3\u7528\u4e00\u4e2a\u7b80\u5355\u65b9\u4fbf\uff0c\u5230\u54ea\u90fd\u80fd\u7528\u7684\u7b14\u8bb0\u7cfb\u7edf\uff0c\u4f46\u662f\u5e02\u9762\u4e0a\u5e38\u89c1\u7684\u7b14\u8bb0\u8f6f\u4ef6\u8d8a\u6765\u8d8a\u81c3\u80bf\uff0c\u5c0f\u4f17\u826f\u5fc3\u7684\u8f6f\u4ef6\u53c8\u62c5\u5fc3\u5b83\u4f1a\u4e0d\u4f1a\u6b7b\u6389\uff0c\u8fd9\u91cc\u6211\u7ed9\u4f60\u63d0\u4f9b\u4e00\u4e2a\u601d\u8def\u3002",date:"2021-02-16T00:00:00.000Z",formattedDate:"2021\u5e742\u670816\u65e5",tags:[{label:"\u6548\u7387",permalink:"/blog/tags/\u6548\u7387"}],readingTime:1.945,hasTruncateMarker:!1,authors:[{name:"solidSpoon",title:"Maintainer of Hide",url:"https://github.com/solidSpoon",imageURL:"https://github.com/solidSpoon.png",key:"solidSpoon"}],frontMatter:{slug:"building-a-simple-and-user-friendly-note-taking-system",title:"\u642d\u5efa\u7b80\u5355\u597d\u7528\u7684\u7b14\u8bb0\u7cfb\u7edf",authors:["solidSpoon"],tags:["\u6548\u7387"]},unlisted:!1,prevItem:{title:"\u6587\u7ae0\u6392\u7248\u6307\u5357",permalink:"/blog/article-formatting-guide"},nextItem:{title:"Git \u662f\u7eaf\u51fd\u6570\u5f0f\u6570\u636e\u7ed3\u6784",permalink:"/blog/git-is-a-purely-functional-data-structure"}},l={authorsImageUrls:[void 0]},u=[];function d(t){const e={hr:"hr",img:"img",p:"p",...(0,o.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"\u4f60\u662f\u4e0d\u662f\u4e5f\u4e00\u76f4\u89c9\u5f97 OneNote\u3001\u5370\u8c61\u7b14\u8bb0\u3001\u6709\u9053\u4e91\u7b14\u8bb0\u7b49\u7b49\u5de5\u5177\u7528\u8d77\u6765\u90fd\u6709\u4e00\u70b9\u4e0d\u592a\u8212\u670d\u3002\u6211\u53ea\u60f3\u7528\u4e00\u4e2a\u7b80\u5355\u65b9\u4fbf\uff0c\u5230\u54ea\u90fd\u80fd\u7528\u7684\u7b14\u8bb0\u7cfb\u7edf\uff0c\u4f46\u662f\u5e02\u9762\u4e0a\u5e38\u89c1\u7684\u7b14\u8bb0\u8f6f\u4ef6\u8d8a\u6765\u8d8a\u81c3\u80bf\uff0c\u5c0f\u4f17\u826f\u5fc3\u7684\u8f6f\u4ef6\u53c8\u62c5\u5fc3\u5b83\u4f1a\u4e0d\u4f1a\u6b7b\u6389\uff0c\u8fd9\u91cc\u6211\u7ed9\u4f60\u63d0\u4f9b\u4e00\u4e2a\u601d\u8def\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u4f60\u60f3\u8981\u4e00\u4e2a\u5168\u5e73\u53f0\u901a\u7528\u7684\u3001\u9002\u5408\u8bb0\u7b14\u8bb0\u7684\u6587\u4ef6\u683c\u5f0f\uff0c\u90a3\u4e48 Markdown \u5e94\u8be5\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002Markdown \u7684\u8bed\u6cd5\u7b80\u5355\u3001\u6392\u7248\u6f02\u4eae\uff0c\u914d\u5408\u50cf Typora \u8fd9\u79cd\u4f18\u96c5\u7684\u7f16\u8f91\u5668\u80fd\u591f\u5728\u7535\u8111\u7aef\u5b9e\u73b0\u5f88\u68d2\u7684\u4f53\u9a8c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5f53\u7136\uff0cMarkdown \u4e5f\u6709\u5b83\u7684\u7f3a\u70b9\u3002\u7531\u4e8e\u8fd9\u79cd\u6587\u4ef6\u683c\u5f0f\u672c\u8eab\u5e76\u4e0d\u80fd\u4fdd\u5b58\u56fe\u7247\uff0c\u5bfc\u81f4 Markdown \u7684\u4f7f\u7528\u8005\u5e38\u5e38\u8981\u81ea\u5df1\u60f3\u529e\u6cd5\u6765\u89e3\u51b3\u5168\u5e73\u53f0\u4f7f\u7528\u56fe\u7247\u7684\u95ee\u9898\u3002\u5176\u4e2d\u6700\u7701\u5fc3\u7684\u529e\u6cd5\u5c31\u662f\u5728\u7c7b\u4f3c\u963f\u91cc\u4e91\u3001\u817e\u8baf\u4e91\u8fd9\u6837\u5927\u578b\u7684\u4e91\u670d\u52a1\u5546\u8d2d\u4e70\u5b58\u50a8\u670d\u52a1\uff0c\u914d\u5408 PicGo \u8fd9\u79cd\u5c0f\u5de5\u5177\u81ea\u5df1\u642d\u5efa\u4e00\u4e2a\u56fe\u5e8a\uff0c\u64cd\u4f5c\u7b80\u5355\u800c\u4e14\u8d28\u91cf\u53ef\u9760\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u66f4\u5177\u4f53\u7684\u64cd\u4f5c\u65b9\u6cd5\u4f60\u53ef\u4ee5\u53bb\u641c\u7d22\u300e\u963f\u91cc\u4e91 \u56fe\u5e8a\u300f\u8fd9\u6837\u7684\u5173\u952e\u8bcd\u3002\u6700\u540e\uff0c\u4f7f\u7528\u575a\u679c\u4e91\u8fd9\u79cd\u5168\u5e73\u53f0\u53ef\u7528\u7684\u540c\u6b65\u76d8\u6765\u540c\u6b65\u4f60\u7684 Markdown \u7b14\u8bb0\u3002\u800c\u4e14\u575a\u679c\u4e91\u4e5f\u6709 Markdown \u5c0f\u5de5\u5177\uff0c\u5728\u624b\u673a\u548c\u7f51\u9875\u7aef\u6d4f\u89c8 Markdown \u6587\u4ef6\u4e5f\u6bd4\u8f83\u65b9\u4fbf\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5e0c\u671b\u4f60\u4e5f\u559c\u6b22\u8fd9\u6837\u7684\u4e00\u79cd\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:["\u9898\u56fe\u7531",(0,i.jsx)("a",{href:"https://pixabay.com/zh/users/Monfocus-2516394/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1925752",children:"Monfocus"}),"\u5728",(0,i.jsx)("a",{href:"https://pixabay.com/zh/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1925752",children:"Pixabay"}),"\u4e0a\u53d1\u5e03"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://ced-md-picture.oss-cn-beijing.aliyuncs.com/img/20200524165524.jpg",alt:"list-1925752_1920"})})]})}function c(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>r});var i=n(7294);const o={},s=i.createContext(o);function r(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);