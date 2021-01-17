(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{116:function(e,t,a){e.exports={list:"PlacesList_list__2AcCN"}},119:function(e,t,a){e.exports={FirstPage:"FirstPage_FirstPage__1e15S"}},128:function(e,t,a){},129:function(e,t,a){},13:function(e,t,a){e.exports={fields:"AddPlace_fields__3AHhT",field_text:"AddPlace_field_text__1DNvY",field_radio:"AddPlace_field_radio__2_wO0",field_button:"AddPlace_field_button__3Yn5N",error_text:"AddPlace_error_text__BQXSD",hidden:"AddPlace_hidden__KACU2"}},267:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(0),i=a.n(s),n=a(52),r=a.n(n),l=(a(128),a(129),a(22)),o=a(9),d=a(53),m=a(54),j=a(57),p=a(56),b=a(28),u=a(8),h=a(115).create({baseURL:"https://tlt-places.firebaseio.com/",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"DELETE, POST, GET, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"}}),O=function(e){return h.get("".concat(e,".json"))},x=function(e,t){return h.delete("".concat(e,"/").concat(t,".json"))},_=function(e,t){return h.post("".concat(e,".json"),{name:t.name,text:t.text,adress:t.adress,img:t.img})},v="SET_ITEMS",f="DELETE_ITEMS",g="OPEN_MODAL",N="CLOSE_MODAL",y="SET_MODAL_INFO",w="DISABLE_LOADING",I="ENABLE_LOADING",M={items:{},pageSize:5,isModalOpen:!1,modalItem:{name:"",text:"",img:"",adress:""},isShowLoading:!0},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:var a=t.items?t.items:{};return Object(u.a)(Object(u.a)({},e),{},{items:a});case f:var c=Object.assign({},e.items);return delete c[t.id],Object(u.a)(Object(u.a)({},e),{},{items:c});case g:return Object(u.a)(Object(u.a)({},e),{},{isModalOpen:!0});case y:var s=Object.assign({},e.items);return Object(u.a)(Object(u.a)({},e),{},{modalItem:s[t.id]});case N:return Object(u.a)(Object(u.a)({},e),{},{isModalOpen:!1});case w:return Object(u.a)(Object(u.a)({},e),{},{isShowLoading:!1});case I:return Object(u.a)(Object(u.a)({},e),{},{isShowLoading:!0});default:return e}},P=a(33),S=a.n(P),k=function(e){return Object(c.jsx)("div",{className:S.a.modal_wrapper,onClick:function(){return e.closeModal()},children:Object(c.jsxs)("div",{className:S.a.modal_body,onClick:function(e){return e.stopPropagation()},children:[Object(c.jsx)("div",{className:S.a.modal_image,children:Object(c.jsx)("img",{src:e.modalItem.img?e.modalItem.img:"https://perila-don.ru/img/no_photo.png",alt:""})}),Object(c.jsx)("div",{className:S.a.modal_title,children:e.modalItem.name}),Object(c.jsx)("div",{className:S.a.modal_text,children:e.modalItem.text}),Object(c.jsx)("div",{className:S.a.modal_adress,children:e.modalItem.adress})]})})},T=a(30),L=a.n(T),C=function(e){var t=e.text;return e.text.length>80&&(t=e.text.slice(0,60)+"..."),Object(c.jsxs)("a",{className:L.a.item,onClick:function(){return e.showModalFunc(e.id)},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{onClick:function(t){t.stopPropagation(),e.deleteFunc(e.id)},className:L.a.item_close,children:"X"}),Object(c.jsx)("div",{className:L.a.item_image,children:Object(c.jsx)("img",{src:e.img,className:L.a.item_image,alt:""})}),Object(c.jsx)("div",{className:L.a.item_title,children:e.name}),Object(c.jsx)("div",{className:L.a.item_text,children:t})]}),Object(c.jsx)("div",{className:L.a.item_adress,children:e.adress})]})},E=a(116),F=a.n(E),D=function(e){return Object(c.jsx)("div",{className:F.a.list,children:Object.keys(e.items).map((function(t){return Object(c.jsx)(C,{name:e.items[t].name,id:t,text:e.items[t].text,adress:e.items[t].adress,img:e.items[t].img?e.items[t].img:"https://perila-don.ru/img/no_photo.png",deleteFunc:e.deleteFunc,showModalFunc:e.showModalFunc},t)}))})},q=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.getItems(this.props.placeType)}},{key:"deleteItem",value:function(e){this.props.deleteItem(this.props.placeType,e)}},{key:"showModal",value:function(e){this.props.showModal(e)}},{key:"closeModal",value:function(){this.props.closeModal()}},{key:"renderItems",value:function(){return Object(c.jsxs)("div",{children:[Object.keys(this.props.items).length>0?Object(c.jsx)(D,{items:this.props.items,deleteFunc:this.deleteItem.bind(this),showModalFunc:this.showModal.bind(this)}):Object(c.jsxs)("p",{children:["\u0412 \u044d\u0442\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442. ",Object(c.jsx)(l.b,{to:"/addNew",exact:!0,className:"simple-link",children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0435\u0440\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e"})]}),this.props.isModalOpen?Object(c.jsx)(k,{modalItem:this.props.modalItem,closeModal:this.closeModal.bind(this)}):null]})}},{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:this.props.isShowLoading?Object(c.jsx)("div",{children:"Loading"}):this.renderItems()})}}]),a}(i.a.Component),Y=Object(b.b)((function(e){return{items:e.itemsPage.items,pageSize:e.itemsPage.pageSize,isModalOpen:e.itemsPage.isModalOpen,modalItem:e.itemsPage.modalItem,isShowLoading:e.itemsPage.isShowLoading}}),{getItems:function(e){return function(t){t({type:I}),O(e).then((function(e){var a;t((a=e.data,{type:v,items:a})),t({type:w})}))}},deleteItem:function(e,t){return function(a){x(e,t).then((function(e){a(function(e){return{type:f,id:e}}(t))}))}},showModal:function(e){return function(t){t({type:g}),t(function(e){return{type:y,id:e}}(e))}},closeModal:function(){return{type:N}}})(q),B=a(269),z=a(268),G=a(13),R=a.n(G),W=a(25),H=function(e){var t=e.input,a=e.label,s=e.type,i=e.meta,n=i.touched,r=i.error,l=i.warning;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("input",Object(u.a)(Object(u.a)({},t),{},{placeholder:a,type:s})),n&&(r&&Object(c.jsx)("span",{className:R.a.error_text,children:r})||l&&Object(c.jsx)("span",{className:R.a.error_text,children:l}))]})})},K=function(e){var t=e.input,a=e.label,s=e.type,i=e.meta,n=i.touched,r=i.error,l=i.warning;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("textarea",Object(u.a)(Object(u.a)({},t),{},{placeholder:a,type:s})),n&&(r&&Object(c.jsx)("span",{className:R.a.error_text,children:r})||l&&Object(c.jsx)("span",{className:R.a.error_text,children:l}))]})})},U=function(e){var t=e.input,a=e.label,s=e.type,i=e.meta,n=i.touched,r=i.error,l=i.warning;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("input",Object(u.a)(Object(u.a)({},t),{},{placeholder:a,type:s,className:R.a.hidden,disabled:!0})),n&&(r&&Object(c.jsx)("span",{className:R.a.error_text,children:r})||l&&Object(c.jsx)("span",{className:R.a.error_text,children:l}))]})})},X=Object(z.a)({form:"login"})((function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:R.a.fields,onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{className:R.a.field_text,children:Object(c.jsx)(B.a,{type:"text",label:"\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e (\u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",name:"img",component:H})}),Object(c.jsx)("div",{className:R.a.field_text,children:Object(c.jsx)(B.a,{validate:Object(W.required)({message:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),type:"text",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",component:H})}),Object(c.jsx)("div",{className:R.a.field_text,children:Object(c.jsx)(B.a,{validate:Object(W.required)({message:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),type:"text",label:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",name:"text",component:K})}),Object(c.jsx)("div",{className:R.a.field_text,children:Object(c.jsx)(B.a,{validate:Object(W.required)({message:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),type:"text",label:"\u0410\u0434\u0440\u0435\u0441",name:"adress",component:H})}),Object(c.jsxs)("div",{className:R.a.field_radio,children:[Object(c.jsxs)("label",{children:[Object(c.jsx)(B.a,{validate:Object(W.required)({message:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),name:"placeType",component:"input",type:"radio",value:"park"})," \u041f\u0430\u0440\u043a"]}),Object(c.jsxs)("label",{children:[Object(c.jsx)(B.a,{validate:Object(W.required)({message:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),name:"placeType",component:"input",type:"radio",value:"nature"})," \u041f\u0440\u0438\u0440\u043e\u0434\u0430"]}),Object(c.jsxs)("label",{children:[Object(c.jsx)(B.a,{validate:Object(W.required)({message:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),name:"placeType",component:"input",type:"radio",value:"arcitecture"})," \u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"]}),Object(c.jsxs)("label",{children:[Object(c.jsx)(B.a,{validate:Object(W.required)({message:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),name:"placeType",component:"input",type:"radio",value:"art"})," \u0418\u0441\u0441\u043a\u0443\u0441\u0442\u0432\u043e"]}),Object(c.jsx)(B.a,{validate:Object(W.required)({message:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0438\u0437 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432"}),name:"placeType",type:"radio",label:"\u0410\u0434\u0440\u0435\u0441",value:"none",component:U})]}),Object(c.jsx)("div",{className:R.a.field_button,children:Object(c.jsx)("button",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})})})),J=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).onSubmit=function(e,t,a){var c=e.placeType,s={img:!!e.img&&e.img,name:e.name,text:e.text,adress:e.adress};t(a.reset()),_(c,s).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(X,{onSubmit:this.onSubmit})})}}]),a}(i.a.Component),Z=a(119),Q=a.n(Z),V=function(){return Object(c.jsxs)("div",{className:Q.a.FirstPage,children:[Object(c.jsx)("h1",{children:"\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c"}),Object(c.jsxs)("p",{children:["\u042d\u0442\u043e \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u044f \u0438\u0437\u0443\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430, \u0437\u0434\u0435\u0441\u044c \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435/\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043c\u0435\u0441\u0442 \u0433\u043e\u0440\u043e\u0434\u0430 \u0442\u043e\u043b\u044c\u044f\u0442\u0442\u0438 \u0438\u0437 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u0430 \u0442\u0430\u043a \u0436\u0435 \u0438\u0445 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"\u041f\u0440\u043e\u0435\u043a\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u043b\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 React + Redux, \u0434\u043b\u044f \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f react-router-dom, \u0444\u043e\u0440\u043c\u044b redux-form, \u0431\u044d\u043a - firebase, \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 axios."]})]})};var $=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"header-wrapper",children:Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)(l.b,{to:"/FilonenkoAleksanrd.io",exact:!0,activeClassName:"header-item__active",className:"header-item",children:'"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"'}),Object(c.jsx)(l.b,{to:"/park",exact:!0,activeClassName:"header-item__active",className:"header-item",children:"\u041f\u0430\u0440\u043a\u0438"}),Object(c.jsx)(l.b,{to:"/nature",exact:!0,activeClassName:"header-item__active",className:"header-item",children:"\u041f\u0440\u0438\u0440\u043e\u0434\u0430"}),Object(c.jsx)(l.b,{to:"/arcitecture",exact:!0,activeClassName:"header-item__active",className:"header-item",children:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"}),Object(c.jsx)(l.b,{to:"/art",exact:!0,activeClassName:"header-item__active",className:"header-item",children:"\u0418\u0441\u043a\u0443\u0441\u0442\u0432\u043e"}),Object(c.jsx)(l.b,{to:"/addNew",exact:!0,activeClassName:"header-item__active",className:"header-item header-item__add",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e"})]})}),Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/FilonenkoAleksanrd.io",component:function(){return Object(c.jsx)(V,{})},className:"header-item"}),Object(c.jsx)(o.a,{path:"/park",component:function(){return Object(c.jsx)(Y,{placeType:"park"})},className:"header-item"}),Object(c.jsx)(o.a,{path:"/nature",component:function(){return Object(c.jsx)(Y,{placeType:"nature"})},className:"header-item"}),Object(c.jsx)(o.a,{path:"/arcitecture",component:function(){return Object(c.jsx)(Y,{placeType:"arcitecture"})},className:"header-item"}),Object(c.jsx)(o.a,{path:"/art",component:function(){return Object(c.jsx)(Y,{placeType:"art"})},className:"header-item"}),Object(c.jsx)(o.a,{path:"/addNew",component:function(){return Object(c.jsx)(J,{})},className:"header-item"})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(7),te=a(270),ae=a(120),ce=Object(ee.c)({itemsPage:A,form:te.a}),se=Object(ee.d)(ce,Object(ee.a)(ae.a));window.store=se;var ie=se;a(121).a.initializeApp({apiKey:"AIzaSyAawWSXlyn1xd1VYglMuE2cip_YtcqmItE",authDomain:"tlt-places.firebaseapp.com",databaseURL:"https://tlt-places.firebaseio.com",projectId:"tlt-places",storageBucket:"tlt-places.appspot.com",messagingSenderId:"870473676383",appId:"1:870473676383:web:ee023698f04c13e2a70dea",measurementId:"G-9YKKMG2BTE"});var ne=Object(c.jsx)(l.a,{children:Object(c.jsx)(b.a,{store:ie,children:Object(c.jsx)($,{})})});r.a.render(ne,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},30:function(e,t,a){e.exports={item:"PlacesItem_item__2DL7-",item_image:"PlacesItem_item_image__1J2M7",item_title:"PlacesItem_item_title__2-US5",item_text:"PlacesItem_item_text__WrIn0",item_adress:"PlacesItem_item_adress__1rLYb",item_close:"PlacesItem_item_close__2cIZ0"}},33:function(e,t,a){e.exports={modal_wrapper:"Modal_modal_wrapper__3uZ8g",modal_body:"Modal_modal_body__o5rgP",modal_image:"Modal_modal_image__3H4hF",modal_title:"Modal_modal_title__1Y4vg",modal_text:"Modal_modal_text__SCZrl",modal_adress:"Modal_modal_adress__1Ynw1"}}},[[267,1,2]]]);
//# sourceMappingURL=main.d2d81506.chunk.js.map