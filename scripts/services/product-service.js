angular
    .module("whatapop")
    .service("ProductService", function($http, AppSettings) {
        // Toda funcionalidad que quieras exponer hacia
        // afuera, tiene que estar publicada en this.

        // Obtenemos la colección de productos.
        this.getProducts = function() {
            return $http.get(AppSettings.urlServer + AppSettings.endpointProducts);
        };

        // Montamos la ruta absoluta a la imagen. 
        this.getImageAbsolutePath = function(path) {
            return path ? (AppSettings.urlServer + "/" + path) : undefined;
        };
        
        // Obtenemos el producto del identificador indicado.
        this.getProductById = function(id) {
            return $http.get(AppSettings.urlServer + AppSettings.endpointProducts + "/" + id);
        };
    });