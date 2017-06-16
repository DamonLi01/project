define(["app"], function (app) {
    app.directive('mydiear',function(){
        return {
            restrict : 'EA',
            //template : '<div>这是自定义指令</div>'
            templateUrl:"./modules/home/footer.html",
        };
    });
});
