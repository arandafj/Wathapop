// Componente que muestra lista de productos.

angular
    .module("whatapop")
    .component("products", {
        templateUrl: "views/products.html",
        controller: ["ProductService", function(ProductService) {
            let self = this;

            // Filtro de productos por categoría y nombre.
            this.ProductsFilter = { category: "", name: "" };

            // Obtenemos los productos.
            ProductService.getProducts().then(function (response) {
                self.products = response.data;
            });

            // Obtiene la ruta absoluta de la imagen.
            this.getImageAbsolutePath = ProductService.getImageAbsolutePath;

            // Actualiza el filtro.
            this.updateFilter = function(filter) {
                this.ProductsFilter = filter;
            };
        }]
    });