define(["app",'urls'], function (app) {
    app.controller('loginCtrl', function ($scope, $http, $state) {
        $scope.username = "";
        $scope.password = "";
        $scope.submit = function () {
            params = "&user_name=" + $scope.username + "&user_pwd=" + $scope.password;
            registerUrl = "http://localhost/zc/my_api/login/login.php";
            $http({
                url: registerUrl,
                method: "POST",
                headers: { //跨域请求头
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: params
            }).success(function (data) {
                alert(data.msg);
                if (data.uid != 0) {
                    //设置本地存储// localStorage 永久存储 // sessionStorage 浏览器关闭时，清空
                    sessionStorage.setItem('uid', data.uid); //保存在客户端
                    sessionStorage.setItem('uname', $scope.username);
                    sessionStorage.setItem('token', data.token);
                    // sessionStorage.setItem('money', data.money);
                    $state.go("home");
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
                }
            });
        }
    });
});