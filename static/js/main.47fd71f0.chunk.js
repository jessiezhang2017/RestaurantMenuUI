(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(99)},39:function(e,t,a){},41:function(e,t,a){},57:function(e,t,a){},77:function(e,t,a){},80:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(30),i=a.n(s),l=(a(39),a(5)),o=a(6),c=a(8),u=a(7),m=a(9),d=a(4),h=(a(41),a(16)),v=a.n(h);v.a.initializeApp({apiKey:"AIzaSyDm6OrLeVF3mSl6XuhYuu_vrrkg1CaaD8c",authDomain:"restaurant-menu-ui.firebaseapp.com",databaseURL:"https://restaurant-menu-ui.firebaseio.com",projectId:"restaurant-menu-ui",storageBucket:"restaurant-menu-ui.appspot.com",messagingSenderId:"226933753045"});var p=new v.a.auth.GoogleAuthProvider,g=v.a.auth(),E=(v.a,a(102)),b=a(101),f=a(103),w=a(31),N=(a(57),a(3)),S=a.n(N),O=a(17),j=a.n(O),y=(a(77),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).changeReview=function(){a.setState({viewReview:!a.state.viewReview})},a.state={reviewList:[],viewReview:!1},a.changeReview=a.changeReview.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props._id;S.a.get("http://localhost:8080/reviews/dishes/"+t).then(function(t){console.log(t.data),e.setState({reviewList:t.data})}).catch(function(t){console.log(t.message),e.setState({errorMessage:t.message})})}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.overallRating,n=this.state,s=n.reviewList,i=n.viewReview,l=parseFloat(a).toFixed(1),o=null;s&&(o=s.length);var c=s.map(function(e){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,e.userName," :")),r.a.createElement("li",null,"rating: ",e.rating),r.a.createElement("li",null,"comment: ",e.comment))});return r.a.createElement("div",{className:"dish-card"},r.a.createElement("section",{className:"dish-card--details"},o?r.a.createElement("div",null,t," :",r.a.createElement(j.a,{placeholderRating:l,fraction:5,placeholderSymbol:"fa fa-star fa-1x",emptySymbol:"fa fa-star-o fa-1x",fullSymbol:"fa fa-star fa-1x"}),i?r.a.createElement("button",{className:"badge badge-secondary",onClick:this.changeReview},"collapse"):r.a.createElement("button",{className:"badge badge-secondary",onClick:this.changeReview},"expand")):r.a.createElement("div",null),i?r.a.createElement("div",null,c):r.a.createElement("div",null)))}}]),t}(n.Component)),C=(a(29),a(80),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={dishList:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.id;S.a.get("http://www.localhost:8080/menus/restaurants/"+t).then(function(t){e.setState({dishList:t.data})}).catch(function(t){console.log(t.message),e.setState({errorMessage:t.message})})}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.name,n=e.photo,s=e.location,i=this.state.dishList,l=i.filter(function(e){return"overall"===e.name}).sort(function(e,t){return t.overallRating-e.overallRating}).slice(0,3),o=(l.length,l.map(function(e){return r.a.createElement(y,Object.assign({key:e.id},e))})),c=i.filter(function(e){return"overall"!==e.name}).sort(function(e,t){return t.overallRating-e.overallRating}).slice(0,3),u=(c.length,c.map(function(e){return r.a.createElement(y,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"restaurant-card"},r.a.createElement("section",{className:"restaurant-card--img"},r.a.createElement("img",{src:n,alt:"food_post"})),r.a.createElement("section",{className:"restaurant-card--details"},r.a.createElement("h3",null,r.a.createElement(b.a,{to:"/restaurant/".concat(t)},a)),r.a.createElement("p",null,"Address: ",s),o,u))}}]),t}(n.Component)),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=encodeURIComponent(a.state.cuisine),n=a.state.count;S.a.get("http://localhost:8080/restaurants/cuisine/"+t+"/"+n).then(function(e){a.setState({restaurantSearchResult:e.data})}).catch(function(e){a.setState({errorMessage:e.message})})},a.getNext=function(e){e.preventDefault();var t=encodeURIComponent(a.state.cuisine),n=a.state.count+20;S.a.get("http://localhost:8080/restaurants/cuisine/"+t+"/"+n).then(function(e){a.setState({restaurantSearchResult:e.data,count:n})}).catch(function(e){a.setState({errorMessage:e.message})})},a.getNext=function(e){e.preventDefault();var t=encodeURIComponent(a.state.cuisine),n=a.state.count+20;S.a.get("http://localhost:8080/restaurants/cuisine/"+t+"/"+n).then(function(e){a.setState({restaurantSearchResult:e.data,count:n})}).catch(function(e){a.setState({errorMessage:e.message})})},a.getPrevious=function(e){var t=parseInt(a.state.count)-20;t<0&&(t=0),a.setState({count:t})},a.state={user:e.user,cuisine:"",restaurantSearchResult:[],count:0},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a.getNext=a.getNext.bind(Object(d.a)(Object(d.a)(a))),a.getPrevious=a.getPrevious.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.restaurantSearchResult.map(function(t){return r.a.createElement(C,{key:t.id,id:t.id,name:t.name,photo:t.thumb,location:t.location.address,overallRating:t.user_rating.aggregate_rating,menuUrl:t.menu_url,user:e.props.user})});return r.a.createElement("div",{className:"search"},r.a.createElement("section",{className:"container"},r.a.createElement("form",{className:"form-group",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("select",{type:"text",className:"selcls",name:"cuisine",value:this.cuisine,onChange:this.handleChange},r.a.createElement("option",{value:""},"Select cuisine"),r.a.createElement("option",{value:"152"},"Africa"),r.a.createElement("option",{value:"1"},"America"),r.a.createElement("option",{value:"3"},"Asian"),r.a.createElement("option",{value:"151"},"Argentine"),r.a.createElement("option",{value:"131"},"Australian"),r.a.createElement("option",{value:"193"},"BBQ"),r.a.createElement("option",{value:"5"},"Bar Food"),r.a.createElement("option",{value:"30"},"cafe"),r.a.createElement("option",{value:"25"},"Chinese"),r.a.createElement("option",{value:"38"},"European"),r.a.createElement("option",{value:"45"},"Franch"),r.a.createElement("option",{value:"134"},"German"),r.a.createElement("option",{value:"156"},"Greek"),r.a.createElement("option",{value:"181"},"Grill"),r.a.createElement("option",{value:"148"},"Indian"),r.a.createElement("option",{value:"55"},"Italian"),r.a.createElement("option",{value:"60"},"Japanese"),r.a.createElement("option",{value:"67"},"Korean"),r.a.createElement("option",{value:"59"},"Malaysian"),r.a.createElement("option",{value:"70"},"Mediterranean"),r.a.createElement("option",{value:"73"},"Mexican"),r.a.createElement("option",{value:"963"},"Pacific Northwest"),r.a.createElement("option",{value:"82"},"Pizza"),r.a.createElement("option",{value:"983"},"Pub Food"),r.a.createElement("option",{value:"320"},"Ramen"),r.a.createElement("option",{value:"998"},"Salad"),r.a.createElement("option",{value:"304"},"Sandwich"),r.a.createElement("option",{value:"83"},"Seafood"),r.a.createElement("option",{value:"128"},"Sichuan"),r.a.createElement("option",{value:"267"},"South African"),r.a.createElement("option",{value:"966"},"Southwestern"),r.a.createElement("option",{value:"89"},"Spanish"),r.a.createElement("option",{value:"141"},"Steak"),r.a.createElement("option",{value:"177"},"Sushi"),r.a.createElement("option",{value:"997"},"Taco"),r.a.createElement("option",{value:"190"},"Taiwanese"),r.a.createElement("option",{value:"964"},"Teriyaki"),r.a.createElement("option",{value:"95"},"Thai"),r.a.createElement("option",{value:"99"},"Vietnamese"),r.a.createElement("option",{value:"308"},"Vegetarian")),r.a.createElement("input",{type:"submit",value:"search",className:"input-group-append"}),r.a.createElement("button",{className:"input-group-append",onClick:this.getPrevious},"\xab"),r.a.createElement("button",{className:"input-group-append",onClick:this.getNext},"\xbb")))),r.a.createElement("section",{className:"search_result"},t))}}]),t}(n.Component),R=a(33),I=(a(84),a(86),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).resetState=function(){a.setState({rating:null})},a.onFormChange=function(e){var t=e.target.name,n=e.target.value,r={};r[t]=n,a.setState(r)},a.onSubmit=function(e){var t=a.state,n=t.rating,r=t.comment,s=a.props,i=s._id,l=s.dishId,o=s.userId,c=s.userName;if(n!==a.props.rating||n!==a.props.comment){var u={_id:i,dishId:l,userId:o,userName:c,rating:n,comment:r};S.a.put("http://www.localhost:8080/reviews/"+i,u).then(function(e){a.props.editRatingCallback(),a.resetState()}).catch(function(e){a.setState({errorMessage:"Failure ".concat(e.message)})})}},a.state={rating:a.props.rating,comment:a.props.comment},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"rating-edit-container"},r.a.createElement("form",{onSubmit:this.onSubmit,name:"rating-edit-form",id:"rating-edit-form",className:"form-group"},r.a.createElement("div",null,r.a.createElement("label",{className:"rating-edit-form--label",htmlFor:"rating"},"Rating"),r.a.createElement("select",{type:"text",className:"form-control selcls ",name:"rating",onChange:this.onFormChange,value:this.state.rating},r.a.createElement("option",{value:""},"null"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"))),r.a.createElement("div",null,r.a.createElement("label",{className:"label",htmlFor:"comment"},"Comment")),r.a.createElement("div",null,r.a.createElement("textarea",{className:"form-control",rows:"3",name:"comment",onChange:this.onFormChange,value:this.state.comment})),r.a.createElement("input",{className:"btn btn-secondary rating-edit-form--submit",type:"submit",name:"submit",value:"Submit"})))}}]),t}(n.Component)),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).editRating=function(){a.setState({ratingEdit:!a.state.ratingEdit})},a.state={ratingEdit:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t._id,n=t.dishName,s=t.rating,i=t.comment,l=t.restaurantName;return r.a.createElement("div",{className:"review-card"},r.a.createElement("section",{className:"review-card--header"}),r.a.createElement("section",{className:"review-card--body"},r.a.createElement("h3",null,"Restaurant Name: ",l),r.a.createElement("p",null,r.a.createElement("strong",null,"Dish Name:")," ",n),r.a.createElement("p",null,r.a.createElement("strong",null,"Dish Rating:")," ",s),r.a.createElement("p",null,r.a.createElement("strong",null,"Comment:")," ",i),r.a.createElement("p",null,r.a.createElement("button",{onClick:this.editRating,className:"btn btn-secondary review-card--edit-review-btn"},"Edit")),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){e.props.deleteReviewCallback(a)},className:"btn btn-secondary review-card--delete-review-btn"},"Delete")),this.state.ratingEdit?r.a.createElement(I,Object.assign({editRatingCallback:this.editRating},this.props)):r.a.createElement("p",null)))}}]),t}(n.Component),F=(a(88),"http://www.localhost:8080/reviews/"),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).deleteReview=function(e){var t=-1,n=Object(R.a)(a.state.masterList);n.forEach(function(a,n){e===a.id&&(t=n)}),n.splice(t,1),a.setState({reviewList:n}),S.a.delete(F+e).then(function(e){}).catch(function(e){a.setState({errorMessage:e.message})}),window.location.reload()},a.state={reviewList:[],masterList:[]},a.deleteReview=a.deleteReview.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.user){var t=encodeURIComponent(this.props.user.uid);S.a.get("http://www.localhost:8080/reviews/users/"+t).then(function(t){e.setState({reviewList:t.data,masterList:t.data})}).catch(function(t){console.log(t.message),e.setState({errorMessage:t.message})})}}},{key:"componentDidUpdate",value:function(e){var t=this,a=this.props.user;if(e.user!==a)if(this.setState({user:this.props.user}),a){var n=encodeURIComponent(a.uid);S.a.get("http://www.localhost:8080/reviews/users/"+n).then(function(e){t.setState({reviewList:e.data,masterList:e.data})}).catch(function(e){console.log(e.message),t.setState({errorMessage:e.message})})}else this.setState({reviewList:[]})}},{key:"render",value:function(){var e=this,t=this.state.reviewList.map(function(t){return r.a.createElement(L,Object.assign({key:t.id,deleteReviewCallback:e.deleteReview},t))});return r.a.createElement("div",{className:"reviewlist"},r.a.createElement("h1",{className:"review-title"},"Reviews"),r.a.createElement("section",{className:"review-body"},t))}}]),t}(n.Component),A=(a(90),a(92),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).resetState=function(){a.setState({dishName:null})},a.onFormChange=function(e){var t=e.target.name,n=e.target.value,r={};r[t]=n,a.setState(r)},a.onSubmit=function(e){e.preventDefault();var t=a.state.dishName,n=a.props,r=n.restaurantId,s=n.restaurantName;if(null!==t&&""!==t){var i={name:t,restaurantId:r,restaurantName:s};S.a.post("http://www.localhost:8080/menus/",i).then(function(e){a.props.addDishCallback(),a.resetState()}).catch(function(e){a.setState({errorMessage:"Failure ".concat(e.message)})})}},a.state={dishName:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"dish-add-container"},r.a.createElement("form",{onSubmit:this.onSubmit,name:"dish-add-form",id:"dish-add-form",className:"form-group"},r.a.createElement("div",null,r.a.createElement("label",{className:"dish-add-form--label",htmlFor:"dishName"},"Dish Name"),r.a.createElement("input",{className:"form-control dish-add-form--dishName",name:"dishName",placeholder:"dish name",onChange:this.onFormChange,value:this.state.dishName})),r.a.createElement("input",{className:"btn btn-secondary dish-add-form--submit",type:"submit",name:"submit",value:"Submit"})))}}]),t}(n.Component)),M=(a(94),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).resetState=function(){a.setState({dishId:null,rating:null,comment:null})},a.onFormChange=function(e){var t=e.target.name,n=e.target.value,r={};r[t]=n,a.setState(r)},a.onSubmit=function(e){var t=a.state,n=t.dishId,r=t.rating,s=t.comment,i=a.props.user,l=i.uid,o=i.displayName,c=i.photoURL;if(null!==n&&""!==n&&""!==r&&null!==r){var u={dishId:n,userId:l,userName:o,userImg:c,rating:r,comment:s};S.a.post("http://www.localhost:8080/reviews/",u).then(function(e){a.props.addReviewCallback(),a.resetState()}).catch(function(e){a.setState({errorMessage:"Failure ".concat(e.message)})})}},a.state={dishId:null,rating:null,comment:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.dishList.map(function(e){return r.a.createElement("option",{value:e._id},e.name)});return r.a.createElement("section",{className:"review-add-container"},r.a.createElement("form",{onSubmit:this.onSubmit,name:"review-add-form",id:"review-add-form",className:"form-group"},r.a.createElement("div",null,r.a.createElement("label",{className:"review-add-form--label",htmlFor:"dishId"},"Dish Name"),r.a.createElement("select",{type:"text",className:"form-control selcls ",name:"dishId",onChange:this.onFormChange,value:this.state.dishId},r.a.createElement("option",{value:""}),e)),r.a.createElement("div",null,r.a.createElement("label",{className:"review-add-form--label",htmlFor:"rating"},"Rating"),r.a.createElement("select",{type:"text",className:"form-control selcls ",name:"rating",onChange:this.onFormChange,value:this.state.rating},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"))),r.a.createElement("div",null,r.a.createElement("label",{className:"review-add-form--label",htmlFor:"rating"},"Comment"),r.a.createElement("textarea",{className:"form-control",rows:"3",name:"comment",placeholder:"comment",onChange:this.onFormChange,value:this.state.comment})),r.a.createElement("input",{className:"btn btn-secondary review-add-form--submit",type:"submit",name:"submit",value:"Submit"})))}}]),t}(n.Component)),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getDishList=function(){var e=a.props.match.params.id;S.a.get("http://www.localhost:8080/menus/restaurants/"+e).then(function(e){a.setState({dishList:e.data})}).catch(function(e){console.log(e.message),a.setState({errorMessage:e.message})})},a.addDish=function(){a.setState({dishAddition:!a.state.dishAddition}),a.getDishList()},a.addReview=function(){a.setState({reviewAddition:!a.state.reviewAddition})},a.addOverall=function(){var e=a.state,t={name:"overall",restaurantId:e.restaurantId,restaurantName:e.restaurantName};S.a.post("http://www.localhost:8080/menus/",t).then(function(e){a.setState({overallAddition:!0})}).catch(function(e){a.setState({errorMessage:"Failure ".concat(e.message)})}),window.location.reload()},a.state={restaurantId:null,restaurantName:null,menuUrl:null,photo:null,overallRating:null,location:null,dishList:[],dishAddition:!1,reviewAddition:!1,user:a.props.user},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("ttttt"),console.log(this.props);var t=this.props.match.params.id;S.a.get("http://www.localhost:8080/restaurants/"+t).then(function(t){var a=t.data,n=a.id,r=a.name,s=a.thumb;e.setState({restaurantId:n,restaurantName:r,menuUrl:t.data.menu_url,photo:s,overallRating:t.data.user_rating.aggregate_rating,location:t.data.location.address})}).catch(function(t){console.log(t.message),e.setState({errorMessage:t.message})}),this.getDishList()}},{key:"render",value:function(){var e=this.state.dishList,t=e.filter(function(e){return"overall"===e.name}).map(function(e){return r.a.createElement(y,Object.assign({key:e._id},e))}),a=e.filter(function(e){return"overall"!==e.name}).sort(function(e,t){return t.overallRating-e.overallRating}).map(function(e){return r.a.createElement(y,Object.assign({key:e._id},e))}),n=this.state.dishList.map(function(e){return e.name}).includes("overall");return r.a.createElement("div",{className:"restaurant-detail"},r.a.createElement("section",{className:"restaurant-detail--img"},r.a.createElement("img",{src:this.state.photo,alt:"food_post"})),r.a.createElement("section",{className:"restaurant-detail--details"},r.a.createElement("h3",null,this.state.restaurantName),r.a.createElement("p",null,"Address: ",this.state.location),r.a.createElement("p",null,r.a.createElement("a",{rel:"noopener noreferrer",href:this.state.menuUrl,target:"_blank"},"Menu"))),t,a,this.props.user?r.a.createElement("div",{class:"buttons"},r.a.createElement("p",null,r.a.createElement("button",{onClick:this.addDish,className:"btn btn-secondary restaurant-detail--add-dish-btn"},"Add a dish")),this.state.dishAddition?r.a.createElement(A,{addDishCallback:this.addDish,restaurantId:this.state.restaurantId,restaurantName:this.state.restaurantName}):r.a.createElement("p",null),r.a.createElement("p",null,r.a.createElement("button",{onClick:this.addReview,className:"btn btn-secondary restaurant-detail--add-review-btn"},"Add a review ")),n?r.a.createElement("p",null):r.a.createElement("p",null,r.a.createElement("button",{onClick:this.addOverall,className:"btn btn-secondary restaurant-detail--add-review-btn"},"overall review?")),this.state.reviewAddition?r.a.createElement(M,{addReviewCallback:this.addReview,user:this.props.user,dishList:this.state.dishList}):r.a.createElement("p",null)):r.a.createElement("p",{class:"text-danger"}," Please log in to write reviews "))}}]),t}(n.Component),_=(a(96),function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-3"},"Welcome to Foodie Finds"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",{className:"lead"},"A website will tell you what to order at a restaurant."),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",{className:"lead"},"I am a foodie, and I eat everything! "))}),U=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={user:null},e.login=e.login.bind(Object(d.a)(Object(d.a)(e))),e.logout=e.logout.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"logout",value:function(){var e=this;g.signOut().then(function(){e.setState({user:null})})}},{key:"login",value:function(){var e=this;g.signInWithPopup(p).then(function(t){var a=t.user;e.setState({user:a})})}},{key:"componentDidMount",value:function(){var e=this;g.onAuthStateChanged(function(t){t&&e.setState({user:t})})}},{key:"render",value:function(){var e,t,a=this;return null!=this.state.user&&(e=this.state.user.uid,t=this.state.user.displayName),r.a.createElement(E.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg"},r.a.createElement("h1",{className:"navbar-brand"},"Foodie Finds"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(b.a,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/search",className:"nav-link"},"Search")),this.state.user?r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/dashboard",className:"nav-link"},"Dashboard")):r.a.createElement("li",null)),this.state.user?r.a.createElement("div",{className:"user-profile"},r.a.createElement("img",{className:"user-profile-img",src:this.state.user.photoURL,alt:"user"})):r.a.createElement("div",null),r.a.createElement("section",{className:"log"},this.state.user?r.a.createElement("button",{className:"btn btn-secondary my-2 my-sm-0",onClick:this.logout},"Log Out"):r.a.createElement("button",{className:"btn btn-secondary my-2 my-sm-0",onClick:this.login},"Log In"))))),r.a.createElement(f.a,{path:"/",exact:!0,component:_}),r.a.createElement(f.a,{path:"/search/",render:function(){return r.a.createElement(k,{uid:e,username:t})}}),r.a.createElement(f.a,{path:"/dashboard/",render:function(){return r.a.createElement(D,{user:a.state.user})}}),r.a.createElement(f.a,{path:"/restaurant/:id",render:function(e){return r.a.createElement(x,Object.assign({user:a.state.user},e))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,2,1]]]);
//# sourceMappingURL=main.47fd71f0.chunk.js.map