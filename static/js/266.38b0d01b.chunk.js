"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{559:function(t,n,e){e.d(n,{Z:function(){return f}});var r=e(87),a=e(689),c="MovieList_list__psP2f",u="MovieList_title__IznO5",i="MovieList_item__uj8y-",o="MovieList_link__CQ7eq",s=e(184),f=function(t){var n=t.movies,e=t.titlePage,f=void 0===e?null:e,p=(0,a.TH)();return(0,s.jsxs)(s.Fragment,{children:[f&&(0,s.jsx)("h1",{className:u,children:f}),(0,s.jsx)("ul",{className:c,children:n.map((function(t){var n=t.id,e=t.title,a=t.name;return(0,s.jsx)("li",{className:i,children:(0,s.jsx)(r.rU,{to:"/movies/".concat(n),state:{from:p},className:o,children:e||a})},n)}))})]})}},266:function(t,n,e){e.r(n);var r=e(439),a=e(791),c=e(836),u=e(559),i=e(184);n.default=function(){var t=(0,a.useState)(null),n=(0,r.Z)(t,2),e=n[0],o=n[1];if((0,a.useEffect)((function(){c.rj().then((function(t){o(t.results)})).catch(console.log)}),[]),e)return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(u.Z,{movies:e,titlePage:"Trending today"})})}},836:function(t,n,e){e.d(n,{GC:function(){return f},M1:function(){return l},Pg:function(){return p},rj:function(){return s},tx:function(){return v}});var r=e(861),a=e(757),c=e.n(a),u=e(263),i="0d1e20f1e4ba2c80a2cf79512480b926",o="https://api.themoviedb.org/3/",s=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(n,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=266.38b0d01b.chunk.js.map