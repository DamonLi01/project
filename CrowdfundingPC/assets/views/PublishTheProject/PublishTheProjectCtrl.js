define(["app", "urls", "filters/percentage", "filters/myFilter"], function (app) {
    app.controller('PublishTheProjectCtrl', function ($rootScope, $scope, $http, $state) {
        if (sessionStorage.uid == undefined) {
            $('#myModal').modal('show');
            return false;
        }
        $scope.project = 0;
        $scope.toRelease = function (releaseId) {
            $state.go('release', {
                releaseId: releaseId
            });
        };
    });
});