define(["app", 'urls'], function (app) {
  app.controller('accCtrl', function ($scope, $state, $http, $ionicHistory, $ionicPopup) {
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
      registerUrl = "http://localhost/zc/my_api/login/login.php";
      $http({
        url: registerUrl,
        method: "POST",
        headers: { //跨域请求头
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params
      }).success(function (data) {
        if (data.uid != 0) {
          //设置本地存储// localStorage 永久存储 // sessionStorage 浏览器关闭时，清空
          sessionStorage.setItem('uid', data.uid); //保存在客户端
          sessionStorage.setItem('uname', $scope.reg.username);
          sessionStorage.setItem('token', data.token);
          // sessionStorage.setItem('money', data.money);
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
            title: '<h4><b>登录成功</b></h4>',
            subTitle: '<h4>跳转个人信息页面</h4>',
            okText: '确认',
          });
          alertPopup.then(function (res) {
            $state.go("tab.personalDetails");
          });

        } else {
          var alertPopup = $ionicPopup.alert({
            title: '<h4><b>登录失败</b></h4>',
            subTitle: '<h4>用户名或密码错误</h4>',
            okText: '确认',
          });
        }
      });
    }
  });
});
