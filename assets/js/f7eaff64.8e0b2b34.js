"use strict";(self.webpackChunksolidspoon_site=self.webpackChunksolidspoon_site||[]).push([[4236],{9785:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=a(5893),t=a(1151);const l={slug:"step-by-step-guide-to-reading-bytecode-of-a-java-file",title:"\u624b\u628a\u624b\u6559\u4f60\u8bfb\u4e00\u4e2a Java \u6587\u4ef6\u7684\u5b57\u8282\u7801",authors:["solidSpoon"],tags:["\u5b57\u8282\u7801","Java"]},s=void 0,r={permalink:"/blog/step-by-step-guide-to-reading-bytecode-of-a-java-file",editUrl:"https://github.com/solidSpoon/solidSpoon.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2021-03-04-step-by-step-guide-to-reading-bytecode-of-a-java-file/index.md",source:"@site/blog/2021-03-04-step-by-step-guide-to-reading-bytecode-of-a-java-file/index.md",title:"\u624b\u628a\u624b\u6559\u4f60\u8bfb\u4e00\u4e2a Java \u6587\u4ef6\u7684\u5b57\u8282\u7801",description:"\u60f3\u8981\u8bfb\u61c2 Java \u7684\u5b57\u8282\u7801\u5176\u5b9e\u6ca1\u90a3\u4e48\u96be\u3002\u5f53\u7136\uff0c\u5982\u679c\u4f60\u6709\u6c47\u7f16\u8bed\u8a00\u7684\u7ecf\u9a8c\u5c31\u4f1a\u66f4\u597d\u4e0a\u624b\u3002\u672c\u6587\u624b\u628a\u624b\u6559\u4f60\u9605\u8bfb\u4e00\u4e2a\u7b80\u5355 Java \u6587\u4ef6\u7684\u5b57\u8282\u7801\u3002",date:"2021-03-04T00:00:00.000Z",formattedDate:"2021\u5e743\u67084\u65e5",tags:[{label:"\u5b57\u8282\u7801",permalink:"/blog/tags/\u5b57\u8282\u7801"},{label:"Java",permalink:"/blog/tags/java"}],readingTime:7.91,hasTruncateMarker:!1,authors:[{name:"solidSpoon",title:"Maintainer of Hide",url:"https://github.com/solidSpoon",imageURL:"https://github.com/solidSpoon.png",key:"solidSpoon"}],frontMatter:{slug:"step-by-step-guide-to-reading-bytecode-of-a-java-file",title:"\u624b\u628a\u624b\u6559\u4f60\u8bfb\u4e00\u4e2a Java \u6587\u4ef6\u7684\u5b57\u8282\u7801",authors:["solidSpoon"],tags:["\u5b57\u8282\u7801","Java"]},unlisted:!1,prevItem:{title:"\u81ea\u5b9a\u4e49 ClassLoader \u52a0\u8f7d\u4e00\u4e2a\u52a0\u5bc6 class \u6587\u4ef6",permalink:"/blog/custom-class-loader-loads-encrypted-class-file"},nextItem:{title:"\u521d\u8bc6 JShell",permalink:"/blog/getting-started-with-jshell"}},o={authorsImageUrls:[void 0]},d=[{value:"\u5982\u4f55\u5f97\u5230\u5b57\u8282\u7801\uff1f",id:"\u5982\u4f55\u5f97\u5230\u5b57\u8282\u7801",level:2},{value:"\u65b9\u6cd5 1 \u3001\u547d\u4ee4\u884c",id:"\u65b9\u6cd5-1-\u547d\u4ee4\u884c",level:3},{value:"\u65b9\u6cd5 2 \u3001idea \u63d2\u4ef6",id:"\u65b9\u6cd5-2-idea-\u63d2\u4ef6",level:3},{value:"\u5b9e\u9a8c\u4ee3\u7801",id:"\u5b9e\u9a8c\u4ee3\u7801",level:2},{value:"\u9605\u8bfb\u5b57\u8282\u7801",id:"\u9605\u8bfb\u5b57\u8282\u7801",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}];function c(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"\u60f3\u8981\u8bfb\u61c2 Java \u7684\u5b57\u8282\u7801\u5176\u5b9e\u6ca1\u90a3\u4e48\u96be\u3002\u5f53\u7136\uff0c\u5982\u679c\u4f60\u6709\u6c47\u7f16\u8bed\u8a00\u7684\u7ecf\u9a8c\u5c31\u4f1a\u66f4\u597d\u4e0a\u624b\u3002\u672c\u6587\u624b\u628a\u624b\u6559\u4f60\u9605\u8bfb\u4e00\u4e2a\u7b80\u5355 Java \u6587\u4ef6\u7684\u5b57\u8282\u7801\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u5982\u4f55\u5f97\u5230\u5b57\u8282\u7801",children:"\u5982\u4f55\u5f97\u5230\u5b57\u8282\u7801\uff1f"}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u9762\u8fd9\u6bb5\u793a\u4f8b\u4ee3\u7801\u4e3a\u4f8b\uff0c\u4ed6\u5b58\u653e\u5728\u4e00\u4e2a\u5305\u4e2d\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"package demo.a\npublic class B{\n    ...\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u8fc7\u4e0b\u9762\u8fd9\u51e0\u4e2a\u65b9\u6cd5\u5c31\u53ef\u4ee5\u67e5\u770b\u4ee3\u7801\u7684\u5b57\u8282\u7801\uff1a"}),"\n",(0,i.jsx)(e.h3,{id:"\u65b9\u6cd5-1-\u547d\u4ee4\u884c",children:"\u65b9\u6cd5 1 \u3001\u547d\u4ee4\u884c"}),"\n",(0,i.jsx)(e.p,{children:"\u76f8\u5173\u547d\u4ee4\u5982\u4e0b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"javac demo/a/B.java // \u7f16\u8bd1\njvavp -c demo.a.B   // \u8f93\u51fa\u5b57\u8282\u7801\njavap -c -verbose demo.a.B // \u8be6\u7ec6\u8f93\u51fa\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u65b9\u6cd5-2-idea-\u63d2\u4ef6",children:"\u65b9\u6cd5 2 \u3001idea \u63d2\u4ef6"}),"\n",(0,i.jsx)(e.p,{children:"\u4e0b\u8f7d\u4e2a\u63d2\u4ef6\uff1a\u300cjclasslib Bytecode Viewer\u300d\uff0c\u7f51\u5740\u5982\u4e0b"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://plugins.jetbrains.com/plugin/9248-jclasslib-bytecode-viewer",children:"https://plugins.jetbrains.com/plugin/9248-jclasslib-bytecode-viewer"})}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5b89\u88c5\u8be5\u63d2\u4ef6\u540e\uff0c\u9996\u5148\u7f16\u8bd1\u4ee3\u7801\uff0c\u7136\u540e\n\u83dc\u5355 \ud83d\udc49 \u300cview\u300d \ud83d\udc49 \u300cShow Bytecode With jclasslib\u300d\n\u7ed3\u679c\u5982\u4e0b\uff1a\n",(0,i.jsx)(e.img,{src:"https://ced-md-picture.oss-cn-beijing.aliyuncs.com/img/20210402103711.png",alt:""})]}),"\n",(0,i.jsx)(e.h2,{id:"\u5b9e\u9a8c\u4ee3\u7801",children:"\u5b9e\u9a8c\u4ee3\u7801"}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u4eec\u4f7f\u7528\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\uff0c\u4f60\u53ef\u4ee5\u5c06\u5176\u8f93\u5165 IDE \u4e2d"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"import java.util.ArrayList;\nimport java.util.List;\n\npublic class Hello {\n    public static void main(String[] args) {\n        int num1 = 1;\n        int num2 = 130;\n        int num3 = num1 + num2;\n        int num4 = num2 - num1;\n        int num5 = num1 * num2;\n        int num6 = num2 / num1;\n\n        final int num7 = 5;\n        Integer num88 = 6;\n\n        //\u770b\u88c5\u7bb1\u6307\u4ee4\n        if(num88 == 0){\n            System.out.println(num1);\n        }\n\n        List<Integer> nums = new ArrayList<>();\n        nums.add(1);\n        nums.add(2);\n\n        for (int num : nums){\n            System.out.println(num);\n        }\n\n        if (nums.size() == num2) {\n            System.out.println(num2);\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u4e0b\u9762\u662f\u7531 idea \u53cd\u7f16\u8bd1\u5f97\u5230\u7684\u4ee3\u7801\uff0c\u53ef\u4ee5\u89c2\u5bdf\u5230 ",(0,i.jsx)(e.code,{children:"for"})," \u5faa\u73af\u88ab\u6539\u6210\u4e86 ",(0,i.jsx)(e.code,{children:"while"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"//\n// Source code recreated from a .class file by IntelliJ IDEA\n// (powered by FernFlower decompiler)\n//\n\nimport java.util.ArrayList;\nimport java.util.Iterator;\nimport java.util.List;\n\npublic class Hello {\n    public Hello() {\n    }\n\n    public static void main(String[] args) {\n        int num1 = 1;\n        int num2 = 130;\n        int var10000 = num1 + num2;\n        var10000 = num2 - num1;\n        var10000 = num1 * num2;\n        var10000 = num2 / num1;\n        int num7 = true;\n        Integer num88 = 6;\n        if (num88 == 0) {\n            System.out.println(num1);\n        }\n\n        List<Integer> nums = new ArrayList();\n        nums.add(1);\n        nums.add(2);\n        Iterator var10 = nums.iterator();\n\n        while(var10.hasNext()) {\n            int num = (Integer)var10.next();\n            System.out.println(num);\n        }\n\n        if (nums.size() == num2) {\n            System.out.println(num2);\n        }\n\n    }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9605\u8bfb\u5b57\u8282\u7801",children:"\u9605\u8bfb\u5b57\u8282\u7801"}),"\n",(0,i.jsx)(e.p,{children:"\u4e3a\u4e86\u65b9\u4fbf\u89e3\u91ca\uff0c\u6211\u5c06\u5b57\u8282\u7801\u6587\u4ef6\u62c6\u6210\u5c0f\u6bb5\uff0c\u9996\u5148\u4f7f\u7528\u4e0b\u9762\u8fd9\u4e2a\u547d\u4ee4\u8f93\u51fa\u5b57\u8282\u7801"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"PS C:\\Users\\cedar\\Desktop\\ReadBytecode\\code\\target\\classes> javap -c .\\Hello.class\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4e00\u5f00\u59cb\u5c31\u8bf4\u660e\u4e86\u8fd9\u662f\u300cHello.java\u300d\u7684\u5b57\u8282\u7801"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'Compiled from "Hello.java"\npublic class Hello {\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u7d27\u63a5\u7740\u81ea\u52a8\u521b\u5efa\u4e86\u65e0\u53c2\u6784\u9020\u65b9\u6cd5\uff0c\u8c03\u7528\u4e86\u7236\u7c7b ",(0,i.jsx)(e.code,{children:"Object"})," \u7684\u521d\u59cb\u5316\u51fd\u6570\u3002 ",(0,i.jsx)(e.code,{children:"aload_0"})," \u662f\u8bf4\u628a\u672c\u5730\u53d8\u4eae\u8868\u4f4d\u7f6e 0 \u7684\u5bf9\u8c61\u52a0\u8f7d\u51fa\u6765\uff0c\u800c\u8fd9\u4e2a\u4f4d\u7f6e\u4fdd\u5b58\u7684\u662f\u5bf9\u81ea\u8eab\u7684\u5f15\u7528\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4f60\u4f1a\u53d1\u73b0\u5b57\u8282\u7801\u6bcf\u6761\u547d\u4ee4\u524d\u9762\u4e5f\u6709\u4e00\u4e2a\u6570\u5b57\uff0c\u6bd4\u5982 ",(0,i.jsx)(e.code,{children:"0: aload_0"})," \u524d\u9762\u6709\u4e00\u4e2a ",(0,i.jsx)(e.code,{children:"0"})," \uff0c\u5b83\u4ee3\u8868 ",(0,i.jsx)(e.code,{children:"aload_0"})," \u8fd9\u6761\u6307\u4ee4\u5728\u7b2c 0 \u4e2a\u4f4d\u7f6e\u3002\u63a5\u7740\u89c2\u5bdf ",(0,i.jsx)(e.code,{children:"4: return"}),"\uff0c\u5b83\u7684\u4f4d\u7f6e\u600e\u4e48\u7a81\u7136\u53d8\u6210 4 \u4e86\uff1f\u90a3\u662f\u56e0\u4e3a ",(0,i.jsx)(e.code,{children:"invokespecial"})," \u8fd9\u4e2a\u6307\u4ee4\u8fd8\u6709\u4e24\u4e2a\u8f93\u5165\u53c2\u6570\uff0c\u4e00\u5171\u5360\u7528\u4e09\u4e2a\u5b57\u8282"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'-- \u5b57\u8282\u7801\n public Hello();\n    Code:\n       0: aload_0\n       1: invokespecial #1                  // Method java/lang/Object."<init>":()V\n       4: return\n'})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"1: invokespecial #1"})," \u7684 ",(0,i.jsx)(e.code,{children:"#1"}),"\uff0c\u4ee3\u8868\u5e38\u91cf\u6c60\u4f4d\u7f6e 1.\u5e38\u91cf\u6c60\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"javap -c -verbose demo.a.B"})," \u5c31\u53ef\u4ee5\u663e\u793a\u51fa\u6765\uff0c\u5982\u4e0b\u6240\u793a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'Constant pool:\n   #1 = Methodref          #15.#48        // java/lang/Object."<init>":()V\n   #2 = Methodref          #12.#49        // java/lang/Integer.valueOf:(I)Ljava/lang/Integer;\n   #3 = Methodref          #12.#50        // java/lang/Integer.intValue:()I\n   ......\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u63a5\u4e0b\u6765\u5c31\u662f ",(0,i.jsx)(e.code,{children:"main"})," \u65b9\u6cd5\u4e86\uff0c\u8fd8\u8bb0\u5f97\u6211\u4eec\u5728 ",(0,i.jsx)(e.code,{children:"main"})," \u65b9\u6cd5\u4e2d\u5e72\u4e86\u4ec0\u4e48\u5417"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// \u6e90\u7801\n        int num1 = 1;\n        int num2 = 130;\n        int num3 = num1 + num2;\n        int num4 = num2 - num1;\n        int num5 = num1 * num2;\n        int num6 = num2 / num1;\n\n        final int num7 = 5;\n        Integer num88 = 6;\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5b83\u5bf9\u5e94\u7684\u5b57\u8282\u7801\u662f\u4e0b\u9762\u8fd9\u6837\u7684\uff0c\u5177\u4f53\u5185\u5bb9\u6211\u5df2\u7ecf\u6807\u6ce8\u51fa\u6765\u4e86\uff0c\u7a0d\u5fae\u89e3\u91ca\u4e00\u4e0b ",(0,i.jsx)(e.code,{children:"iconst_1"})," \uff0c\u4ee3\u8868\u5e38\u91cf ",(0,i.jsx)(e.code,{children:"int 1"})," \uff0c\u4e5f\u5c31\u662f\u4ee3\u7801\u4e2d\u6709\u4e2a\u5e38\u91cf \u300c1\u300d\u52a0\u8f7d\u5230\u6808\u9876"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"  public static void main(java.lang.String[]);\n    Code:\n\n    -- \u521d\u59cb\u5316 num1 = 1;\u4fdd\u5b58\u5230\u53d8\u91cf\u8868 1\n       0: iconst_1\n       1: istore_1\n\n    -- \u521d\u59cb\u5316 num2 = 130; \u4fdd\u5b58\u5230 \u53d8\u91cf\u88682\uff0c\u4ee5\u4e0b\u540c\u7406\n       2: sipush        130\n       5: istore_2\n\n    -- \u8ba1\u7b97 num3(\u533f\u540d\u4e86) = num1 + num2;\n       6: iload_1\n       7: iload_2\n       8: iadd\n       9: istore_3\n\n    -- \u8ba1\u7b97 num4(\u533f\u540d\u4e86) = num2 - num1;  \n      10: iload_2\n      11: iload_1\n      12: isub\n      13: istore        4\n\n    -- \u8ba1\u7b97 num5(\u533f\u540d\u4e86) = num1 * num2; \n      15: iload_1\n      16: iload_2\n      17: imul\n      18: istore        5\n\n    -- \u8ba1\u7b97 num6(\u533f\u540d\u4e86) = num2 / num1;\n      20: iload_2\n      21: iload_1\n      22: idiv\n      23: istore        6\n\n    -- final int num7 = 5;\n      25: iconst_5\n      26: istore        7\n\n    -- Integer num88 = 6;\n      28: bipush        6\n      30: invokestatic  #2                  // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;\n      33: astore        8\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u7136\u540e\u662f\u8fd9\u4e2a ",(0,i.jsx)(e.code,{children:"if"})," \u8bed\u53e5"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"        if (num88 == 0) {\n            System.out.println(num1);\n        }\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u6ce8\u610f\u4e0a\u6587 ",(0,i.jsx)(e.code,{children:"num88"})," \u88ab\u4fdd\u5b58\u5230\u53d8\u91cf\u8868\u4f4d\u7f6e 8\uff0c\u6240\u4ee5\u6b64\u5904\u628a\u4f4d\u7f6e 8 \u52a0\u8f7d\u51fa\u6765"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"-- \u5b57\u8282\u7801\n      35: aload         8\n      37: invokevirtual #3                  // Method java/lang/Integer.intValue:()I\n      40: ifne          50 -- \u5982\u679c\u4e0d\u7b49\u4e8e 0 \u5c31\u8df3\u8f6c\u5230 50\n      43: getstatic     #4                  // Field java/lang/System.out:Ljava/io/PrintStream;\n      46: iload_1          -- \u5b58\u50a8 num1 \u7684\u5730\u65b9\n      47: invokevirtual #5                  // Method java/io/PrintStream.println:(I)V\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u7136\u540e\u6211\u4eec\u64cd\u4f5c\u4e86\u4e00\u4e2a ",(0,i.jsx)(e.code,{children:"List"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// \u6e90\u7801\n        List<Integer> nums = new ArrayList<>();\n        nums.add(1);\n        nums.add(2);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'    -- \u521d\u59cb\u5316 List \u5bf9\u8c61\n      50: new           #6                  // class java/util/ArrayList\n      53: dup              -- \u628a\u6808\u9876\u7684\u503c\u590d\u5236\u4e00\u4efd\u518d\u538b\u56de\u53bb\uff0c\u6b64\u65f6\u6808\u9876\u6709\u4e24\u4efd\u4e00\u6837\u7684\u503c\uff0c\u5206\u522b\u88ab 54 \u548c 57 \u6307\u4ee4\u6d88\u8017\u4e86\n      54: invokespecial #7                  // Method java/util/ArrayList."<init>":()V\n      57: astore        9 -- \u5c06\u521d\u59cb\u5316\u7684\u5bf9\u8c61\u5b58\u5230\u5bc4\u5b58\u5668 9\n\n    -- list -> add(1);\n      59: aload         9\n      61: iconst_1\n      62: invokestatic  #2                  // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;\n      65: invokeinterface #8,  2            // InterfaceMethod java/util/List.add:(Ljava/lang/Object;)Z\n      70: pop           -- \u4e22\u5f03\u4e86 add \u8fd4\u56de\u503c\n\n    -- list -> add(2)\n      71: aload         9\n      73: iconst_2\n      74: invokestatic  #2                  // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;\n      77: invokeinterface #8,  2            // InterfaceMethod java/util/List.add:(Ljava/lang/Object;)Z\n      82: pop           -- \u4e22\u5f03\u4e86 add \u8fd4\u56de\u503c\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u904d\u5386 ",(0,i.jsx)(e.code,{children:"List"})," \uff0c\u8fd9\u91cc JVM \u628a ",(0,i.jsx)(e.code,{children:"for"})," \u6539\u6210\u4e86 ",(0,i.jsx)(e.code,{children:"while"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// \u6e90\u4ee3\u7801\n    for (int num : nums){\n        System.out.println(num);\n    }\n\n//\u88ab JVM \u8be5\u6210\u5982\u4e0b\u4ee3\u7801\n    Iterator var10 = nums.iterator();\n    while(var11.hasNext()) {\n        int num = (Integer)var11.next();\n        System.out.println(num);\n    }\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"    -- \u83b7\u53d6\u8fed\u4ee3\u5668\n      83: aload         9\n      85: invokeinterface #9,  1            // InterfaceMethod java/util/List.iterator:()Ljava/util/Iterator;\n      90: astore        10\n\n    -- \n      92: aload         10\n      94: invokeinterface #10,  1           // InterfaceMethod java/util/Iterator.hasNext:()Z\n      99: ifeq          128 -- \u5982\u679c\u7b49\u4e8e 0\uff0c\u8df3\u8f6c\u5230 128\n\n    -- \u83b7\u53d6 next() \u5e76\u6253\u5370\n     102: aload         10\n     104: invokeinterface #11,  1           // InterfaceMethod java/util/Iterator.next:()Ljava/lang/Object;\n     109: checkcast     #12                 // class java/lang/Integer  -- \u68c0\u67e5\u5bf9\u8c61\u662f\u5426\u4e3a\u7ed9\u5b9a\u7c7b\u578b\n     112: invokevirtual #3                  // Method java/lang/Integer.intValue:()I\n     115: istore        11\n     117: getstatic     #4                  // Field java/lang/System.out:Ljava/io/PrintStream;\n     120: iload         11\n     122: invokevirtual #5                  // Method java/io/PrintStream.println:(I)V\n     125: goto          92\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6700\u540e\u6211\u4eec\u5199\u4e86\u4e2a if"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// \u6e90\u7801\n        if (nums.size() == num2) {\n            System.out.println(num2);\n        }\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"    -- \u5982\u679c list.size() == num2; \u6253\u5370 num2\n     128: aload         9\n     130: invokeinterface #13,  1           // InterfaceMethod java/util/List.size:()I\n     135: iload_2\n     136: if_icmpne     146\n     139: getstatic     #4                  // Field java/lang/System.out:Ljava/io/PrintStream;\n     142: iload_2\n     143: invokevirtual #5                  // Method java/io/PrintStream.println:(I)V\n     146: return\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u5c0f\u7ed3",children:"\u5c0f\u7ed3"}),"\n",(0,i.jsx)(e.p,{children:"Java \u7684\u5b57\u8282\u7801\u8fd8\u662f\u8981\u6bd4\u6c47\u7f16\u7b80\u5355\u4e00\u4e9b\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u91cc\u518d\u63d0\u4e00\u70b9\uff0c\u5f53\u8981\u521d\u59cb\u5316\u4e00\u4e2a int \u65f6\uff08\u5728 JVM \u4e2d\uff1abool\uff0cbyte\uff0cchar\uff0cshort \u90fd\u662f int\uff09\uff0c\u6839\u636e\u4e0d\u540c\u7684\u6570\u5b57\u6240\u5360\u7684\u4f4d\u6570\u4e0d\u540c\uff0c\u5206\u522b\u9700\u8981\u5982\u4e0b\u51e0\u4e2a\u547d\u4ee4\uff0c\u65b9\u62ec\u53f7\u4e2d\u7ed9\u51fa\u4e86\u547d\u4ee4\u9002\u7528\u7684\u8303\u56f4"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"iconst: [-1, 5]"}),"\n",(0,i.jsx)(e.li,{children:"bipush: [-128, 127]"}),"\n",(0,i.jsx)(e.li,{children:"sipush: [-32768, 32767]"}),"\n",(0,i.jsx)(e.li,{children:"idc: any int value"}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://tech.meituan.com/2019/09/05/java-bytecode-enhancement.html",children:"https://tech.meituan.com/2019/09/05/java-bytecode-enhancement.html"})}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},1151:(n,e,a)=>{a.d(e,{Z:()=>r,a:()=>s});var i=a(7294);const t={},l=i.createContext(t);function s(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);