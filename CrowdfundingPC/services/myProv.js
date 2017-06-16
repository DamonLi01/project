define(["app"], function (app) {
    app.provider('myProv', function(){
        this.$get = function(){
            return {
                foo: function(){},
                sname: "这是一个Provider服务!",
            }
        }
    })
})

