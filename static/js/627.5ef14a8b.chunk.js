"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[627],{627:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a="ContactForm_label__-cVXI",r="ContactForm_input__Bl93P",s="ContactForm_button__eSwX9",c=n(705),i=n(434),l=n(916),o=function(e){return e.contacts.items},u=function(e){return e.filter.value},m=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.error},_=(0,l.P1)([o,u],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),h=n(634),b=n(184),f=function(){var e=(0,i.v9)(o),t=(0,i.I0)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(c.J9,{initialValues:{name:"",number:""},onSubmit:function(n,a){var r=a.resetForm,s=n.name,c=n.number;!function(t){return e.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}(s)?t((0,h.uK)({name:s,number:c})):alert("".concat(s," is already in contacts.")),r()},children:(0,b.jsxs)(c.l0,{children:[(0,b.jsxs)("label",{className:a,children:["Name",(0,b.jsx)(c.gN,{className:r,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Jane Snow"})]}),(0,b.jsxs)("label",{className:a,children:["Number",(0,b.jsx)(c.gN,{className:r,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"XXX-XX-XX-XXX"})]}),(0,b.jsx)("button",{type:"submit",className:s,children:"Add contact"})]})})})},p={list:"ContactList_list__csErn",item:"ContactList_item__EZYHO",name:"ContactList_name__UCkFW",button:"ContactList_button__7kL4l"},x=function(){var e=(0,i.v9)(_),t=(0,i.I0)();return(0,b.jsx)("ul",{className:p.list,children:e.map((function(e){var n=e.id,a=e.name,r=e.number;return(0,b.jsxs)("li",{className:p.itrm,children:[(0,b.jsxs)("p",{className:p.name,children:[a,": ",r]}),(0,b.jsx)("button",{className:p.button,type:"button",onClick:function(){return t((0,h.GK)(n))},children:"Delete"})]},n)}))})},j=n(808),C="Filter_label__vEd1E",N="Filter_input__N7T3z",v=function(){var e=(0,i.v9)(u),t=(0,i.I0)();return(0,b.jsxs)("label",{className:C,children:["Find contacts by name",(0,b.jsx)("input",{className:N,type:"text",value:e,onChange:function(e){return t((0,j.T)(e.target.value))}})]})},X="Title_title__mrNq5",w=function(e){var t=e.title;return(0,b.jsx)("h2",{className:X,children:t})},F=n(791),k=function(){var e=(0,i.I0)(),t=(0,i.v9)(m),n=(0,i.v9)(d);return(0,F.useEffect)((function(){e((0,h.yF)())}),[e]),(0,b.jsxs)("div",{children:[(0,b.jsx)(w,{title:"Phonebook"}),(0,b.jsx)(f,{}),(0,b.jsx)(w,{title:"Contacts"}),(0,b.jsx)(v,{}),t&&!n&&(0,b.jsx)("b",{children:"Request in progress..."}),(0,b.jsx)(x,{})]})}}}]);
//# sourceMappingURL=627.5ef14a8b.chunk.js.map