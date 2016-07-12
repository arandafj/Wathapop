angular
    .module("whatapop")
    .service("CategoryService",  ["$http", "AppSettings", function($http, AppSettings) {
        
        // Obtenemos las categorías disponibles.
        this.getCategories = function() {
            return $http.get(AppSettings.urlServer + AppSettings.endpointCategories);
        };
    }]);



