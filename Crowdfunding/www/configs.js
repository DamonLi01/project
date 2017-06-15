//<script src="lib/ionic/js/ionic.bundle.js"></script>
//    <script src="js/app.js"></script>
//    <script src="js/controllers.js"></script>
//    <script src="js/services.js"></script>
require.config({
    paths: {
        // angular
        "ionic": "./lib/ionic/js/ionic.bundle",
        // angularAMD
        "angularAMD": "./lib/angularAMD",
        "ngload": "./lib/ngload",
        'app':'./app',
        'ngCordova':'lib/ngCordova/dist/ng-cordova.min',
        'cordova':'cordova'
    },
    shim: {
        // ionic
        "ionic": { exports: "ionic" },
        //// angularAMD
        "angularAMD": ["ionic"],
        "ngload": ["ionic"],
        "ngCordova":["ionic"],
        'cordova':["ionic"]
    },
    deps: ['app'],
});
