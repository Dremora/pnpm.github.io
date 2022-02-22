"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7674],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),k=l,u=m["".concat(o,".").concat(k)]||m[k]||d[k]||i;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7546:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>s,toc:()=>c,default:()=>m});var a=n(9518),l=n(7344),i=(n(9496),n(9613)),r=["components"],p={id:"filtering",title:"Filtreleme"},o=void 0,s={unversionedId:"filtering",id:"version-6.x/filtering",title:"Filtreleme",description:"S\xfcr\xfcm 2.13.0 ve sonras\u0131nda ge\xe7erli",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/tr/filtering",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"6.x",frontMatter:{id:"filtering",title:"Filtreleme"},sidebar:"version-6.x/docs",previous:{title:"Yap\u0131land\u0131rma",permalink:"/tr/configuring"},next:{title:"Scripts",permalink:"/tr/scripts"}},c=[{value:"Matching",id:"matching",children:[{value:"--filter &lt;paket_ad\u0131&gt;",id:"--filter-paket_ad\u0131",children:[],level:3},{value:"--filter &lt;paket_ad\u0131&gt;...",id:"--filter-paket_ad\u0131-1",children:[],level:3},{value:"--filter &lt;paket_ad\u0131&gt;^...",id:"--filter-paket_ad\u0131-2",children:[],level:3},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name",children:[],level:3},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-1",children:[],level:3},{value:"--filter ./&lt;directory&gt;",id:"--filter-directory",children:[],level:3},{value:"--filter {&lt;directory&gt;}",id:"--filter-directory-1",children:[],level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",children:[],level:3}],level:2},{value:"Excluding",id:"excluding",children:[],level:2},{value:"Multiplicity",id:"multiplicity",children:[],level:2},{value:"--filter-prod &lt;filtering_pattern&gt;",id:"--filter-prod-filtering_pattern",children:[],level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",children:[],level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",children:[],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"S\xfcr\xfcm 2.13.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Filtreleme, girilen komutlar\u0131n ve parametrelerin, sadece belirtilen paketler/k\xfct\xfcphaneler i\xe7in \xe7al\u0131\u015fmas\u0131n\u0131 sa\u011flamak i\xe7in kullan\u0131l\u0131r."),(0,i.kt)("p",null,'pnpm\'de, hedef paketleri isim veya ili\u015fkilerine g\xf6re bulmak i\xe7in kullanabilece\u011fin, esnek s\xf6z dizim (syntax) yap\u0131s\u0131na sahip, "se\xe7ici (selector)" diye adland\u0131rabilece\u011fimiz bir tarama \xf6zelli\u011fi vard\u0131r.'),(0,i.kt)("p",null,"Selectors may be specified via the ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"-F"),") flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter <package_selector> <command>\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"pnpm ve Lerna'n\u0131n filtreleme sistemini kar\u015f\u0131la\u015ft\u0131rarak bahseden, ilgili makale")))),(0,i.kt)("h2",{id:"matching"},"Matching"),(0,i.kt)("h3",{id:"--filter-paket_ad\u0131"},"--filter ","<","paket_ad\u0131>"),(0,i.kt)("p",null,"S\xfcr\xfcm 2.13.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Paket hedeflemek i\xe7in kullanabilece\u011fin iki yol vard\u0131r. Tek bir paketi bulmak i\xe7in ad\u0131n\u0131 (",(0,i.kt)("inlineCode",{parentName:"p"},"@alan-ad\u0131/paket-ad\u0131"),") kullanabilir veya ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," karakteri ile ayn\u0131 alan ad\u0131na sahip birden fazla paketi hedefleyebilirsin (",(0,i.kt)("inlineCode",{parentName:"p"},"@alan-ad\u0131/*"),")."),(0,i.kt)("p",null,"\u015eu \u015fekilde:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/core" test\npnpm --filter "@babel/*" test\npnpm --filter "*core" test\n')),(0,i.kt)("p",null,"Since v6.19.0:"),(0,i.kt)("p",null,"Specifying the scope of the package is optional, so ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter=core")," will pick ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/core")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"core")," is not found. However, if the workspace has multiple packages with the same name (for instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/core")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/core"),"), then filtering without scope will pick nothing."),(0,i.kt)("h3",{id:"--filter-paket_ad\u0131-1"},"--filter ","<","paket_ad\u0131>..."),(0,i.kt)("p",null,"S\xfcr\xfcm 2.13.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Bir paketi ve ili\u015fkili oldu\u011fu k\xfct\xfcphaneleri hedeflemek i\xe7in se\xe7icinin sonuna \xfc\xe7 nokta ekleyebilirsin: ",(0,i.kt)("inlineCode",{parentName:"p"},"<paket_ad\u0131>..."),". \xd6rne\u011fin a\u015fa\u011f\u0131daki komut, ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," projesi ve ili\u015fkili oldu\u011fu di\u011fer k\xfct\xfcphaneler i\xe7in test komutunu \xe7al\u0131\u015ft\u0131racakt\u0131r:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,i.kt)("p",null,"Ayr\u0131ca, benzer isme sahip birden fazla paketi \u015fu \u015fekilde hedefleyebilirsin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,i.kt)("h3",{id:"--filter-paket_ad\u0131-2"},"--filter ","<","paket_ad\u0131>^..."),(0,i.kt)("p",null,"S\xfcr\xfcm 4.4.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"To ONLY select the dependencies of a package (both direct and non-direct), suffix the name with the aforementioned ellipsis preceded by a chevron. For instance, the next command will run tests for all of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),"'s dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,i.kt)("h3",{id:"--filter-package_name"},"--filter ...","<","package_name>"),(0,i.kt)("p",null,"S\xfcr\xfcm 2.14.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix the package name with an ellipsis: ",(0,i.kt)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, this will run the tests of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," and all packages dependent on it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,i.kt)("h3",{id:"--filter-package_name-1"},'--filter "...^',"<",'package_name>"'),(0,i.kt)("p",null,"S\xfcr\xfcm 4.4.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"To ONLY select a package's dependents (both direct and non-direct), prefix the package name with an ellipsis followed by a chevron. For instance, this will run tests for all packages dependent on ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,i.kt)("h3",{id:"--filter-directory"},"--filter ./","<","directory>"),(0,i.kt)("p",null,"S\xfcr\xfcm 2.15.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"To only select packages under the specified directory, you may specify any relative path, typically in POSIX format."),(0,i.kt)("h3",{id:"--filter-directory-1"},"--filter {","<","directory>}"),(0,i.kt)("p",null,"S\xfcr\xfcm 4.7.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Includes all projects that are under the specified directory."),(0,i.kt)("p",null,"It may be used with the ellipsis and chevron operators to select dependents/dependencies as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<directory>} <cmd>\npnpm --filter {<directory>}... <cmd>\npnpm --filter ...{<directory>}... <cmd>\n")),(0,i.kt)("p",null,"It may also be combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed projects inside a directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages}[origin/master]" <cmd>\npnpm --filter "...{packages}[origin/master]" <cmd>\npnpm --filter "{packages}[origin/master]..." <cmd>\npnpm --filter "...{packages}[origin/master]..." <cmd>\n')),(0,i.kt)("p",null,"Or you may select all packages from a directory with names matching the given pattern:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components}" <cmd>\npnpm --filter "@babel/*{components}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components}[origin/master]" <cmd>\n')),(0,i.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,i.kt)("p",null,"S\xfcr\xfcm 4.6.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Selects all the packages changed since the specified commit/branch. May be suffixed or prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),(0,i.kt)("p",null,"For example, the next command will run tests in all changed packages since ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,i.kt)("h2",{id:"excluding"},"Excluding"),(0,i.kt)("p",null,"S\xfcr\xfcm 5.8.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,'Any of the filter selectors may work as exclusion operators when they have a leading "!". In zsh (and possibly other shells), "!" should be escaped: ',(0,i.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,i.kt)("p",null,"For instance, this will run a command in all projects except for ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,i.kt)("p",null,"And this will run a command in all projects that are not under the ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,i.kt)("h2",{id:"multiplicity"},"Multiplicity"),(0,i.kt)("p",null,"When packages are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,i.kt)("h2",{id:"--filter-prod-filtering_pattern"},"--filter-prod ","<","filtering_pattern>"),(0,i.kt)("p",null,"S\xfcr\xfcm 6.2.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Acts the same a ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," but omits ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," when selecting dependency projects from the workspace."),(0,i.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,i.kt)("p",null,"S\xfcr\xfcm 5.14.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests. If they are, the dependent packages of such modified packages are not included."),(0,i.kt)("p",null,'This option is useful with the "changed since" filter. For instance, the next command will run tests in all changed packages, and if the changes are in the source code of the package, tests will run in the dependent packages as well:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,i.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,i.kt)("p",null,"Added in: v6.16.0"),(0,i.kt)("p",null,"Allows to ignore changed files by glob patterns when filtering for changed projects since the specified commit/branch."),(0,i.kt)("p",null,"Usage example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}m.isMDXComponent=!0}}]);