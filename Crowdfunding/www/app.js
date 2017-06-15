define(["ionic", "angularAMD"], function (ionic, angularAMD) {
  // module
  var app = angular.module("starter", ['ionic']);
  // routes
  app.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    // default
    $urlRouterProvider.otherwise("tab/home");
    // route
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: './modules/tabs/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.home', {
        url: '/home',
        cache: false,
        views: {
          'tab-home': angularAMD.route({
            templateUrl: 'modules/home/tab-home.html',
            controller: 'homeCtrl',
            controllerUrl: "./modules/home/homeCtrl.js"
          })
        }
      })
      .state('tab.details', {
        url: '/details/:detailsId',
        cache: false,
        views: {
          'tab-home': angularAMD.route({
            templateUrl: 'modules/details/details.html',
            controller: 'detailsCtrl',
            controllerUrl: "./modules/details/detailsCtrl.js"
          })
        }
      })

      .state('tab.publish', {
        url: '/publish',
        cache: false,
        views: {
          'tab-publish': angularAMD.route({
            templateUrl: 'modules/publish/publish.html',
            controller: 'publishCtrl',
            controllerUrl: "./modules/publish/publishCtrl.js"
          })
        }
      })
      .state('tab.publishproject', {
        url: '/publishproject/:publishprojectId',
        cache: false,
        views: {
          'tab-publish': angularAMD.route({
            templateUrl: 'modules/publish/publishproject.html',
            controller: 'publishprojectCtrl',
            controllerUrl: "./modules/publish/publishprojectCtrl.js"
          })
        }
      })
      .state('tab.account', {
        url: '/account',
        cache: false,
        views: {
          'tab-account': angularAMD.route({
            templateUrl: 'modules/account/tab-account.html',
            controller: 'accCtrl',
            controllerUrl: "./modules/account/accCtrl.js"
          })
        }
      })
      .state('tab.register', {
        url: '/register',
        cache: false,
        views: {
          'tab-account': angularAMD.route({
            templateUrl: 'modules/register/register.html',
            controller: 'registerCtrl',
            controllerUrl: "./modules/register/registerCtrl.js"
          })
        }
      })
      .state('tab.personalDetails', {
        url: '/personalDetails',
        cache: false,
        views: {
          'tab-account': angularAMD.route({
            templateUrl: 'modules/personalDetails/personalDetails.html',
            controller: 'personalDetailsCtrl',
            controllerUrl: "./modules/personalDetails/personalDetailsCtrl.js"
          })
        }
      })

  });
  return angularAMD.bootstrap(app);
});
