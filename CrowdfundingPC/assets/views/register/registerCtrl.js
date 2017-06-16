define(["app"], function (app) {
    app.controller('registerCtrl', function ($scope, $http) {
        $scope.username = "";
        $scope.password = "";
        $scope.submit = function () {
                params = "&user_name=" + $scope.username + "&user_pwd=" + $scope.password;
                registerUrl = "http://localhost/zc/my_api/register/register.php";
                $http({
                    url: registerUrl,
                    method: "POST",
                    headers: { //跨域请求头
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: params
                }).success(function (data) {
                    alert(data.msg);
                    if (data.msg == '注册成功') {
                        location.href = "#/login";
                    }
                });
            }
    });
});