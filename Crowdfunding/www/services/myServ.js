define(["app"], function (app) {
    app.service('jsonToStr', function () {
        this.transform = function (jsonData) {
            var string = '';
            for (str in jsonData) {
                string = string + str + '=' + jsonData[str] + '&';
            }
            var _last = string.lastIndexOf('&');
            string = string.substring(0, _last);
            return string;
        };
    });
});