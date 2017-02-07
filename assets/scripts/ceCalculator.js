(function () {
"use strict";
angular.module("currencyExchange")

    .directive("ceCalculator", ["yahooFinanceApi", "currenciesApi", function(yahooFinanceApi, currenciesApi) {

        var diretiva = {};
        diretiva.restrict = "E";
        diretiva.templateUrl = "/wp-content/plugins/currency-exchange-for-wp/assets/scripts/directives/templates/ce-calculator.html";
        diretiva.scope = {};

        diretiva.link = function(scope, element, attrs) {

            scope.currencies = [];
            var getCurrencies = currenciesApi.get();
            getCurrencies.then(function(response){
                scope.currencies = response.data;
            },
            function(reason){
                console.log(reason);
                scope.currencies( { data: [] });
            });

            scope.symbolOne = "R$";
            scope.symbolTwo = "$";
            scope.initialsOne = "BRL";
            scope.initialsTwo = "USD";
            scope.exchange = 0;
            scope.error = "";

            scope.setSymbolOne = function(currencyInitials){
                scope.symbolOne = scope.currencies[currencyInitials].symbol;
                scope.initialsOne = currencyInitials;
            };

            scope.setSymbolTwo = function(currencyInitials){
                scope.symbolTwo = scope.currencies[currencyInitials].symbol;
                scope.initialsTwo = currencyInitials;
            };

            scope.calculate = function(currencyOne, currencyTwo, originalValue){
                currencyOne = (currencyOne === undefined) ? "BRL" : currencyOne;
                currencyTwo = (currencyTwo === undefined) ? "USD" : currencyTwo; 
                var currency = currencyTwo + currencyOne;
                var exchange = 0;

                scope.rate = [];
                var getRate = yahooFinanceApi.getRate(currency);
                getRate.then(function(response){
                    
                    scope.rate = response.data;

                    if(scope.rate === null){
                        scope.error = "An unexpected error occurred while connecting to api. Try again later.";
                    } else{
                        scope.error = "";
                        scope.rate = scope.rate.query.results.rate.Rate;   
                    }

                    if(originalValue === "" || originalValue === null){
                        scope.error = "Please enter the amount you want to convert.";
                        scope.exchange = "";
                    } else{
                        scope.error = "";

                        originalValue = parseFloat(originalValue.replace(",", "."));
                        exchange = originalValue * scope.rate;
                        scope.exchange = String(exchange).replace(".", ",");
                    }
                },
                function(reason){
                    console.log(reason);
                    scope.rate( { data: [] });
                });
            };
        };

        return diretiva;
    }]);
}());