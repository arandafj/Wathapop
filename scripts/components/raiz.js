angular
    .module("whatapop")
    .component("raiz", {
        $routeConfig: [{
            name: "Products",
            path: "/products",
            component: "products",
            useAsDefault: true
        }, {
            name: "OneProduct",
            path: "/one-product/:id",
            component: "oneProduct"
        }],
        templateUrl: "views/raiz.html",
        controller: function(AppSettings) {
            this.home = AppSettings.urlHome;
        }
    });