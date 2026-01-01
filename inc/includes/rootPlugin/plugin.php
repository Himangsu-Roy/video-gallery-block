<?php

if (!defined('ABSPATH')) exit;

if( !class_exists( 'VGB_VideoGalleryBlock' ) ){
    class VGB_VideoGalleryBlock{
        function __construct(){
            $this -> loaded_classes();
        }
 
        function loaded_classes(){
			require_once VGB_DIR_PATH . 'includes/rootPlugin/inc/Init.php';
			require_once VGB_DIR_PATH . 'includes/rootPlugin/inc/Enqueue.php';
			require_once VGB_DIR_PATH . 'includes/rootPlugin/inc/Ajax.php';
			require_once VGB_DIR_PATH . 'includes/rootPlugin/inc/AdminMenu.php';
			// require_once VGB_DIR_PATH . 'includes/rootPlugin/inc/ShortCode.php';
			require_once VGB_DIR_PATH . 'includes/rootPlugin/inc/ShortCode.php';
			require_once VGB_DIR_PATH . 'includes/rootPlugin/inc/CustomColumn.php';
			require_once VGB_DIR_PATH . 'includes/rootPlugin/inc/video-stats-api.php';
			// require_once VGB_DIR_PATH . 'includes/rootPlugin/inc/woocommerce-integration.php';
			

			new VGB\Init();
			new VGB\Enqueue();
			new VGB\Admin\vgbAdminMenu();
			// new VGB\ShortCode();
			new VGB\ShortCode();
			new VGB\CustomColumn();
			new VGB\Ajax();
			// new VGB\VPG_Video_Stats_API();
		}
        
    }
    new VGB_VideoGalleryBlock();
}

// add_action( 'wp_footer', function(){
// 	echo VGB_DIR_PATH . 'includes/rootPlugin/inc/AdminMenu.php';

// });