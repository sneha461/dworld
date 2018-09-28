

 angular.module('myApp').controller('updateController',
       ['$scope','$location','AuthService',
       function ($scope, $location, AuthService) {

         $scope.update = function() {
           $scope.error =   false;
           $scope.disabled = true;
          
           var id = $scope.updateForm.id;
           var name= $scope.updateForm.name;
           var model_no = $scope.updateForm.model_no;
           var color= $scope.updateForm.color;
           var category = $scope.updateForm.category;
           var size = $scope.updateForm.size
           var mfg_date = $scope.updateForm.mfg_date;
           var price = $scope.updateForm.price;

           AuthService.update(id,name,model_no,color,category,size,mfg_date,price)

         
          .then(function () {
           
            $scope.success = true;
            $scope.successMessage = "updated successfully"
            
            $scope.disabled = false;
            $scope.updateForm = {};
         })
        
          .catch(function () {
            $scope.error = true;
            $scope.errorMessage = "updated failed"
            $scope.disabled = false;
            $scope.updateForm = {};
         })
 };
  }]);