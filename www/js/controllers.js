angular.module('cavaMenu.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  })
  
.controller('DishesCtrl', function($scope, $stateParams) {
$scope.dishesId = $stateParams.dishesId;
 });
