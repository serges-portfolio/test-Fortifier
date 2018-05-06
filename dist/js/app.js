/*

var handleMovieList = angular.module("handleMovieList",["ngStorage"]);

    handleMovieList.controller("addMovie", function ($scope, $localStorage) {

        // $localStorage.$default({
        // });

       $scope.templ = $localStorage.templ;

       $scope.addNew = function () {

                    $scope.templ.push({

                        "poster": $scope.poster,
                        "description": $scope.description,
                        "title": $scope.title,
                        "year": $scope.year,
                        "country": $scope.country,
                        "genre": $scope.genre,
                        "actors": $scope.actors

                    });
                    //$scope.templ = "";


                    $scope.poster = "";
                    $scope.description = "";
                    $scope.title = "";
                    $scope.year = "";
                    $scope.country = "";
                    $scope.genre = "";
                    $scope.actors = "";
       };

       $scope.deleteMovie = function (item) {
            var data = $scope.templ.indexOf(item);
            $scope.templ.splice(data, 1);

            //console.log(deleteMovie());
       }

    });
*/

/*var handleMovieList = angular.module("handleMovieList", ['ngStorage']);
handleMovieList.controller("addMovie", function($scope, $localStorage) {

    $scope.templ = []; // устанавливаем значение по умолчанию. Если в localStorage нету companies, он создаться пустым массивом

    $scope.templ = $localStorage.templ; // присваиваем к $scope наш массив. Он или пустой или с данными.
    $scope.addNew = function() {
        $scope.templ.push({

            "poster": $scope.poster,
            "description": $scope.description,
            "title": $scope.title,
            "year": $scope.year,
            "country": $scope.country,
            "genre": $scope.genre,
            "actors": $scope.actors

        }); // когда обновляется содержмиое массива, будет перезаписываться значение в localStorage

        $scope.poster = "";
        $scope.description = "";
        $scope.title = "";
        $scope.year = "";
        $scope.country = "";
        $scope.genre = "";
        $scope.actors = "";

    };
});*/
var handleMovieList = angular.module("handleMovieList", ['ngStorage']);
handleMovieList.controller("addMovie", function($scope, $localStorage) {

    $localStorage.$default({
      companies: [] // устанавливаем значение по умолчанию. Если в localStorage нету companies, он создаться пустым массивом
    });

    $scope.companies = [];
    $scope.companies = $localStorage.companies; // присваиваем к $scope наш массив. Он или пустой или с данными.
    $scope.addRow = function() {

        /*if ($scope.companies !==undefined) {*/
        $scope.companies.push({
            'title': $scope.title,
            'year': $scope.year,
            'country': $scope.country,
            'genre': $scope.genre,
            'actors': $scope.actors,
            'description': $scope.description,
            'poster': $scope.poster
        }); // когда обновляется содержмиое массива, будет перезаписываться значение в localStorage
        $scope.title = '';
        $scope.year = '';
        $scope.country = '';
        $scope.genre = '';
        $scope.actors = '';
        $scope.description = '';
        $scope.poster = '';
        /*} else {
            console.log ("gaga");
        }*/
    };
    $scope.deleteMovie = function (item) {
        var data = $scope.companies.indexOf(item);
        $scope.companies.splice(data, 1);

        //console.log(deleteMovie());
    }
});
