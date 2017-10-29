require.config({
    paths: {
        // angular
        "angular": "./libs/angular-1.5.7",
        // angular-ui
        "ui-router": "./libs/ui-router",
        // angularAMD
        "angularAMD": "./libs/angularAMD",
        "ngload": "./libs/ngload",
        'app': './app',
        // 'map':'http://api.map.baidu.com/api?v=2.0&ak=Rqpld4KoPGqEUePSO81UnkGbSADAMf3s',
        // 'jquery':'./assets/libs/jquery.min',
        // 'bootstrap':'./assets/libs/bootstrap.min',
        // 'prefixfree':'./assets/libs/prefixfree.min',
        // 'modernizr':'./assets/libs/modernizr'
    },
    shim: {
        // angular
        "angular": {exports: "angular"},
        // 'ngSanitize':{exports: "ngSanitize"},
        // ui-router
        "ui-router": ["angular"],
        //// angularAMD
        "angularAMD": ["angular"],
        "ngload": ["angularAMD"],
        // "jquery":["angular"],
        // "map":["angular"],
        // "bootstrap":["jquery"],
        // "prefixfree":["angular"],
        // "modernizr":["angular"]
    },
    deps: ['app']
});
