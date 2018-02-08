webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);

__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('directoryApp', []);

__webpack_require__(3);
/* require('./services'); */
__webpack_require__(5);

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

angular.module('directoryApp').directive('directory', __webpack_require__(4));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function directory() {
    return {
        restrict: 'EA',
        templateUrl: 'views/directory.html',
        scope: '='
    };
};

module.exports = directory;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

angular.module('directoryApp').controller('PeopleController', __webpack_require__(6));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ })
],[1]);