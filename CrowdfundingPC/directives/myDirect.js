define(["app"], function (app) {
app.directive('successtip', function () {
        return {
            restrict: 'E',
            template: '<div class="alert alert-success" role="alert" ng-transclude></div>',
            replace: true,
            transclude: true
        }

    })
    app.directive('dangertip', function () {
        return {
            restrict: 'E',
            template: '<div class="alert alert-danger" role="alert" ng-transclude></div>',
            replace: true,
            transclude: true
        }

    })
});
