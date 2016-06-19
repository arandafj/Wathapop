angular
    .module("whatapop", ["ngComponentRouter", "ngSanitize"]);

// Configuramos el proveedor "$locationProvider". Establecemos
// el modo de navegación HTML 5 para que funcione SPA.
angular
    .module("whatapop")
    .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

// En $routerRootComponent indicamos el componente raíz.
angular
    .module("whatapop")
    .value("$routerRootComponent", "raiz");