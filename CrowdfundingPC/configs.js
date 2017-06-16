require.config({
    paths: {
        // angular
        "angular": "./libs/angular-1.5.7",
        // angular-ui
        "ui-router": "./libs/ui-router",
        // angularAMD
        "angularAMD": "./libs/angularAMD",
        "ngload": "./libs/ngload",
        'app': './app'
    },
    shim: {
        // angular
        "angular": {exports: "angular"},
        // 'ngSanitize':{exports: "ngSanitize"},
        // ui-router
        "ui-router": ["angular"],
        //// angularAMD
        "angularAMD": ["angular"],
        "ngload": ["angularAMD"]
    },
    deps: ['app'],
});
