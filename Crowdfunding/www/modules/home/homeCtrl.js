define(["app", "urls", "filters/myFilter", "filters/percentage", "ngCordova"], function (app) {
  app.controller('homeCtrl', function ($rootScope, $scope, $http, $state, 
  $ionicPlatform, $ionicPopup, $location, $cordovaToast) {
    $scope.nTime = Date.now();
    $scope.toDetails = function (detailsId) {
      $state.go('tab.details', {
        detailsId: detailsId
      });
    //   $cordovaToast.showShortCenter('123');
    };
    $scope.change = function (x) {
      $scope.order = x;
      console.log($scope.order);
    };
    $scope.num = function (x) {
      homeUrl = 'http://localhost/zc/my_api/mobile/productproject.php';
      params = "&type=" + x;
      $http({
        url: homeUrl,
        method: "POST",
        headers: { //跨域请求头
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params
      }).success(function (data) {
        console.log(data);
        $scope.productproject = data;
      });
    };
    $scope.num(0);
  });
});
