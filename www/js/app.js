angular.module('cavamenu', ['ionic', 'cavamenu.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.dishes', {
    url: "/dishes/:dishesId",
    views: {
      'menuContent': {
        
        templateUrl: "templates/dishes.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dishes/1');
});
