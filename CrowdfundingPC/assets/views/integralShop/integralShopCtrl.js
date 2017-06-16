define(["app","urls"], function (app) {
    app.controller('integralShopCtrl', function ($rootScope,$scope,$http) {
        $rootScope.title = '积分商城';
        $http.jsonp(integralShopUrl)
            .success(function(data){
                console.log(data);
                $scope.integralShop=data;
            });
        $http.jsonp(integralClassUrl)
            .success(function(data){
                console.log(data);
                $scope.integralClass=data;
            });
    });
});