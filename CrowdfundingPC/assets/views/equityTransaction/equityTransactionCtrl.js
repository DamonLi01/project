define(["app", "urls", "filters/percentage", "filters/myFilter"], function (app) {
    app.controller('equityTransactionCtrl', function ($rootScope, $scope, $http, $sce, $state) {
        $rootScope.title = '股权项目';
        // $scope.strSort = "limit_price";
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
        $http.jsonp(equityTransaction_industryUrl)
            .success(function (data) {
                console.log(data);
                $scope.equityTransaction_industry = data;

            });
        $http.jsonp(equityTransaction_projectUrl)
            .success(function (data) {
                console.log(data);
                $scope.equityTransaction_project = data;

            });
        $scope.nTime = Date.now();
    });
});