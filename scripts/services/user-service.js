angular
    .module("whatapop")
    .service("UserService", function($http, AppSettings) {

        // Obtenemos los usuarios.
        this.getUsers = function() {
            return $http.get(AppSettings.urlServer + AppSettings.endpointUsers);
        };
    });