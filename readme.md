# Currency Exchange for WP 2.0

Plugin that provides a currency conversion calculator for wordpress based on information provided by Yahoo Finance Webservice API.

**This is a WordPress plugin. If you want just the JS files, visit [Currency Exchange JS](https://github.com/jucostag/currency-exchange-js).**

***

## How to get started?

Clone this repository into your wordpress plugins directory:

```
git clone https://github.com/jucostag/currency-exchange-for-wp.git --recursive
```

Activate the plugin on admin panel -> plugins, and use the shortcode as shown below where you need it.

[ce-calculator]

![Currency Exchange Calculator Preview](https://cdn.pbrd.co/images/vZZ82TmSj.png)

#### Plugin update

When you need to update the plugin, don't forget to run the line below for the [Currency Exchange JS](https://github.com/jucostag/currency-exchange-js).** submodule be updated as well.

```
git submodule update --init --recursive
```