define(["app", "urls", "ngSanitize","filters/percentage","filters/myFilter"], function (app) {
    app.controller('angelInvestorCtrl', function ($rootScope, $scope, $http, $sce) {
        $rootScope.title = '全部';
        $http.jsonp(angelInvestorUrl)
            .success(function (data) {
                console.log(data);
                $scope.angelInvestor = data;
            });
    });
});