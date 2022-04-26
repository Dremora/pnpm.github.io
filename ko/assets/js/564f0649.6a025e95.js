"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2605],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,k=m["".concat(o,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var r=n(2182),l=n(9028),a=(n(9496),n(9613)),i=["components"],p={id:"publish",title:"pnpm publish"},o=void 0,c={unversionedId:"cli/publish",id:"version-7.x/cli/publish",title:"pnpm publish",description:"\ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ud328\ud0a4\uc9c0\ub97c \uac8c\uc2dc\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/ko/cli/publish",editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"version-7.x/docs",previous:{title:"pnpm env <cmd>",permalink:"/ko/cli/env"},next:{title:"pnpm pack",permalink:"/ko/cli/pack"}},u={},s=[{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--tag &lt;tag&gt;",id:"--tag-tag",level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",level:3},{value:"--no-git-checks",id:"--no-git-checks",level:3},{value:"--publish-branch",id:"--publish-branch",level:3},{value:"--force",id:"--force",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--dry-run",id:"--dry-run",level:3},{value:"--otp",id:"--otp",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"Configuration",id:"configuration",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ud328\ud0a4\uc9c0\ub97c \uac8c\uc2dc\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>] [options]\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ko/workspaces"},"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4")," \ub0b4\ubd80\uc5d0 \ud328\ud0a4\uc9c0\ub97c \uac8c\uc2dc\ud560 \ub54c, \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ub8e8\ud2b8\uc758 LICENSE \ud30c\uc77c\uc740 \ud328\ud0a4\uc9c0\uc640 \ud568\uaed8 \ud3ec\uc7a5\ub429\ub2c8\ub2e4(\ud328\ud0a4\uc9c0 \uc5d0 \uc790\uccb4 \ub77c\uc774\uc120\uc2a4\uac00 \uc788\ub294 \uacbd\uc6b0 \uc81c\uc678)."),(0,a.kt)("p",null,"You may override some fields before publish, using the ",(0,a.kt)("a",{parentName:"p",href:"/ko/package_json#publishconfig"},"publishConfig")," field in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". \ub610\ud55c ",(0,a.kt)("a",{parentName:"p",href:"/ko/package_json#publishconfigdirectory"},(0,a.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," \uc744 \uc0ac\uc6a9\ud558\uc5ec \uac8c\uc2dc\ub41c \ud558\uc704 \ub514\ub809\ud130\ub9ac\ub97c \ucee4\uc2a4\ud130\ub9c8\uc774\uc988 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(\uc77c\ubc18\uc801\uc73c\ub85c \ud0c0\uc0ac \ube4c\ub4dc \ub3c4\uad6c \uc0ac\uc6a9)."),(0,a.kt)("p",null,"\uc774 \uba85\ub839\uc744 \uc7ac\uadc0\uc801\uc73c\ub85c \uc2e4\ud589\ud560 \ub54c (",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm\uc740 \ubc84\uc804\uc774 \uc544\uc9c1 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \uac8c\uc2dc\ub418\uc9c0 \uc54a\uc740 \ud328\ud0a4\uc9c0 \ub97c \ubaa8\ub450 \uac8c\uc2dc\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,a.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),(0,a.kt)("p",null,"\uc9c0\uc815\ub41c \ud0dc\uadf8\uac00 \uc788\ub294 \ud328\ud0a4\uc9c0\ub97c \uac8c\uc2dc\ud569\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm publish")," \ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," \ud0dc\uadf8\ub97c \uac31\uc2e0\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# foo \ud328\ud0a4\uc9c0 \ub514\ub809\ud1a0\ub9ac \ub0b4\ubd80\npnpm publish --tag next\n# foo\uc758 \ub2e4\uc74c \ubc84\uc804\uc744 \uc0ac\uc6a9\ud558\ub824\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\npnpm add foo@next\n")),(0,a.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,a.kt)("p",null,"\uac8c\uc2dc\ub41c \ud328\ud0a4\uc9c0\uac00 \uacf5\uac1c \ub610\ub294 \uc81c\ud55c\ub418\uc5b4\uc57c \ud558\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \uc54c\ub824\uc90d\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"--no-git-checks"},"--no-git-checks"),(0,a.kt)("p",null,"Don't check if current branch is your publish branch, clean, and up-to-date , clean, and up-to-date."),(0,a.kt)("h3",{id:"--publish-branch"},"--publish-branch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"master")," and ",(0,a.kt)("strong",{parentName:"li"},"main")),(0,a.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,a.kt)("strong",{parentName:"li"},"String"))),(0,a.kt)("p",null,"\ucd5c\uc2e0 \ubcc0\uacbd \uc0ac\ud56d\uc744 \uac8c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \uc800\uc7a5\uc18c\uc758 \uae30\ubcf8 \ube0c\ub79c\uce58\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"--force"},"--force"),(0,a.kt)("p",null,"\ud604\uc7ac \ubc84\uc804\uc774 \uc774\ubbf8 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub3c4 \ud328\ud0a4\uc9c0\ub97c \uac8c\uc2dc\ud558\ub824\uace0 \ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,a.kt)("p",null,"\uac8c\uc2dc\ub41c \ud328\ud0a4\uc9c0 \ubaa9\ub85d\uc744 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),"\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4. \uac8c\uc2dc\ub41c \ud328\ud0a4\uc9c0 \ubaa9\ub85d\uc744 \ubcf4\uace0\ud558\uae30 \uc704\ud574 \ub2e4\ub978 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"--dry-run"},"--dry-run"),(0,a.kt)("p",null,"\uc2e4\uc81c\ub85c \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \uac8c\uc2dc\ud558\ub294 \uac83\uc744 \uc81c\uc678\ud558\uace0 \uac8c\uc2dc\uac00 \uc218\ud589\ud558\ub294 \ubaa8\ub4e0 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"--otp"},"--otp"),(0,a.kt)("p",null,"\uc774\uc911 \uc778\uc99d\uc774 \ud544\uc694\ud55c \ud328\ud0a4\uc9c0\ub97c \uac8c\uc2dc\ud560 \ub54c, \uc774 \uc635\uc158\uc740 \uc77c\ud68c\uc6a9 \uc554\ud638\ub97c \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ko/filtering"},"\ud544\ud130\ub9c1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".npmrc")," \ud30c\uc77c\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"git-checks"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"publish-branch")," \uc635\uc158\uc744 \uc124\uc815\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title=".npmrc"',title:'".npmrc"'},"git-checks=false\npublish-branch=production\n")))}d.isMDXComponent=!0}}]);