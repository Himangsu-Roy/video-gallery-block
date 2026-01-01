<?php

namespace VGB;

class Enqueue {
    function __construct() {
        add_action( 'admin_enqueue_scripts', [$this, 'adminEnqueueScripts']);
    }


    function adminEnqueueScripts($screen){
        if ($screen === "edit.php") {
            wp_enqueue_script( 'admin-post-js', VGB_DIR_URL . 'build/admin-post.js', [], VGB_PLUGIN_VERSION, true );
            wp_enqueue_style( 'admin-post-css', VGB_DIR_URL . 'build/admin-post.css', [], VGB_PLUGIN_VERSION );
        }
    }
}