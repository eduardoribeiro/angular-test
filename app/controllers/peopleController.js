'use strict';

function init($scope) {
    var counter = 0;

    $scope.persons = [
        {
            "name": "theo",
            "job": "CTO"
        },
        {
            "name": "john",
            "job": "CEO"
        },
        {
            "name": "mathilde",
            "job": "Marketing manager"
        },
        {
            "name": "Christian",
            "job": "student"
        }
    ];

    $scope.newPerson = {};

    $scope.addPerson = function (person) {
        console.log(person);
        var exists = 0;
        $scope.persons.forEach(existingPerson => {
            if(existingPerson.name.toLowerCase() === person.name.toLowerCase()){
                exists++;
            }
        });
        
        if(exists > 0) {
            $scope.message = {
                type: 'danger',
                result: person.name + ' is already on the list'
            }
        } else {
            $scope.message = {
                type: 'success',
                result: person.name + ' has been added successfully'
            }
            $scope.persons.push({
                name: person.name,
                job: person.job
            });
            $scope.newPerson={};
        }
        
    };
};

module.exports = init;