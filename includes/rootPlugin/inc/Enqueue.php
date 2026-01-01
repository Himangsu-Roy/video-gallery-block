<?php

namespace VGB;

class Enqueue {
    function __construct() {
        add_action( 'admin_enqueue_scripts', [$this, 'adminEnqueueScripts']);
    }


    function adminEnqueueScripts($screen){
        global $typenow;

        if ('video-gallery-block' === $typenow) {
            
            wp_enqueue_script( 'admin-post-js', VGB_DIR_URL . 'build/admin-post.js', [], VGB_PLUGIN_VERSION, true );
            wp_enqueue_style( 'admin-post-css', VGB_DIR_URL . 'build/admin-post.css', [], VGB_PLUGIN_VERSION );

            if ($screen === "video-gallery-block_page_vgb-help-demo") {
                wp_enqueue_script( 'vgb-admin-dashboard-js', VGB_DIR_URL . 'build/admin/dashboard.js', [ 'react', 'react-dom' ], VGB_PLUGIN_VERSION, true );
                wp_enqueue_style( 'vgb-admin-dashboard-css', VGB_DIR_URL . 'build/admin/dashboard.css', [], VGB_PLUGIN_VERSION );
            }

        }
    }
  
}