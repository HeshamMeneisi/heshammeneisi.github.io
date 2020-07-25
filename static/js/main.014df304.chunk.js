(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{251:function(e,t,a){e.exports=a(483)},256:function(e,t,a){},258:function(e,t,a){},483:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(53),i=a.n(r),l=(a(256),a(257),a(258),a(490)),c=a(492),s=a(491),m=a(231),d=a(230),u=a(499),p=a(500),h=a(55),f=a(32),g=a.n(f);var y=function(){return o.a.createElement(u.a,{inverted:!0,padded:!0},o.a.createElement(p.a,null,o.a.createElement(g.a,{once:!0},(function(e){var t=e.isVisible;return o.a.createElement(l.a,{style:{opacity:0,animation:t?"slideInX 1s forwards, fadeIn 0.5s forwards":""}},o.a.createElement(h.a,{name:"terminal",color:"green",style:{animation:t?"jiggle 2s":""}}),"About Me")}))),o.a.createElement(s.a,null),o.a.createElement(l.a,{style:{paddingTop:"32px",paddingBottom:"32px"}},o.a.createElement(l.a,{text:!0},"Hello, my name is"," ",o.a.createElement("b",null,"Hesham Meneisi"),", and this is my brief Portfolio for interested contractors or recruiters. I do not update my availability here, so feel free to contact me any time to check."),o.a.createElement("br",null),o.a.createElement(l.a,{text:!0},"As a tried and true full-stack developer, I am comfortable taking a project from the white board through to deployment. Ultimately, I believe that the phrase",' "',"jack of all trades, master of none",'" ',"is a false dichotomy. You can master as many trades as you want, if you put in the necessary effort to become professionally competent."),o.a.createElement("br",null),o.a.createElement(l.a,{text:!0},"In my professional life, I have been an intern, a part-timer, a full-timer, and most importantly, a freelancer. Freelancing often pushed me out of my comfort zone and forced me to experience different verticals and different technology stacks within those."),o.a.createElement("br",null),o.a.createElement(l.a,{text:!0},"In the following sections I will detail my experience more thoroughly. I have not listed any verticals or technologies where I do not feel fully professionally competent yet.")))},E=a(155),w=a(232),v=a.n(w),b=a(243);var k={hexToHSL:function(e){var t=0,a=0,n=0;4===e.length?(t=parseInt("0x".concat(e[1]).concat(e[1]),16),a=parseInt("0x".concat(e[2]).concat(e[2]),16),n=parseInt("0x".concat(e[3]).concat(e[3]),16)):7===e.length&&(t=parseInt("0x".concat(e[1]).concat(e[2]),16),a=parseInt("0x".concat(e[3]).concat(e[4]),16),n=parseInt("0x".concat(e[5]).concat(e[6]),16)),t/=255,a/=255,n/=255;var o,r=Math.min(t,a,n),i=Math.max(t,a,n),l=i-r;o=0===l?0:i===t?(a-n)/l%6:i===a?(n-t)/l+2:(t-a)/l+4,(o=Math.round(60*o))<0&&(o+=360);var c=(i+r)/2;return{h:o,s:0===l?0:l/(1-Math.abs(2*c-1)),l:c}}};var x=function(e){var t=e.name,n=e.size,r=e.light,i=e.color,l=a(342).get(t),c=l?l.svg:null;if(c){var s=k.hexToHSL(i||(r?"#fff":"#000")),m=0!==s.l&&1!==s.l&&0!==s.s;return s.h-=60,s.s+=2,o.a.createElement(h.a,{size:n},o.a.createElement(b.a,{style:{filter:"invert(1) brightness(".concat(s.l,")\n          sepia(").concat(m?1:0,") hue-rotate(").concat(s.h,"deg) saturate(").concat(s.s,")")},src:"data:image/svg+xml;utf8,".concat(c)}))}return o.a.createElement(h.a,{style:{color:i}},t.toUpperCase())},I=[{title:"Data Science",text:"I started my journey with Machine Learning and Data Scraping.",items:[{name:"Python",icon:"python",color:"#F9E668"},{name:"R",icon:"r",color:"#276DC3"},{name:"Keras",icon:"keras",color:"#D00000"},{name:"Tensor-Flow",icon:"tensorflow",color:"#FF6F00"},{name:"Pandas",icon:"pandora",color:"#224099"},{name:"NLTK",icon:"nintendo",color:"#aaa"},{name:"InfluxDB",icon:"influxdb",color:"#22ADF6"},{name:"Spark",icon:"apachespark",color:"#E25A1C"}]},{title:"DevOps",text:"I can take an application through all the CI/CD stages. Automated building, testing, release, deployment, metrics, and logs.",items:[{name:"Docker",icon:"docker",color:"#3A8DCB"},{name:"K8s",icon:"kubernetes",color:"#1E90FF"},{name:"GitHub Act.",icon:"githubactions",color:"#55f"},{name:"Travis",icon:"travisci",color:"#3EAAAF"},{name:"AWS",icon:"amazonaws",color:"#EC902D"},{name:"Git",icon:"git",color:"#E94E31"},{name:"Kibana",icon:"kibana",color:"#E9478A"},{name:"Elasticsearch",icon:"elasticsearch",color:"#DBB719"},{name:"Slack Integ.",icon:"slack",color:"#fcc"},{name:"Grafana",icon:"grafana",color:"#F46800"},{name:"Azure",icon:"azurepipelines",color:"#2560E0"}]},{title:"Backend",text:"I was contracted to do various types of APIs. ML, web, mobile, and auto-scrapers.",items:[{name:"C#",icon:"csharp",color:"#34a231"},{name:"SDK",icon:"dot-net",color:"#5C2D91"},{name:"PHP",icon:"php",color:"#777BB4"},{name:"Laravel",icon:"laravel",color:"#FF2D20"},{name:"Lumen",icon:"lumen",color:"#E74430"},{name:"Python",icon:"python",color:"#F9E668"},{name:"Flask",icon:"flask",color:"#fff"},{name:"MySql",icon:"mysql",color:"#4479A1"},{name:"Postgre-SQL",icon:"postgresql",color:"#336791"},{name:"Mongo",icon:"mongodb",color:"#47A248"},{name:"OpenAPI",icon:"openapiinitiative",color:"#6BA539"}]},{title:"Frontend",text:"I have solid frontend experience in UI and UX design.",items:[{name:"JavaScript",icon:"javascript",color:"#F7DF1E"},{name:"TypeScript",icon:"typescript",color:"#007ACC"},{name:"Vue",icon:"vue-dot-js",color:"#4FC08D"},{name:"Vuetify",icon:"vuetify",color:"#2a79D0"},{name:"React",icon:"react",color:"#61DAFB"},{name:"Redux",icon:"redux",color:"#764ABC"},{name:"Material-UI",icon:"material-ui",color:"#0081CB"},{name:"Semantic-UI",icon:"slides",color:"#888"},{name:"Jest",icon:"jest",color:"#C21325"},{name:"ESLint",icon:"eslint",color:"#4B32C3"}]},{title:"Other",text:"A a Computer & Communication Engineer, I participated in some projects involving robotics, micro-controllers, and signal processing.",items:[]}];function C(e,t){return o.a.createElement(c.a.Column,{key:t},o.a.createElement(g.a,{once:!0},(function(a){var n=a.isVisible;return o.a.createElement(u.a,{inverted:!0,padded:!0,textAlign:"center",vertical:!0,style:{backgroundColor:"transparent",opacity:0,left:"".concat(100+10*t,"px"),animation:n?"slide ".concat(2+.07*t,"s forwards, fadeIn 2s forwards"):"",animationDelay:n?"0.2s":""}},o.a.createElement(x,{color:e.color,name:e.icon,light:!0,size:"big"}),o.a.createElement(E.a,{style:{paddingTop:"10px"}},e.name))})))}function A(e,t){return o.a.createElement(l.a,{text:!0,key:t},o.a.createElement(v.a,null,e.title),o.a.createElement(s.a,{fitted:!0,inverted:!0}),o.a.createElement(l.a,{text:!0,style:{color:"#888",fontSize:"15px",paddingTop:"5px"}},e.text),o.a.createElement(c.a,{padded:!0,columns:"6",doubling:!0},o.a.createElement(c.a.Row,null,e.items.map(C))))}var F=function(){return o.a.createElement(u.a,{inverted:!0,padded:!0,style:{overflow:"hidden"}},o.a.createElement(p.a,null,o.a.createElement(g.a,{once:!0},(function(e){var t=e.isVisible;return o.a.createElement(l.a,{style:{opacity:0,animation:t?"slideInX 1s forwards, fadeIn 0.5s forwards":"",animationDelay:t?"0.5s":""}},o.a.createElement(h.a,{name:"code",color:"green",style:{animation:t?"jiggle 2s":""}}),"Tech Skills")}))),o.a.createElement(s.a,null),o.a.createElement(l.a,{text:!0},"During my past projects, full-time, and consultancy positions, I mastered the following technologies to varying but all professionally competent degrees."),o.a.createElement(s.a,{hidden:!0}),I.map(A))};var D=function(){return o.a.createElement(u.a,{inverted:!0,padded:!0},o.a.createElement(p.a,null,o.a.createElement(g.a,{once:!0},(function(e){var t=e.isVisible;return o.a.createElement(l.a,{style:{opacity:0,animation:t?"slideInX 1s forwards, fadeIn 0.5s forwards":"",animationDelay:t?"0.2s":""}},o.a.createElement(h.a,{name:"paper plane",color:"green",style:{animation:t?"jiggle 2s":""}}),"Contact")}))),o.a.createElement(s.a,null),o.a.createElement(l.a,{text:!0},o.a.createElement(c.a,{stackable:!0,columns:"equal"},o.a.createElement(c.a.Row,null,"You can contact me directly through my email (preferred method) or send me a message. You might also contact me on Upwork, although I prefer direct contact."),o.a.createElement(c.a.Row,{centered:!0},o.a.createElement(c.a.Column,null,o.a.createElement(g.a,{once:!0},(function(e){var t=e.isVisible;return o.a.createElement(l.a,{style:{opacity:0,animation:t?"flyIn 1s forwards":""}},o.a.createElement(x,{name:"gmail",color:"#D14836"}),o.a.createElement("a",{style:{color:"white"},href:"mailto:heshammeneisi@gmail.com"},"heshammeneisi@gmail.com"))}))),o.a.createElement(c.a.Column,null,o.a.createElement(g.a,{once:!0},(function(e){var t=e.isVisible;return o.a.createElement(l.a,{style:{opacity:0,animation:t?"flyIn 1s forwards":"",animationDelay:t?"0.5s":""}},o.a.createElement(x,{name:"skype",color:"#00AFF0"}),"heshammeneisi")})))))))},j=a(54),U=a(501),S=a(156),B=a(68),z=a(66),T=a(157),H=[{text:"Hesham quickly identified the problem we were having, and quickly solved it. Will look forward to working with him again in the near future.",signature:"Upwork Client",isFromUpwork:!0},{text:"Very strong technical skills. Knows his stuff. Really good communicator as well! Highly recommended!",signature:"Upwork Client",isFromUpwork:!0},{text:"It was a pleasure to work with Hesham. He was very efficient, dedicated and got the job done ahead of time. I would highly recommended him!!",signature:"Upwork Client",isFromUpwork:!0},{text:"The freelancer was very good. He did what I wanted in a timely matter. Thanks.",signature:"Upwork Client",isFromUpwork:!0},{text:"Job was done exactly how I needed. Much appreciated.",signature:"Upwork Client",isFromUpwork:!0},{text:"Hesham did great work, the project turned out better than expected.",signature:"Upwork Client",isFromUpwork:!0},{text:"One of the best leads we have worked with on Upwork in 2018. Did exactly what we asked him to do like a PRO in no time.",signature:"Upwork Client",isFromUpwork:!0},{text:"Hesham was great. High quality work and very fast turnaround. Will definitely look forward to working with him again on future projects!",signature:"Upwork Client",isFromUpwork:!0},{text:"Hesham was responsive and clearly understood the goals of the project. He delivered the completed work a day earlier than the two day target and did so with high quality. I look forward to working with him again soon!",signature:"Upwork Client",isFromUpwork:!0}];var R=function(){var e=Object(n.useState)(0),t=Object(j.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),m=Object(j.a)(i,2),d=m[0],f=m[1];return Object(n.useEffect)((function(){var e=setInterval((function(){f(!0),setTimeout((function(){f(!1),r((a+1)%H.length)}),350)}),8e3);return function(){return clearInterval(e)}}),[a]),o.a.createElement(u.a,{inverted:!0,padded:!0,style:{overflow:"hidden"}},o.a.createElement(p.a,null,o.a.createElement(g.a,{once:!0},(function(e){var t=e.isVisible;return o.a.createElement(l.a,{style:{opacity:0,animation:t?"slideInX 1s forwards, fadeIn 0.5s forwards":"",animationDelay:t?"0.2s":""}},o.a.createElement(h.a,{name:"star",color:"green",style:{animation:t?"jiggle 2s":""}}),"Reviews")}))),o.a.createElement(s.a,null),o.a.createElement(c.a,{centered:!0,padded:!0},H.map((function(e,t){return a===t&&o.a.createElement(U.a,{key:t,style:{minHeight:"300px",maxWidth:"min(70vw, 500px)",animation:d?"flyOutLeft 1s forwards":"flyInRight 1s forwards"},inverted:!0,unstackable:!0},o.a.createElement(S.a,{className:"middle aligned"},o.a.createElement(B.a,null,o.a.createElement(z.a,null,o.a.createElement(l.a,{text:!0,textAlign:"center",style:{fontSize:"20px"}},e.text)))),o.a.createElement(T.a,null,o.a.createElement(B.a,{style:{paddingRight:"10px"}},o.a.createElement(z.a,{style:{paddingBottom:"40px"},textAlign:"right"},e.isFromUpwork?o.a.createElement(x,{name:"upwork",color:"#00ee00"}):"~".concat(e.signature)))))}))))};var P=function(){return n.createElement(l.a,{style:{paddingBottom:"80px"}},n.createElement(c.a,null,n.createElement(s.a,{section:!0,hidden:!0}),n.createElement(m.a,null,n.createElement(d.a,null,n.createElement(y,null))),n.createElement(s.a,{section:!0,hidden:!0}),n.createElement(m.a,null,n.createElement(d.a,null,n.createElement(F,null))),n.createElement(s.a,{section:!0,hidden:!0}),n.createElement(m.a,null,n.createElement(d.a,null,n.createElement(R,null))),n.createElement(s.a,{section:!0,hidden:!0}),n.createElement(m.a,null,n.createElement(d.a,null,n.createElement(D,null))),n.createElement(s.a,{section:!0,hidden:!0})))},M=a(497),O=a(498),L=a(495);var q=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],r=t[1];return o.a.createElement(c.a,{style:{position:"fixed",margin:"1em",bottom:"0px",left:"0px",zIndex:6}},o.a.createElement(c.a.Row,{style:{paddingBottom:"2px"}},o.a.createElement(M.a,{content:"Github",size:"mini",inverted:!0,position:"top center",trigger:o.a.createElement(O.a,{style:{animation:"grow 3s ease-in-out infinite"},icon:!0,size:"tiny",onClick:function(){return window.open("https://github.com/heshammeneisi")}},o.a.createElement(h.a,{name:"github",color:"black"}))}),o.a.createElement(M.a,{content:"Upwork",size:"mini",inverted:!0,position:"top center",trigger:o.a.createElement(O.a,{style:{animation:"grow 3s ease-in-out infinite",animationDelay:"1s"},color:"green",icon:!0,size:"tiny",onClick:function(){return window.open("https://www.upwork.com/freelancers/~01c73274b9b99e8be7")}},o.a.createElement(x,{name:"upwork",light:!0}))})),o.a.createElement(c.a.Row,{style:{paddingTop:"2px"}},o.a.createElement(M.a,{content:"LinkedIn",size:"mini",inverted:!0,position:"top center",trigger:o.a.createElement(O.a,{style:{animation:"grow 3s ease-in-out infinite",animationDelay:"0.5s"},color:"blue",icon:!0,size:"tiny",onClick:function(){return window.open("https://www.linkedin.com/in/hesham-meneisi")}},o.a.createElement(x,{name:"linkedin",light:!0}))}),o.a.createElement(M.a,{content:"Resume",size:"mini",inverted:!0,position:"top center",trigger:o.a.createElement(O.a,{style:{animation:"grow 3s ease-in-out infinite",animationDelay:"1.5s"},color:"red",icon:!0,size:"tiny",onClick:function(){return r(!0)}},o.a.createElement(h.a,{name:"google drive"}))})),o.a.createElement(L.a,{dimmer:"blurring",open:a,onClose:function(){return r(!1)},style:{height:"80%",animation:"scaleIn 1s"},closeIcon:"close"},o.a.createElement(L.a.Header,null,"My Resume"),o.a.createElement("iframe",{title:"Resume",width:"100%",height:"94%",frameBorder:0,allowFullScreen:!0,src:"https://drive.google.com/file/d/1YKqTZlgspyoYpE0i_Svxwz477tu5RAfl/preview"})))};var V=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){window.location.search.indexOf("legal")>-1&&r(!0)}),[]),o.a.createElement(l.a,{textAlign:"right",style:{paddingBottom:"10px"}},o.a.createElement(O.a,{inverted:!0,color:"green",size:"small",compact:!0,onClick:function(){return r(!0)}},"Legal"),o.a.createElement(L.a,{dimmer:"blurring",open:a,onClose:function(){return r(!1)},style:{height:"80%",animation:"scaleIn 1s"},closeIcon:"close"},o.a.createElement(L.a.Header,null,"Legal Disclaimer"),o.a.createElement(L.a.Content,null,o.a.createElement(l.a,{text:!0,fluid:!0,style:{paddingBottom:"10px",fontStyle:"italic"}},"These terms apply to contracts signed directly by me. In case of using a middleman service (e.g. Upwork, Fiverr, etc) please refer to their policy."),o.a.createElement(l.a,{textAlign:"justified",text:!0,fluid:!0},"Any deposit payment specified in your contract is non-refundable and any refunds made regarding this deposit are at my discretion. Requests for refunds, after the deposit payment\u2019s associated Milestone Tasks have been achieved, must be presented to me in writing or through the e-mail address you used to submit the digitally signed contract. Refund requests must be made prior to me receiving written or verbal authorization or approval of acceptance of services performed. In the event that the deposit amount does not fully cover the development time spent on the project (as specified on the contract and with a minimum of $40/hr), and other expenses related to development of the project, an additional payment will be due. Please refer to the specific details found in your project proposal and agreement."),o.a.createElement(l.a,{text:!0,fluid:!0,style:{paddingTop:"10px"}},"All refund requests must be received from the e-mail used to communicate and/or submit the digitally signed contract."),o.a.createElement(l.a,{text:!0,fluid:!0,style:{paddingTop:"20px"}},o.a.createElement("h4",null,"Non-refundable Services:"),"The following payments are not refundable.",o.a.createElement("br",null),"* Payments made for Milestone Achievements",o.a.createElement("br",null),"* Payments made for Website/Software Maintenance",o.a.createElement("br",null),"* Payments made for Application (software) Development",o.a.createElement("br",null),"* Payments made based on an agreed-upon hourly tracking method."),o.a.createElement(l.a,{text:!0,fluid:!0,style:{paddingTop:"20px"}},o.a.createElement("h4",{style:{paddingBottom:"10px"}},"How Refunds Are Processed"),"Unless your contract states otherwise, payments made to me by credit card, Payoneer, or PayPal will be refunded to the card or account that the payment was made with. Cash or Check payments will be refunded by Check only."))))};var K=function(){return o.a.createElement(l.a,null,o.a.createElement(P,null),o.a.createElement(V,null),o.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[251,1,2]]]);
//# sourceMappingURL=main.014df304.chunk.js.map