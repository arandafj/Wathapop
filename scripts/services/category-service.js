angular
    .module("whatapop")
    .service("CategoryService", function($http, AppSettings) {
        
        // Obtenemos las categorías disponibles.
        this.getCategories = function() {
            return $http.get(AppSettings.urlServer + AppSettings.endpointCategories);
        };
    });