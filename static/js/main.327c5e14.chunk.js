(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),o=n(7),r=n.n(o),l=(n(17),n(18),n(25));var i=()=>{const[e,t]=Object(a.useState)(null);return console.log("something here"),Object(a.useEffect)(()=>{(async()=>{const e=await async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:44.34,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10.99;try{const a=await l.a.get("".concat("https://api.openweathermap.org/data/2.5/weather","?lat=").concat(e,"&lon=").concat(t,"&appid=").concat("4486282242f23e0a063bc7ca6ccfa84e"));return console.log("This is fetched here",a),a.data}catch(n){return console.error("Error fetching weather data:",n),null}}();t(e)})()},[]),console.log("weatherdata is ",e),c.a.createElement("div",null,e&&c.a.createElement("p",null,"Current Weather: ",e.main.temp,"\xb0C"))};var u=function(){return c.a.createElement(i,null)};var s=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then(t=>{let{getCLS:n,getFID:a,getFCP:c,getLCP:o,getTTFB:r}=t;n(e),a(e),c(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null))),s()},8:function(e,t,n){e.exports=n(23)}},[[8,1,2]]]);
//# sourceMappingURL=main.327c5e14.chunk.js.map