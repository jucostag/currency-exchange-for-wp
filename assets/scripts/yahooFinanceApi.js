(function () {
"use strict";
angular.module("currencyExchange")

    .provider("yahooFinanceApi", function(){
        var provider = {};

        provider.$get =  ["$http", "$q", function($http, $q) {
            var yahooFinanceApi = {};

            yahooFinanceApi.getRate = function(currency) {

                var jsonUrl = "//query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%3D%22"+currency+"%22&format=json&diagnostics=false&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
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

            return yahooFinanceApi;
        }];

        return provider;
    });
}());