import{r as f}from"./index-8db94870.js";import{P as s}from"./index-1fc0ca9a.js";import"./_commonjsHelpers-042e6b4d.js";var y={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=f,k=Symbol.for("react.element"),x=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,v=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function b(t,o,a){var r,e={},n=null,l=null;a!==void 0&&(n=""+a),o.key!==void 0&&(n=""+o.key),o.ref!==void 0&&(l=o.ref);for(r in o)g.call(o,r)&&!E.hasOwnProperty(r)&&(e[r]=o[r]);if(t&&t.defaultProps)for(r in o=t.defaultProps,o)e[r]===void 0&&(e[r]=o[r]);return{$$typeof:k,type:t,key:n,ref:l,props:e,_owner:v.current}}p.Fragment=x;p.jsx=b;p.jsxs=b;y.exports=p;var O=y.exports;const R=O.jsx;const c=({primary:t,backgroundColor:o,size:a,label:r,color:e,...n})=>{const l=t?"storybook-button--primary":"storybook-button--secondary";return R("button",{type:"button",className:["storybook-button",`storybook-button--${a}`,l].join(" "),style:{backgroundColor:o??"black",color:e??"white"},...n,children:r})};c.propTypes={primary:s.bool,backgroundColor:s.string,label:s.string.isRequired,color:s.string,onClick:s.func};c.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};const B={title:"Example/Button",component:c,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},u={args:{primary:!0,label:"Button"}};var i,m,d;u.parameters={...u.parameters,docs:{...(i=u.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(d=(m=u.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const S=["Default"];export{u as Default,S as __namedExportsOrder,B as default};
//# sourceMappingURL=Button.stories-551a48b2.js.map
