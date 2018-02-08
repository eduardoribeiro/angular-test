var app = angular.module('clevertiApp', []);

app.controller('directory', function ($scope) {
    count = 0;
    $scope.init = function() {
        $scope.datas = [
            {
            "name":"theo",
            "job":"CTO"
            },
            {
            "name":"john",
            "job":"CEO"
            },
            { 
            "name":"mathilde",
            "job":"Marketing manager"
            },
            {
            "name":"Christian",
            "job":"student"
            }
           ]
    };

    $scope.addPerson = function () {
        counter++;
        $scope.customers.push({
            name: 'New Customer' + counter,
            street: counter + ' Cedar Point St.'
        });
    };

    $scope.changeData = function () {
        counter++;
        $scope.customer = {
            name: 'James',
            street: counter + ' Cedar Point St.'
        };
    };
});

app.directive('person', [function personsDirective() {
    'use strict';
    return {
        restrict: 'E', //E = element, A = attribute, C = class, M = comment         
        scope: '=',
        templateUrl: './views/person.html'
    }
}]);