define(["app"], function (app) {
    app.controller('infoCtrl', function ($scope, $http, $state) {
        if (sessionStorage.uid == undefined) {
            $state.go('home');
            return false;
        }
        $scope.readonly = true;
        $scope.uid = sessionStorage.uid;
        $scope.alter = function () {
            $scope.readonly = false;
        }
        console.log($scope.uid);
        Url = 'http://localhost/zc/my_api/info/info.php';
        params = "&id=" + $scope.uid;
        $http({
            url: Url,
            method: "POST",
            headers: { //跨域请求头
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: params
        }).success(function (data) {
            $scope.province = sessionStorage.province = data[0].province;
            $scope.city = sessionStorage.city = data[0].city;
            $scope.user_name = sessionStorage.user_name = data[0].user_name;
            $scope.money = sessionStorage.money = data[0].money;
            $scope.identify_name = sessionStorage.identify_name = data[0].identify_name;
            $scope.mobile = sessionStorage.mobile = data[0].mobile;
            $scope.sex = sessionStorage.sex = data[0].sex;
            $scope.identify_number = sessionStorage.identify_number = data[0].identify_number;
            $scope.email = sessionStorage.email = data[0].email;
        });

        $scope.Recharge = function () {
            Url = 'http://localhost/zc/my_api/info/Recharge.php';
            params = "&id=" + $scope.uid + "&money=" + ($scope.add_money + sessionStorage.money * 1);
            $http({
                url: Url,
                method: "POST",
                headers: { //跨域请求头
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: params
            }).success(function (data) {
                alert(data.msg);
                if (data.Re == 1) {
                    $('#ReModal').modal('hide').on('hidden.bs.modal', function () {
                        $state.reload();
                    });
                }
            });
        }
        $scope.save = function () {
            Url = 'http://localhost/zc/my_api/info/alter.php';
            params = "&city=" + $scope.city +
                "&province=" + $scope.province + "&sex=" + $scope.sex +
                "&mobile=" + $scope.mobile + "&identify_number=" + $scope.identify_number +
                "&identify_name=" + $scope.identify_name + "&email=" + $scope.email +
                "&user_name=" + $scope.user_name + "&id=" + $scope.uid;
            $http({
                url: Url,
                method: "POST",
                headers: { //跨域请求头
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: params
            }).success(function (data) {
                alert(data.msg);
                $scope.readonly = true;
            });
        }
    });
});