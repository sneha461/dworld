angular.module('myApp').controller('loginController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.login = function () {

 
      $scope.error = false;
      $scope.disabled = true; 
      var email = $scope.loginForm.email;
      var password = $scope.loginForm.password;
      AuthService.login(email,password)
      
        .then(function () {
          $location.path('/home');
          $scope.disabled = false;
          $scope.loginForm = {};
        })
        
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and/or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        })
      };

     }]); 
       
  



angular.module('myApp').controller('registerController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.register = function () {

      $scope.error = false;
      $scope.disabled = true;
      var email = $scope.registerForm.email;
      var password = $scope.registerForm.password;

      
      AuthService.register(email,password)
        .then(function () {
          $location.path('/');
           
          $scope.disabled = false;
          $scope.registerForm = {};
        })
        
        .catch(function () {
          $scope.error = true;
          
          $scope.errorMessage = "User already registered or Invalid username and password";
          $scope.disabled = false;
          $scope.registerForm = {};
        })

    };
  }]);


angular.module('myApp').controller('logoutController',
   ['$scope','$location','AuthService',
   function ($scope,$location,AuthService){


    $scope.logout = function() {
       AuthService.logout()
       .then(function() {
        $location.path('/');
       })
     };
   }]);

