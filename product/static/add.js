
 angular.module('myApp').controller('addController',
       ['$scope','$location','AuthService',
       function ($scope, $location,AuthService) {

         $scope.add = function() {
           $scope.error = false;
          
           $scope.disabled = true;
           var id = $scope.addForm.id;
           var name= $scope.addForm.name;
           var model_no = $scope.addForm.model_no;
           var color= $scope.addForm.color;
           var category = $scope.addForm.category;
           var size = $scope.addForm.size
           var mfg_date = $scope.addForm.mfg_date;
           var price = $scope.addForm.price;
           
           AuthService.add(id,name,model_no,color,category,size,mfg_date,price)
           
             .then(function () {
               $scope.success = true;
               $scope.successMessage = " added successfully"
          
               $scope.disabled = false;
           
               $scope.addForm = {};
            })
        
             .catch(function () {
               $scope.error = true;
               $scope.errorMessage = "added failed"
               $scope.disabled = false;
               $scope.addForm = {};
          })


 };

  }]);
