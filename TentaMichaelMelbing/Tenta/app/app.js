var app = angular.module('MyApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: '/app/partials/NewGenre.html',
            controller: 'NewGenreController'
        })
        .when('/List', {
            templateUrl: '/app/partials/ListGenres.html',
            controller: 'ListGenresController'
        });
});

app.controller('NewGenreController', NewGenreController)
    .controller('ListGenresController', ListGenresController);