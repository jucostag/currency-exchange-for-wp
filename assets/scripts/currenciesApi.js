(function () {
"use strict";
angular.module("currencyExchange")

    .provider("currenciesApi", function(){
        var provider = {};

        provider.$get =  ["$http", "$q", function($http, $q) {
            var currenciesApi = {};

            currenciesApi.get = function(){

                var jsonUrl = "/wp-content/plugins/currency-exchange-for-wp/assets/scripts/json/currencies.json";
                var promise = $http.get(jsonUrl);    
                var deferObject  =  deferObject || $q.defer();

                promise.then(
                    function (response){
                        deferObject.resolve(response);
                    },
                    function (reason){
                        deferObject.reject(reason);
                    }
                );

                return deferObject.promise;

            };

            return currenciesApi;
        }];

        return provider;
    });
}());