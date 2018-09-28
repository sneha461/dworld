 angular.module('myApp').controller('searchController',
       ['$scope','$location','AuthService',
       function ($scope, $location, AuthService) {

         $scope.search = function() {
         // $scope.response = [
         // {id:"101",name:"top",model_no:"1001",color:"red",category:"modern",size:"28",mfg_date:"25-9-2018",price:"1000"}];
         // ;}
       //   // $scope.search();
       // });
           $scope.error =   false;
           $scope.disabled = true;

           
           var id = $scope.searchForm.id;
          
           AuthService.search(id)
           .then(function () {
             

               
               $scope.success = true;
               console.log('hello')
               $scope.successMessage = " search the product successfully"
          
               $scope.disabled = false;
              
               $scope.searchForm = {};
            })
        
              .catch(function () {
                $scope.error = true;
                console.log('ddd')
                $scope.errorMessage = "No found the product"
                $scope.disabled = false;
                $scope.searchForm = {};
            })

};  
         
  }]);
        