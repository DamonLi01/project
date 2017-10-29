define(["app", "services/chats", 'filters/myFilter'], function (app) {
  app.controller('publishprojectCtrl', function ($scope, $stateParams, chats, $state, $http, $ionicHistory,$ionicPopup) {
    // $ionicHistory.nextViewOptions({
    //   disableBack: true,
    //   disableAnimate: true
    // })
    $scope.publishprojectId = $stateParams.publishprojectId;
    console.log($scope.publishprojectId);
    $scope.data = {
      Return_time: '',
      Return_content: '',
      Support_amount: '',
      typ: 0,
      day: '',
      fundraising: '',
      title_a: ''
    }

    $scope.tupian = false;
    $scope.upd = function () {
      $http({
        url: 'http://damonli.duapp.com/zc/release_img.php', ///上传文件接收服务
        method: 'POST',
        headers: {
          'Content-Type': undefined
        },
        transformRequest: function () {
          formData = new FormData();
          formData.append("myfile", document.getElementById("inputfile").files[0]);
          return formData;
        }
      }).then(function (res) {
        console.log(res.data.msg);
        $scope.img = res.data.msg;
        sessionStorage.img = $scope.img;
        console.log(sessionStorage.img);
        if (sessionStorage.img != 'undefined') {
          $scope.tupian = true;
        }
      });
    };
    $scope.publish = function () {
      data = "&id=" + sessionStorage.uid + "&img=" + sessionStorage.img +
        "&releaseId=" + $scope.publishprojectId + "&Return_time=" + $scope.data.Return_time +
        "&Return_content=" + $scope.data.Return_content + "&Support_amount=" + $scope.data.Support_amount +
        "&type=" + $scope.data.typ + "&day=" + $scope.data.day + "&fundraising=" + $scope.data.fundraising +
        "&title_a=" + $scope.data.title_a;
      Url = "http://damonli.duapp.com/zc/my_api/release/publish.php";
      $http({
        url: Url,
        method: "POST",
        headers: { //跨域请求头
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
      }).success(function (data) {
        if (data.code == 1) {
          var alertPopup = $ionicPopup.alert({
            title: '<h4>提示</h4>',
            subTitle: '<h4>发布成功</h4>',
            okText: '确认',
          });
          alertPopup.then(function (res) {
            $state.go("tab.publish");
            sessionStorage.img = undefined;
          });
        } else {
          var alertPopup = $ionicPopup.alert({
            title: '<h4>提示</h4>',
            subTitle: '<h4>发布失败</h4>',
            okText: '确认',
          });
        }
      });
    };
  });
});
