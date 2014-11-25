function NewGenreController($scope, $http) {
    console.log('In new genre controller');
    $scope.SaveNewGenre = function () {
        $http.post('/odata/Genres', $scope.NewGenre)
            .success(function () {
                console.log($scope.NewGenre.Name + ' was saved.');
            });
        console.log('Save author');
    };
}