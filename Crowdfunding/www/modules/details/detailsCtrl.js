define(["app", "urls", "filters/myFilter", "filters/percentage", 'services/myServ'], function (app) {
  app.controller('detailsCtrl', function ($rootScope, $scope, $http, $stateParams, $ionicModal, jsonToStr, $state, $ionicHistory, $ionicPopup) {
    // $ionicHistory.nextViewOptions({
    //   disableBack: true,
    //   disableAnimate: true
    // })
    $scope.nTime = Date.now();
    $scope.detailsId = $stateParams.detailsId;
    console.log($scope.detailsId);
    detailsUrl = 'http://damonli.duapp.com/zc/my_api/details/details.php';
    params = "&id=" + $scope.detailsId;
    $http({
      url: detailsUrl,
      method: "POST",
      headers: { //跨域请求头
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: params
    }).success(function (data) {

      for (item in data) {
        data[item].ischeck = false;
      }
      console.log(data);
      $scope.details = data[0];
      $scope.data = data;
      $scope.mycheck = function (index) {
        $scope.data[index].ischeck = !$scope.data[index].ischeck;
      }
    });
    $scope.sustain = function (data) {
      if (sessionStorage.uid == undefined) {
        $state.go('tab.account');
      } else {
        $scope.openModal();
      }
      // console.log(jsonToStr.transform(data));
      $scope.verify = function () {
        console.log(data);
        if (sessionStorage.money * 1 > data.b_price * 1) {
          Url = 'http://damonli.duapp.com/zc/my_api/details/support.php';
          $http({
            url: Url,
            method: "POST",
            headers: { //跨域请求头
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: '&money=' + sessionStorage.money * 1 + "&uid=" + sessionStorage.uid +
              "&b_id=" + data.b_id + "&b_support_count=" + data.b_support_count +
              "&b_price=" + data.b_price + "&b_support_amount=" + data.b_support_amount +
              "&support_count=" + data.support_count + "&id=" + data.id + "&support_amount=" + data.support_amount

          }).success(function (data) {
            if (data.pay == 1) {
              $http({
                url: moneyUrl,
                method: "POST",
                headers: { //跨域请求头
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: "&id=" + sessionStorage.uid
              }).success(function (data) {
                sessionStorage.money = data[0].money;
              });
              var alertPopup = $ionicPopup.alert({
                title: '<h4><b>提示</b></h4>',
                subTitle: '<h4>支持成功</h4>',
                okText: '确认',
              });
              alertPopup.then(function (res) {
                $scope.closeModal();
                $state.reload();
              });

            }
          });
        } else {
          var alertPopup = $ionicPopup.alert({
            title: '<h4><b>提示</b></h4>',
            subTitle: '<h4>余额不足请充值</h4>',
            okText: '确认',
          });
          alertPopup.then(function (res) {
            $scope.closeModal();
            $state.reload();
            $state.go('tab.personalDetails')
          });
        }
      }

    }

  });
});
