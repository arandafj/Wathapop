// Componente que muestra los detalles de un producto.

angular
    .module("whatapop")
    .component("oneProduct", {
        templateUrl: "views/one-product.html",
        controller: ["ProductService", "$scope", "$sce", function(ProductService, $scope, $sce) {
            let self = this;
            this.$routerOnActivate = function(next) {
                
                // Otenemos los datos con el id del producto pasado en la URL.
                ProductService.getProductById(next.params.id).then(function(response) {
                    self.product = response.data;
                    // Por defecto asignamos 0 como false a favorito, y 1 como true.
                    self.product.favorite = 0;

                    // Guardamos id de favorito
                    if (typeof(Storage) !== 'undefined') {
                        let marked = localStorage.getItem("fav");

                        if (marked !== null) {
                            let fav = JSON.parse(marked);
                            // Obtenemos id de favorito
                            if (fav.ids.indexOf(self.product.id) >= 0) {
                                self.product.favorite = 1;
                            }
                        }
                    }
                });
            };


            this.getImageAbsolutePath = ProductService.getImageAbsolutePath;

            // Guardamos id en el array de favoritos de localStorage.
            this.saveFavorite = function(selected) {
                if (self.product !== 'undefined' && typeof(Storage) !== 'undefined') {
                    let fav = { ids: [] };
                    let marked = localStorage.getItem("fav");
                    if (marked !== null) {
                        fav = JSON.parse(marked);
                    }

                    // Eliminamos id si selected es 0.
                    if (selected == 0) {
                        let index = fav.ids.indexOf(self.product.id);
                        if (index >= 0) {
                            fav.ids.splice(index, 1);
                        }
                    } else if (selected == 1) {
                        // Añadimos id si selected es 1.
                        fav.ids.push(self.product.id);
                    }

                    marked = JSON.stringify(fav);
                    localStorage.setItem("fav", marked);
                }
            };

            this.validateHtml = function(text) {
                return $sce.trustAsHtml(text);
            };
        }]

    });