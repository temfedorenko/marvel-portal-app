"use strict";(self.webpackChunkmarvel_universe=self.webpackChunkmarvel_universe||[]).push([[24],{3957:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",c=n.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",a=n(184),s=function(){return(0,a.jsxs)("div",{className:"app__banner",children:[(0,a.jsx)("img",{src:r,alt:"Avengers"}),(0,a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,a.jsx)("br",{}),"Stay tuned!"]}),(0,a.jsx)("img",{src:c,alt:"Avengers logo"})]})}},9613:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n.p+"static/media/error.42292aa12b6bc303ce99.gif",c=n(184),a=function(){return(0,c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"error animation"})}},6065:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(4270),c=n(3957),a=n(2982),s=n(885),i=n(2791),o=n(1087),u=n(6983),l=n(5660),m=n(3598),d=n(9613),p=n(4304),h=n(184),f=function(){var e=(0,i.useState)([]),t=(0,s.Z)(e,2),n=t[0],r=t[1],c=(0,i.useState)(!1),f=(0,s.Z)(c,2),v=f[0],x=f[1],g=(0,i.useState)(200),_=(0,s.Z)(g,2),j=_[0],b=_[1],Z=(0,i.useState)(!1),N=(0,s.Z)(Z,2),w=N[0],k=N[1],y=(0,p.Z)(),C=y.getAllComics,S=y.process,E=y.setProcess;(0,i.useEffect)((function(){A(j,!0)}),[]);var A=function(e,t){x(!t),C(e).then(P).then((function(){return E("confirmed")}))},P=function(e){var t=!1;e.length<8&&(t=!0),r((function(t){return[].concat((0,a.Z)(t),(0,a.Z)(e))})),x(!1),b((function(e){return e+8})),k(t)},B=n.map((function(e,t){return(0,h.jsx)(u.Z,{timeout:700,classNames:"comics__item",children:(0,h.jsx)("li",{className:"comics__item",children:(0,h.jsxs)(o.rU,{to:"/comics/".concat(e.id),children:[(0,h.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),(0,h.jsx)("div",{className:"comics__item-name",children:e.title}),(0,h.jsx)("div",{className:"comics__item-price",children:e.price})]})})},t)})),F=function(){return(0,h.jsx)("ul",{className:"comics__grid",children:(0,h.jsx)(l.Z,{component:null,children:B})})},T=(0,i.useMemo)((function(){return function(e,t,n){switch(e){case"waiting":return(0,h.jsx)(m.Z,{});case"loading":return n?(0,h.jsx)(t,{}):(0,h.jsx)(m.Z,{});case"confirmed":return(0,h.jsx)(t,{});case"error":return(0,h.jsx)(d.Z,{});default:throw new Error("unespected process state")}}(S,F,v)}),[S]);return(0,h.jsxs)("div",{className:"comics__list",children:[T,(0,h.jsx)("button",{onClick:function(){return A(j)},className:"button button__main button__long",disabled:v,style:{display:w?"none":"block"},children:(0,h.jsx)("div",{className:"inner",children:"load more"})})]})},v=function(){var e=(0,i.useState)(""),t=(0,s.Z)(e,2),n=t[0],r=t[1],c=(0,i.useState)([]),a=(0,s.Z)(c,2),u=a[0],l=a[1],f=(0,i.useState)(!1),v=(0,s.Z)(f,2),x=v[0],g=v[1],_=(0,p.Z)(),j=_.getComicByName,b=_.process,Z=_.setProcess;(0,i.useEffect)((function(){n&&j(n).then((function(e){return l(e)})).then((function(){return Z("confirmed")}))}),[n]);var N=u.map((function(e){return(0,h.jsxs)("li",{className:"result__item",children:[(0,h.jsxs)(o.rU,{to:"/comics/".concat(e.id),className:"result__item-link",children:[(0,h.jsx)("img",{className:"result__item-img",src:e.thumbnail,alt:e.title}),(0,h.jsx)("div",{className:"result__item-title",children:e.title}),(0,h.jsx)("div",{className:"result__item-price",children:e.price})]}),(0,h.jsx)("div",{className:"background"})]},e.id)})),w=u.length>0?(0,h.jsx)("ul",{className:"result__items",children:N}):(0,h.jsxs)("div",{className:"result__not-found",children:[(0,h.jsx)("p",{children:"This comic was not found. "}),(0,h.jsx)("p",{children:"Please, check the name and try again"})]}),k="error"===b?(0,h.jsx)(d.Z,{}):null,y="loading"===b?(0,h.jsx)(m.Z,{}):null;return(0,h.jsx)("div",{className:"comic__search",children:(0,h.jsxs)("form",{className:"comic__search-form",onSubmit:function(e){return e.preventDefault()},children:[(0,h.jsx)("label",{htmlFor:"charName",className:"comic__search-label",children:"Find a comic by name:"}),(0,h.jsxs)("div",{className:"comic__search-wrapper",children:[(0,h.jsx)("input",{className:"comic__search-input",id:"comicName",type:"text",name:"comicName",value:n,placeholder:"Enter a name here",onChange:function(e){return r(e.target.value)},onFocus:function(){return g(!0)},onBlur:function(){return setTimeout((function(){return g(!1)}),100)}}),(0,h.jsxs)("div",{className:x&&n?"comic__search-result result active":"comic__search-result result",children:[k,y,"loading"!==b?w:null]})]}),(0,h.jsx)("div",{className:x?"backdrop active":"backdrop"})]})})},x=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(r.q,{children:[(0,h.jsx)("meta",{name:"description",content:"Page with list of marvel comics"}),(0,h.jsx)("title",{children:"Marvel comics"})]}),(0,h.jsx)(c.Z,{}),(0,h.jsx)(v,{}),(0,h.jsx)(f,{})]})}},4304:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(4165),c=n(5861),a=n(885),s=n(2791),i=function(){var e=function(){var e=(0,s.useState)("waiting"),t=(0,a.Z)(e,2),n=t[0],i=t[1],o=(0,s.useCallback)(function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t){var n,c,a,s,o,u=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",c=u.length>2&&void 0!==u[2]?u[2]:null,a=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},i("loading"),e.prev=4,e.next=7,fetch(t,{method:n,body:c,headers:a});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),i("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{request:o,clearError:(0,s.useCallback)((function(){i("loading")}),[]),process:n,setProcess:i}}(),t=e.request,n=e.clearError,i=e.process,o=e.setProcess,u="https://gateway.marvel.com:443/v1/public/",l="apikey=825a76f0069296d43a59fc01b51c7129",m=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(){var n,c,a=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:210,e.next=3,t("".concat(u,"characters?orderBy=-modified&limit=9&offset=").concat(n,"&").concat(l));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(g));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n){var c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(u,"characters/").concat(n,"?").concat(l));case 2:return c=e.sent,e.abrupt("return",g(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n){var c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(u,"characters?name=").concat(n,"&").concat(l));case 2:return c=e.sent,e.abrupt("return",c.data.results.map(g));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(){var n,c,a=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:200,e.next=3,t("".concat(u,"comics?limit=8&offset=").concat(n,"&").concat(l));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(x));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n){var c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(u,"comics/").concat(n,"?").concat(l));case 2:return c=e.sent,e.abrupt("return",x(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(){var n,c,a=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,t("".concat(u,"comics?titleStartsWith=").concat(n,"&limit=30&").concat(l));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(x));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"Not available",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us"}},g=function(e){return{id:e.id,name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}};return{clearError:n,process:i,setProcess:o,getAllCharacters:m,getCharacter:d,getAllComics:h,getComic:f,getCharacterByName:p,getComicByName:v}}}}]);
//# sourceMappingURL=24.61641bf6.chunk.js.map