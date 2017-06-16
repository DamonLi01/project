define(["angular", "angularAMD", "ui-router"], function (angular, angularAMD) {
    // module
    var app = angular.module("app", ["ui.router"]);
    // routes
    app.config(function ($stateProvider, $urlRouterProvider) {
        // default
        $urlRouterProvider.otherwise("/home");
        // route
        $stateProvider
            .state("home", {
                url: "/home",
                views: {
                    main: angularAMD.route({
                        templateUrl: "assets/home/home.html",
                        controller: "homeCtrl",
                        controllerUrl: "assets/home/homeCtrl.js"
                    }),
                    header: angularAMD.route({
                        templateUrl: "./assets/communal/header.html",
                        controller: "headerCtrl",
                        controllerUrl: "./assets/communal/headerCtrl.js"
                    }),
                    footer: angularAMD.route({
                        templateUrl: "./assets/communal/footer.html"
                    })
                }
            })
            .state("product", {
                url: "/product",
                views: {
                    main: angularAMD.route({
                        templateUrl: "assets/views/product/product.html",
                        controller: "productCtrl",
                        controllerUrl: "assets/views/product/productCtrl.js"
                    }),
                    header: angularAMD.route({
                        templateUrl: "./assets/communal/header.html",
                        controller: "headerCtrl",
                        controllerUrl: "./assets/communal/headerCtrl.js"
                    }),
                    footer: angularAMD.route({
                        templateUrl: "./assets/communal/footer.html"
                    })
                }
            })
            .state("publicBenefit", {
                url: "/publicBenefit",
                views: {
                    main: angularAMD.route({
                        templateUrl: "assets/views/publicBenefit/publicBenefit.html",
                        controller: "publicBenefitCtrl",
                        controllerUrl: "assets/views/publicBenefit/publicBenefitCtrl.js"
                    }),
                    header: angularAMD.route({
                        templateUrl: "./assets/communal/header.html",
                        controller: "headerCtrl",
                        controllerUrl: "./assets/communal/headerCtrl.js"
                    }),
                    footer: angularAMD.route({
                        templateUrl: "./assets/communal/footer.html"
                    })
                }
            })
            .state("integralShop", {
                url: "/integralShop",
                views: {
                    main: angularAMD.route({
                        templateUrl: "assets/views/integralShop/integralShop.html",
                        controller: "integralShopCtrl",
                        controllerUrl: "assets/views/integralShop/integralShopCtrl.js"
                    }),
                    header: angularAMD.route({
                        templateUrl: "./assets/communal/header.html",
                        controller: "headerCtrl",
                        controllerUrl: "./assets/communal/headerCtrl.js"
                    }),
                    footer: angularAMD.route({
                        templateUrl: "./assets/communal/footer.html"
                    })
                }
            })
            .state("details", {
                url: "/details/:detailsId",
                views: {
                    main: angularAMD.route({
                        templateUrl: "assets/views/details/details.html",
                        controller: "detailsCtrl",
                        controllerUrl: "assets/views/details/detailsCtrl.js"
                    }),
                    header: angularAMD.route({
                        templateUrl: "./assets/communal/header.html",
                        controller: "headerCtrl",
                        controllerUrl: "./assets/communal/headerCtrl.js"
                    }),
                    footer: angularAMD.route({
                        templateUrl: "./assets/communal/footer.html"
                    })
                }
            })
            .state("release", {
                url: "/release/:releaseId",
                views: {
                    main: angularAMD.route({
                        templateUrl: "assets/views/release/release.html",
                        controller: "releaseCtrl",
                        controllerUrl: "assets/views/release/releaseCtrl.js"
                    }),
                    header: angularAMD.route({
                        templateUrl: "./assets/communal/header.html",
                        controller: "headerCtrl",
                        controllerUrl: "./assets/communal/headerCtrl.js"
                    }),
                    footer: angularAMD.route({
                        templateUrl: "./assets/communal/footer.html"
                    })
                }
            })
            .state("RoadshowInformation", {
                url: "/RoadshowInformation",
                views: {
                    main: angularAMD.route({
                        templateUrl: "assets/views/RoadshowInformation.html",
                        // controller:  "integralShopCtrl",
                        // controllerUrl:"assets/views/integralShop/integralShopCtrl.js"
                    }),
                    header: angularAMD.route({
                        templateUrl: "./assets/communal/header.html",
                        controller: "headerCtrl",
                        controllerUrl: "./assets/communal/headerCtrl.js"
                    }),
                    footer: angularAMD.route({
                        templateUrl: "./assets/communal/footer.html"
                    })
                }
            })
            .state("PublishTheProject", {
                url: "/PublishTheProject",
                views: {
                    main: angularAMD.route({
                        templateUrl: "assets/views/PublishTheProject/PublishTheProject.html",
                        controller: "PublishTheProjectCtrl",
                        controllerUrl: "assets/views/PublishTheProject/PublishTheProjectCtrl.js"
                    }),
                    header: angularAMD.route({
                        templateUrl: "./assets/communal/header.html",
                        controller: "headerCtrl",
                        controllerUrl: "./assets/communal/headerCtrl.js"
                    }),
                    footer: angularAMD.route({
                        templateUrl: "./assets/communal/footer.html"
                    })
                }
            })
            .state("angelInvestor", {
                url: "/angelInvestor",
                views: {
                    main: angularAMD.route({
                        templateUrl: "assets/views/angelInvestor/angelInvestor.html",
                        controller: "angelInvestorCtrl",
                        controllerUrl: "assets/views/angelInvestor/angelInvestorCtrl.js"
                    }),
                    header: angularAMD.route({
                        templateUrl: "./assets/communal/header.html",
                        controller: "headerCtrl",
                        controllerUrl: "./assets/communal/headerCtrl.js"
                    }),
                    footer: angularAMD.route({
                        templateUrl: "./assets/communal/footer.html"
                    })
                }
            })
            .state("info", {
                url: "/info",
                views: {
                    main: angularAMD.route({
                        templateUrl: "assets/views/info/info.html",
                        controller: "infoCtrl",
                        controllerUrl: "assets/views/info/infoCtrl.js"
                    }),
                    header: angularAMD.route({
                        templateUrl: "./assets/communal/header.html",
                        controller: "headerCtrl",
                        controllerUrl: "./assets/communal/headerCtrl.js"
                    }),
                    footer: angularAMD.route({
                        templateUrl: "./assets/communal/footer.html"
                    })
                }
            })
            .state("register", {
                url: "/register",
                views: {
                    main: angularAMD.route({
                        templateUrl: "assets/views/register/register.html",
                        controller: "registerCtrl",
                        controllerUrl: "assets/views/register/registerCtrl.js"
                    })
                }
            })
            .state("resetPasswords", {
                url: "/resetPasswords",
                views: {
                    main: angularAMD.route({
                        templateUrl: "assets/views/resetPasswords/resetPasswords.html",
                        controller: "resetPasswordsCtrl",
                        controllerUrl: "assets/views/resetPasswords/resetPasswordsCtrl.js"
                    })
                }
            })
            .state("login", {
                url: "/login",
                views: {
                    main: angularAMD.route({
                        templateUrl: "assets/views/login/login.html",
                        controller: "loginCtrl",
                        controllerUrl: "assets/views/login/loginCtrl.js"
                    })
                }
            })
            .state("equityTransaction", {
                url: "/equityTransaction",
                views: {
                    main: angularAMD.route({
                        templateUrl: "assets/views/equityTransaction/equityTransaction.html",
                        controller: "equityTransactionCtrl",
                        controllerUrl: "assets/views/equityTransaction/equityTransactionCtrl.js"
                    }),
                    header: angularAMD.route({
                        templateUrl: "./assets/communal/header.html",
                        controller: "headerCtrl",
                        controllerUrl: "./assets/communal/headerCtrl.js"
                    }),
                    footer: angularAMD.route({
                        templateUrl: "./assets/communal/footer.html"
                    })
                }
            })
    });
    return angularAMD.bootstrap(app);
});