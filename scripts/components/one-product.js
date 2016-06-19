angular
    .module("whatapop")
    .component("oneProduct", {
        templateUrl: "views/one-product.html",
        controller: function(ProductService, $scope) {
            let self = this;

            // El hook '$routerOnActivate' del router nos da información sobre
            // la ruta que se está navegando. Entre otros datos, podemos acceder
            // a los parámetros definidos en la ruta.
            this.$routerOnActivate = function(next) {
                ProductService.getProductById(next.params.id).then(function(response) {
                    self.product = response.data;
                    $scope.descHTML = self.product.description;
                });
            };

            // Obtenemos la ruta absoluta de la imagen.
            this.getImageAbsolutePath = ProductService.getImageAbsolutePath;
        }
    });