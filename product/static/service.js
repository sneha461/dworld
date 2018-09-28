angular.module('myApp').factory('AuthService',
  ['$q', '$timeout', '$http',
  function ($q, $timeout, $http) {

    
    var user = null;

    return ({
      
      login: login,
      register: register,
      logout:logout,
      add: add,
      update: update,
      remove: remove,
      search: search
      });    
    function login(email,password){
      var deferred = $q.defer();

      $http.post('/api/login',{email:email,password:password})

      .success(function (data,status){
        if(status ==200 && data.result){
          user = true;
          deferred.resolve();
        }
        else{
          user = false;
          deferred.reject();
        }
        
      })
      .error(function(data){
         user = false;
      deferred.reject();
    });

    return deferred.promise;

    }
    



function register(email, password) {

      var deferred = $q.defer();

    
      $http.post('/api/register', {email: email, password: password})
        .success(function (data, status) {
          if(status === 200 && data.result){
            deferred.resolve();
          } else {
            deferred.reject();
          }
        })
       
        .error(function (data) {
          deferred.reject();
        });

     
      return deferred.promise;

    }



    function logout() {

      
      var deferred = $q.defer();

      
      $http.get('/api/logout')
        
        .success(function (data) {
          user = false;
          deferred.resolve();
        })
        
        .error(function (data) {
          user = false;
          deferred.reject();
        });

      return deferred.promise;

    }



function add(id,name,model_no,color,category,size,mfg_date,price) {

      var deferred = $q.defer();

       
      $http.post('/api/product/add', {id:id, name:name, model_no:model_no,color:color, category:category,size:size, mfg_date:mfg_date, price:price})
        .success(function (data, status) {
          if(status === 200 && data.result){
            deferred.resolve();
          } else {
            deferred.reject();
          }
        })
       
        .error(function (data) {
          deferred.reject();
        });
        return deferred.promise;
    }






    function update(id,name,model_no,color,category,size,mfg_date,price) {
      var deferred = $q.defer();
      $http.put('/api/product/update', {id:id, name:name, model_no:model_no,color:color,  category:category,size:size, mfg_date:mfg_date, price:price})
        .success(function (data, status) {
          if(status === 200 && data.result){
            deferred.resolve();
          } else {
            deferred.reject();
          }
        })
       
        .error(function (data) {
          deferred.reject();
        });

     
      return deferred.promise;
    }



    function remove(id) {
      
      var deferred = $q.defer();
   
      $http.delete('/api/product/remove/' + id, {})
        .success(function (data, status) {
          if(status === 200 && data.result){
            deferred.resolve();
          } else {
            deferred.reject();
          }
        })
       
        .error(function (data) {
          deferred.reject();
        });

     
      return deferred.promise;
    }



function search(id) {

    var deferred = $q.defer();

     

      $http.get('/api/product/search/'+id, {})
     
        .success(function (data, status) {
       


           
          if(status === 200 && data.result){
            $scope.item. data();
            deferred.resolve();
          } else {
            deferred.reject();
          }
        })
       
        .error(function (data) {
          deferred.reject();
        });

     
      return deferred.promise;

    }


  }]);