(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(a,e,t){a.exports=t(75)},60:function(a,e,t){},65:function(a,e,t){},67:function(a,e,t){},68:function(a,e,t){},69:function(a,e,t){},74:function(a,e,t){},75:function(a,e,t){"use strict";t.r(e);var l=t(0),n=t.n(l),o=t(47),r=t.n(o),s=(t(60),t(44)),i=t(77);const c="ot4mbzwtIPW9eN4oTMPtbxIhIWtU6v2RZNBAC319",m=a=>a.toISOString().split("T")[0],u=async()=>{const a=(()=>{const a=new Date;return a.setDate(a.getDate()-30),m(a)})(),e=m(new Date);return(await i.a.get("".concat("https://api.nasa.gov/DONKI/","CMEAnalysis?startDate=").concat(a,"&endDate=").concat(e,"&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=ALL&api_key=").concat(c))).data};t(45),t(65);var h=()=>{const[a,e]=Object(l.useState)([]),[t,o]=Object(l.useState)("apollo 11");Object(l.useEffect)(()=>{(async()=>{if(t){const a=await(async a=>{try{return(await i.a.get("".concat("https://images-api.nasa.gov","/search"),{params:{q:a,media_type:"image,video"}})).data.collection.items}catch(e){return console.error("Error fetching NASA media:",e),[]}})(t);e(a)}})()},[t]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"image-carousel-container"},n.a.createElement("h2",null,"What pictures are you interested in from NASA? Search Now!"),n.a.createElement("input",{className:"image-search-input",type:"text",value:t,onChange:a=>{const e=a.target.value;if("string"===typeof e){const a=e.trim();o(a)}},placeholder:"Enter search term"}),n.a.createElement(s.a,null,a.length>0?a.map((a,e)=>n.a.createElement(s.a.Item,{key:e},a.links&&n.a.createElement("img",{className:"full-page-image",src:a.links[0].href,alt:a.data[0].title}),n.a.createElement(s.a.Caption,null,n.a.createElement("h3",null,a.data[0].title),n.a.createElement("p",null,a.data[0].description)))):n.a.createElement("p",{className:"no-data-message"},"No data available. Try a different search term."))))},d=(t(67),t(22)),p=t(3);const g=async function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:44.34,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10.99;try{return(await i.a.get("".concat("https://api.openweathermap.org/data/2.5/weather","?lat=").concat(a,"&lon=").concat(e,"&appid=").concat("4486282242f23e0a063bc7ca6ccfa84e"))).data}catch(t){return console.error("Error fetching weather data:",t),null}};t(68);const E={USA:{"New York":{lat:40.7128,lon:-74.006},"Los Angeles":{lat:34.0522,lon:-118.2437},Chicago:{lat:41.8781,lon:-87.6298},Houston:{lat:29.7604,lon:-95.3698},Phoenix:{lat:33.4484,lon:-112.074},Philadelphia:{lat:39.9526,lon:-75.1652},"San Antonio":{lat:29.4241,lon:-98.4936},"San Diego":{lat:32.7157,lon:-117.1611},Dallas:{lat:32.7767,lon:-96.797},"San Jose":{lat:37.3382,lon:-121.8863},Austin:{lat:30.2672,lon:-97.7431},Jacksonville:{lat:30.3322,lon:-81.6557},"Fort Worth":{lat:32.7555,lon:-97.3308},Columbus:{lat:39.9612,lon:-82.9988},"San Francisco":{lat:37.7749,lon:-122.4194},Charlotte:{lat:35.2271,lon:-80.8431},Indianapolis:{lat:39.7684,lon:-86.1581},Seattle:{lat:47.6062,lon:-122.3321},Denver:{lat:39.7392,lon:-104.9903},"Washington D.C.":{lat:38.9072,lon:-77.0369},Boston:{lat:42.3601,lon:-71.0589}},UK:{London:{lat:51.5074,lon:-.1278},Birmingham:{lat:52.4862,lon:-1.8904},Leeds:{lat:53.8008,lon:-1.5491},Glasgow:{lat:55.8642,lon:-4.2518},Sheffield:{lat:53.3811,lon:-1.4701},Bradford:{lat:53.795,lon:-1.7594},Manchester:{lat:53.4808,lon:-2.2426},Edinburgh:{lat:55.9533,lon:-3.1883},Liverpool:{lat:53.4084,lon:-2.9916},Bristol:{lat:51.4545,lon:-2.5879},Cardiff:{lat:51.4816,lon:-3.1791},Belfast:{lat:54.5973,lon:-5.9301},Leicester:{lat:52.6369,lon:-1.1398},Wakefield:{lat:53.6833,lon:-1.4977},Coventry:{lat:52.4068,lon:-1.5197},Nottingham:{lat:52.9548,lon:-1.1581},Newcastle:{lat:54.9784,lon:-1.6174},Sunderland:{lat:54.9061,lon:-1.3811},Brighton:{lat:50.8225,lon:-.1372},"Kingston upon Hull":{lat:53.7676,lon:-.3274}},France:{Paris:{lat:48.8566,lon:2.3522},Marseille:{lat:43.2965,lon:5.3698},Lyon:{lat:45.764,lon:4.8357},Toulouse:{lat:43.6047,lon:1.4442},Nice:{lat:43.7102,lon:7.262},Nantes:{lat:47.2184,lon:-1.5536},Strasbourg:{lat:48.5734,lon:7.7521},Montpellier:{lat:43.6108,lon:3.8767},Bordeaux:{lat:44.8378,lon:-.5792},Lille:{lat:50.6292,lon:3.0573},Rennes:{lat:48.1173,lon:-1.6778},Reims:{lat:49.2583,lon:4.0317},"Le Havre":{lat:49.4944,lon:.1075},"Cergy-Pontoise":{lat:49.0356,lon:2.06},"Saint-Etienne":{lat:45.4397,lon:4.3872},Toulon:{lat:43.1242,lon:5.928},Angers:{lat:47.4784,lon:-.5632},Grenoble:{lat:45.1885,lon:5.7245},Dijon:{lat:47.322,lon:5.0415},Nimes:{lat:43.8367,lon:4.3601}},Japan:{Tokyo:{lat:35.6895,lon:139.6917},Yokohama:{lat:35.4437,lon:139.638},Osaka:{lat:34.6937,lon:135.5023},Nagoya:{lat:35.1815,lon:136.9066},Sapporo:{lat:43.0621,lon:141.3544},Fukuoka:{lat:33.5903,lon:130.4017},Kobe:{lat:34.6901,lon:135.1955},Kyoto:{lat:35.0116,lon:135.7681},Kawasaki:{lat:35.5309,lon:139.703},Saitama:{lat:35.8617,lon:139.6455},Hiroshima:{lat:34.3853,lon:132.4553},Sendai:{lat:38.2688,lon:140.872},Chiba:{lat:35.6051,lon:140.1233},Sakai:{lat:34.5733,lon:135.4828},Shizuoka:{lat:34.9756,lon:138.3827},Kumamoto:{lat:32.8031,lon:130.7079},Okayama:{lat:34.6551,lon:133.9195},Hamamatsu:{lat:34.7108,lon:137.7263},Kagoshima:{lat:31.5602,lon:130.5581},Funabashi:{lat:35.694,lon:139.983}},Germany:{Berlin:{lat:52.52,lon:13.405},Hamburg:{lat:53.5511,lon:9.9937},Munich:{lat:48.1351,lon:11.582},Cologne:{lat:50.9375,lon:6.9603},Frankfurt:{lat:50.1109,lon:8.6821},Stuttgart:{lat:48.7758,lon:9.1829},Dusseldorf:{lat:51.2277,lon:6.7735},Dortmund:{lat:51.5136,lon:7.4653},Essen:{lat:51.4566,lon:7.0123},Leipzig:{lat:51.3397,lon:12.3731},Bremen:{lat:53.0793,lon:8.8017},Dresden:{lat:51.0504,lon:13.7373},Hanover:{lat:52.3759,lon:9.732},Nuremberg:{lat:49.4521,lon:11.0767},Duisburg:{lat:51.4344,lon:6.7623},Bochum:{lat:51.4818,lon:7.2197},Wuppertal:{lat:51.2562,lon:7.1508},Bielefeld:{lat:52.0302,lon:8.5325},Bonn:{lat:50.7374,lon:7.0982},Mannheim:{lat:49.4875,lon:8.466},Karlsruhe:{lat:49.0069,lon:8.4037},Wiesbaden:{lat:50.0826,lon:8.2493},Munster:{lat:51.9607,lon:7.6261},Gelsenkirchen:{lat:51.5177,lon:7.0857},Augsburg:{lat:48.3705,lon:10.8978},Monchengladbach:{lat:51.1805,lon:6.4423},Braunschweig:{lat:52.2689,lon:10.5267}},Mexico:{"Mexico City":{lat:19.4326,lon:-99.1332},Guadalajara:{lat:20.6597,lon:-103.3496},Monterrey:{lat:25.6866,lon:-100.3161},Puebla:{lat:19.0414,lon:-98.2063},Toluca:{lat:19.2826,lon:-99.6557}},Ethiopia:{"Addis Ababa":{lat:9.0054,lon:38.7636},"Dire Dawa":{lat:9.5892,lon:41.8661},"Mek'ele":{lat:13.4967,lon:39.4753},Gondar:{lat:12.603,lon:37.4521},"Bahir Dar":{lat:11.5936,lon:37.3908}},Philippines:{"Quezon City":{lat:14.676,lon:121.0437},Manila:{lat:13.4125,lon:122.5563},"Davao City":{lat:7.1907,lon:125.4553},Caloocan:{lat:14.7566,lon:121.0447},"Cebu City":{lat:10.3157,lon:123.8854}},Egypt:{Cairo:{lat:30.0444,lon:31.2357},Alexandria:{lat:31.2001,lon:29.9187},Giza:{lat:30.0131,lon:31.2089},"Shubra El-Kheima":{lat:30.1286,lon:31.2421},"Port Said":{lat:31.2565,lon:32.2841}},Vietnam:{Hanoi:{lat:21.0285,lon:105.8542},"Ho Chi Minh City":{lat:10.7626,lon:106.6602},"Hai Phong":{lat:20.8444,lon:106.6881},"Can Tho":{lat:10.0452,lon:105.7469},"Da Nang":{lat:16.0544,lon:108.2022}},"DR Congo":{Kinshasa:{lat:-4.4419,lon:15.2663},Lubumbashi:{lat:-11.6609,lon:27.4794},"Mbuji-Mayi":{lat:-6.136,lon:23.5898},Kananga:{lat:-5.8958,lon:22.4176},Kisangani:{lat:.5153,lon:25.1903}},Turkey:{Istanbul:{lat:41.0082,lon:28.9784},Ankara:{lat:39.9334,lon:32.8597},Izmir:{lat:38.4192,lon:27.1287},Bursa:{lat:40.1826,lon:29.0674},Adana:{lat:37,lon:35.3213}},Iran:{Tehran:{lat:35.6892,lon:51.389},Mashhad:{lat:36.297,lon:59.6062},Isfahan:{lat:32.6546,lon:51.668},Karaj:{lat:35.8205,lon:50.9613},Tabriz:{lat:38.0808,lon:46.2919}},Thailand:{Bangkok:{lat:13.7563,lon:100.5018},Nonthaburi:{lat:13.8621,lon:100.5144},"Nakhon Ratchasima":{lat:14.971,lon:102.0875},"Chiang Mai":{lat:18.7061,lon:98.9817},"Hat Yai":{lat:7.0086,lon:100.4767}},Brazil:{"Sao Paulo":{lat:-23.5505,lon:-46.6333},"Rio de Janeiro":{lat:-22.9068,lon:-43.1729},Salvador:{lat:-12.9777,lon:-38.5016},Fortaleza:{lat:-3.7319,lon:-38.5267},"Belo Horizonte":{lat:-19.9167,lon:-43.9345}}};var y=()=>{const[a,e]=Object(l.useState)(null),[t,o]=Object(l.useState)(""),[r,s]=Object(l.useState)(""),[i,c]=Object(l.useState)(""),[m,u]=Object(l.useState)(""),[h,d]=Object(l.useState)(""),p=(a,e)=>{const t=parseFloat(a);return!isNaN(t)&&("latitude"===e?t>=-90&&t<=90:"longitude"===e&&t>=-180&&t<=180)};Object(l.useEffect)(()=>{(async()=>{const a=await g();e(a)})()},[]);const y=a=>(a-273.15).toFixed(2);return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"header-title"},"Hey there! Pop in your location and let's see if it's a good night for stargazing."),n.a.createElement("div",{className:"weather-container"},n.a.createElement("form",{onSubmit:async a=>{if(a.preventDefault(),d(""),!p(t,"latitude")||!p(r,"longitude"))return d("Please enter valid latitude and longitude values."),o(""),void s("");const l=await g(t,r);e(l),console.log("error is ",h),o(""),s("")}},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",placeholder:"Latitude",value:t,onChange:a=>o(a.target.value)}),n.a.createElement("input",{type:"text",placeholder:"Longitude",value:r,onChange:a=>s(a.target.value)}),n.a.createElement("button",{type:"submit"},"Get Weather"))),h&&n.a.createElement("p",{className:"weather-header"},h),n.a.createElement("div",{className:"country-selector"},n.a.createElement("select",{onChange:a=>{c(a.target.value),u("")},defaultValue:""},n.a.createElement("option",{value:"",disabled:!0},"Select a Country"),Object.keys(E).map(a=>n.a.createElement("option",{key:a,value:a},a)))),n.a.createElement("div",{className:"city-selector"},n.a.createElement("select",{onChange:a=>{u(a.target.value);const t=E[i][a.target.value];t&&g(t.lat,t.lon).then(e)},value:m,disabled:!i},n.a.createElement("option",{value:""},"Select a City"),i&&Object.keys(E[i]).map(a=>n.a.createElement("option",{key:a,value:a},a)))),a?n.a.createElement("div",null,n.a.createElement("h2",{className:"weather-header"},"Weather in ",a.name,", ",a.sys.country),n.a.createElement("p",{className:"weather-info"},"Current Temperature: ",n.a.createElement("span",null,y(a.main.temp),"\xb0C")),n.a.createElement("p",{className:"weather-info"},"Feels Like: ",n.a.createElement("span",null,y(a.main.feels_like),"\xb0C")),n.a.createElement("p",{className:"weather-info"},"Conditions: ",n.a.createElement("span",null,a.weather[0].main," (",a.weather[0].description,")")),n.a.createElement("p",{className:"weather-info"},"Humidity: ",n.a.createElement("span",null,a.main.humidity,"%")),n.a.createElement("p",{className:"weather-info"},"Wind Speed: ",n.a.createElement("span",null,a.wind.speed," m/s")),n.a.createElement("p",{className:"weather-info"},"Visibility: ",n.a.createElement("span",null,a.visibility/1e3," km")),n.a.createElement("p",{className:"weather-info"},"Pressure: ",n.a.createElement("span",null,a.main.pressure," hPa")),n.a.createElement("p",{className:"weather-info"},"Cloudiness: ",n.a.createElement("span",null,a.clouds.all,"%")),n.a.createElement("p",{className:"weather-info"},"Sunrise: ",n.a.createElement("span",null,new Date(1e3*a.sys.sunrise).toLocaleTimeString())),n.a.createElement("p",{className:"weather-info"},"Sunset: ",n.a.createElement("span",null,new Date(1e3*a.sys.sunset).toLocaleTimeString()))):n.a.createElement("p",null,"Loading weather data...")))};t(69);var f=()=>{const[a,e]=Object(l.useState)(null);return Object(l.useEffect)(()=>{(async()=>{const a=await(async()=>{try{return(await i.a.get("".concat("https://api.nasa.gov/","planetary/apod?api_key=").concat(c))).data}catch(a){return console.error("Error fetching NASA data:",a),null}})();e(a)})()},[]),n.a.createElement("div",{className:"nasa-page-container"},a?n.a.createElement("div",null,n.a.createElement("h1",{className:"nasa-page-header"},"Today's Astronomy Picture"),n.a.createElement("h2",null,a.title),n.a.createElement("img",{src:a.url,alt:a.title,className:"nasa-image"}),n.a.createElement("p",{className:"nasa-text"},a.explanation)):n.a.createElement("p",null,"Loading..."))},b=t(48),w=t(31),v=t(35);var N=function(){return n.a.createElement(v.a,{expand:"lg",className:"bg-body-tertiary"},n.a.createElement(b.a,null,n.a.createElement(v.a.Brand,{as:d.b,to:"/"},"Star Gazer"),n.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(w.a,{className:"me-auto"},n.a.createElement(w.a.Link,{as:d.b,to:"/"},"Weather"),n.a.createElement(w.a.Link,{as:d.b,to:"/nasa"},"NASA Today's Astronomy Picture"),n.a.createElement(w.a.Link,{as:d.b,to:"/nasaData"},"NASA Coronal Mass Ejection (CME) Analysis"),n.a.createElement(w.a.Link,{as:d.b,to:"/media"},"NASA Picture Search")))))},S=t(36),C=t(50),A=t(49);t(74);var k=()=>{const[a,e]=Object(l.useState)([]);Object(l.useEffect)(()=>{(async()=>{const a=await u();e(a)})()},[]);const t=["Primary","Secondary","Success","Danger","Warning","Info","Light","Dark"],o=["primary","secondary","success","danger","warning","info","dark","light"];return n.a.createElement("div",{className:"cme-analysis-container"},n.a.createElement("h1",{className:"cme-header"},"NASA Coronal Mass Ejection (CME) Analysis"),n.a.createElement("div",{className:"cme-introduction"},n.a.createElement("p",null,"The sun is constantly emitting streams of charged particles, known as the solar wind, that interact with the Earth's magnetic field and atmosphere. Sometimes, the sun also releases huge bursts of plasma and magnetic field, called coronal mass ejections (CMEs), that can travel across the solar system and affect planets and spacecraft along their way. In this page, you will learn more about what CMEs are, how they form, how they impact human life and technology, and how NASA monitors and analyzes them using data from various sources."),n.a.createElement("p",null,"CMEs impact Earth and other planets in our solar system, leading to geomagnetic storms that can disrupt satellite operations, telecommunications, navigation systems, and even power grids. Here is CME Analysis of recent 30 days from NASA.")),n.a.createElement(A.a,{xs:1,md:5,className:"g-4 card-row"},a.length>0?a.map((a,e)=>n.a.createElement(C.a,{key:e},n.a.createElement(S.a,{bg:t[e%t.length].toLowerCase(),border:o[e%o.length],text:"light"===t[e%t.length].toLowerCase()?"dark":"white",style:{width:"18rem",marginBottom:"1rem"}},n.a.createElement(S.a.Body,null,n.a.createElement(S.a.Title,null,"CME Analysis Data"),n.a.createElement(S.a.Text,null,n.a.createElement("p",null,"Time: ",a.time21_5),n.a.createElement("p",null,"Latitude: ",a.latitude),n.a.createElement("p",null,"Longitude: ",a.longitude),n.a.createElement("p",null,"Half Angle: ",a.halfAngle),n.a.createElement("p",null,"Speed: ",a.speed),n.a.createElement("p",null,"Type: ",a.type),n.a.createElement("p",null,"Most Accurate: ",a.isMostAccurate?"Yes":"No"),n.a.createElement("p",null,"Associated CME ID: ",a.associatedCMEID),n.a.createElement("p",null,"Note: ",a.note),n.a.createElement("p",null,"Catalog: ",a.catalog),n.a.createElement("a",{href:a.link,target:"_blank",rel:"noopener noreferrer"},"View More")))))):n.a.createElement("p",null,"No CME Analysis Data Available")))};var M=function(){return n.a.createElement(d.a,null,n.a.createElement(N,null),n.a.createElement(p.c,null,n.a.createElement(p.a,{path:"/",element:n.a.createElement(y,null)}),n.a.createElement(p.a,{path:"/nasa",element:n.a.createElement(f,null)}),n.a.createElement(p.a,{path:"/nasaData",element:n.a.createElement(k,null)}),n.a.createElement(p.a,{path:"/media",element:n.a.createElement(h,null)})))};var D=a=>{a&&a instanceof Function&&t.e(3).then(t.bind(null,78)).then(e=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:o,getTTFB:r}=e;t(a),l(a),n(a),o(a),r(a)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(M,null))),D()}},[[52,1,2]]]);
//# sourceMappingURL=main.20bf1327.chunk.js.map