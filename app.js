angular.module('app', [])
  .controller('AppController', function($scope, $filter) {
    $scope.firstName = null
    $scope.lastName = null

    // $scope.applyStyle = function(){
    //   changeText();
    // }
    //
    // function changeText(){
    //   $scope.change_text = {
    //     "text-decoration": "line-through",
    //     "color": "red"
    //   }
    // }

    $scope.friends = [
      {name:'Berg', age:25},
      {name:'Armando', age:40},
      {name:'Raimundo', age:85},
      {name:'Andréa', age:85}
    ];

    $scope.clearFields = function(){
      $scope.firstName = ''
      $scope.lastName = ''
    }

    $scope.getData = function(){
      $scope.date = $filter('date')(new Date(), 'dd/MM/yyyy');
    }

  })
  .filter('andrea', ["$filter", function ($filter) {
  return function (date) {
    if (date == ''){
      return $filter('date')(new Date(), 'dd/MM/yyyy');
    }
    return $filter('date')(date, 'dd/MM/yyyy');
  };
  }]);

