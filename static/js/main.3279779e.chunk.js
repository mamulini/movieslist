(this.webpackJsonpreactwarriors=this.webpackJsonpreactwarriors||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),i=a.n(c),s=(a(14),a(15),a(8)),r=a(1),l=a(2),m=a(4),u=a(3),v=a(5),h=(a(16),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={willWatch:!1},e}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.removeMovie,c=t.addMoviesToWillWatch,i=t.removeMovieFromWillWatch;return o.a.createElement("div",{key:a.id,className:"movie__item"},o.a.createElement("div",{className:"movie__poster"},o.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(a.poster_path)})),o.a.createElement("h1",{className:"movie__title"},a.title),o.a.createElement("span",{className:"movie__rank"},o.a.createElement("i",{class:"fab fa-imdb"})," ",a.vote_average),this.state.willWatch?o.a.createElement("button",{type:"button",className:"willWatch__btn--success",onClick:function(){e.setState({willWatch:!1}),i(a)}},"Remove Will Watch"):o.a.createElement("button",{type:"button",className:"willWatch__btn",onClick:function(){e.setState({willWatch:!0}),c(a)}},"Add Will Watch "),o.a.createElement("button",{className:"movie__btn",onClick:n.bind(null,a),type:"button"},"Delete movie"))}}]),t}(o.a.Component)),d=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sortBy,a=e.updateSortBy,n=function(e){return function(){a(e)}},c=function(e){return t===e?"active":""};return o.a.createElement("ul",{className:"movie__tabs nav nav__pils"},o.a.createElement("li",{className:"nav__item"},o.a.createElement("div",{className:"nav__link ".concat(c("popularity.desc")),onClick:n("popularity.desc")},"Popularity desc")),o.a.createElement("li",{className:"nav__item"},o.a.createElement("div",{className:"nav__link ".concat(c("revenue.desc")),onClick:n("revenue.desc")},"Revenue desc")),o.a.createElement("li",{className:"nav__item"},o.a.createElement("div",{className:"nav__link ".concat(c("vote_average.desc")),onClick:n("vote_average.desc")},"Vote average desc")))}}]),t}(o.a.Component),f=function(e){var t=e.item;return o.a.createElement("div",{key:t.id,className:"wishList"},o.a.createElement("h3",{className:"wishList__head"},t.title),o.a.createElement("span",{className:"movie__rank"},o.a.createElement("i",{class:"fab fa-imdb"})," ",t.vote_average))},p="https://api.themoviedb.org/3",_="3f4ca4f3a9750da53450646ced312397",g=(a(17),function(e){for(var t=e.pages,a=e.nextPage,n=e.currentPage,c=[],i=function(e){var t=n==e?"active":"";c.push(o.a.createElement("li",{className:"waves-effect ".concat(t),key:e,onClick:function(){return a(e)}},o.a.createElement("a",{href:"#"},e)))},s=1;s<=t+1;s++)i(s);return o.a.createElement("div",{className:"pagination__container"},o.a.createElement("div",{className:"row"},o.a.createElement("ul",{className:"pagination"},n>1?o.a.createElement("li",{className:"waves-effect",onClick:function(){return a(n-1)}},o.a.createElement("a",{href:"#!"},"Prev")):"",c,n<t+1?o.a.createElement("li",{className:"waves-effect",onClick:function(){return a(n+1)}},o.a.createElement("a",{href:"#!"},"Next")):"")))}),W=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).getmMovies=function(){fetch("".concat(p,"/discover/movie?api_key=").concat(_,"&sort_by=").concat(e.state.sortBy)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results,totalPages:t.total_pages,totalResults:t.total_results}),console.log(t)}))},e.removeMovie=function(t){var a=e.state.movies.filter((function(e){return e.id!==t.id}));e.setState({movies:a})},e.addMoviesToWillWatch=function(t){var a=Object(s.a)(e.state.moviesWillWatch);a.push(t),console.log(a),e.setState({moviesWillWatch:a})},e.removeMovieFromWillWatch=function(t){var a=e.state.moviesWillWatch.filter((function(e){return e.id!==t.id}));e.setState({moviesWillWatch:a})},e.updateSortBy=function(t){e.setState({sortBy:t})},e.nextPage=function(t){fetch("".concat(p,"/discover/movie?api_key=").concat(_,"&sort_by=").concat(e.state.sortBy,"&page=").concat(t)).then((function(e){return e.json()})).then((function(a){e.setState({movies:a.results,totalPages:a.total_pages,currentPage:t})}))},e.state={movies:[],moviesWillWatch:[],sortBy:"popularity.desc",totalResults:0,currentPage:1,page:5,totalPages:0},console.log("Constructor"),e}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getmMovies(),console.log("componentDidMount")}},{key:"componentDidUpdate",value:function(e,t){t.sortBy!==this.state.sortBy&&(this.getmMovies(),console.log("compoDidupdate"))}},{key:"render",value:function(){var e=this,t=Math.floor(this.state.totalResults/20);return console.log("render"),o.a.createElement("div",{className:"container"},o.a.createElement(d,{sortBy:this.state.sortBy,updateSortBy:this.updateSortBy}),o.a.createElement("div",{className:"movie__wrapper"},o.a.createElement("div",{className:"movies"},this.state.movies.map((function(t){return o.a.createElement(h,{removeMovie:e.removeMovie,addMoviesToWillWatch:e.addMoviesToWillWatch,movie:t,removeMovieFromWillWatch:e.removeMovieFromWillWatch})}))),o.a.createElement("div",{className:"willWatch"},o.a.createElement("p",null,"Will watch: ",this.state.moviesWillWatch.length," movies"),o.a.createElement("div",null,this.state.moviesWillWatch.map((function(e){return o.a.createElement(f,{item:e})}))))),this.state.totalResults>20?o.a.createElement(g,{pages:t,nextPage:this.nextPage,currentPage:this.state.curentPage}):"")}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.3279779e.chunk.js.map