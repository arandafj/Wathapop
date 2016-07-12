// Directiva que muestra lista desplegable con las categorías y una caja
// de texto para filtrar por producto.

angular
    .module("whatapop")
    .directive("productSelector", ["CategoryService", function(CategoryService) {
        return {
            restrict: "EA",
            templateUrl: "views/product-selector.html",
            scope: {
                onFilterChange: "&"
            },

            link: function(scope) {
                // Inicializamos filtro. 
                scope.ProductsFilter = { category: "", name: "" };

                // Cargamos categorias.
                CategoryService.getCategories().then(function(response) {
                    scope.categories = response.data;
                });

                // Notificamos que el filtro ha cambiado.
                scope.notifyFilter = function() {
                    scope.onFilterChange({ filter: scope.ProductsFilter });
                };
            }
        };
    }]);