"use strict";(self.webpackChunksolidspoon_site=self.webpackChunksolidspoon_site||[]).push([[7496],{9554:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=t(5893),r=t(1151);const s={slug:"algorithm-fourth-edition-answer-series-1-3-linked-list-exercises",title:"\u300a\u7b97\u6cd5-\u7b2c\u56db\u7248\u300b\u7b54\u6848\u7cfb\u5217-1-3 \u94fe\u8868\u7ec3\u4e60",authors:["solidSpoon"],tags:["\u7b97\u6cd5"]},l=void 0,o={permalink:"/blog/algorithm-fourth-edition-answer-series-1-3-linked-list-exercises",editUrl:"https://github.com/solidSpoon/solidSpoon.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2021/02-16-algorithm-fourth-edition-answer-series-1-3-linked-list-exercises/index.md",source:"@site/blog/2021/02-16-algorithm-fourth-edition-answer-series-1-3-linked-list-exercises/index.md",title:"\u300a\u7b97\u6cd5-\u7b2c\u56db\u7248\u300b\u7b54\u6848\u7cfb\u5217-1-3 \u94fe\u8868\u7ec3\u4e60",description:"\u6700\u8fd1\u5f00\u59cb\u5b66\u4e60\u300a\u7b97\u6cd5-\u7b2c\u56db\u7248\u300b\u4e00\u4e66\uff0c\u5c06\u6211\u81ea\u5df1\u505a\u7684\u4e66\u540e\u4e60\u9898\u5206\u4eab\u7ed9\u5927\u5bb6\uff0c\u672c\u7bc7\u662f\u8fd9\u4e00\u7cfb\u5217\u7684\u7b2c\u4e8c\u7bc7\uff0c\u5305\u542b\u4e86\u4e66\u4e0a1.3 \u80cc\u5305\u3001\u961f\u5217\u548c\u6808\u7684\u4e60\u9898\u7684\u7ec3\u4e60\u90e8\u5206,\u672c\u7bc7\u4e60\u9898\u4f4d\u4e8e P101 ~ P107 \uff0c\u5982\u6709\u9519\u8bef\uff0c\u8fd8\u8bf7\u6307\u6b63\u3002",date:"2021-02-16T00:00:00.000Z",formattedDate:"2021\u5e742\u670816\u65e5",tags:[{label:"\u7b97\u6cd5",permalink:"/blog/tags/\u7b97\u6cd5"}],readingTime:3.235,hasTruncateMarker:!1,authors:[{name:"solidSpoon",title:"Maintainer of Hide",url:"https://github.com/solidSpoon",imageURL:"https://github.com/solidSpoon.png",key:"solidSpoon"}],frontMatter:{slug:"algorithm-fourth-edition-answer-series-1-3-linked-list-exercises",title:"\u300a\u7b97\u6cd5-\u7b2c\u56db\u7248\u300b\u7b54\u6848\u7cfb\u5217-1-3 \u94fe\u8868\u7ec3\u4e60",authors:["solidSpoon"],tags:["\u7b97\u6cd5"]},unlisted:!1,prevItem:{title:"\u6587\u7ae0\u6392\u7248\u6307\u5357",permalink:"/blog/algorithm-fourth-edition-answer-series-1-3-exercise-article"},nextItem:{title:"\u300a\u7b97\u6cd5-\u7b2c\u56db\u7248\u300b\u7b54\u6848\u7cfb\u5217-1.2 \u63d0\u9ad8\u9898\u7bc7",permalink:"/blog/algorithm-fourth-edition-answer-series-1-2-advanced-exercise-article"}},d={authorsImageUrls:[void 0]},a=[{value:"1.3.18 \u5047\u8bbe x \u662f\u4e00\u6761\u94fe\u8868\u7684\u67d0\u4e2a\u8282\u70b9\u4e14\u4e0d\u662f\u5c3e\u8282\u70b9\u3002\u4e0b\u9762\u8fd9\u6761\u8bed\u53e5\u7684\u6548\u679c\u662f\u4ec0\u4e48\uff1f",id:"1318-\u5047\u8bbe-x-\u662f\u4e00\u6761\u94fe\u8868\u7684\u67d0\u4e2a\u8282\u70b9\u4e14\u4e0d\u662f\u5c3e\u8282\u70b9\u4e0b\u9762\u8fd9\u6761\u8bed\u53e5\u7684\u6548\u679c\u662f\u4ec0\u4e48",level:5},{value:"1.3.19 \u7ed9\u51fa\u4e00\u6bb5\u4ee3\u7801\uff0c\u5220\u9664\u94fe\u8868\u7684\u5c3e\u8282\u70b9\uff0c\u5176\u4e2d\u94fe\u8868\u7684\u9996\u8282\u70b9\u4e3a first\u3002",id:"1319-\u7ed9\u51fa\u4e00\u6bb5\u4ee3\u7801\u5220\u9664\u94fe\u8868\u7684\u5c3e\u8282\u70b9\u5176\u4e2d\u94fe\u8868\u7684\u9996\u8282\u70b9\u4e3a-first",level:5},{value:"1.3.20 \u7f16\u5199\u4e00\u4e2a\u65b9\u6cd5 <code>delete()</code>\uff0c\u63a5\u53d7\u4e00\u4e2a int \u53c2\u6570 k\uff0c\u5220\u9664\u94fe\u8868\u7684\u7b2c k \u4e2a\u5143\u7d20\uff08\u5982\u679c\u5b83\u5b58\u5728\u7684\u8bdd\uff09\u3002",id:"1320-\u7f16\u5199\u4e00\u4e2a\u65b9\u6cd5-delete\u63a5\u53d7\u4e00\u4e2a-int-\u53c2\u6570-k\u5220\u9664\u94fe\u8868\u7684\u7b2c-k-\u4e2a\u5143\u7d20\u5982\u679c\u5b83\u5b58\u5728\u7684\u8bdd",level:5},{value:"1.3.21 \u7f16\u5199\u4e00\u4e2a\u65b9\u6cd5 <code>find()</code>\uff0c\u63a5\u53d7\u4e00\u6761\u94fe\u8868\u548c\u4e00\u4e2a\u5b57\u7b26\u4e32 key \u4f5c\u4e3a\u53c2\u6570\u3002\u5982\u679c\u94fe\u8868\u4e2d\u7684\u67d0\u4e2a\u8282\u70b9\u7684 item \u57df\u7684\u503c\u4e3a key\uff0c \u5219\u65b9\u6cd5\u8fd4\u56de truue\uff0c\u5426\u5219\u8fd4\u56de false\u3002",id:"1321-\u7f16\u5199\u4e00\u4e2a\u65b9\u6cd5-find\u63a5\u53d7\u4e00\u6761\u94fe\u8868\u548c\u4e00\u4e2a\u5b57\u7b26\u4e32-key-\u4f5c\u4e3a\u53c2\u6570\u5982\u679c\u94fe\u8868\u4e2d\u7684\u67d0\u4e2a\u8282\u70b9\u7684-item-\u57df\u7684\u503c\u4e3a-key-\u5219\u65b9\u6cd5\u8fd4\u56de-truue\u5426\u5219\u8fd4\u56de-false",level:5},{value:"1.3.22 \u5047\u8bbe x \u662f\u4e00\u6761\u94fe\u8868\u4e2d\u7684\u67d0\u4e2a\u8282\u70b9\uff0c\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u505a\u4e86\u4ec0\u4e48\uff1f",id:"1322-\u5047\u8bbe-x-\u662f\u4e00\u6761\u94fe\u8868\u4e2d\u7684\u67d0\u4e2a\u8282\u70b9\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u505a\u4e86\u4ec0\u4e48",level:5},{value:"1.3.23 \u4e3a\u4ec0\u4e48\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u548c\u4e0a\u4e00\u9053\u9898\u4e2d\u7684\u4ee3\u7801\u6548\u679c\u4e0d\u540c\uff1f",id:"1323-\u4e3a\u4ec0\u4e48\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u548c\u4e0a\u4e00\u9053\u9898\u4e2d\u7684\u4ee3\u7801\u6548\u679c\u4e0d\u540c",level:5},{value:"1.3.24 \u7f16\u5199\u4e00\u4e2a\u65b9\u6cd5",id:"1324-\u7f16\u5199\u4e00\u4e2a\u65b9\u6cd5",level:5}];function c(e){const n={blockquote:"blockquote",code:"code",h5:"h5",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6700\u8fd1\u5f00\u59cb\u5b66\u4e60\u300a\u7b97\u6cd5-\u7b2c\u56db\u7248\u300b\u4e00\u4e66\uff0c\u5c06\u6211\u81ea\u5df1\u505a\u7684\u4e66\u540e\u4e60\u9898\u5206\u4eab\u7ed9\u5927\u5bb6\uff0c\u672c\u7bc7\u662f\u8fd9\u4e00\u7cfb\u5217\u7684\u7b2c\u4e8c\u7bc7\uff0c\u5305\u542b\u4e86\u4e66\u4e0a",(0,i.jsx)(n.strong,{children:"1.3 \u80cc\u5305\u3001\u961f\u5217\u548c\u6808"}),"\u7684\u4e60\u9898\u7684\u7ec3\u4e60\u90e8\u5206,\u672c\u7bc7\u4e60\u9898\u4f4d\u4e8e P101 ~ P107 \uff0c\u5982\u6709\u9519\u8bef\uff0c\u8fd8\u8bf7\u6307\u6b63\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u672c\u7bc7\u7b54\u6848\u4e2d\u90e8\u5206 java \u4ee3\u7801\u7528\u5230\u4e86\u4e66\u4e2d\u7684\u5305\uff0c\u5982\u9700\u4f7f\u7528\u8bf7\u53bb\u4e66\u4e2d\u914d\u5957\u7f51\u7ad9\u5b89\u88c5\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u7684\u7b54\u6848\u5728\u7535\u8111\u7aef\u67e5\u770b\u53ef\u4ee5\u663e\u793a\u76ee\u5f55"}),"\n",(0,i.jsx)(n.h5,{id:"1318-\u5047\u8bbe-x-\u662f\u4e00\u6761\u94fe\u8868\u7684\u67d0\u4e2a\u8282\u70b9\u4e14\u4e0d\u662f\u5c3e\u8282\u70b9\u4e0b\u9762\u8fd9\u6761\u8bed\u53e5\u7684\u6548\u679c\u662f\u4ec0\u4e48",children:"1.3.18 \u5047\u8bbe x \u662f\u4e00\u6761\u94fe\u8868\u7684\u67d0\u4e2a\u8282\u70b9\u4e14\u4e0d\u662f\u5c3e\u8282\u70b9\u3002\u4e0b\u9762\u8fd9\u6761\u8bed\u53e5\u7684\u6548\u679c\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"x.next = x.next.next;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7b54\uff1a\u5220\u9664 x \u7684\u540e\u7eed\u8282\u70b9\u3002"}),"\n",(0,i.jsx)(n.h5,{id:"1319-\u7ed9\u51fa\u4e00\u6bb5\u4ee3\u7801\u5220\u9664\u94fe\u8868\u7684\u5c3e\u8282\u70b9\u5176\u4e2d\u94fe\u8868\u7684\u9996\u8282\u70b9\u4e3a-first",children:"1.3.19 \u7ed9\u51fa\u4e00\u6bb5\u4ee3\u7801\uff0c\u5220\u9664\u94fe\u8868\u7684\u5c3e\u8282\u70b9\uff0c\u5176\u4e2d\u94fe\u8868\u7684\u9996\u8282\u70b9\u4e3a first\u3002"}),"\n",(0,i.jsxs)(n.h5,{id:"1320-\u7f16\u5199\u4e00\u4e2a\u65b9\u6cd5-delete\u63a5\u53d7\u4e00\u4e2a-int-\u53c2\u6570-k\u5220\u9664\u94fe\u8868\u7684\u7b2c-k-\u4e2a\u5143\u7d20\u5982\u679c\u5b83\u5b58\u5728\u7684\u8bdd",children:["1.3.20 \u7f16\u5199\u4e00\u4e2a\u65b9\u6cd5 ",(0,i.jsx)(n.code,{children:"delete()"}),"\uff0c\u63a5\u53d7\u4e00\u4e2a int \u53c2\u6570 k\uff0c\u5220\u9664\u94fe\u8868\u7684\u7b2c k \u4e2a\u5143\u7d20\uff08\u5982\u679c\u5b83\u5b58\u5728\u7684\u8bdd\uff09\u3002"]}),"\n",(0,i.jsxs)(n.h5,{id:"1321-\u7f16\u5199\u4e00\u4e2a\u65b9\u6cd5-find\u63a5\u53d7\u4e00\u6761\u94fe\u8868\u548c\u4e00\u4e2a\u5b57\u7b26\u4e32-key-\u4f5c\u4e3a\u53c2\u6570\u5982\u679c\u94fe\u8868\u4e2d\u7684\u67d0\u4e2a\u8282\u70b9\u7684-item-\u57df\u7684\u503c\u4e3a-key-\u5219\u65b9\u6cd5\u8fd4\u56de-truue\u5426\u5219\u8fd4\u56de-false",children:["1.3.21 \u7f16\u5199\u4e00\u4e2a\u65b9\u6cd5 ",(0,i.jsx)(n.code,{children:"find()"}),"\uff0c\u63a5\u53d7\u4e00\u6761\u94fe\u8868\u548c\u4e00\u4e2a\u5b57\u7b26\u4e32 key \u4f5c\u4e3a\u53c2\u6570\u3002\u5982\u679c\u94fe\u8868\u4e2d\u7684\u67d0\u4e2a\u8282\u70b9\u7684 item \u57df\u7684\u503c\u4e3a key\uff0c \u5219\u65b9\u6cd5\u8fd4\u56de truue\uff0c\u5426\u5219\u8fd4\u56de false\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import java.util.Iterator;\n\nimport edu.princeton.cs.algs4.StdOut;\n\npublic class algs1v3v18<Item> implements Iterable<Item>{\n    private Node first = new Node();\n    private Node last = first;\n    int N = 0;\n\n    private class Node{\n        Item item;\n        Node next;        \n    }\n\n    public boolean isEmpty(){\n        return N==0;\n    }\n\n    public void add(Item item){\n        Node oldlast = last;\n        last = new Node();\n        last.item = item;\n        oldlast.next = last;\n        N++;\n    }\n\n    public void deleteEnd(){\n        Node end = first;\n        while(end.next.next != null){\n            end = end.next;\n        }\n        last = end;\n        last.next = null;\n        N--;\n    }\n\n    public void delete(int k){\n        if (k < N){\n            Node here = first;\n             for (int i = 1; i < k; i++){\n                here = here.next;\n             }\n             here.next = here.next.next;\n        } else if (k == N){\n            deleteEnd();\n        }\n    }\n    public boolean find(Item st){\n        for (Node x = first.next; x != null; x = x.next){\n            if (x.item.equals(st)){\n                return true;\n            }\n        }\n        return false;\n    }\n\n    public Iterator<Item> iterator(){\n        return new ListIterator();\n    }\n    private class ListIterator implements Iterator<Item>{\n        private Node current = first.next;\n\n\t\t@Override\n\t\tpublic boolean hasNext() {\n\t\t\treturn current != null;\n\t\t}\n\n\t\t@Override\n\t\tpublic Item next() {\n            Item item = current.item;\n            current = current.next;\n            return item;\n\t\t}\n\n    }\n\n    public static void main(String[] args){\n        algs1v3v18<Integer> list = new algs1v3v18<Integer>();\n        for(int i = 1; i <= 10; i++){\n            list.add(i);\n        }\n        for(int c : list){\n            StdOut.print(c + " ");\n        }\n        StdOut.println();\n\n        list.deleteEnd();\n        for(int c : list){\n            StdOut.print(c + " ");\n        }\n        StdOut.println();\n\n        list.delete(9);\n        for(int c : list){\n            StdOut.print(c + " ");\n        }\n        StdOut.println();\n\n        StdOut.println(list.find(2) + " " + list.find(11));\n    }    \n}\n'})}),"\n",(0,i.jsx)(n.h5,{id:"1322-\u5047\u8bbe-x-\u662f\u4e00\u6761\u94fe\u8868\u4e2d\u7684\u67d0\u4e2a\u8282\u70b9\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u505a\u4e86\u4ec0\u4e48",children:"1.3.22 \u5047\u8bbe x \u662f\u4e00\u6761\u94fe\u8868\u4e2d\u7684\u67d0\u4e2a\u8282\u70b9\uff0c\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u505a\u4e86\u4ec0\u4e48\uff1f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"t.next = x.next;\nx.next = t;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7b54\uff1a\u63d2\u5165\u8282\u70b9 t \u5e76\u4f7f\u5b83\u6210\u4e3a x \u7684\u540e\u7eed\u8282\u70b9\u3002"}),"\n",(0,i.jsx)(n.h5,{id:"1323-\u4e3a\u4ec0\u4e48\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u548c\u4e0a\u4e00\u9053\u9898\u4e2d\u7684\u4ee3\u7801\u6548\u679c\u4e0d\u540c",children:"1.3.23 \u4e3a\u4ec0\u4e48\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u548c\u4e0a\u4e00\u9053\u9898\u4e2d\u7684\u4ee3\u7801\u6548\u679c\u4e0d\u540c\uff1f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"x.net = t;\nt.next = x.next;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7b54\uff1a\u5728\u66f4\u65b0 ",(0,i.jsx)(n.code,{children:"t.next"})," \u65f6\uff0c",(0,i.jsx)(n.code,{children:"x.next"})," \u5df2\u7ecf\u4e0d\u518d\u6307\u5411 x \u7684\u540e\u7eed\u8282\u70b9\uff0c\u800c\u662f\u6307\u5411 t \u672c\u8eab\uff01"]}),"\n",(0,i.jsx)(n.h5,{id:"1324-\u7f16\u5199\u4e00\u4e2a\u65b9\u6cd5",children:"1.3.24 \u7f16\u5199\u4e00\u4e2a\u65b9\u6cd5"})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var i=t(7294);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);