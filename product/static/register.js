
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
          $location.path('/login');
           
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