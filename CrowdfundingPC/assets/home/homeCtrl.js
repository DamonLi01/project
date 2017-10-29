define(["app", "urls", "filters/percentage", "filters/myFilter"], function (app) {
    app.controller('homeCtrl', function ($rootScope, $scope, $http, $state) {
        
        $rootScope.title = '首页';
        $scope.reveal = false;
        $scope.nTime = Date.now();
        $scope.toDetails = function (detailsId) {
            $state.go('details', {
                detailsId: detailsId
            });
        };
        $http.jsonp(home_recommendUrl)
            .success(function (data) {
                console.log(data);
                $scope.home_recommend = data;
            });
        $http.jsonp(home_specialUrl)
            .success(function (data) {
                console.log(data);
                $scope.home_special = data;
            });
        $http.jsonp(home_imageUrl)
            .success(function (data) {
                console.log(data);
                $scope.home_image = data;
            });
        $http.jsonp(home_publicBenefitUrl)
            .success(function (data) {
                console.log(data);
                $scope.home_publicBenefit = data;
            });
        $http.jsonp(home_productUrl)
            .success(function (data) {
                console.log(data);
                $scope.home_product = data;
            });
    });
});