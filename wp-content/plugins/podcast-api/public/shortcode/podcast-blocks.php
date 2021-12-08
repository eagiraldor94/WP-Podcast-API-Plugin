<?php 

function pdca_assests(){
    // Registering blocks styles
    wp_register_style('pdca_styles',plugins_url('../assets/css/style.css',__FILE__),array(),false,'all');
    
    // Registering script for fake API consumption
    wp_register_script('pdca_api_script', plugins_url('../assets/js/fakeapi.js',__FILE__));
}

add_action('wp_enqueue_scripts','pdca_assests');

function pdca_add_podcast_blocks(){

    // Getting styles with shortcode
    wp_enqueue_style('pdca_styles');

    // Getting scripts with shortcode
    wp_enqueue_script('pdca_api_script');
    $response = '
    <div class="container-sm py-5" id="podcast-blocks">
    </div>
    ';

    return $response;
}

add_shortcode('pdca_blocks','pdca_add_podcast_blocks');