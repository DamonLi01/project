define(["app", "urls", "filters/percentage", "filters/myFilter", 'services/myServ'], function (app) {
    app.controller('detailsCtrl', function ($rootScope, $scope, $http, $sce, $state, $stateParams, $location, $anchorScroll, jsonToStr) {
        $anchorScroll();

        $rootScope.title = '详情';
        $scope.selected = 0;
        $scope.list = ['项目主页', '动态', '支持者', '评论'];
        $scope.site;
        $scope.nTime = Date.now();
        $scope.detailsId = $stateParams.detailsId;
        console.log($scope.detailsId);
        $scope.content = "";


        $scope.select = function (index) {
            $scope.selected = index;
        };
        $scope.gotoBottom = function () {
            $location.hash('support');
            $anchorScroll();
        };

        $scope.save = function () {
            if($scope.content==""){
                alert('内容不能为空');return;
            }
            $scope.datas = {
                content: $scope.content,
                userid: sessionStorage.uid,
                dealid: $scope.detailsId
            };
            console.log(jsonToStr.transform($scope.datas))
            $http({
                url: commentUrl,
                method: "POST",
                headers: { //跨域请求头
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: jsonToStr.transform($scope.datas)

            }).success(function (data) {
                alert(data.msg);
                console.log(data);
                $scope.show();
                $scope.content="";

            });

        };

$scope.show=function () {
    $scope.params = "&id=" + $scope.detailsId;
    $http({
        url: showCommentUrl,
        method: "POST",
        headers: { //跨域请求头
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $scope.params
    }).success(function (data) {
        console.log(data);
        $scope.comment = data;
    });
};
        $scope.showSupport=function () {
            $scope.params = "&id=" + $scope.detailsId;
            $http({
                url: showSupportUrl,
                method: "POST",
                headers: { //跨域请求头
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $scope.params
            }).success(function (data) {
                console.log(data);
                 $scope.Supports = data;

            });
        };








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
                if (sessionStorage.money * 1 > data.b_price * 1) {

                    $http({
                        url: verifyUrl,
                        method: "POST",
                        headers: { //跨域请求头
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: jsonToStr.transform(data) + '&money=' + sessionStorage.money + "&uid=" + sessionStorage.uid+ "&uname=" + sessionStorage.uname
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
        $scope.show();
        $scope.showSupport();
    });
});