var App;App=window.App=angular.module("adminApp",["ngRoute","ngProgress","adminApp.services","adminApp.filters","adminApp.controllers"]).config(["$routeProvider","$locationProvider",function(a,b){return a.when("/admin/",{controller:"IndexController",templateUrl:"/private/js/angular/partials/home.html"}).otherwise({redirectTo:"/admin/"}),b.html5Mode(!0)}]),angular.module("adminApp.controllers",[]).controller("IndexController",["$scope","$timeout","ngProgress",function(a,b,c){return c.start(),b(function(){return c.complete()},1e3),a.title="Index Controller",a.x=3,a.y=4,a.doubleIt=function(){return a.x*=2,a.y*=2}}]),angular.module("adminApp.filters",[]).filter("interpolate",["version",function(a){return function(b){return String(b).replace(/\%VERSION\%/gm,a)}}]),angular.module("adminApp.services",[]).value("version","1.0");