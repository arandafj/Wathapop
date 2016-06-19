angular
    .module("whatapop")
    .component("products", {
        templateUrl: "views/products.html", 
        controller: function(ProductService, CategoryService) {
            let self = this;

            // Obtenemos los productos.
            ProductService.getProducts().then(function (response) {
                self.products = response.data;
            });

            // Obtenemos categorías.
            CategoryService.getCategories().then(function (response) {
                self.categories = response.data;
            });

            // Obtenemos la ruta absoluta de la imagen.
            this.getImageAbsolutePath = ProductService.getImageAbsolutePath;

            // Filtro de productos
            this.ProductsFilter = {category: "", name: ""};
        }
    });