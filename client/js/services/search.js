angular.module('SearchSrvc', [])
    .factory('SearchService', function($resource) {
        return {
            search: $resource('/api/search'),
            detail: $resource('/api/detail')
        }
    })
