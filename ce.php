<?php

/**
* Plugin Name: Currency Exchange for WP
* Plugin URI: https://github.com/jucostag/currency-exchange-for-wp
* Description: Provides a currency conversion calculator for wordpress based on information provided by Yahoo Finance Webservice API.
* Version: 2.0
* Author: Juliana Gonçalves
* License: MIT
*/

define("CEURL", WP_PLUGIN_URL."/".dirname(plugin_basename(__FILE__)));
define("CEPATH", WP_PLUGIN_DIR."/".dirname(plugin_basename(__FILE__)));

function ceCalculator($atts, $content = null) {
    ob_start();
    do_action("include_assets_ce");
    $template = require(__DIR__ . "/ce-calculator.phtml");
    return str_replace(array("\r","\n","\t"),"",trim(ob_get_clean()));
}
add_shortcode("ce-calculator", "ceCalculator");

function ceAssets() {
    wp_enqueue_style("ce_min_css", plugins_url("/currency-exchange-js/currencyExchange.min.css", __FILE__ ));
	if (!wp_script_is("angular.min.js", "registered") && !wp_script_is("angular.min.js", "enqueued")) {
	    wp_enqueue_script("angular", "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js", array() , false);
	}
    wp_enqueue_script("ce_app_js", plugins_url("/currency-exchange-js/currencyExchange.min.js", __FILE__ ), array() , false);
}
add_action("include_assets_ce", "ceAssets");