// define(["app", "urls", "filters/myFilter", "filters/percentage"], function (app) {
//   app.controller('personalDetailsCtrl', function ($rootScope, $scope, $http, $stateParams, $ionicModal, $state, $ionicPopup) {
//     if (sessionStorage.uname == undefined) {
//       $state.go('tab.account');
//       return false;
//     }
//     $scope.cancel = function () {
//       sessionStorage.clear();
//       $state.go('tab.account');
//     }
//     $scope.sex = ['女', '男'];
//     Url = 'http://damonli.duapp.com/zc/my_api/info/info.php';
//     params = "&id=" + sessionStorage.uid;
//     $http({
//       url: Url,
//       method: "POST",
//       headers: { //跨域请求头
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       data: params
//     }).success(function (data) {
//       $scope.info = data[0];
//       sessionStorage.money = $scope.info.money;
//       console.log($scope.info);
//     });
//     $scope.add_money = {
//       money: null
//     }
//     $scope.Recharge = function () {
//       console.log($scope.add_money.money + sessionStorage.money * 1)
//       Url = 'http://damonli.duapp.com/zc/my_api/info/Recharge.php';
//       params = "&id=" + sessionStorage.uid + "&money=" + ($scope.add_money.money * 1 + sessionStorage.money * 1);
//       $http({
//         url: Url,
//         method: "POST",
//         headers: { //跨域请求头
//           'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         data: params
//       }).success(function (data) {
//         if (data.Re == 1) {
//           var alertPopup = $ionicPopup.alert({
//             title: '<h4><b>提示</b></h4>',
//             subTitle: '<h4>充值成功</h4>',
//             okText: '确认',
//           });
//           alertPopup.then(function (res) {
//             $scope.modal.hide();
//             $state.reload();
//           });
//         } else {
//           var alertPopup = $ionicPopup.alert({
//             title: '<h4><b>提示</b></h4>',
//             subTitle: '<h4>充值失败</h4>',
//             okText: '确认',
//           });
//           alertPopup.then(function (res) {
//             $scope.modal.hide();
//             $state.reload();
//           });
//         }
//       });
//     }

//     $ionicModal.fromTemplateUrl('templates/modal.html', {
//       scope: $scope,
//       animation: 'slide-in-up'
//     }).then(function (modal) {
//       $scope.modal = modal;
//     });
//     //Cleanup the modal when we're done with it!
//     $scope.$on('$destroy', function () {
//       $scope.modal.remove();
//     });
//     // Execute action on hide modal
//     $scope.$on('modal.hidden', function () {
//       // Execute action
//     });
//     // Execute action on remove modal
//     $scope.$on('modal.removed', function () {
//       // Execute action
//     });
//   });
// });



define(["app", "urls", "filters/myFilter", "filters/percentage"], function (app) {
  app.controller('personalDetailsCtrl', function ($rootScope, $scope, $http, $stateParams, $ionicModal, $state,$ionicPopup) {
    if (sessionStorage.uname == undefined) {
      $state.go('tab.account');
      return false;
    }
    $scope.cancel = function () {
      sessionStorage.clear();
      $state.go('tab.account');
    }
    $scope.sex = ['女', '男'];
    Url = 'http://damonli.duapp.com/zc/my_api/info/info.php';
    params = "&id=" + sessionStorage.uid;
    $http({
      url: Url,
      method: "POST",
      headers: { //跨域请求头
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: params
    }).success(function (data) {
      $scope.info = data[0];
      sessionStorage.money = $scope.info.money;
      console.log($scope.info);
    });
    $scope.add_money = {
      money: null
    }
    $scope.Recharge = function () {
      console.log($scope.add_money.money)
      Url = 'http://damonli.duapp.com/zc/my_api/info/Recharge.php';
      params = "&id=" + sessionStorage.uid + "&money=" + ($scope.add_money.money + sessionStorage.money * 1);
      $http({
        url: Url,
        method: "POST",
        headers: { //跨域请求头
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params
      }).success(function (data) {
        // alert(data.msg);
        if (data.Re == 1) {

          var alertPopup = $ionicPopup.alert({
            title: '<h4><b>提示</b></h4>',
            subTitle: '<h4>充值成功</h4>',
            okText: '确认',
          });
          alertPopup.then(function (res) {
            $scope.modal.hide();
            $state.reload();
          });
        } else {
          var alertPopup = $ionicPopup.alert({
            title: '<h4><b>提示</b></h4>',
            subTitle: '<h4>充值失败</h4>',
            okText: '确认',
          });
          alertPopup.then(function (res) {
            $scope.modal.hide();
            $state.reload();
          });
        }
      });
    }

    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
      // Execute action
    });
  });
});
