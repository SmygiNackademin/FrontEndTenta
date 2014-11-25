function ListGenresController($scope, $http) {
    $http.get("/odata/Genres")
           .success(function (data) {
               $scope.Genres = data.value;
           });

    $scope.RemoveGenre = function (key) {
        $http.delete("/odata/Genres('" + key + "')")
            .success(function () {
                $http.get("/odata/Genres")
                    .success(function (data) {
                        $scope.Genres = data.value;
                    });
            });
        console.log('Genre deleted');
    };
};