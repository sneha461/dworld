angular.module('myApp').factory('ProductService',
  ['$q', '$timeout', '$http',
  function ($q, $timeout, $http) {

    

    return ({
      
    
      add: add,
      update: update,
      remove: remove,
      search: search
      });    



    

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
      $http.get('/api/product/search/' + id,{})
        .success(function (data, status) {
          if(status === 200 && data){
             console.log('xx')

            deferred.resolve(data);
          } else {
            console.log('yy')
            deferred.reject(data);
          }
        })
       
        .error(function (data) {
          console.log('zz')
          deferred.reject();
        });

     
      return deferred.promise;
    }
}]);