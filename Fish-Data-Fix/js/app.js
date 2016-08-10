(function (){

/* global angular */
var app = angular.module('fishID', ['angularUtils.directives.dirPagination']);

    app.controller('FishIDController', ['$http', function($http){
    
        var fishID = this;
        fishID.items = [];
        
        $http.get('https://data.qld.gov.au/api/action/datastore_search', {
            params: {
                resource_id: '32af9a35-d4db-41e9-b152-d52609ff6372',
                limit: 500,
                offset: 0,
                q: ''
            }
         })
        .success(function(data){
                fishID.items = data.result.records; 
            });
    
    }]);

})();


// Open Data: https://data.qld.gov.au/api/action/datastore_search?resource_id=32af9a35-d4db-41e9-b152-d52609ff6372&limit=5
// Test Open data: https://jstesting-jjpeet.c9users.io/FishID/js/fishdata.json

