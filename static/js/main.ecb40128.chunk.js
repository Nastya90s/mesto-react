(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),r=a.n(c),s=(a(17),a(7)),i=a(1),l=o.a.createContext(),u=a(4),p=a.n(u);var m=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:p.a,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))};var d=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2022 Mesto Russia"))};var _=function(e){var t=e.card,a=e.onCardClick,c=e.onCardLike,r=e.onCardDelete,s=Object(n.useContext)(l),i=t.owner._id===s._id,u=t.likes.some(function(e){return e._id===s._id}),p="element__like-button ".concat(u?"element__like-button_active ":""),m="element__delete-button ".concat(i?"":"element__delete-button:hover");return o.a.createElement("article",{className:"element"},i&&o.a.createElement("button",{className:m,onClick:function(){r(t)},type:"button"}),o.a.createElement("img",{className:"element__image",src:t.link,alt:t.name,onClick:function(){a(t)}}),o.a.createElement("div",{className:"element__conteiner"},o.a.createElement("h2",{className:"element__title"},t.name),o.a.createElement("div",{className:"element__like-conteiner"},o.a.createElement("button",{onClick:function(){c(t)},className:p,type:"button"}),o.a.createElement("p",{className:"element__like-count"},t.likes.length))))},b=(document.querySelector(".profile__add-button"),document.querySelector(".profile__edit-button"),document.querySelector(".popup__input_type_name"),document.querySelector(".popup__input_type_job"),document.querySelector(".profile__avatar-container"));var f=function(e){var t=e.cards,a=e.onEditAvatar,c=e.onEditProfile,r=e.onAddPlace,s=e.onCardClick,i=e.onCardLike,u=e.onCardDelete,p=Object(n.useContext)(l);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar-container",onClick:a},o.a.createElement("img",{className:"profile__avatar",src:p.avatar,alt:b}),o.a.createElement("div",{className:"profile__avatar-overlay"})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__title"},p.name),o.a.createElement("button",{className:"profile__edit-button",onClick:c,type:"button"}),o.a.createElement("p",{className:"profile__subtitle"},p.about)),o.a.createElement("button",{className:"profile__add-button",onClick:r,type:"button"})),o.a.createElement("section",{className:"elements"},t.map(function(e){return o.a.createElement(_,{key:e._id,card:e,onCardClick:s,onCardLike:i,onCardDelete:u})})))};var h=function(e){return o.a.createElement("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":"")},o.a.createElement("div",{className:"popup__window"},o.a.createElement("form",{className:"popup__form popup__form_type_".concat(e.name),name:e.name,onSubmit:e.onSubmit,noValidate:!0},o.a.createElement("h3",{className:"popup__title"},e.name),o.a.createElement("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),e.children,o.a.createElement("button",{type:"submit",className:e.disabled?"popup__save-button popup__save-button_invalid":"popup__save-button",disabled:e.disabled},e.buttonText))))};var v=function(e){var t=e.isOpen,a=e.onUpdateAvatar,c=e.onClose,r=Object(n.useRef)(""),s=Object(n.useState)(!1),l=Object(i.a)(s,2),u=l[0],p=l[1],m=Object(n.useState)(""),d=Object(i.a)(m,2),_=d[0],b=d[1];return Object(n.useEffect)(function(){p(!1),b(""),r.current.value=""},[t]),o.a.createElement(h,{className:"popup__form popup__form_type_avatar",name:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",noValidate:"",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:c,onSubmit:function(e){e.preventDefault(),a({avatar:r.current.value})},disabled:!u},o.a.createElement("input",{className:"popup__input popup__input_type_avatar",required:"",type:"url",id:"element-avatar",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){e.target.validity.valid?(b(""),p(!0)):(b(e.target.validationMessage),p(!1))},ref:r}),o.a.createElement("span",{id:"element-avatar-error",className:u?"popup__error":"popup__error_active"},_))};var E=function(e){return o.a.createElement("div",{className:"popup popup_type_image ".concat(e.isOpen?"popup_opened":"")},o.a.createElement("div",{className:"popup__window"},o.a.createElement("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),o.a.createElement("h3",{className:"popup__subtitle"},e.card?e.card.name:""),o.a.createElement("button",{className:"popup__close-button",type:"button",onClick:e.onClose})))},O=a(5),g=a(6),j=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(O.a)(this,e),this._baseUrl=a,this._headers=n,this._checkResponse=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}return Object(g.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"Get",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"Get",headers:this._headers}).then(this._checkResponse)}},{key:"saveNewUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"saveNewUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"sendNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:t?"PUT":"DELETE",headers:this._headers}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-54",headers:{authorization:"94b9605b-5472-447a-96bc-8a72a81051a5","Content-Type":"application/json"}});var C=function(e){var t=Object(n.useContext)(l),a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],s=c[1],u=Object(n.useState)(""),p=Object(i.a)(u,2),m=p[0],d=p[1],_=Object(n.useState)(!0),b=Object(i.a)(_,2),f=b[0],v=b[1],E=Object(n.useState)(""),O=Object(i.a)(E,2),g=O[0],j=O[1],C=Object(n.useState)(!0),N=Object(i.a)(C,2),y=N[0],k=N[1],S=Object(n.useState)(""),U=Object(i.a)(S,2),w=U[0],L=U[1];return Object(n.useEffect)(function(){j(""),L(""),v(!0),k(!0),e.isOpen&&(s(t.name),d(t.about))},[e.isOpen,t]),o.a.createElement(h,{noValidate:"",name:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:r,about:m})},disabled:!(""===g&&""===w)},o.a.createElement("input",{className:"popup__input popup__input_type_name",type:"text",id:"input-name",name:"title",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",required:"",minLength:2,maxLength:40,onChange:function(e){s(e.target.value),e.target.validity.valid?(j(""),v(!0)):(j(e.target.validationMessage),v(!1))},value:r||""}),o.a.createElement("span",{id:"input-name-error",className:f?"popup__error":"popup__error_active"},g),o.a.createElement("input",{className:"popup__input popup__input_type_job",type:"text",name:"subtitle",id:"input-job",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044e",required:"",minLength:2,maxLength:200,onChange:function(e){d(e.target.value),e.target.validity.valid?(L(""),k(!0)):(L(e.target.validationMessage),k(!1))},value:m||""}),o.a.createElement("span",{id:"input-job-error",className:y?"popup__error":"popup__error_active"},w))};var N=function(e){var t=e.isOpen,a=e.onClose,c=e.onAddPlace,r=Object(n.useState)(""),s=Object(i.a)(r,2),l=s[0],u=s[1],p=Object(n.useState)(""),m=Object(i.a)(p,2),d=m[0],_=m[1],b=Object(n.useState)(!0),f=Object(i.a)(b,2),v=f[0],E=f[1],O=Object(n.useState)(""),g=Object(i.a)(O,2),j=g[0],C=g[1],N=Object(n.useState)(!0),y=Object(i.a)(N,2),k=y[0],S=y[1],U=Object(n.useState)(""),w=Object(i.a)(U,2),L=w[0],x=w[1];return Object(n.useEffect)(function(){u(""),_(""),C(""),x(""),E(!1),S(!1)},[t]),o.a.createElement(h,{className:"popup__form popup__form_type_add",noValidate:"",name:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),c({name:l,link:d})},disabled:!v||!k},o.a.createElement("input",{className:"popup__input popup__input_type_place",type:"text",id:"element-place",name:"place",value:l,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:"",minLength:2,maxLength:30,onChange:function(e){u(e.target.value),e.target.validity.valid?(C(""),E(!0)):(C(e.target.validationMessage),E(!1))}}),o.a.createElement("span",{id:"element-place-error",className:v?"popup__error":"popup__error_active"},j),o.a.createElement("input",{className:"popup__input popup__input_type_src",required:"",type:"url",id:"element-src",name:"src",value:d,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){_(e.target.value),e.target.validity.valid?(x(""),S(!0)):(x(e.target.validationMessage),S(!1))}}),o.a.createElement("span",{id:"element-src-error",className:k?"popup__error":"popup__error_active"},L))};var y=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),u=Object(i.a)(r,2),p=u[0],_=u[1],b=Object(n.useState)(!1),h=Object(i.a)(b,2),O=h[0],g=h[1],y=Object(n.useState)(!1),k=Object(i.a)(y,2),S=k[0],U=k[1],w=Object(n.useState)({}),L=Object(i.a)(w,2),x=L[0],P=L[1],A=Object(n.useState)({}),T=Object(i.a)(A,2),R=T[0],q=T[1],D=Object(n.useState)([]),I=Object(i.a)(D,2),M=I[0],J=I[1];function V(){c(!1),_(!1),g(!1),U(!1),P({})}return Object(n.useEffect)(function(){Promise.all([j.getUserInfo(),j.getInitialCards()]).then(function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];q(a),J(n)}).catch(function(e){console.log(e)})},[]),Object(n.useEffect)(function(){function e(e){"Escape"===e.key&&V()}function t(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-icon"))&&V()}return document.addEventListener("mousedown",t),document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e),document.removeEventListener("mousedown",t)}},[]),o.a.createElement(l.Provider,{value:R},o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"page"},o.a.createElement(m,null),o.a.createElement(f,{onEditProfile:function(){c(!0)},onAddPlace:function(){g(!0)},onEditAvatar:function(){_(!0)},onCardClick:function(e){U(!0),P(e)},cards:M,onCardLike:function(e){var t=e.likes.some(function(e){return e._id===R._id});j.changeLikeCardStatus(e._id,!t).then(function(t){J(function(a){return a.map(function(a){return a._id===e._id?t:a})})}).catch(function(e){console.log(e)})},onCardDelete:function(e){j.removeCard(e._id).then(function(){J(function(t){return t.filter(function(t){return t._id!==e._id})})}).then(V).catch(function(e){console.log(e)})}}),o.a.createElement(d,null),o.a.createElement(C,{isOpen:a,onClose:V,onUpdateUser:function(e){j.saveNewUserInfo(e.name,e.about).then(function(e){q(e),V()}).catch(function(e){console.log(e)})}}),o.a.createElement(N,{isOpen:O,onClose:V,onAddPlace:function(e){j.sendNewCard(e.name,e.link).then(function(e){J([e].concat(Object(s.a)(M))),V()}).catch(function(e){console.log(e)})}}),o.a.createElement(E,{card:x,onClose:V,isOpen:S}),o.a.createElement(v,{isOpen:p,onClose:V,onUpdateAvatar:function(e){j.saveNewUserAvatar(e.avatar).then(function(e){q(e),V()}).catch(function(e){console.log(e)})}}))))},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null))),k()},4:function(e,t,a){e.exports=a.p+"static/media/Vector.7baba3c1.svg"},8:function(e,t,a){e.exports=a(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.ecb40128.chunk.js.map