define(["app"], function (app) {
    app.filter('day', function () {
        return function (input) {
            return Math.ceil(input / 86400000);
        }
    });
    app.filter('imgUrl', function () {
        return function (input) {
            if (input != undefined) {
                return 'http://localhost/zc/' + input;
            }
        }
    });
    app.filter('to_trusted', function ($sce) {
        return function (text) {
            if (text != undefined) {
                //     var regex = /img src="(.*?)"/g;
                //     //var subst = '<img src="../../zc';
                //     text=text.replace(regex, function (d1,d2) {
                //         //console.log(d2);
                //         return "img src='../../zc"+d2+"'";
                //     });
                //
                // }
                // console.log(text);
                const regex = /img(.*?)src=".\/public/g;
                const subst = 'img width="100%" src="http://localhost/zc/public';
                const result = text.replace(regex, subst);
                return $sce.trustAsHtml(result);
            }
        }
    });
    app.filter('unique', function () {
        return function (collection, keyname) {
            var output = [],
                keys = [];
            angular.forEach(collection, function (item) {
                var key = item[keyname];
                if (keys.indexOf(key) === -1) {
                    keys.push(key);
                    output.push(item);
                }
            });

            return output;
        };
    });
});
