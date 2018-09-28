angular.module('myApp').controller('removeController',
       ['$scope','$location','AuthService',
       function ($scope, $location,AuthService) {

         $scope.remove = function() {
           $scope.error = false;
          
           $scope.disabled = true;
       
           var id = $scope.removeForm.id;
           

           AuthService.remove(id)
          
             .then(function () {
              
               $scope.success = true;
                
               $scope.successMessage = " deleted successfully"
          
               $scope.disabled = false;
              
               $scope.removeForm = {};
            })
        
              .catch(function () {
                $scope.error = true;
               
                $scope.errorMessage = "deleted failed"
                $scope.disabled = false;
                $scope.removeForm = {};
            })


 };

  }]);