define(["app", "services/chats"], function (app) {
  app.controller('registerCtrl', function ($rootScope, $scope, $http, chats, $state, $ionicHistory,$ionicPopup) {
    // $ionicHistory.nextViewOptions({
    //   disableBack: true,
    //   disableAnimate: true
    // })
    $scope.reg = {
      username: "",
      password: "",
    }
    $scope.submit = function () {
      params = "&user_name=" + $scope.reg.username + "&user_pwd=" + $scope.reg.password;
      console.log(params);
      registerUrl = "http://113.209.107.77/zc/my_api/register/register.php";
      $http({
        url: registerUrl,
        method: "POST",
        headers: { //跨域请求头
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params
      }).success(function (data) {
        // alert(data.msg);
        if (data.msg == '注册成功') {
          var alertPopup = $ionicPopup.alert({
            title: '<h4><b>注册成功</b></h4>',
            subTitle: '<h4>前往登录页面</h4>',
            okText: '确认',
          });
          alertPopup.then(function (res) {
            $state.go('tab.account')
          });
          // $state.go('tab.account')
        } else {
          var alertPopup = $ionicPopup.alert({
            title: '<h4><b>注册失败</b></h4>',
            subTitle: '<h4>用户名已被使用</h4>',
            okText: '确认',
          });
        }
      });
    }
  });
});
