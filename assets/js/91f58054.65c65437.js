"use strict";(self.webpackChunksolidspoon_site=self.webpackChunksolidspoon_site||[]).push([[9260],{1613:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(5893),i=t(1151);const a={slug:"algorithm-fourth-edition-answer-series-1-3-exercise-article",title:"\u6587\u7ae0\u6392\u7248\u6307\u5357",authors:["solidSpoon"],tags:["\u7b97\u6cd5"]},l=void 0,r={permalink:"/blog/algorithm-fourth-edition-answer-series-1-3-exercise-article",editUrl:"https://github.com/solidSpoon/solidSpoon.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2021/02-16-algorithm-fourth-edition-answer-series-1-3-exercise-article/index.md",source:"@site/blog/2021/02-16-algorithm-fourth-edition-answer-series-1-3-exercise-article/index.md",title:"\u6587\u7ae0\u6392\u7248\u6307\u5357",description:"\u6700\u8fd1\u5f00\u59cb\u5b66\u4e60\u300a\u7b97\u6cd5-\u7b2c\u56db\u7248\u300b\u4e00\u4e66\uff0c\u5c06\u6211\u81ea\u5df1\u505a\u7684\u4e66\u540e\u4e60\u9898\u5206\u4eab\u7ed9\u5927\u5bb6\uff0c\u672c\u7bc7\u662f\u8fd9\u4e00\u7cfb\u5217\u7684\u7b2c\u4e8c\u7bc7\uff0c\u5305\u542b\u4e86\u4e66\u4e0a\\\u7684\u4e60\u9898\u7684\u7ec3\u4e60\u90e8\u5206,\u672c\u7bc7\u4e60\u9898\u4f4d\u4e8e P101 ~ P107 \uff0c\u5982\u6709\u9519\u8bef\uff0c\u8fd8\u8bf7\u6307\u6b63\u3002",date:"2021-02-16T00:00:00.000Z",formattedDate:"2021\u5e742\u670816\u65e5",tags:[{label:"\u7b97\u6cd5",permalink:"/blog/tags/\u7b97\u6cd5"}],readingTime:8.44,hasTruncateMarker:!1,authors:[{name:"solidSpoon",title:"Maintainer of Hide",url:"https://github.com/solidSpoon",imageURL:"https://github.com/solidSpoon.png",key:"solidSpoon"}],frontMatter:{slug:"algorithm-fourth-edition-answer-series-1-3-exercise-article",title:"\u6587\u7ae0\u6392\u7248\u6307\u5357",authors:["solidSpoon"],tags:["\u7b97\u6cd5"]},unlisted:!1,prevItem:{title:"\u6709\u8da3\u7684\u4e09\u6b21\u63e1\u624b\u4e0e\u56db\u6b21\u6325\u624b 1",permalink:"/blog/the-intriguing-three-way-handshake-and-four-way-farewell-in-tcp-1"},nextItem:{title:"\u300a\u7b97\u6cd5-\u7b2c\u56db\u7248\u300b\u7b54\u6848\u7cfb\u5217-1-3 \u94fe\u8868\u7ec3\u4e60",permalink:"/blog/algorithm-fourth-edition-answer-series-1-3-linked-list-exercises"}},o={authorsImageUrls:[void 0]},c=[{value:"\u4e3a <code>FixedCapacityStackOfStrings</code> \u6dfb\u52a0\u4e00\u4e2a\u65b9\u6cd5 <code>isFull()</code>\u3002",id:"\u4e3a-fixedcapacitystackofstrings-\u6dfb\u52a0\u4e00\u4e2a\u65b9\u6cd5-isfull",level:5},{value:"1.3.2 \u7ed9\u5b9a\u4ee5\u4e0b\u8f93\u5165\uff0c<code>java Stack</code> \u7684\u8f93\u51fa\u662f\u4ec0\u4e48?",id:"132-\u7ed9\u5b9a\u4ee5\u4e0b\u8f93\u5165java-stack-\u7684\u8f93\u51fa\u662f\u4ec0\u4e48",level:5},{value:"1.3.3 \u5047\u8bbe\u67d0\u4e2a\u7528\u4f8b\u7a0b\u5e8f\u4f1a\u8fdb\u884c\u4e00\u7cfb\u5217\u5165\u6808\u548c\u51fa\u6808\u7684\u6df7\u5408\u6808\u64cd\u4f5c\u3002\u5165\u6808\u64cd\u4f5c\u4f1a\u5c06\u8bc1\u4e66 0 \u5230 9 \u6309\u987a\u5e8f\u538b\u5165\u6808\uff1b\u51fa\u6808\u64cd\u4f5c\u4f1a\u6253\u5370\u51fa\u8fd4\u56de\u503c\u3002\u4e0b\u9762\u54ea\u79cd\u5e8f\u5217\u662f\u4e0d\u53ef\u80fd\u4ea7\u751f\u7684\uff1f",id:"133-\u5047\u8bbe\u67d0\u4e2a\u7528\u4f8b\u7a0b\u5e8f\u4f1a\u8fdb\u884c\u4e00\u7cfb\u5217\u5165\u6808\u548c\u51fa\u6808\u7684\u6df7\u5408\u6808\u64cd\u4f5c\u5165\u6808\u64cd\u4f5c\u4f1a\u5c06\u8bc1\u4e66-0-\u5230-9-\u6309\u987a\u5e8f\u538b\u5165\u6808\u51fa\u6808\u64cd\u4f5c\u4f1a\u6253\u5370\u51fa\u8fd4\u56de\u503c\u4e0b\u9762\u54ea\u79cd\u5e8f\u5217\u662f\u4e0d\u53ef\u80fd\u4ea7\u751f\u7684",level:5},{value:"1.3.4 \u7f16\u5199\u4e00\u4e2a <code>Stack</code> \u7684\u7528\u4f8b <code>Parehtheses</code> \u4ece\u6807\u51c6\u8f93\u5165\u4e2d\u8bfb\u53d6\u6587\u672c\u6d41\u5e76\u4f7f\u7528\u6808\u5224\u5b9a\u5176\u4e2d\u7684\u62ec\u53f7\u662f\u5426\u914d\u5bf9\u5b8c\u6574\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e <code>[()]{}{[()()]()}</code> \u7a0b\u5e8f\u5e94\u8be5\u6253\u5370 <code>true</code> \u5bf9\u4e8e <code>[(])</code> \u5219\u5e94\u6253\u5370 <code>false</code>\u3002",id:"134-\u7f16\u5199\u4e00\u4e2a-stack-\u7684\u7528\u4f8b-parehtheses-\u4ece\u6807\u51c6\u8f93\u5165\u4e2d\u8bfb\u53d6\u6587\u672c\u6d41\u5e76\u4f7f\u7528\u6808\u5224\u5b9a\u5176\u4e2d\u7684\u62ec\u53f7\u662f\u5426\u914d\u5bf9\u5b8c\u6574\u4f8b\u5982\u5bf9\u4e8e--\u7a0b\u5e8f\u5e94\u8be5\u6253\u5370-true-\u5bf9\u4e8e--\u5219\u5e94\u6253\u5370-false",level:5},{value:"1.3.5 \u5f53 N \u4e3a 50 \u65f6\u4e0b\u9762\u6bb5\u4ee3\u7801\u4f1a\u6253\u5370\u4ec0\u4e48\uff1f\u4ece\u8f83\u9ad8\u62bd\u8c61\u5c42\u6b21\u63cf\u8ff0\u7ed9\u5b9a\u6b63\u6574\u6570 N \u65f6\u8fd9\u6bb5\u4ee3\u7801\u7684\u884c\u4e3a\u3002",id:"135-\u5f53-n-\u4e3a-50-\u65f6\u4e0b\u9762\u6bb5\u4ee3\u7801\u4f1a\u6253\u5370\u4ec0\u4e48\u4ece\u8f83\u9ad8\u62bd\u8c61\u5c42\u6b21\u63cf\u8ff0\u7ed9\u5b9a\u6b63\u6574\u6570-n-\u65f6\u8fd9\u6bb5\u4ee3\u7801\u7684\u884c\u4e3a",level:5},{value:"1.3.6 \u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u5bf9\u961f\u5217 q \u8fdb\u884c\u4e86\u4ec0\u4e48\u64cd\u4f5c\uff1f",id:"136-\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u5bf9\u961f\u5217-q-\u8fdb\u884c\u4e86\u4ec0\u4e48\u64cd\u4f5c",level:5},{value:"1.3.7 \u4e3a <code>Stack</code> \u6dfb\u52a0\u4e00\u4e2a\u65b9\u6cd5 <code>peek()</code>\uff0c\u8fd4\u56de\u6808\u4e2d\u6700\u8fd1\u6dfb\u52a0\u7684\u5143\u7d20\uff08\u800c\u4e0d\u5f39\u51fa\u5b83\uff09\u3002",id:"137-\u4e3a-stack-\u6dfb\u52a0\u4e00\u4e2a\u65b9\u6cd5-peek\u8fd4\u56de\u6808\u4e2d\u6700\u8fd1\u6dfb\u52a0\u7684\u5143\u7d20\u800c\u4e0d\u5f39\u51fa\u5b83",level:5},{value:"1.3.8 \u7ed9\u5b9a\u4ee5\u4e0b\u8f93\u5165\uff0c\u7ed9\u51fa <code>DoublingStackOfStrings</code> \u7684\u6570\u7ec4\u7684\u5185\u5bb9\u548c\u5927\u5c0f\u3002",id:"138-\u7ed9\u5b9a\u4ee5\u4e0b\u8f93\u5165\u7ed9\u51fa-doublingstackofstrings-\u7684\u6570\u7ec4\u7684\u5185\u5bb9\u548c\u5927\u5c0f",level:5},{value:"\u7f16\u5199\u4e00\u6bb5\u7a0b\u5e8f\uff0c\u4ece\u6807\u51c6\u8f93\u5165\u5f97\u5230\u4e00\u4e2a\u7f3a\u5c11\u5de6\u62ec\u53f7\u7684\u8868\u8fbe\u5f0f\u5e76\u6253\u5370\u51fa\u8865\u5168\u62ec\u53f7\u4e4b\u540e\u7684\u4e2d\u5e8f\u8868\u8fbe\u5f0f\u3002",id:"\u7f16\u5199\u4e00\u6bb5\u7a0b\u5e8f\u4ece\u6807\u51c6\u8f93\u5165\u5f97\u5230\u4e00\u4e2a\u7f3a\u5c11\u5de6\u62ec\u53f7\u7684\u8868\u8fbe\u5f0f\u5e76\u6253\u5370\u51fa\u8865\u5168\u62ec\u53f7\u4e4b\u540e\u7684\u4e2d\u5e8f\u8868\u8fbe\u5f0f",level:5},{value:"1.3.10 \u7f16\u5199\u4e00\u4e2a\u8fc7\u6ee4\u5668 <code>InfixToPostFix</code>\uff0c\u5c06\u7b97\u6570\u8868\u8fbe\u5f0f\u7531\u4e2d\u5e8f\u8868\u8fbe\u5f0f\u8f6c\u4e3a\u540e\u7eed\u8868\u8fbe\u5f0f\u3002",id:"1310-\u7f16\u5199\u4e00\u4e2a\u8fc7\u6ee4\u5668-infixtopostfix\u5c06\u7b97\u6570\u8868\u8fbe\u5f0f\u7531\u4e2d\u5e8f\u8868\u8fbe\u5f0f\u8f6c\u4e3a\u540e\u7eed\u8868\u8fbe\u5f0f",level:5},{value:"1.3.11 \u7f16\u5199\u4e00\u6bb5\u7a0b\u5e8f <code>EvaluatePostfix</code>\uff0c\u4ece\u6807\u51c6\u8f93\u5165\u4e2d\u5f97\u5230\u4e00\u4e2a\u540e\u5e8f\u8868\u8fbe\u5f0f\uff0c\u6c42\u503c\u5e76\u6253\u5370\u7ed3\u679c\uff08\u5c06\u4e0a\u4e00\u9898\u7684\u7a0b\u5e8f\u4e2d\u5f97\u5230\u7684\u8f93\u51fa\u7528\u7ba1\u9053\u4f20\u9012\u7ed9\u8fd9\u4e00\u6bb5\u7a0b\u5e8f\u53ef\u4ee5\u5f97\u5230\u548c <code>Evaluate</code> \u76f8\u540c\u7684\u884c\u4e3a\uff09\u3002",id:"1311-\u7f16\u5199\u4e00\u6bb5\u7a0b\u5e8f-evaluatepostfix\u4ece\u6807\u51c6\u8f93\u5165\u4e2d\u5f97\u5230\u4e00\u4e2a\u540e\u5e8f\u8868\u8fbe\u5f0f\u6c42\u503c\u5e76\u6253\u5370\u7ed3\u679c\u5c06\u4e0a\u4e00\u9898\u7684\u7a0b\u5e8f\u4e2d\u5f97\u5230\u7684\u8f93\u51fa\u7528\u7ba1\u9053\u4f20\u9012\u7ed9\u8fd9\u4e00\u6bb5\u7a0b\u5e8f\u53ef\u4ee5\u5f97\u5230\u548c-evaluate-\u76f8\u540c\u7684\u884c\u4e3a",level:5}];function d(n){const e={blockquote:"blockquote",code:"code",h5:"h5",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u6700\u8fd1\u5f00\u59cb\u5b66\u4e60\u300a\u7b97\u6cd5-\u7b2c\u56db\u7248\u300b\u4e00\u4e66\uff0c\u5c06\u6211\u81ea\u5df1\u505a\u7684\u4e66\u540e\u4e60\u9898\u5206\u4eab\u7ed9\u5927\u5bb6\uff0c\u672c\u7bc7\u662f\u8fd9\u4e00\u7cfb\u5217\u7684\u7b2c\u4e8c\u7bc7\uff0c\u5305\u542b\u4e86\u4e66\u4e0a<1.3 \u80cc\u5305\u3001\u961f\u5217\u548c\u6808>\u7684\u4e60\u9898\u7684\u7ec3\u4e60\u90e8\u5206,\u672c\u7bc7\u4e60\u9898\u4f4d\u4e8e P101 ~ P107 \uff0c\u5982\u6709\u9519\u8bef\uff0c\u8fd8\u8bf7\u6307\u6b63\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u672c\u7bc7\u7b54\u6848\u4e2d\u90e8\u5206 java \u4ee3\u7801\u7528\u5230\u4e86\u4e66\u4e2d\u7684\u5305\uff0c\u5982\u9700\u4f7f\u7528\u8bf7\u53bb\u4e66\u4e2d\u914d\u5957\u7f51\u7ad9\u5b89\u88c5\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u7684\u7b54\u6848\u5728\u7535\u8111\u7aef\u67e5\u770b\u53ef\u4ee5\u663e\u793a\u76ee\u5f55"}),"\n",(0,s.jsxs)(e.h5,{id:"\u4e3a-fixedcapacitystackofstrings-\u6dfb\u52a0\u4e00\u4e2a\u65b9\u6cd5-isfull",children:["\u4e3a ",(0,s.jsx)(e.code,{children:"FixedCapacityStackOfStrings"})," \u6dfb\u52a0\u4e00\u4e2a\u65b9\u6cd5 ",(0,s.jsx)(e.code,{children:"isFull()"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"public boolean isFull(){\nreturn N == a.length;\n}\n"})}),"\n",(0,s.jsxs)(e.h5,{id:"132-\u7ed9\u5b9a\u4ee5\u4e0b\u8f93\u5165java-stack-\u7684\u8f93\u51fa\u662f\u4ec0\u4e48",children:["1.3.2 \u7ed9\u5b9a\u4ee5\u4e0b\u8f93\u5165\uff0c",(0,s.jsx)(e.code,{children:"java Stack"})," \u7684\u8f93\u51fa\u662f\u4ec0\u4e48?"]}),"\n",(0,s.jsx)(e.p,{children:"was best  times of the was the it"}),"\n",(0,s.jsx)(e.h5,{id:"133-\u5047\u8bbe\u67d0\u4e2a\u7528\u4f8b\u7a0b\u5e8f\u4f1a\u8fdb\u884c\u4e00\u7cfb\u5217\u5165\u6808\u548c\u51fa\u6808\u7684\u6df7\u5408\u6808\u64cd\u4f5c\u5165\u6808\u64cd\u4f5c\u4f1a\u5c06\u8bc1\u4e66-0-\u5230-9-\u6309\u987a\u5e8f\u538b\u5165\u6808\u51fa\u6808\u64cd\u4f5c\u4f1a\u6253\u5370\u51fa\u8fd4\u56de\u503c\u4e0b\u9762\u54ea\u79cd\u5e8f\u5217\u662f\u4e0d\u53ef\u80fd\u4ea7\u751f\u7684",children:"1.3.3 \u5047\u8bbe\u67d0\u4e2a\u7528\u4f8b\u7a0b\u5e8f\u4f1a\u8fdb\u884c\u4e00\u7cfb\u5217\u5165\u6808\u548c\u51fa\u6808\u7684\u6df7\u5408\u6808\u64cd\u4f5c\u3002\u5165\u6808\u64cd\u4f5c\u4f1a\u5c06\u8bc1\u4e66 0 \u5230 9 \u6309\u987a\u5e8f\u538b\u5165\u6808\uff1b\u51fa\u6808\u64cd\u4f5c\u4f1a\u6253\u5370\u51fa\u8fd4\u56de\u503c\u3002\u4e0b\u9762\u54ea\u79cd\u5e8f\u5217\u662f\u4e0d\u53ef\u80fd\u4ea7\u751f\u7684\uff1f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"a. 4 3 2 1 0 9 8 7 6 5\nb. 4 6 8 7 5 3 2 9 0 1\nc. 2 5 6 7 4 8 9 3 1 0\nd. 4 3 2 1 0 5 6 7 8 9\ne. 1 2 3 4 5 6 9 8 7 0\nf. 0 4 6 5 3 8 1 7 2 9\ng. 1 4 7 9 8 6 5 3 0 2\nh. 2 1 4 3 6 5 8 7 9 0\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7f16\u5199\u4ee5\u4e0b\u7a0b\u5e8f\u5e2e\u52a9\u6211\u4eec\u5224\u65ad\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'import edu.princeton.cs.algs4.*;\npublic class q133{\npublic static void main(String[] args){\nStdOut.println("\u8bf7\u8f93\u5165\u5224\u65ad\u7684\u6570\u636e\uff1a")\uff1b\nint[] num = new int[10]; //\u9009\u9879\u6570\u7ec4\nfor (int i = 0; i < 10; i++){\nnum[i] = StdIn.readInt();\n}\nStack<Integer> detection = new Stack<Integer>(); //\u68c0\u6d4b\u6808\n    int[] ans = new int[10]; //\u7ed3\u679c\u6570\u7ec4\n    for (int i = 0, n = 0, a = 0; i < 10; i++){\n    if (i != num[n]){\n    detection.push(i);\n    } else {\n    int c = 0;\n    do {\n    ans[a] = num[n];\n    a++;\n    n++;\n    if (!detection.isEmpty()){\n    c = detection.pop();\n    detection.push(c);\n    }\n    } while (!detection.isEmpty() && detection.pop() == num[n]);\n    if (!detection.isEmpty()){\n    detection.push(c);\n    }\n    }\n    }\n    int s = 0;\n    for (int p = 0; p < 10; p++ ){\n    if (ans[p] != num[p]){\n    s = 1;\n    StdOut.print("false");\n    break;\n    }\n    }\n    if (s == 0){\n    StdOut.print("true");\n    }\n\n    }\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"\u8fd0\u884c\u7ed3\u679c\uff1a\na: true\nb: false\nc: true\nd: true\ne: true\nf: false\ng: false\nh: true\n"})}),"\n",(0,s.jsxs)(e.h5,{id:"134-\u7f16\u5199\u4e00\u4e2a-stack-\u7684\u7528\u4f8b-parehtheses-\u4ece\u6807\u51c6\u8f93\u5165\u4e2d\u8bfb\u53d6\u6587\u672c\u6d41\u5e76\u4f7f\u7528\u6808\u5224\u5b9a\u5176\u4e2d\u7684\u62ec\u53f7\u662f\u5426\u914d\u5bf9\u5b8c\u6574\u4f8b\u5982\u5bf9\u4e8e--\u7a0b\u5e8f\u5e94\u8be5\u6253\u5370-true-\u5bf9\u4e8e--\u5219\u5e94\u6253\u5370-false",children:["1.3.4 \u7f16\u5199\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"Stack"})," \u7684\u7528\u4f8b ",(0,s.jsx)(e.code,{children:"Parehtheses"})," \u4ece\u6807\u51c6\u8f93\u5165\u4e2d\u8bfb\u53d6\u6587\u672c\u6d41\u5e76\u4f7f\u7528\u6808\u5224\u5b9a\u5176\u4e2d\u7684\u62ec\u53f7\u662f\u5426\u914d\u5bf9\u5b8c\u6574\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e ",(0,s.jsx)(e.code,{children:"[()]{}{[()()]()}"})," \u7a0b\u5e8f\u5e94\u8be5\u6253\u5370 ",(0,s.jsx)(e.code,{children:"true"})," \u5bf9\u4e8e ",(0,s.jsx)(e.code,{children:"[(])"})," \u5219\u5e94\u6253\u5370 ",(0,s.jsx)(e.code,{children:"false"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'import edu.princeton.cs.algs4.Stack;\nimport edu.princeton.cs.algs4.StdIn;\nimport edu.princeton.cs.algs4.StdOut;\n\npublic class q134 {\npublic static void main(String[] args){\nStack<String> sta = new Stack<String>();\n    boolean ans = true;\n    while (!StdIn.isEmpty()){\n    //\u8bfb\u53d6\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u662f\u5de6\u62ec\u53f7\u5219\u538b\u5165\u6808\n    //\u62ec\u53f7\u4e4b\u95f4\u4ee5\u7a7a\u683c\u5206\u5f00\n    String s = StdIn.readString();\n    if (s.equals("(")){\n    sta.push(s);\n    }else if (s.equals("{")){\n    sta.push(s);\n    }else if (s.equals("[")){\n    sta.push(s);\n    // \u5982\u679c\u662f\u53f3\u62ec\u53f7\u5219\u5f39\u51fa\u4e00\u4e2a\u8fd0\u7b97\u7b26\n    }else if (s.equals("]")){\n    ans = s.equals(sta.pop());\n    }else if (s.equals("}")){\n    ans = s.equals(sta.pop());\n    }else if (s.equals(")")){\n    ans = s.equals(sta.pop());\n    }\n    }\n    StdOut.print(ans);\n    }\n    }\n'})}),"\n",(0,s.jsx)(e.h5,{id:"135-\u5f53-n-\u4e3a-50-\u65f6\u4e0b\u9762\u6bb5\u4ee3\u7801\u4f1a\u6253\u5370\u4ec0\u4e48\u4ece\u8f83\u9ad8\u62bd\u8c61\u5c42\u6b21\u63cf\u8ff0\u7ed9\u5b9a\u6b63\u6574\u6570-n-\u65f6\u8fd9\u6bb5\u4ee3\u7801\u7684\u884c\u4e3a",children:"1.3.5 \u5f53 N \u4e3a 50 \u65f6\u4e0b\u9762\u6bb5\u4ee3\u7801\u4f1a\u6253\u5370\u4ec0\u4e48\uff1f\u4ece\u8f83\u9ad8\u62bd\u8c61\u5c42\u6b21\u63cf\u8ff0\u7ed9\u5b9a\u6b63\u6574\u6570 N \u65f6\u8fd9\u6bb5\u4ee3\u7801\u7684\u884c\u4e3a\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"Stack<Integer> stack = new Stack<Integer>;\n    while (N > 0){\n    stack.push(N % 2);\n    N = N / 2\uff1b\n    }\n    for (int d : stack){\n    StdOut.println();\n    }\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7b54\uff1a\u6253\u5370 N \u7684\u4e8c\u8fdb\u5236\u8868\u793a\uff08\u5f53 N \u4e3a 50 \u65f6\u6253\u5370 110010\uff09\u3002"}),"\n",(0,s.jsx)(e.h5,{id:"136-\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u5bf9\u961f\u5217-q-\u8fdb\u884c\u4e86\u4ec0\u4e48\u64cd\u4f5c",children:"1.3.6 \u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u5bf9\u961f\u5217 q \u8fdb\u884c\u4e86\u4ec0\u4e48\u64cd\u4f5c\uff1f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"Stack<String> stack = new Stack<String>();\n    while (!q.isEmpty()){\n    stack.push(q.dequeue());\n    }\n    while (!stack.isEmpty()){\n    q.enqueue(stack.pop());\n    }\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7b54\uff1a\u5bf9\u961f\u5217 q \u8fdb\u884c\u4e86\u524d\u540e\u98a0\u5012\u4f4d\u7f6e\u7684\u64cd\u4f5c\u3002"}),"\n",(0,s.jsxs)(e.h5,{id:"137-\u4e3a-stack-\u6dfb\u52a0\u4e00\u4e2a\u65b9\u6cd5-peek\u8fd4\u56de\u6808\u4e2d\u6700\u8fd1\u6dfb\u52a0\u7684\u5143\u7d20\u800c\u4e0d\u5f39\u51fa\u5b83",children:["1.3.7 \u4e3a ",(0,s.jsx)(e.code,{children:"Stack"})," \u6dfb\u52a0\u4e00\u4e2a\u65b9\u6cd5 ",(0,s.jsx)(e.code,{children:"peek()"}),"\uff0c\u8fd4\u56de\u6808\u4e2d\u6700\u8fd1\u6dfb\u52a0\u7684\u5143\u7d20\uff08\u800c\u4e0d\u5f39\u51fa\u5b83\uff09\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"public Item peek(){\nItem item = a[N];\nreturn item;\n}\n"})}),"\n",(0,s.jsxs)(e.h5,{id:"138-\u7ed9\u5b9a\u4ee5\u4e0b\u8f93\u5165\u7ed9\u51fa-doublingstackofstrings-\u7684\u6570\u7ec4\u7684\u5185\u5bb9\u548c\u5927\u5c0f",children:["1.3.8 \u7ed9\u5b9a\u4ee5\u4e0b\u8f93\u5165\uff0c\u7ed9\u51fa ",(0,s.jsx)(e.code,{children:"DoublingStackOfStrings"})," \u7684\u6570\u7ec4\u7684\u5185\u5bb9\u548c\u5927\u5c0f\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"it was - the best - of times - - - it was - the - -"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'\n/*************************************************************************\n*  Compilation:  javac DoublingStackOfStrings.java\n*  Execution:    java DoublingStackOfStrings\n*\n*  Stack of strings implementation with an array.\n*  Resizes by doubling and halving.\n*\n*************************************************************************/\n\nimport java.util.Iterator;\nimport java.util.NoSuchElementException;\n\nimport edu.princeton.cs.algs4.StdIn;\nimport edu.princeton.cs.algs4.StdOut;\n\npublic class DoublingStackOfStrings implements Iterable<String> {\n    private String[] a;\n    private int N;\n\n    public DoublingStackOfStrings() {\n    a = new String[2];\n    N = 0;\n    }\n\n    // is the stack empty?\n    public boolean isEmpty() {  return (N == 0);  }\n\n    // resize the underlying array holding the elements\n    private void resize(int capacity) {\n    String[] temp = new String[capacity];\n    for (int i = 0; i < N; i++) {\n    temp[i] = a[i];\n    }\n    a = temp;\n    }\n\n    // push a new item onto the stack\n    public void push(String item) {\n    if (N == a.length) resize(2*a.length);\n    a[N++] = item;\n    }\n\n    // delete and return the item most recently added\n    public String pop() {\n    if (isEmpty()) {\n    throw new RuntimeException("Stack underflow error");\n    }\n    String item = a[--N];\n    a[N] = null;  // to avoid loitering\n    if (N > 0 && N == a.length/4) resize(a.length/2);\n    return item;\n    }\n\n    public Iterator<String> iterator() {\n        return new ReverseArrayIterator();\n        }\n\n        public int size(){\n        return N;\n        }\n\n\n        // an iterator, doesn\'t implement remove() since it\'s optional\n        private class ReverseArrayIterator implements Iterator<String> {\n            private int i = N;\n            public boolean hasNext() {\n            return i > 0;\n            }\n            public void remove() {\n            throw new UnsupportedOperationException();\n            }\n\n            public String next() {\n            if (!hasNext()) throw new NoSuchElementException();\n            return a[--i];\n            }\n\n            }\n\n            // test client\n            public static void main(String[] args) {\n            DoublingStackOfStrings s = new DoublingStackOfStrings();\n            while (!StdIn.isEmpty()) {\n            String item = StdIn.readString();\n            if (!item.equals("-")) {\n            s.push(item);\n            } else if (s.isEmpty()) {\n            StdOut.println("BAD INPUT");\n            } else {\n            s.pop();\n            }\n            }\n            StdOut.println(s.size());\n\n            while (!s.isEmpty()){\n            StdOut.println(s.pop());\n            }\n            }\n\n            }\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8fd0\u884c\u7ed3\u679c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"1\nit\n"})}),"\n",(0,s.jsx)(e.h5,{id:"\u7f16\u5199\u4e00\u6bb5\u7a0b\u5e8f\u4ece\u6807\u51c6\u8f93\u5165\u5f97\u5230\u4e00\u4e2a\u7f3a\u5c11\u5de6\u62ec\u53f7\u7684\u8868\u8fbe\u5f0f\u5e76\u6253\u5370\u51fa\u8865\u5168\u62ec\u53f7\u4e4b\u540e\u7684\u4e2d\u5e8f\u8868\u8fbe\u5f0f",children:"\u7f16\u5199\u4e00\u6bb5\u7a0b\u5e8f\uff0c\u4ece\u6807\u51c6\u8f93\u5165\u5f97\u5230\u4e00\u4e2a\u7f3a\u5c11\u5de6\u62ec\u53f7\u7684\u8868\u8fbe\u5f0f\u5e76\u6253\u5370\u51fa\u8865\u5168\u62ec\u53f7\u4e4b\u540e\u7684\u4e2d\u5e8f\u8868\u8fbe\u5f0f\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"\n\u4f8b\u5982\uff0c\u7ed9\u5b9a\u8f93\u5165\uff1a\n1 + 2 ) * 3 - 4 ) * 5 - 6 ) ) )\n\n\u4f60\u7684\u7a0b\u5e8f\u5e94\u8be5\u8f93\u51fa\uff1a\n( ( 1 + 2)  *  ( ( 3 - 4) * ( 5 - 6 ) ) )\n\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'import edu.princeton.cs.algs4.Stack;\nimport edu.princeton.cs.algs4.StdIn;\nimport edu.princeton.cs.algs4.StdOut;\n\npublic class algs1v3v9 {\npublic static void main(String[] args){\n// \u8fd0\u7b97\u7b26\nStack<String> ops = new Stack<String>();\n    // \u6570\n    Stack<String> vals = new Stack<String>();\n        while (!StdIn.isEmpty()){\n        // \u5c06\u8fd0\u7b97\u7b26\u538b\u5165\u6808\n        String s = StdIn.readString();\n        boolean isOps = s.equals("+") || s.equals("-") || s.equals("*") || s.equals("sqrt");\n        if (isOps){\n        ops.push(s);\n        } else if (s.equals(")")){\n        // \u62fc\u63a5\u5e76\u538b\u5165\u6808\n        String op = ops.pop();\n        String v = vals.pop();\n        v = "( " + vals.pop() + " " + op + " " + v + " )";\n        vals.push(v);\n        }\n        else vals.push(s);\n        }\n        StdOut.println(vals.pop());\n        }\n        }\n'})}),"\n",(0,s.jsxs)(e.h5,{id:"1310-\u7f16\u5199\u4e00\u4e2a\u8fc7\u6ee4\u5668-infixtopostfix\u5c06\u7b97\u6570\u8868\u8fbe\u5f0f\u7531\u4e2d\u5e8f\u8868\u8fbe\u5f0f\u8f6c\u4e3a\u540e\u7eed\u8868\u8fbe\u5f0f",children:["1.3.10 \u7f16\u5199\u4e00\u4e2a\u8fc7\u6ee4\u5668 ",(0,s.jsx)(e.code,{children:"InfixToPostFix"}),"\uff0c\u5c06\u7b97\u6570\u8868\u8fbe\u5f0f\u7531\u4e2d\u5e8f\u8868\u8fbe\u5f0f\u8f6c\u4e3a\u540e\u7eed\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'import edu.princeton.cs.algs4.Stack;\nimport edu.princeton.cs.algs4.StdIn;\nimport edu.princeton.cs.algs4.StdOut;\n\npublic class InfixToPostfix {\npublic static void main(String[] args){\n// \u8fd0\u7b97\u7b26\nStack<String> ops = new Stack<String>();\n    // \u6570\n    Stack<String> vals = new Stack<String>();\n        while (!StdIn.isEmpty()){\n        // \u5c06\u8fd0\u7b97\u7b26\u538b\u5165\u6808\n        String s = StdIn.readString();\n        boolean isOps = s.equals("+") || s.equals("-") || s.equals("*") || s.equals("sqrt") ||s.equals("/");\n\n        if (isOps){\n        ops.push(s);\n        } else if(s.equals("(")) {\n\n        } else if (s.equals(")")){\n        // \u62fc\u63a5\u5e76\u538b\u5165\u6808\n        String op = ops.pop();\n        String v = vals.pop();\n        v = vals.pop() + " " + v + " " + op;\n        vals.push(v);\n        }\n        else vals.push(s);\n        }\n        StdOut.println(vals.pop());\n        }\n\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"1 2 + 3 4 - 5 6 - * *\n"})}),"\n",(0,s.jsxs)(e.h5,{id:"1311-\u7f16\u5199\u4e00\u6bb5\u7a0b\u5e8f-evaluatepostfix\u4ece\u6807\u51c6\u8f93\u5165\u4e2d\u5f97\u5230\u4e00\u4e2a\u540e\u5e8f\u8868\u8fbe\u5f0f\u6c42\u503c\u5e76\u6253\u5370\u7ed3\u679c\u5c06\u4e0a\u4e00\u9898\u7684\u7a0b\u5e8f\u4e2d\u5f97\u5230\u7684\u8f93\u51fa\u7528\u7ba1\u9053\u4f20\u9012\u7ed9\u8fd9\u4e00\u6bb5\u7a0b\u5e8f\u53ef\u4ee5\u5f97\u5230\u548c-evaluate-\u76f8\u540c\u7684\u884c\u4e3a",children:["1.3.11 \u7f16\u5199\u4e00\u6bb5\u7a0b\u5e8f ",(0,s.jsx)(e.code,{children:"EvaluatePostfix"}),"\uff0c\u4ece\u6807\u51c6\u8f93\u5165\u4e2d\u5f97\u5230\u4e00\u4e2a\u540e\u5e8f\u8868\u8fbe\u5f0f\uff0c\u6c42\u503c\u5e76\u6253\u5370\u7ed3\u679c\uff08\u5c06\u4e0a\u4e00\u9898\u7684\u7a0b\u5e8f\u4e2d\u5f97\u5230\u7684\u8f93\u51fa\u7528\u7ba1\u9053\u4f20\u9012\u7ed9\u8fd9\u4e00\u6bb5\u7a0b\u5e8f\u53ef\u4ee5\u5f97\u5230\u548c ",(0,s.jsx)(e.code,{children:"Evaluate"})," \u76f8\u540c\u7684\u884c\u4e3a\uff09\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'import edu.princeton.cs.algs4.Stack;\nimport edu.princeton.cs.algs4.StdIn;\nimport edu.princeton.cs.algs4.StdOut;\n\npublic class Evaluate {\npublic static void main(String[] args){\nStack<Double> vals = new Stack<Double>();\n    while (!StdIn.isEmpty()){\n    String s = StdIn.readString();\n    if(s.equals("+")){\n    double v = vals.pop();\n    v = vals.pop() + v;\n    vals.push(v);\n    } else if (s.equals("-")){\n    double v = vals.pop();\n    v = vals.pop() - v;\n    vals.push(v);\n    } else if (s.equals("*")){\n    double v = vals.pop();\n    v = vals.pop() * v;\n    vals.push(v);\n    } else if (s.equals("/")){\n    double v = vals.pop();\n    v = vals.pop() / v;\n    vals.push(v);\n    } else if (s.equals("sqrt")){\n    double v = vals.pop();\n    v = Math.sqrt(v);\n    vals.push(v);\n    } else {\n    vals.push(Double.parseDouble(s));\n    }\n    }\n    StdOut.println(vals.pop());\n    }\n    }\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u672a\u5b8c\u5f85\u7eed\xb7\xb7\xb7"})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>l});var s=t(7294);const i={},a=s.createContext(i);function l(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);