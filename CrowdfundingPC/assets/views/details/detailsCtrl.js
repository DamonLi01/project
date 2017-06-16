define(["app", "urls", "filters/percentage", "filters/myFilter", 'services/myServ'], function (app) {
    app.controller('detailsCtrl', function ($rootScope, $scope, $http, $sce, $state, $stateParams, $location, $anchorScroll, jsonToStr) {
        $anchorScroll();
        $rootScope.title = '详情';
        $scope.site;
        $scope.nTime = Date.now();
        $scope.detailsId = $stateParams.detailsId;
        console.log($scope.detailsId);
        $scope.gotoBottom = function () {
            $location.hash('support');
            $anchorScroll();
        };
        detailsUrl = 'http://localhost/zc/my_api/details/details.php';
        params = "&id=" + $scope.detailsId;
        $http({
            url: detailsUrl,
            method: "POST",
            headers: { //跨域请求头
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: params
        }).success(function (data) {
            console.log(data);
            $scope.details = data[0];
            $scope.support = data;
        });
        $scope.sustain = function (data) {
            if (sessionStorage.uid == undefined) {
                $('#myModal').modal('show');
                return false;
            } else {
                $('#SpModal').modal('show');
            }
            // console.log(jsonToStr.transform(data) + '&money=' + sessionStorage.money);
            $scope.verify = function () {
                console.log(data);
                if (sessionStorage.money*1 > data.b_price*1) {
                    Url = 'http://localhost/zc/my_api/details/support.php';
                    $http({
                        url: Url,
                        method: "POST",
                        headers: { //跨域请求头
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: jsonToStr.transform(data) + '&money=' + sessionStorage.money + "&uid=" + sessionStorage.uid
                    }).success(function (data) {
                        alert(data.msg);
                        if (data.pay == 1) {
                            $('#SpModal').modal('hide').on('hidden.bs.modal', function () {
                                $state.reload();
                            });
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
                } else {
                    alert('余额不足请充值');
                    $('#SpModal').modal('hide').on('hidden.bs.modal', function () {
                        $state.go('info')
                    });

                }
            }
        }
    });
});