"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[224],{559:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(87),a=n(689),u="MovieList_list__psP2f",c="MovieList_title__IznO5",s="MovieList_item__uj8y-",i="MovieList_link__CQ7eq",o=n(184),l=function(e){var t=e.movies,n=e.titlePage,l=void 0===n?null:n,f=(0,a.TH)();return(0,o.jsxs)(o.Fragment,{children:[l&&(0,o.jsx)("h1",{className:c,children:l}),(0,o.jsx)("ul",{className:u,children:t.map((function(e){var t=e.id,n=e.title,a=e.name;return(0,o.jsx)("li",{className:s,children:(0,o.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:f},className:i,children:n||a})},t)}))})]})}},224:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(439),a=n(791),u=n(87),c=n(836),s=n(559),i=n(917),o="MovieSearch_form__vvT5T",l="MovieSearch_input__sV7Po",f="MovieSearch_submit__o0K78",p=n(184),v=function(){var e,t=(0,u.lr)(),n=(0,r.Z)(t,2),v=n[0],m=n[1],h=null!==(e=v.get("query"))&&void 0!==e?e:"",d=(0,a.useState)(null),_=(0,r.Z)(d,2),g=_[0],x=_[1],y=(0,a.useState)(null),Z=(0,r.Z)(y,2),k=Z[0],w=Z[1],b=(0,a.useState)(!1),j=(0,r.Z)(b,2),S=j[0],M=j[1],N=(0,a.useState)(h),C=(0,r.Z)(N,2),q=C[0],U=C[1];(0,a.useEffect)((function(){""!==h&&(x(null),w(null),M(!0),c.GC(h).then((function(e){x(e.results),w(e.total_results),M(!1)})).catch(console.log))}),[h]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.query.value.toLowerCase().trim();m({query:t})},className:o,children:[(0,p.jsx)("input",{type:"text",name:"query",className:l,value:q,onChange:function(e){U(e.currentTarget.value)},placeholder:"Enter movie name"}),(0,p.jsx)("button",{type:"submit",className:f,children:"Search"})]}),S&&(0,p.jsx)(i.Z,{}),g&&(0,p.jsx)(s.Z,{movies:g}),0===k&&(0,p.jsx)("div",{children:"Not found movies"})]})}},836:function(e,t,n){n.d(t,{GC:function(){return l},M1:function(){return p},Pg:function(){return f},rj:function(){return o},tx:function(){return v}});var r=n(861),a=n(757),u=n.n(a),c=n(263),s="0d1e20f1e4ba2c80a2cf79512480b926",i="https://api.themoviedb.org/3/",o=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"trending/movie/day?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"search/movie?api_key=").concat(s,"&query=").concat(t,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=224.48a1453e.chunk.js.map