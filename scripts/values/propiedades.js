angular
    .module("whatapop")
    .value("AppSettings", {
        urlServer: "http://localhost:8000",
        endpointCategories: "/api/categories",
        endpointProducts: "/api/products",
        endpointUsers: "/api/users",
        urlHome: "http://localhost:3000"
    });