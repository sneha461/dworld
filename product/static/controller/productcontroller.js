angular.module('myApp').controller('addController',
       ['$scope','$location','ProductService',
       function ($scope, $location,ProductService) {

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
           
           ProductService.add(id,name,model_no,color,category,size,mfg_date,price)
           
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





 angular.module('myApp').controller('updateController',
       ['$scope','$location','ProductService',
       function ($scope, $location, ProductService) {

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

           ProductService.update(id,name,model_no,color,category,size,mfg_date,price)

         
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
angular.module('myApp').controller('removeController',
       ['$scope','$location','ProductService',
       function ($scope, $location,ProductService) {

         $scope.remove = function() {
           $scope.error = false;
          
           $scope.disabled = true;
       
           var id = $scope.removeForm.id;
           

         ProductService.remove(id)
          
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




angular.module('myApp').controller('searchController',
       ['$scope','$location','ProductService',
       function ($scope, $location,ProductService) {



         $scope.search = function() {

           $scope.error = false;
         
           $scope.disabled = true;
       
           var id = $scope.searchForm.id;
         
           ProductService.search(id)
           
             
             .then(function (data) {
               
           
               

               $scope.success = true;
                
               $scope.successMessage = " search successfully"
               
               $scope.disabled = false;
              
               $scope.searchForm = {};
               $scope.search=data;
            })
        
              .catch(function () {
                $scope.error = true;
               
                $scope.errorMessage = "The product is not found"
                $scope.disabled = false;
                $scope.searchForm = {};
            })


 };

  }]);


 

 angular.module('myApp').controller('listController',
       ['$scope','$location','ProductService','$http',
       function ($scope, $location,ProductService,$http) {
         
         
         $scope.page = 1;
         $scope.limit = 3;
        
         $scope.loadProduct = function(){
          $http.get('/api/product/list?offset=' +$scope.page + '&limit=' + $scope.limit)
          .success(function(data){
            
        
            $scope.getlist = data;
           
             
          });
          };
        
          $scope.nextPage = function() {
                   
                    $scope.page++;
                    $scope.loadProduct();
               
            };
            
            $scope.previousPage = function() {
                if ($scope.page > 1) {
                    $scope.page--;
                    $scope.loadProduct();
                  
                }

            };

 

//          $scope.list = function() {


//           $http.get('/api/product/list' )
//           .success(function (data, status,response) {
        
//            $scope.getlist=data[0]; 

// }) 
   
//     };
}]);

           
               

             
               
            

 