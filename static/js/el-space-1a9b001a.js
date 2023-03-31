import{s as N,B as $,D as A,A as v,bd as B,O as T,z as x,be as I,w as d,ak as g,$ as y,cj as o,ck as C,ab as L,v as h,x as O,u as k,cl as z,cm as R,ag as j}from"./index-6597d5f5.js";const V=N({prefixCls:{type:String}}),w=$({name:"ElSpaceItem",props:V,setup(e,{slots:u}){const p=A("space"),r=v(()=>`${e.prefixCls||p.b()}__item`);return()=>B("div",{class:r.value},T(u,"default"))}}),P={small:8,default:12,large:16};function Y(e){const u=A("space"),p=v(()=>[u.b(),u.m(e.direction),e.class]),r=x(0),n=x(0),m=v(()=>{const t=e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${n.value}px`}:{},l={alignItems:e.alignment};return[t,l,e.style]}),f=v(()=>{const t={paddingBottom:`${n.value}px`,marginRight:`${r.value}px`},l=e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{};return[t,l]});return I(()=>{const{size:t="small",wrap:l,direction:i,fill:a}=e;if(d(t)){const[s=0,c=0]=t;r.value=s,n.value=c}else{let s;g(t)?s=t:s=P[t||"small"]||P.small,(l||a)&&i==="horizontal"?r.value=n.value=s:i==="horizontal"?(r.value=s,n.value=0):(n.value=s,r.value=0)}}),{classes:p,containerStyle:m,itemStyle:f}}const _=N({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:h([String,Object,Array]),default:""},style:{type:h([String,Array,Object]),default:""},alignment:{type:h(String),default:"center"},prefixCls:{type:String},spacer:{type:h([Object,String,Number,Array]),default:null,validator:e=>C(e)||g(e)||O(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:k,validator:e=>g(e)||d(e)&&e.length===2&&e.every(g)}}),F=$({name:"ElSpace",props:_,setup(e,{slots:u}){const{classes:p,containerStyle:r,itemStyle:n}=Y(e);function m(f,t="",l=[]){const{prefixCls:i}=e;return f.forEach((a,s)=>{z(a)?d(a.children)&&a.children.forEach((c,S)=>{z(c)&&d(c.children)?m(c.children,`${t+S}-`,l):l.push(y(w,{style:n.value,prefixCls:i,key:`nested-${t+S}`},{default:()=>[c]},o.PROPS|o.STYLE,["style","prefixCls"]))}):R(a)&&l.push(y(w,{style:n.value,prefixCls:i,key:`LoopKey${t+s}`},{default:()=>[a]},o.PROPS|o.STYLE,["style","prefixCls"]))}),l}return()=>{var f;const{spacer:t,direction:l}=e,i=T(u,"default",{key:0},()=>[]);if(((f=i.children)!=null?f:[]).length===0)return null;if(d(i.children)){let a=m(i.children);if(t){const s=a.length-1;a=a.reduce((c,S,E)=>{const b=[...c,S];return E!==s&&b.push(y("span",{style:[n.value,l==="vertical"?"width: 100%":null],key:E},[C(t)?t:L(t,o.TEXT)],o.STYLE)),b},[])}return y("div",{class:p.value,style:r.value},a,o.STYLE|o.CLASS)}return i.children}}}),D=j(F);export{D as E};
