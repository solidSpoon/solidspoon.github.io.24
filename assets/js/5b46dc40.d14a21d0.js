"use strict";(self.webpackChunksolidspoon_site=self.webpackChunksolidspoon_site||[]).push([[524],{4474:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=r(5893),a=r(1151);const l={slug:"java-functional-programming-explained",title:"Java \u51fd\u6570\u5f0f\u7f16\u7a0b\u8be6\u89e3",authors:["solidSpoon"],tags:[]},i=void 0,s={permalink:"/blog/java-functional-programming-explained",editUrl:"https://github.com/solidSpoon/solidSpoon.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2021-09-25-java-functional-programming-explained/index.md",source:"@site/blog/2021-09-25-java-functional-programming-explained/index.md",title:"Java \u51fd\u6570\u5f0f\u7f16\u7a0b\u8be6\u89e3",description:"\u6982\u8981",date:"2021-09-25T00:00:00.000Z",formattedDate:"2021\u5e749\u670825\u65e5",tags:[],readingTime:13.885,hasTruncateMarker:!1,authors:[{name:"solidSpoon",title:"Maintainer of Hide",url:"https://github.com/solidSpoon",imageURL:"https://github.com/solidSpoon.png",key:"solidSpoon"}],frontMatter:{slug:"java-functional-programming-explained",title:"Java \u51fd\u6570\u5f0f\u7f16\u7a0b\u8be6\u89e3",authors:["solidSpoon"],tags:[]},unlisted:!1,prevItem:{title:"ClashForWindows tap \u6a21\u5f0f\u65e0\u6cd5\u6b63\u5e38\u8fde\u63a5\u7f51\u7edc",permalink:"/blog/clash-for-windows-tap-mode-cannot-connect-to-network-normally"},nextItem:{title:"\u81ea\u5b9a\u4e49 ClassLoader \u52a0\u8f7d\u4e00\u4e2a\u52a0\u5bc6 class \u6587\u4ef6",permalink:"/blog/custom-class-loader-loads-encrypted-class-file"}},o={authorsImageUrls:[void 0]},c=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"Function and BiFunction",id:"function-and-bifunction",level:2},{value:"Consumer and BiConsumer",id:"consumer-and-biconsumer",level:2},{value:"Predicate",id:"predicate",level:2},{value:"Supplier",id:"supplier",level:2},{value:"Stream",id:"stream",level:2},{value:"Optional",id:"optional",level:2},{value:"Combinator Pattern",id:"combinator-pattern",level:2},{value:"Callbacks",id:"callbacks",level:2},{value:"\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u7279\u6027",id:"\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u7279\u6027",level:2}];function u(n){const e={code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,t.jsx)(e.p,{children:"\u9996\u5148\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u5c55\u793a\u4e00\u4e0b\u4ec0\u4e48\u662f\u51fd\u6570\u5f0f\u7f16\u7a0b"}),"\n",(0,t.jsx)(e.p,{children:"\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u300cPerson\u300d\u5217\u8868"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'List<Person> people = List.of(\n        new Person("John", MALE),\n        new Person("Maria", FEMALE),\n        new Person("Aisha", FEMALE),\n        new Person("Alex", MALE),\n        new Person("Alice", FEMALE)\n);\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u300cPerson\u300d\u7684\u5b9a\u4e49\u5982\u4e0b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"private record Person(String name, Gender gender) {}\n\nenum Gender {\n    MALE, FEMALE\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5982\u679c\u6211\u4eec\u60f3\u5728\u5217\u8868\u4e2d\u627e\u5230 FEMALE\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8fd9\u6837\u7684\u547d\u4ee4\u5f0f\u65b9\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"List<Person> females = new ArrayList<>();\n\nfor (Person person : people) {\n    if (FEMALE.equals(person.gender)) {\n        females.add(person);\n    }\n}\n\nfor (Person female : females) {\n    System.out.println(female);\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4f46\u5b83\u5728\u58f0\u660e\u5f0f\u65b9\u6cd5\u4e2d\u66f4\u7b80\u6d01"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"Predicate<Person> personPredicate = person -> FEMALE.equals(person.gender);\nvar females2 = people.stream().filter(personPredicate)\n        .collect(Collectors.toList());\n//          .forEach(System.out::println);\nfemales2.forEach(System.out::println);\n"})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:"\u5b8c\u6574\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public class Main {\n    public static void main(String[] args) {\n        List<Person> people = List.of(\n                new Person("John", MALE),\n                new Person("Maria", FEMALE),\n                new Person("Aisha", FEMALE),\n                new Person("Alex", MALE),\n                new Person("Alice", FEMALE)\n        );\n\n        System.out.println("Imperative approach");\n        // Imperative approach\n        List<Person> females = new ArrayList<>();\n        for (Person person : people) {\n            if (FEMALE.equals(person.gender)) {\n                females.add(person);\n            }\n        }\n        for (Person female : females) {\n            System.out.println(female);\n        }\n\n        // Declarative approach\n        System.out.println("Declarative approach");\n        Predicate<Person> personPredicate = person -> FEMALE.equals(person.gender);\n        var females2 = people.stream().filter(personPredicate)\n                .collect(Collectors.toList());\n//                .forEach(System.out::println);\n        females2.forEach(System.out::println);\n    }\n\n    private record Person(String name, Gender gender) {}\n    enum Gender {\n        MALE, FEMALE\n    }\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"function-and-bifunction",children:"Function and BiFunction"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Function"})," \u8868\u793a\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570 <T> \u5e76\u4ea7\u751f\u7ed3\u679c <R> \u7684\u51fd\u6570\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"Function<T, R>\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u4ee5\u4e0b\u662f ",(0,t.jsx)(e.code,{children:"Function"})," \u7684\u4e00\u4e9b\u4f8b\u5b50"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"static Function<Integer, Integer> incrementByOneFunction = number -> number + 1;\nstatic Function<Integer, Integer> multiplyBy10Function = number -> number * 10;\n---usage\nvar increment2 = incrementByOneFunction.apply(1);\nvar multiply = multiplyBy10Function.apply(increment2);\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u9177\uff0c\u5982\u679c\u4f60\u770b\u4e0d\u61c2\uff0c\u90a3\u4e48\u6211\u4eec\u4e4b\u524d\u7528\u547d\u4ee4\u5f0f\u7f16\u7a0b\u662f\u8fd9\u4e48\u5199\u7684"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"static int incrementByOne(int number) {\n    return number + 1;\n}\n---usage\nvar increment = incrementByOne(1);\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u66f4\u8fdb\u4e00\u6b65\uff0c\u6211\u4eec\u53ef\u4ee5\u7ed3\u5408\u4e24\u4e2a Function"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"var addBy1AndThenMultiplyBy10 = incrementByOneFunction.andThen(multiplyBy10Function);\n---usage\nvar ans = addBy1AndThenMultiplyBy10.apply(4);\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"BiFunction"})," \u8868\u793a\u4e00\u4e2a\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\u5e76\u4ea7\u751f\u7ed3\u679c\u7684\u51fd\u6570\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u4f5c\u4e3a\u5bf9\u6bd4\uff0c\u8fd9\u662f\u4e00\u4e2a\u4f20\u7edf\u7684\u4e8c\u53c2\u6570\u65b9\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"static int incrementByOneAndMultiply(int number, int numberToMultiplyBy) {\n    return (number + 1) * numberToMultiplyBy;\n}\n---usage\nincrementByOneAndMultiply(4, 100);\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u51fd\u6570\u5f0f\u7f16\u7a0b\u4e2d\uff0c\u6211\u4eec\u8fd9\u6837\u5199"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"static BiFunction<Integer, Integer, Integer> incrementByOneAndMultiplyBiFunction =\n        (numberToIncrementByOne, numberToMultiplyBy)\n                -> (numberToIncrementByOne + 1) * numberToMultiplyBy;\n---usage\nincrementByOneAndMultiplyBiFunction.apply(4, 100);\n"})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:"\u5b8c\u6574\u4ee3\u7801"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"public class _Function {\n    public static void main(String[] args) {\n        // Function takes 1 argument and produce 1 result\n        var increment = incrementByOne(1);\n        System.out.println(increment);\n\n        var increment2 = incrementByOneFunction.apply(1);\n        System.out.println(increment2);\n\n        var multiply = multiplyBy10Function.apply(increment2);\n        System.out.println(multiply);\n\n        var addBy1AndThenMultiplyBy10 = incrementByOneFunction.andThen(multiplyBy10Function);\n        var ans = addBy1AndThenMultiplyBy10.apply(4);\n        System.out.println(ans);\n\n        // BiFunction takes 2 argument and produce 1 result\n        System.out.println(incrementByOneAndMultiply(4, 100));\n        System.out.println(incrementByOneAndMultiplyBiFunction.apply(4, 100));\n    }\n\n    static Function<Integer, Integer> incrementByOneFunction = number -> number + 1;\n\n    static Function<Integer, Integer> multiplyBy10Function = number -> number * 10;\n    static int incrementByOne(int number) {\n        return number + 1;\n    }\n    static BiFunction<Integer, Integer, Integer> incrementByOneAndMultiplyBiFunction =\n            (numberToIncrementByOne, numberToMultiplyBy)\n                    -> (numberToIncrementByOne + 1) * numberToMultiplyBy;\n    static int incrementByOneAndMultiply(int number, int numberToMultiplyBy) {\n        return (number + 1) * numberToMultiplyBy;\n    }\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"consumer-and-biconsumer",children:"Consumer and BiConsumer"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Consumer"})," \u8868\u793a\u63a5\u53d7\u5355\u4e2a\u8f93\u5165\u53c2\u6570\u5e76\u4e14\u4e0d\u8fd4\u56de\u7ed3\u679c\u7684\u64cd\u4f5c\u3002\u4e0e\u5927\u591a\u6570\u5176\u4ed6 Functional interface \u4e0d\u540c\uff0c",(0,t.jsxs)(e.strong,{children:[(0,t.jsx)(e.code,{children:"Consumer"})," \u9884\u8ba1\u901a\u8fc7\u526f\u4f5c\u7528\u8fdb\u884c\u64cd\u4f5c"]}),"\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u6211\u4eec\u7684 ",(0,t.jsx)(e.code,{children:"Customer"})," \u5b9a\u4e49\u5982\u4e0b"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'static record Customer(String customerName, String customerPhoneNumber) {}\n---usage\nvar maria = new Customer("Maria", "99999");\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u547d\u4ee4\u5f0f\u7f16\u7a0b\u4e2d\uff0c\u6211\u4eec\u8fd9\u6837\u7f16\u5199\u4ee3\u7801"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'static void greetConsumer(Customer customer) {\n    System.out.println("Hello" + customer.customerName\n            + ", thanks for registering phone number "\n            + customer.customerPhoneNumber);\n}\n---usage\ngreetConsumer(maria);\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u51fd\u6570\u5f0f\u7f16\u7a0b\u4e2d\uff0c\u6211\u4eec\u8fd9\u6837\u7f16\u5199\u4ee3\u7801"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'static Consumer<Customer> greetCustomerConsumer = customer ->\n        System.out.println("Hello" + customer.customerName\n                + ", thanks for registering phone number "\n                + customer.customerPhoneNumber);\n---usage\ngreetCustomerConsumer.accept(maria);\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"BiConsumer"})," \u662f ",(0,t.jsx)(e.code,{children:"Consumer"})," \u7684\u4e8c\u53c2\u6570\u7248\u672c\uff0c\u5b83\u8868\u793a\u4e00\u4e2a\u63a5\u53d7\u4e24\u4e2a\u8f93\u5165\u53c2\u6570\u5e76\u4e14\u4e0d\u8fd4\u56de\u7ed3\u679c\u7684\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u901a\u5e38\u7f16\u5199\u4e0b\u9762\u8fd9\u79cd\u547d\u4ee4\u5f0f\u7f16\u7a0b\u65b9\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'static void greetConsumerV2(Customer customer, boolean showPhoneNumber) {\n    System.out.println("Hello" + customer.customerName\n            + ", thanks for registering phone number "\n            + (showPhoneNumber ? customer.customerPhoneNumber : "*********"));\n}\n---usage\ngreetConsumerV2(maria, false);\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u662f\u51fd\u6570\u5f0f\u7f16\u7a0b\u7248\u672c"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'static BiConsumer<Customer, Boolean> greetCustomerConsumerV2 = (customer, showPhoneNumber) ->\n        System.out.println("Hello" + customer.customerName\n                + ", thanks for registering phone number "\n                + (showPhoneNumber ? customer.customerPhoneNumber : "*********"));\n---usage\ngreetCustomerConsumerV2.accept(maria, false);\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:"\u5168\u90e8\u4ee3\u7801"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public class _Consumer {\n    public static void main(String[] args) {\n        var maria = new Customer("Maria", "99999");\n\n        // Normal java function\n        greetConsumer(maria);\n\n        // Consumer Functional interface\n        greetCustomerConsumer.accept(maria);\n\n        greetCustomerConsumerV2.accept(maria, false);\n        greetConsumerV2(maria, false);\n    }\n    static BiConsumer<Customer, Boolean> greetCustomerConsumerV2 = (customer, showPhoneNumber) ->\n            System.out.println("Hello" + customer.customerName\n                    + ", thanks for registering phone number "\n                    + (showPhoneNumber ? customer.customerPhoneNumber : "*********"));\n\n    static Consumer<Customer> greetCustomerConsumer = customer ->\n            System.out.println("Hello" + customer.customerName\n                    + ", thanks for registering phone number "\n                    + customer.customerPhoneNumber);\n\n    static void greetConsumer(Customer customer) {\n        System.out.println("Hello" + customer.customerName\n                + ", thanks for registering phone number "\n                + customer.customerPhoneNumber);\n    }\n    static void greetConsumerV2(Customer customer, boolean showPhoneNumber) {\n        System.out.println("Hello" + customer.customerName\n                + ", thanks for registering phone number "\n                + (showPhoneNumber ? customer.customerPhoneNumber : "*********"));\n    }\n\n    static record Customer(String customerName, String customerPhoneNumber) {\n    }\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"predicate",children:"Predicate"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Predicate"})," \u8868\u793a\u4e00\u4e2a\u5e03\u5c14\u503c\u51fd\u6570"]}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u547d\u4ee4\u5f0f\u7f16\u7a0b\u4e2d\u901a\u8fc7\u8fd9\u6837\u5199\u8fbe\u5230\u76f8\u540c\u76ee\u7684"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'static boolean isPhoneNumberValid(String phoneNumber) {\n    return phoneNumber.startsWith("07") && phoneNumber.length() == 11;\n}\n---usage\nvar phoneNumberValid = isPhoneNumberValid("07000000000");\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u51fd\u6570\u5f0f\u7f16\u7a0b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u5199"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'static Predicate<String> isPhoneNumberValidPredicate = phoneNumber ->\n        phoneNumber.startsWith("07") && phoneNumber.length() == 11;\n\nstatic Predicate<String> containsNumber3 = phoneNumber ->\n        phoneNumber.contains("3");\n---usage\nSystem.out.println(isPhoneNumberValidPredicate.test("09009877300"));\n\nSystem.out.println(\n        "Is phone number valid and contains number 3 = " +\n                isPhoneNumberValidPredicate.and(containsNumber3).test("07009877300")\n);\n\nvar isPhoneNumberValidAndContainsNumber3 = isPhoneNumberValidPredicate.or(containsNumber3);\nSystem.out.println(\n        "Is phone number valid or contains number 3 = " +\n                isPhoneNumberValidAndContainsNumber3.test("07000000000")\n);\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd8\u8bb0\u5f97\u6211\u4eec\u5728\u6982\u8981\u4e2d\u5199\u7684\u4ee3\u7801 ",(0,t.jsx)(e.code,{children:"stream().filter()"})," \u5417\uff1f"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"var females2 = people.stream().filter(person -> FEMALE.equals(person.gender))\n        .collect(Collectors.toList());\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"filter"})," \u63a5\u6536\u7684\u53c2\u6570\u5c31\u662f ",(0,t.jsx)(e.code,{children:"Predicate"})," \uff0c\u5728 idea \u4e2d\u4f7f\u7528\u5feb\u6377\u952e \u300cCtrl + Alt + V\u300d\u5c06\u5b83\u7684\u53c2\u6570\u63d0\u53d6\u6210\u53d8\u91cf\uff0c\u6211\u4eec\u5c31\u4f1a\u770b\u5230 ",(0,t.jsx)(e.code,{children:"Predicate"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"Predicate<Person> personPredicate = person -> FEMALE.equals(person.gender);\nvar females2 = people.stream().filter(personPredicate)\n        .collect(Collectors.toList());\n"})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:"\u5b8c\u6574\u4ee3\u7801"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public class _Predicate {\n    public static void main(String[] args) {\n        System.out.println("Without predicate");\n        var phoneNumberValid = isPhoneNumberValid("07000000000");\n        System.out.println(phoneNumberValid);\n        System.out.println(isPhoneNumberValid("0700000000"));\n        System.out.println(isPhoneNumberValid("09009877300"));\n\n        System.out.println("With Predicate");\n        System.out.println(isPhoneNumberValidPredicate.test("07000000000"));\n        System.out.println(isPhoneNumberValidPredicate.test("0700000000"));\n        System.out.println(isPhoneNumberValidPredicate.test("09009877300"));\n\n        System.out.println(\n                "Is phone number valid and contains number 3 = " +\n                        isPhoneNumberValidPredicate.and(containsNumber3).test("07009877300")\n        );\n\n        var isPhoneNumberValidAndContainsNumber3 = isPhoneNumberValidPredicate.or(containsNumber3);\n        System.out.println(\n                "Is phone number valid or contains number 3 = " +\n                        isPhoneNumberValidAndContainsNumber3.test("07000000000")\n        );\n\n    }\n\n    static boolean isPhoneNumberValid(String phoneNumber) {\n        return phoneNumber.startsWith("07") && phoneNumber.length() == 11;\n    }\n\n    static Predicate<String> isPhoneNumberValidPredicate = phoneNumber ->\n            phoneNumber.startsWith("07") && phoneNumber.length() == 11;\n\n    static Predicate<String> containsNumber3 = phoneNumber ->\n            phoneNumber.contains("3");\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"supplier",children:"Supplier"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Supplier"})," \u4e0d\u63a5\u6536\u4efb\u4f55\u53c2\u6570\u5e76\u63d0\u4f9b\u4e00\u4e2a\u7ed3\u679c"]}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u547d\u4ee4\u5f0f\u7f16\u7a0b\u4e2d\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u5199"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'static String getDbConnectionUrl() {\n    return "jdbc://localhost:5432/users";\n}\n---usage\nSystem.out.println(getDbConnectionUrl());\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u7248\u672c"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'static Supplier<String> getDbConnectionUrlSupplier = () ->\n        "jdbc://localhost:5432/users";\n\nstatic Supplier<List<String>> getDbConnectionListUrlSupplier = () ->\n        List.of(\n                "jdbc://localhost:5432/users",\n                "jdbc://localhost:5432/customer"\n        );\n---usage\nSystem.out.println(getDbConnectionUrlSupplier.get());\nSystem.out.println(getDbConnectionListUrlSupplier.get());\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:"\u5b8c\u6574\u4ee3\u7801"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public class _Supplier {\n    public static void main(String[] args) {\n        System.out.println(getDbConnectionUrl());\n        System.out.println(getDbConnectionUrlSupplier.get());\n        System.out.println(getDbConnectionListUrlSupplier.get());\n\n    }\n\n    static String getDbConnectionUrl() {\n        return "jdbc://localhost:5432/users";\n    }\n\n    static Supplier<String> getDbConnectionUrlSupplier = () ->\n            "jdbc://localhost:5432/users";\n    static Supplier<List<String>> getDbConnectionListUrlSupplier = () ->\n            List.of(\n                    "jdbc://localhost:5432/users",\n                    "jdbc://localhost:5432/customer"\n            );\n\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"stream",children:"Stream"}),"\n",(0,t.jsx)(e.p,{children:"\u9996\u5148\u5c06\u524d\u6587\u7684\u5b9a\u4e49 Persion \u7684\u4ee3\u7801\u590d\u5236\u8fc7\u6765"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'private record Person(String name, Gender gender) {\n}\n\nenum Gender {\n    MALE, FEMALE, PREFER_NOT_TO_SAY\n}\n\nList<Person> people = List.of(\n        new Person("John", MALE),\n        new Person("Maria", FEMALE),\n        new Person("Aisha", FEMALE),\n        new Person("Alex", MALE),\n        new Person("Alice", FEMALE),\n        new Person("Bob", PREFER_NOT_TO_SAY)\n);\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u901a\u8fc7 Stream \u6765\u8c03\u7528"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"people.stream()\n        .map(Person::name)\n        .mapToInt(String::length)\n//        .collect(Collectors.toSet())\n        .forEach(System.out::println);\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u53ef\u4ee5\u628a\u6bcf\u4e00\u6b65\u7684\u53c2\u6570\u63d0\u53d6\u6210\u53d8\u91cf\uff0c\u65b9\u4fbf\u89c2\u5bdf\u5b83\u4eec\u7684\u7c7b\u578b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"Function<Person, String> personStringFunction = Person::name;\n        ToIntFunction<String> length = String::length;\n        IntConsumer println = System.out::println;\n        people.stream()\n                .map(personStringFunction)\n                .mapToInt(length)\n//                .collect(Collectors.toSet())\n                .forEach(println);\n"})}),"\n",(0,t.jsx)(e.p,{children:"Stream \u7684\u5176\u4ed6\u7528\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"Predicate<Person> personPredicate = person -> FEMALE.equals(person.gender);\nvar containOnlyFemales = people.stream()\n        .allMatch(personPredicate);\nSystem.out.println(containOnlyFemales);\n\nvar personHaveFemales = people.stream()\n        .anyMatch(personPredicate);\n//      .noneMatch(personPredicate);\nSystem.out.println(personHaveFemales);\n"})}),"\n",(0,t.jsx)(e.h2,{id:"optional",children:"Optional"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Optional"})," \u4f1a\u6539\u53d8\u4f60\u5904\u7406\u7a7a\u6307\u9488\u7684\u65b9\u5f0f"]}),"\n",(0,t.jsx)(e.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'var value = Optional.ofNullable(null)\n        .orElseGet(() -> "default value");\nvar value2 = Optional.ofNullable("hello")\n        .orElseGet(() -> "default value");\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u793a\u4f8b2\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'Supplier<IllegalStateException> exception = () -> new IllegalStateException("exception");\nvar value3 = Optional.ofNullable("hello")\n        .orElseThrow(exception);\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u793a\u4f8b3\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'Optional.ofNullable("john.gmail.com")\n        .ifPresent(email ->\n                System.out.println("Sending email to " + email));\nOptional.ofNullable(null)\n        .ifPresentOrElse(email -> System.out.println("Sending email to " + email),\n                () -> System.out.println("Can not send email"));\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:"\u5b8c\u6574\u4ee3\u7801"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public class Main {\n    public static void main(String[] args) {\n        var value = Optional.ofNullable(null)\n                .orElseGet(() -> "default value");\n        var value2 = Optional.ofNullable("hello")\n                .orElseGet(() -> "default value");\n        System.out.println(value2);\n        Supplier<IllegalStateException> exception = () -> new IllegalStateException("exception");\n        var value3 = Optional.ofNullable("hello")\n                .orElseThrow(exception);\n        Optional.ofNullable("john.gmail.com")\n                .ifPresent(email ->\n                        System.out.println("Sending email to " + email));\n        Optional.ofNullable(null)\n                .ifPresentOrElse(email -> System.out.println("Sending email to " + email),\n                        () -> System.out.println("Can not send email"));\n    }\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"combinator-pattern",children:"Combinator Pattern"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u6709\u4e00\u4e2a Customer \u7c7b\u5b9a\u4e49\u5982\u4e0b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public record Customer(\n        String name,\n        String email,\n        String phoneNumber,\n        LocalDate dob\n) {}\n---usage\nCustomer customer = new Customer(\n        "Alice",\n        "alice@gmail.com",\n        "+089998879",\n        LocalDate.of(2000, 1, 1)\n);\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u60f3\u9a8c\u8bc1\u6b64\u4eba\u7684\u4fe1\u606f\u662f\u5426\u5408\u6cd5\u3002\u5728\u547d\u4ee4\u5f0f\u7f16\u7a0b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u9a8c\u8bc1"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public class CustomerValidatorService {\n    private boolean isEmailValid(String email) {\n        return email.contains("@");\n    }\n\n    private boolean isPhoneNumberValid(String phoneNumber) {\n        return phoneNumber.startsWith("+0");\n    }\n\n    private boolean isAdult(LocalDate dob) {\n        return Period.between(dob, LocalDate.now()).getYears() > 16;\n    }\n\n    public boolean isValid(Customer customer) {\n        return isEmailValid(customer.email())\n                && isPhoneNumberValid(customer.phoneNumber())\n                && isAdult(customer.dob());\n    }\n}\n---usage\nSystem.out.println(new CustomerValidatorService().isValid(customer));\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u5f53\u6211\u4eec\u9700\u8981\u6dfb\u52a0\u9a8c\u8bc1\u9879\u6216\u8005\u9700\u8981\u6839\u636e\u4e0d\u540c\u7684\u7528\u6237\u542f\u7528\u4e0d\u540c\u7684\u9a8c\u8bc1\u7b56\u7565\u65f6\uff0c\u4e0a\u9762\u7684\u65b9\u6cd5\u9700\u8981\u6539\u52a8\u592a\u591a\u7684\u4ee3\u7801\u3002\u8fd9\u79cd\u65b9\u6cd5\u7684\u53e6\u4e00\u4e2a\u7f3a\u70b9\u662f\uff1a\u5f53\u9a8c\u8bc1\u5931\u8d25\u65f6\uff0c\u6211\u4eec\u65e0\u6cd5\u77e5\u9053\u5bf9\u8c61\u7684\u54ea\u4e2a\u5c5e\u6027\u6ca1\u6709\u901a\u8fc7\u9a8c\u8bc1\uff0c\u8be5\u65b9\u6cd5\u53ea\u662f\u8fd4\u56de\u4e00\u4e2a\u5931\u8d25\u7684\u7ed3\u679c\uff0c\u8fd9\u4e2a\u7ed3\u679c\u5e76\u4e0d\u5305\u542b\u7ec6\u8282\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u8fd9\u91cc\u4ecb\u7ecd\u7684\u89e3\u51b3\u65b9\u6848\u53eb\u505a Combinator Pattern"}),"\n",(0,t.jsx)(e.p,{children:"\u4e3a\u4e86\u80fd\u591f\u8fd4\u56de\u65b9\u6cd5\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u6211\u4eec\u9996\u5148\u5b9a\u4e49\u4e00\u4e2a\u679a\u4e3e\u7c7b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"enum ValidationResult {\n    SUCCESS,\n    PHONE_NUMBER_NOT_VALID,\n    EMAIL_NOT_VALID,\n    IS_NOT_AN_ADULT\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u6211\u4eec\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"CustomerRegistrationValidator interface"})," \u6269\u5c55 ",(0,t.jsx)(e.code,{children:"Functional interface"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public interface CustomerRegistrationValidator\n        extends Function<Customer, ValidationResult> {\n\n    static CustomerRegistrationValidator isEmailValid() {\n        return customer -> customer.email().contains("@") ?\n                SUCCESS : EMAIL_NOT_VALID;\n    }\n    static CustomerRegistrationValidator isPhoneNumberValid() {\n        return customer -> customer.phoneNumber().startsWith("+0") ?\n                SUCCESS : PHONE_NUMBER_NOT_VALID;\n    }\n    static CustomerRegistrationValidator isAnAdult() {\n        return customer ->\n                Period.between(customer.dob(), LocalDate.now()).getYears() > 16 ?\n                        SUCCESS : IS_NOT_AN_ADULT;\n    }\n\n    /**\n     * test lazy load\n     */\n    static CustomerRegistrationValidator printSomething() {\n        return customer ->{\n            System.out.println("print something");\n            return SUCCESS;\n        };\n    }\n\n    default CustomerRegistrationValidator and (CustomerRegistrationValidator other) {\n        return customer -> {\n            ValidationResult result = this.apply(customer);\n            return result.equals(SUCCESS) ? other.apply(customer) : result;\n        };\n\n    }\n\n    enum ValidationResult {\n        SUCCESS,\n        PHONE_NUMBER_NOT_VALID,\n        EMAIL_NOT_VALID,\n        IS_NOT_AN_ADULT\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u7528\u6cd5\u5f88\u7b80\u5355"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"var result = isEmailValid()\n        .and(isPhoneNumberValid())\n        .and(isAnAdult())\n        .apply(customer);\nSystem.out.println(result);\nif (result != ValidationResult.SUCCESS) {\n    throw new IllegalStateException(result.name());\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u7075\u6d3b\u5730\u7ec4\u5408\u591a\u4e2a\u9a8c\u8bc1\u3002\u5f53\u9a8c\u8bc1\u5931\u8d25\u65f6\uff0c\u8be5\u65b9\u6cd5\u4f1a\u8fd4\u56de\u5931\u8d25\u7684\u539f\u56e0"}),"\n",(0,t.jsxs)(e.p,{children:["\u6b64\u5916\uff0c\u5b83\u662f\u5ef6\u8fdf\u52a0\u8f7d\uff0c\u4e5f\u5c31\u662f\u76f4\u5230\u8c03\u7528 ",(0,t.jsx)(e.code,{children:"apply()"})," \u65f6\u624d\u4f1a\u771f\u6b63\u6267\u884c"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'var result2 = isEmailValid()\n        .and(isPhoneNumberValid())\n        .and(isAnAdult())\n        .and(printSomething());\nSystem.out.println("not load before apply()");\nresult2.apply(customer);\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:"\u5b8c\u6574\u4ee3\u7801"}),"\n",(0,t.jsx)(e.p,{children:"\u8c03\u7528\u65b9\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public class Main {\n    public static void main(String[] args) {\n        Customer customer = new Customer(\n                "Alice",\n                "alice@gmail.com",\n                "+089998879",\n                LocalDate.of(2000, 1, 1)\n        );\n\n        System.out.println(new CustomerValidatorService().isValid(customer));\n\n        // If valid we can store customer in db\n        // ...\n\n        // Using combinator pattern\n        var result = isEmailValid()\n                .and(isPhoneNumberValid())\n                .and(isAnAdult())\n                .apply(customer);\n        System.out.println(result);\n        if (result != ValidationResult.SUCCESS) {\n            throw new IllegalStateException(result.name());\n        }\n\n        // Lazy lode\n        var result2 = isEmailValid()\n                .and(isPhoneNumberValid())\n                .and(isAnAdult())\n                .and(printSomething());\n        System.out.println("not load before apply()");\n        result2.apply(customer);\n\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u547d\u4ee4\u5f0f\u7f16\u7a0b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public class CustomerValidatorService {\n    private boolean isEmailValid(String email) {\n        return email.contains("@");\n    }\n\n    private boolean isPhoneNumberValid(String phoneNumber) {\n        return phoneNumber.startsWith("+0");\n    }\n\n    private boolean isAdult(LocalDate dob) {\n        return Period.between(dob, LocalDate.now()).getYears() > 16;\n    }\n\n    public boolean isValid(Customer customer) {\n        return isEmailValid(customer.email())\n                && isPhoneNumberValid(customer.phoneNumber())\n                && isAdult(customer.dob());\n    }\n\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u51fd\u6570\u5f0f\u7f16\u7a0b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public interface CustomerRegistrationValidator\n        extends Function<Customer, ValidationResult> {\n\n    static CustomerRegistrationValidator isEmailValid() {\n        return customer -> customer.email().contains("@") ?\n                SUCCESS : EMAIL_NOT_VALID;\n    }\n    static CustomerRegistrationValidator isPhoneNumberValid() {\n        return customer -> customer.phoneNumber().startsWith("+0") ?\n                SUCCESS : PHONE_NUMBER_NOT_VALID;\n    }\n    static CustomerRegistrationValidator isAnAdult() {\n        return customer ->\n                Period.between(customer.dob(), LocalDate.now()).getYears() > 16 ?\n                        SUCCESS : IS_NOT_AN_ADULT;\n    }\n\n    /**\n     * test lazy load\n     */\n    static CustomerRegistrationValidator printSomething() {\n        return customer ->{\n            System.out.println("print something");\n            return SUCCESS;\n        };\n    }\n\n    default CustomerRegistrationValidator and (CustomerRegistrationValidator other) {\n        return customer -> {\n            ValidationResult result = this.apply(customer);\n            return result.equals(SUCCESS) ? other.apply(customer) : result;\n        };\n\n    }\n\n    enum ValidationResult {\n        SUCCESS,\n        PHONE_NUMBER_NOT_VALID,\n        EMAIL_NOT_VALID,\n        IS_NOT_AN_ADULT\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"entity"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"public record Customer(\n        String name,\n        String email,\n        String phoneNumber,\n        LocalDate dob\n) {}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"callbacks",children:"Callbacks"}),"\n",(0,t.jsx)(e.p,{children:"\u7531\u4e8e Java \u7684\u51fd\u6570\u5f0f\u63a5\u53e3\uff0c\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u50cf JavaScript \u4e00\u6837\u4f7f\u7528 callback"}),"\n",(0,t.jsx)(e.p,{children:"\u5728 JavaScript \u4e2d\uff0c\u6211\u4eec\u50cf\u8fd9\u6837\u5b9a\u4e49\u5e26\u6709\u56de\u8c03\u7684\u51fd\u6570"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"function hello(firstName, lastName,callback) {\n    console.log(firstName);\n    if (lastName) {\n        console.log(lastName);\n    } else {\n        callback();\n    }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5728 Chrome \u63a7\u5236\u53f0\u4e2d\u8c03\u7528\u5b83"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:'hello("john", null, function(){console.log("no lastname provided")})\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5728 Java \u4e2d\u505a\u540c\u6837\u7684\u4e8b\u60c5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"static void hello(String firstName, String lastName, Consumer<String> callback) {\n    System.out.println(firstName);\n    if (lastName != null) {\n        System.out.println(lastName);\n    } else {\n        callback.accept(firstName);\n    }\n}\n\nstatic void hello2(String firstName, String lastName, Runnable callback) {\n    System.out.println(firstName);\n    if (lastName != null) {\n        System.out.println(lastName);\n    } else {\n        callback.run();\n    }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"usage"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'hello("John", "Montana", null);\nhello("John", null, value -> {\n    System.out.println("no lastName provided for " + value);\n});\n\nhello2("John", null,\n        () -> System.out.println("no lastName provided"));\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:"\u5b8c\u6574\u4ee3\u7801"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public class Callbacks {\n    public static void main(String[] args) {\n        hello("John", "Montana", null);\n        hello("John", null, value -> {\n            System.out.println("no lastName provided for " + value);\n        });\n        hello2("John", null,\n                () -> System.out.println("no lastName provided"));\n\n\n    }\n\n    static void hello(String firstName, String lastName, Consumer<String> callback) {\n        System.out.println(firstName);\n        if (lastName != null) {\n            System.out.println(lastName);\n        } else {\n            callback.accept(firstName);\n        }\n    }\n\n    static void hello2(String firstName, String lastName, Runnable callback) {\n        System.out.println(firstName);\n        if (lastName != null) {\n            System.out.println(lastName);\n        } else {\n            callback.run();\n        }\n    }\n\n    /*\n    Callback function in js:\n    function hello(firstName, lastName,callback) {\n        console.log(firstName);\n        if (lastName) {\n            console.log(lastName);\n        } else {\n            callback();\n        }\n    }\n\n    Invoke it:\n    hello("john", null, function(){console.log("no lastname provided")})\n     */\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u7279\u6027",children:"\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u7279\u6027"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u65e0\u72b6\u6001"}),"\n",(0,t.jsx)(e.li,{children:"\u7eaf\u51fd\u6570"}),"\n",(0,t.jsx)(e.li,{children:"\u65e0\u526f\u4f5c\u7528"}),"\n",(0,t.jsxs)(e.li,{children:["\u9ad8\u9636\u7279\u6027","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u51fd\u6570\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u51fd\u6570\u8fd4\u56de\u53e6\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u7ed3\u679c\u3002"}),"\n"]}),"\n"]}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>s,a:()=>i});var t=r(7294);const a={},l=t.createContext(a);function i(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);