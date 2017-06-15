define(["app", "services/chats"], function (app) {
  app.controller('publishCtrl', function ($rootScope, $scope, $http, chats, $state,$ionicPopup) {
    $scope.choice = 0;
    if (sessionStorage.uid == undefined) {
      var alertPopup = $ionicPopup.alert({
        title: '<h4>未登录</h4>',
         subTitle: '<h4>立即前往登录</h4>',
         okText: '确认',
      });
      alertPopup.then(function (res) {
            $state.go('tab.account')
      });
    }
    $scope.topublishproject = function (publishprojectId) {
      $state.go('tab.publishproject', {
        publishprojectId: publishprojectId
      });
    };

  });
});
