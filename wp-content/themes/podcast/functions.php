<?php

function pdc_assets(){
    // Getting fonts and bootstrap
    wp_register_style('pdc_theme_fonts',get_template_directory_uri().'/assets/css/fonts.css',array(),false,'all');
    wp_register_style('pdc_bootstrap','https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css',array(),'5.1','all');

    // Getting custom styles
    wp_enqueue_style('pdc_styles',get_template_directory_uri().'/assets/css/style.css', array('pdc_theme_fonts','pdc_bootstrap'));
}

add_action('wp_enqueue_scripts','pdc_assets');