(function () {
"use strict";
angular.module("currencyExchange")

    .directive("ceCalculator", ["yahooFinanceApi", "currenciesApi", function(yahooFinanceApi, currenciesApi) {

        var directive = {};
        var scripts = document.getElementsByTagName("script");
        scripts = scripts[scripts.length-1].src.split("/");

        directive.restrict = "E";
        directive.templateUrl = scripts[0] + "currency-exchange-js/assets/scripts/templates/ce-calculator.html";
        directive.scope = {};

        directive.link = function(scope, element, attrs) {

            scope.currencies = currenciesApi.get();

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

        return directive;
    }]);
}());