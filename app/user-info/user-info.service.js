angular
    .module('userApp')
    .factory('userInfoService', ['$http', function($http) {
        
        function getUserInfo() {
            // $http returns a promise, which has a then function, which also returns a promise
            promise = $http({
                method: 'GET',
                url: 'http://jsonplaceholder.typicode.com/posts',
            });
            // Return the promise to the controller
            return promise;
        }
        
        return {
           getUserInfo: getUserInfo
        };

    }]);