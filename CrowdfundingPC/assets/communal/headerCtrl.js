define(["app", "urls",'directives/myDirect'], function (app) {
    app.controller('headerCtrl', function ($scope, $http, $state, $timeout) {
        $scope.loginerro=false;
        $scope.loginok=false;
        $scope.getAddr = function() {
            var geolocation = new BMap.Geolocation();
            console.log(geolocation);
            geolocation.getCurrentPosition(
                //获取位置信息成功
                function(position){
                    if(this.getStatus() == BMAP_STATUS_SUCCESS){
                        $scope.longitude = position.point.lng;
                        $scope.latitude  = position.point.lat;
                        console.log($scope.longitude,$scope.latitude);
                        // 根据坐标得到地址描述
                        $scope.getGeo();
                    }
                },{
                    // 指示浏览器获取高精度的位置，默认为false
                    enableHighAccuracy: true,
                    // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
                    // timeout: 5000,
                    // 最长有效期(30S)，在重复获取地理位置时，此参数指定多久再次获取位置
                    maximumAge: 30*1000
                });
        };

        $scope.getGeo = function() {
            var myGeo = new BMap.Geocoder();
            // 根据坐标得到地址描述
            myGeo.getLocation(new BMap.Point($scope.longitude,$scope.latitude),
                function(result) {
                    if (result) {
                        $scope.geoaddress = {
                            'fulladdress' : result.addressComponents.city+ result.addressComponents.district+ result.addressComponents.street,
                            'city' : result.addressComponents.city,
                            'area' : result.addressComponents.district,
                            'street' : result.addressComponents.street,
                        };
                        $scope.all =  result.addressComponents.city+ result.addressComponents.district+ result.addressComponents.street;
                        $scope.shi = result.addressComponents.city;
                        $scope.qu = result.addressComponents.district;
                        $scope.jiedao = result.addressComponents.street;
                        $scope.areaname=$scope.all;
                    } else {
                        $scope.showAlert("定位失败,地址解析失败");
                    }
                });
        };



        $timeout($scope.getAddr(),5000);
    if (sessionStorage.uname != 'undefined') {
            $scope.uname = sessionStorage.uname;
            console.log($scope.uname);
        }
        $scope.clear = function () {
            sessionStorage.clear();
            $state.reload();
        };
        $scope.username = "";
        $scope.password = "";
        $scope.submit = function () {
            params = "&user_name=" + $scope.username + "&user_pwd=" + $scope.password;
        
            $http({
                url: headerloginUrl,
                method: "POST",
                headers: { //跨域请求头
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: params
            }).success(function (data) {
                if(data.msg=='登录成功'){
                    $scope.loginok=true;
                    console.log(data.msg)
                }else{
                    console.log(data.msg)
                    $scope.loginerro=true;
                    $timeout(function () {
                        $scope.loginerro=false;
                    },3000);
                }

                if (data.uid != 0) {
                    //设置本地存储// localStorage 永久存储 // sessionStorage 浏览器关闭时，清空
                    sessionStorage.setItem('uid', data.uid); //保存在客户端
                    sessionStorage.setItem('uname', $scope.username);
                    sessionStorage.setItem('token', data.token);
                    // sessionStorage.setItem('money', data.money);
                    $('#myModal').modal('hide').on('hidden.bs.modal', function () {
                        $timeout(function () {
                            $state.reload();
                        },1000);

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
        }
    });
});