var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function ($routeProvider) {
  
  $routeProvider
    .when('/home', {
      templateUrl: '/static/partial/home.html'
    })

    .when('/', {
      templateUrl: '/static/partial/login.html',
      controller: 'loginController'
    })


    .when('/register', {
      templateUrl: 'static/partial/register.html',
      controller: 'registerController'
     
    })

    .when('/logout',{
      controller:'logoutController'
     
    })


    .when('/add',{
      templateUrl: 'static/partial/add.html',
      controller: 'addController'

    })

    .when('/update',{
      templateUrl: 'static/partial/update.html',
      controller: 'updateController'

    })

    .when('/remove',{
      templateUrl:'static/partial/remove.html',
      controller: 'removeController'
    })



    .when('/search',{
      templateUrl:'static/partial/search.html',
      controller: 'searchController'
    })
    .when('/list',{
      templateUrl:'static/partial/list.html',
      controller:'listController'
    })
});


