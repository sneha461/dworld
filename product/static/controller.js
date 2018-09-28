

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


angular.module('myApp').controller('logoutController',
   ['$scope','$location','AuthService',
   function ($scope,$location,AuthService){


    $scope.logout = function() {
       AuthService.logout()
       .then(function() {
        $location.path('/login');
       })
     };
   }]);




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
         




 


