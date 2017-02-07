<?php

/**
* Plugin Name: Currency Exchange for WP
* Plugin URI: https://github.com/jucostag/currency-exchange-for-wp
* Description: Provides a currency conversion calculator for wordpress based on information provided by Yahoo Finance Webservice API.
* Version: 1.0
* Author: Juliana Gonçalves
* License: MIT
*/

define("CEURL", WP_PLUGIN_URL."/".dirname(plugin_basename(__FILE__)));
define("CEPATH", WP_PLUGIN_DIR."/".dirname(plugin_basename(__FILE__)));

function ceCalculator($atts, $content = null) {
    ob_start();
    do_action("include_assets_ce");
    $template = require(__DIR__ . "/assets/templates/ce-calculator.phtml");
    return str_replace(array("\r","\n","\t"),"",trim(ob_get_clean()));
}
add_shortcode("ce-calculator", "ceCalculator");

function ceAssets() {
    wp_enqueue_style("ce_flags_css", plugins_url("/assets/flags/flags.css", __FILE__ ));
    wp_enqueue_style("ce_min_css", plugins_url("/assets/css/currencyExchange.min.css", __FILE__ ));
    wp_enqueue_script("ce_app_js", plugins_url("/assets/js/currencyExchange.min.js", __FILE__ ), array() , false);
}
add_action("include_assets_ce", "ceAssets");