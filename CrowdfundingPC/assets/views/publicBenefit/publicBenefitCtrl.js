define(["app", "urls", "filters/percentage", "filters/myFilter"], function (app) {
    app.controller('publicBenefitCtrl', function ($rootScope, $scope, $http, $sce, $state) {
        $rootScope.title = '公益模块';
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
        $http.jsonp(publicBenefitporjectUrl)
            .success(function (data) {
                console.log(data);
                $scope.publicBenefitporject = data;

            });
        $http.jsonp(publicBenefit_industryUrl)
            .success(function (data) {
                console.log(data);
                $scope.publicBenefit_industry = data;

            });
        $scope.nTime = Date.now();

    });
});