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
          $location.path('/');
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