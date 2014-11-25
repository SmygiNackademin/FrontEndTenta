function ListGenresController($scope, $http) {
    $http.get("/odata/Genres")
           .success(function (data, status) {
               $scope.Genres = data.value;
           });

    $scope.RemoveGenre = function (key) {
        $http.delete("/odata/Genres('" + key + "')")
            .success(function () {
                $http.get("/odata/Genres")
                    .success(function (data, status) {
                        $scope.Genres = data.value;
                    });
            });
        console.log('Genre deleted');
    };

    //$scope.UpdateGenre = function (key, genre) {
    //    $http.put("/odata/Genres(" + key + ")").data(genre)
    //        .success(function () {
    //            $http.get("/odata/Genres")
    //                .success(function (data, status) {
    //                    $scope.Genres = data.value;
    //                });
    //            console.log('Genre updated...');
    //        });
    //};
};