# Currency Exchange Directive

Provides a currency conversion calculator based on information provided by Yahoo Finance Webservice API.

***

## Installation

Download the files and include the compiled js and css files on **head**. 

```html
<link rel="stylesheet" href="currency-exchange-js/currencyExchange.min.css">
<script src="currency-exchange-js/currencyExchange.min.js"></script>

```

## Usage

First you need to include the module in your project.

```js
// in your app
angular.module("myApp", ["currencyExchange"]);
```

Then you can use the directive:

```html
<ce-calculator></ce-calculator>
```

![Currency Exchange Calculator Preview](https://cdn.pbrd.co/images/vZZ82TmSj.png)