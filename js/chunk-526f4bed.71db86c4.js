(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-526f4bed"],{"6d23":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB5SURBVHgB7dfBCYAwEETR0Qoswc6SzreEpAPNQg5R4kGFnct8GMnNBwoi8L7UVtqsnyn5jY9hBYTuCJ8huBnClxGYEEIIIcRXRNTMDUs/7OBW13bZwK/6JYP7aAqGd/EJk0AoQxhhhBEmHkP5r5lhDMRyB1y+EX87AdxCwzt7prpuAAAAAElFTkSuQmCC"},7182:function(e,t,r){},dd69:function(e,t,r){"use strict";r("7182")},e85a:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"UserSelfContainer"},[s("Navbar",{attrs:{id:"Navbar"}}),s("div",{staticClass:"UserFollowingsMain"},[s("div",{staticClass:"userTitle"},[s("router-link",{attrs:{to:{name:"user-other",params:{id:e.user.id,type:"tweets"}}}},[s("img",{staticClass:"backIcon",attrs:{src:r("6d23"),alt:""}})]),s("div",{staticClass:"userInfo"},[s("h1",{staticClass:"infoName"},[e._v(e._s(e.user.name))]),s("span",{staticClass:"infoTweetsNumber"},[e._v(e._s(e.currentTweets.length)+"則推文")])])],1),s("ul",{staticClass:"tabs"},[s("li",[s("router-link",{staticClass:"tabsFollowers",attrs:{to:{name:"user-followers",params:{id:e.user.id}}}},[e._v("追隨者")])],1),s("li",[s("router-link",{staticClass:"tabsFollowings",attrs:{to:{name:"user-followings",params:{id:e.user.id}}}},[e._v("正在追隨")])],1)]),e._l(e.followings,(function(t){return s("div",{key:t.followingId,staticClass:"followings"},[s("router-link",{attrs:{to:{name:"user-other",params:{id:t.followingId,type:"tweets"}}}},[s("img",{staticClass:"followingsImage",attrs:{src:t.followingAvatar,alt:""}})]),s("div",{staticClass:"followingsContent"},[s("div",{staticClass:"followingsInfo"},[s("router-link",{staticClass:"followingsName",attrs:{to:{name:"user-other",params:{id:t.followingId,type:"tweets"}}}},[e._v(e._s(t.followingName))]),t.isFollowed?s("button",{directives:[{name:"show",rawName:"v-show",value:t.followingId!==e.$store.state.currentUser.id,expression:"following.followingId !== $store.state.currentUser.id"}],staticClass:"followingsFollowedBtn",attrs:{disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.deleteFollowing(t.followingId)}}},[e._v(" 正在跟隨 ")]):s("button",{directives:[{name:"show",rawName:"v-show",value:t.followingId!==e.$store.state.currentUser.id,expression:"following.followingId !== $store.state.currentUser.id"}],staticClass:"followingsFollowBtn",attrs:{disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.addFollowing(t.followingId)}}},[e._v(" 跟隨 ")])],1),s("p",{staticClass:"followingsText"},[e._v(e._s(t.followingIntroduction))])])],1)}))],2),s("PopularUsers",{attrs:{id:"PopularUsers"}})],1)},n=[],o=r("1da1"),a=(r("96cf"),r("4de4"),r("d3b7"),r("d9e2"),r("7db0"),r("d178")),i=r("f963"),l=r("4cce"),c=r("dfd8"),u=r("4360"),w={components:{Navbar:a["a"],PopularUsers:i["a"]},data:function(){return{isProcessing:!1,followings:[],currentTweets:[],user:{Followers:-1,Followings:-1,account:"",avatar:"",cover:"",createdAt:"",email:"",id:-1,introduction:"",isFollowed:!1,name:"",role:"",updatedAt:""}}},beforeRouteUpdate:function(e,t,r){var s=e.params.id;this.fetchFollowings(s),this.fetchUser(s),this.fetchTweets(s),r()},created:function(){var e=this.$route.params.id;this.fetchFollowings(e),this.fetchUser(e),this.fetchTweets(e)},methods:{fetchFollowings:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].getUserFollowings({id:e});case 3:s=r.sent,n=s.data,u["a"].state.currentUser.id===e?(o=n.filter((function(e){return!0===e.isFollowed})),t.followings=o):t.followings=n,r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),c["a"].fire({icon:"error",title:"無法取得資料，請稍候再試"});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},fetchUser:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].getUser({id:e});case 3:if(s=r.sent,n=s.data,"error"!==n.status){r.next=7;break}throw new Error(n.message);case 7:t.user=n,r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),c["a"].fire({icon:"error",title:"無法取得資料，請稍候再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},fetchTweets:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].getUserTweets({id:e});case 3:if(s=r.sent,n=s.data,"error"!==n.status){r.next=7;break}throw new Error(n.message);case 7:t.currentTweets=n,r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),c["a"].fire({icon:"error",title:"無法取得資料，請稍候再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},addFollowing:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,l["a"].addFollowing({id:e});case 4:s=t.followings.find((function(t){return t.followingId===e})),s.isFollowed=!0,c["a"].fire({icon:"success",title:"跟隨成功"}),t.isProcessing=!1,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),t.isProcessing=!1,c["a"].fire({icon:"error",title:"跟隨失敗"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteFollowing:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,l["a"].deleteFollowing({id:e});case 4:s=t.followings.find((function(t){return t.followingId===e})),s.isFollowed=!1,c["a"].fire({icon:"success",title:"取消跟隨成功"}),t.isProcessing=!1,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),t.isProcessing=!1,c["a"].fire({icon:"error",title:"取消跟隨失敗"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},d=w,f=(r("dd69"),r("2877")),g=Object(f["a"])(d,s,n,!1,null,"239e60a0",null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-526f4bed.71db86c4.js.map