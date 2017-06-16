define(["app", "urls", "filters/percentage", "filters/myFilter"], function (app) {
    app.controller('productCtrl', function ($rootScope, $scope, $http, $sce, $state) {
        $rootScope.title = '产品众筹';
        $scope.strSort = "limit_price";
        $scope.stat = [false, true, true, true];
        $scope.icons = ["glyphicon-arrow-up", "", "", ""];
        $scope.sort = function (n) {
            var mark = ["limit_price", "focus_count", "end_time*1000-nTime", "support_amount/limit_price"];
            $scope.stat[n] = !$scope.stat[n];
            $scope.strSort = ($scope.stat[n] ? "-" : "") + mark[n];
            $scope.icons = ["", "", "", ""];
            $scope.icons[n] = $scope.stat[n] ? "glyphicon-arrow-up" : "glyphicon-arrow-down"
        };
   
        $scope.toDetails = function (detailsId) {
            $state.go('details', {
                detailsId: detailsId
            });
        };
        $http.jsonp(productAdvUrl)
            .success(function (data) {
                console.log(data);
                $scope.productAdv = data;
            });
        $scope.nTime = Date.now();
        $http.jsonp(productClassUrl)
            .success(function (data) {
                console.log(data);
                $scope.productClass = data;
            });
        $http.jsonp(productProvinceUrl)
            .success(function (data) {
                console.log(data);
                $scope.productProvince = data;
            });
        $http.jsonp(productprojectUrl)
            .success(function (data) {
                console.log(data);
                $scope.productproject = data;
            });
    });
});