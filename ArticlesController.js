angular.module('app', [])
  .controller('ArticlesController', function($scope, $http) {

    $http.get('http://localhost:3000/')
     .then(function(response) {
       $scope.greeting = response.data;
     });

     $scope.createArticle = function(){
       $http.post('http://localhost:3000/create', data)
        .then(function(response) {
          console.log('Ok')
        });
     }

     $scope.editArticle = function(id){
       $http.put('http://localhost:3000/update/'+id, data)
        .then(function(response) {
          console.log('Ok')
        });
     }

     $scope.deleteArticle = function(id){
       $http.delete('http://localhost:3000/delete/'+id, data)
        .then(function(response) {
          console.log('Ok')
        });
     }
  });
