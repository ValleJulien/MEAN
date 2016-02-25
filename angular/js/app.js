var myApp = angular.module('myApp', []); // no dependency -> [] is mandatory!

var myApp = angular.module('myApp',[]);
myApp.controller('GreetingController', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
}]);
myApp.controller('GreetingBisController', ['$scope', function($scope) {
    $scope.greetingBis = 'Hola Bis!';
}]);

myApp.controller("HomeCtrl", function($scope) {
    $scope.movies = [{
        "id": 0,
        "name": "Iron Man",
        "rating": 5,
        "availability": 9,
        "review": "Tony Stark, playboy, milliardaire, n'est pas seulement l'héritier...",
        "thumb": "https://upload.wikimedia.org/wikipedia/en/7/70/Ironmanposter.JPG"
      }, {
        "id": 1,
        "name": "Jurassic Park",
        "rating": 5,
        "availability": 3,
        "review": "John Parker Hammond, le PDG de la puissante compagnie InGen,...",
        "thumb": "https://upload.wikimedia.org/wikipedia/fr/e/e2/Jurassic_Park.png"
    }];
});
