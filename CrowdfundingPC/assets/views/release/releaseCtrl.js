define(["app", "urls", "filters/percentage", "filters/myFilter", 'services/myServ'], function (app) {
    app.controller('releaseCtrl', function ($rootScope, $scope, $http, $sce, $state, $stateParams, jsonToStr) {
        $scope.releaseId = $stateParams.releaseId;
        console.log($scope.releaseId)
        $scope.Return_time = '';
        $scope.Return_content = '';
        $scope.Support_amount = '';
        $scope.typ = 0;
        $scope.day = '';
        $scope.fundraising = '';
        $scope.title_a = '';
        $scope.tupian = false;
        $scope.upd = function () {
            console.log("Changed");
            $http({
                url: 'http://localhost/zc/release_img.php', ///上传文件接收服务
                method: 'POST',
                headers: {
                    'Content-Type': undefined
                },
                transformRequest: function () {
                    formData = new FormData();
                    formData.append("myfile", document.getElementById("inputfile").files[0]);
                    return formData;
                }
            }).then(function (res) {
                console.log(res.data.msg);
                $scope.img = res.data.msg;
                sessionStorage.img = $scope.img;
                console.log(sessionStorage.img);
                if (sessionStorage.img != 'undefined') {
                    $scope.tupian = true;
                }
            });
        };

        $scope.publish = function () {
            data = "&id=" + sessionStorage.uid + "&img=" + sessionStorage.img +
                "&releaseId=" + $scope.releaseId + "&Return_time=" + $scope.Return_time +
                "&Return_content=" + $scope.Return_content + "&Support_amount=" + $scope.Support_amount +
                "&type=" + $scope.typ + "&day=" + $scope.day + "&fundraising=" + $scope.fundraising +
                "&title_a=" + $scope.title_a;
            Url = "http://localhost/zc/my_api/release/publish.php";
            $http({
                url: Url,
                method: "POST",
                headers: { //跨域请求头
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data
            }).success(function (data) {
                alert(data.msg);
                if (data.code == 1) {
                    $state.go("home");
                    sessionStorage.img = undefined;
                }
            });
        };
    });
});