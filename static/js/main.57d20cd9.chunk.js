(this.webpackJsonpharmonyslides=this.webpackJsonpharmonyslides||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),i=t.n(r),c=(t(12),t(1)),s=t(2),o=t(4),u=t(3),m=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",null,l.a.createElement("div",{className:"logo"},l.a.createElement("i",{class:"fas fa-globe",style:{fontSize:30,color:"white"}}),l.a.createElement("p",{style:{marginLeft:"20px"}},"GLOBAL ADVENTURES")),l.a.createElement("div",{className:"navi"},window.innerWidth<576?null:l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"HOME")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"HOLIDAYS")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"TEAMS")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"LOCATION")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"CONTACTS")),l.a.createElement("li",null,l.a.createElement("i",{class:"fas fa-search"})),l.a.createElement("li",null,l.a.createElement("i",{class:"fas fa-portrait"})))))}}]),t}(l.a.Component),d=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={num:1,val:16.6},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.setState((function(a){return 6==e.state.num&&e.setState({num:1,val:16.6}),{num:a.num+1,val:a.val+16.6}}))}),4e3)}},{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"circle"},l.a.createElement("i",{class:"fas fa-angle-left"})),l.a.createElement("div",{className:"circle"},l.a.createElement("i",{class:"fas fa-angle-right"})),l.a.createElement("progress",{max:"100",value:this.state.val}),l.a.createElement("div",{className:"number"},l.a.createElement("h2",null,this.state.num)))}}]),t}(l.a.Component),p=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"slide",style:{backgroundImage:this.props.image}}))}}]),t}(l.a.Component),v=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={images:["url(images/pic1.jpg)","url(images/pic2.jpg)","url(images/pic3.jpg)","url(images/pic4.jpg)","url(images/pic5.jpg)","url(images/pic6.jpg)"],display:"url(images/pic1.jpg)"},e}return Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;window.onload=function(){var e=document.querySelector(".preloader"),a=document.querySelector(".main");e.classList.add("hide"),a.style.display="block"},this.interval=setInterval((function(){var a=0,t=e.state.images[a],n=e.state.images.filter((function(a){return!(e.state.images[0]===a)}));n.push(t),e.setState({images:n}),e.setState({display:n[0]}),a+=1}),4e3)}},{key:"render",value:function(){var e={backgroundImage:this.state.display,width:"100%",display:"none",height:"100vh",backgroundSize:"cover",backgroundRepeat:"no-repeat",transition:"all 1s ease-out"},a=this.state.images.map((function(e){return l.a.createElement(p,{image:e})}));return l.a.createElement("div",null,l.a.createElement("div",{className:"preloader"},l.a.createElement("img",{src:"images/Ripple-2.6s-231px.svg",width:"50%"})),l.a.createElement("div",{style:e,className:"main"},l.a.createElement(m,null),l.a.createElement("div",{className:"slidediv"},a),l.a.createElement(d,null)))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(13);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.57d20cd9.chunk.js.map