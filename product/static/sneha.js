 function delete(id,name,color,size,category,mfg,price) {

      var deferred = $q.defer();

    
      $http.post('/api/delete', {id:id, name:name, color:color, size:size, category:category, mfg:mfg, price:price})
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



    function list(id,name,color,size,category,mfg,price) {

      var deferred = $q.defer();

    
      $http.GET('/api/list', {id:id, name:name, color:color, size:size, category:category, mfg:mfg, price:price})
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





    function search(id,name,color,size,category,mfg,price) {

      var deferred = $q.defer();

    
      $http.post('/api/search', {id:id, name:name, color:color, size:size, category:category, mfg:mfg, price:price})
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
 
