<?php
/**
 * Plugin Name: Video Gallery Block
 * Description: Display your videos as gallery in a professional way.
 * Version: 1.1.1
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: video-gallery
 * @fs_premium_only vendor/freemius, /build/blocks/lightbox-video-gallery, /build/blocks/masonry-video-grid-one, /build/blocks/parallax-row-video-gallery, /build/blocks/slider-autoplay-video, /build/blocks/video-carousel-gallery, /build/blocks/video-playlist-gallery, /build/blocks/video-slider, /build/blocks/video-testimonial-section 
 * @fs_free_only vendor/freemius-lite
 */


// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

if (function_exists('vgb_fs')) {
    vgb_fs()->set_basename(true, __FILE__);
} else {
    // Constants
    define('VGB_PLUGIN_VERSION', (isset($_SERVER['HTTP_HOST']) && $_SERVER['HTTP_HOST'] === 'localhost') ? time() : '1.1.1');
    define('VGB_DIR_URL', plugin_dir_url(__FILE__));
    define('VGB_PUBLIC_DIR', VGB_DIR_URL . 'public/');
    define('VGB_DIR_PATH', plugin_dir_path(__FILE__));
    define('VGB_HAS_PRO', file_exists(VGB_DIR_PATH . 'vendor/freemius/start.php'));
    define('VGB_FREE_VERSION', !VGB_HAS_PRO);

    // Include video stats API
    if (file_exists(VGB_DIR_PATH . 'includes/video-stats-api.php')) {
        require_once VGB_DIR_PATH . 'includes/video-stats-api.php';
    }

    // Include WooCommerce integration.
    if (file_exists(VGB_DIR_PATH . 'includes/woocommerce-integration.php')) {
        require_once VGB_DIR_PATH . 'includes/woocommerce-integration.php';
    }
  

    // Freemius integration
    if (!function_exists('vgb_fs')) {
        function vgb_fs() {
            global $vgb_fs;

            if (!isset($vgb_fs)) {
                if (VGB_HAS_PRO) {
                    require_once VGB_DIR_PATH . 'vendor/freemius/start.php';
                } else {
                    require_once VGB_DIR_PATH . 'vendor/freemius-lite/start.php';
                }

                $vgb_config = array(
                    'id'                => '20637',
                    'slug'              => 'video-gallery-block',
                    'premium_slug'      => 'video-gallery-block-pro',
                    'type'              => 'plugin',
                    'public_key'        => 'pk_02d017aab6844d54db3238a59e91c',
                    'is_premium'        => VGB_HAS_PRO,
                    'premium_suffix'    => 'Pro',
                    'has_premium_version' => true,
                    'has_addons'        => false,
                    'has_paid_plans'    => true,
                    'wp_org_gatekeeper' => 'OA7#BoRiBNqdf52FvzEf!!074aRLPs8fspif$7K1#4u4Csys1fQlCecVcUTOs2mcpeVHi#C2j9d09fOTvbC0HloPT7fFee5WdS3G',
                    // 'menu'              => array(
                    //     'slug'       => 'video-gallery-block',
                    //     'first-path' => 'tools.php?page=video-gallery-block#/welcome',
                    //     'support'    => false,
                    //     'parent'     => array(
                    //         'slug' => 'tools.php',
                    //     ),
                    // ),
                    // 'menu'               => array(
                    //     'slug'           => 'video-gallery-block',
                    //     'first-path'     => VGB_HAS_PRO ? 'admin.php?page=video-gallery-block#/welcome' : 'tools.php?page=video-gallery-block',
                    //     'support'        => false,
                    // ),
                    'menu'           => array(
                    'slug'           => 'edit.php?post_type=video-gallery-block',
                    'first-path'     => 'edit.php?post_type=video-gallery-block#/welcome',
                    'support'        => false,
                    ),
                );  

                $vgb_fs = VGB_HAS_PRO ? fs_dynamic_init($vgb_config) : fs_lite_dynamic_init($vgb_config);
            }

            return $vgb_fs;
        }

        vgb_fs();
        do_action('vgb_fs_loaded');
    }


    require_once VGB_DIR_PATH . 'includes/utility/functions.php';
    require_once VGB_DIR_PATH . 'includes/rootPlugin/plugin.php';

    // Check if premium is active
    // function vgb_IsPremium() {
    //     return (VGB_HAS_PRO && function_exists('vgb_fs')) ? vgb_fs()->can_use_premium_code() : false;
    // }

    // Load premium-only AJAX if licensed
    // if (vgb_IsPremium()) {
    //     if (file_exists(VGB_DIR_PATH . 'inc/Ajax.php')) {
    //         require_once VGB_DIR_PATH . 'inc/Ajax.php';
    //     }
    // }

    // if( VGB_HAS_PRO && vgb_IsPremium() ) {
	// 	require_once VGB_DIR_PATH . 'inc/ShortCode.php';
	// 	require_once VGB_DIR_PATH . 'inc/adminMenuPro.php';
	// }
	// else {
	// 	require_once VGB_DIR_PATH . 'inc/adminMenu.php';
	// }

    // Main plugin class
    if (!class_exists('VGBPlugin')) {
        class VGBPlugin {
            public function __construct() {
                add_action('enqueue_block_assets', [$this, 'enqueueBlockAssets']);
                add_action('wp_enqueue_scripts', [$this, 'wpEnqueueScripts']);
                // add_action('init', [$this, 'register_all_blocks']);
                add_action('enqueue_block_editor_assets', [$this, 'vgbEnqueueBlockEditorAssets']);
            }

            public function enqueueBlockAssets() {
                wp_register_script(
                    'isotope',
                    VGB_PUBLIC_DIR . 'js/isotope.pkgd.min.js',
                    ['jquery'],
                    '3.0.6',
                    true
                );
                wp_enqueue_script('isotope');

            }

            public function wpEnqueueScripts() {
                wp_register_script('plyr', VGB_PUBLIC_DIR . 'js/plyr.js', [], '3.7.2', true);
                wp_register_style('plyr', VGB_PUBLIC_DIR . 'css/plyr.css', [], '3.7.2');
            }
            
	
            // public function register_all_blocks() {
                // if (!current_user_can('manage_options') && is_admin()) {
                //     return; 
                // }

                // $blocks_dir = VGB_DIR_PATH . 'build/blocks/';
                // if (!is_dir($blocks_dir)) return;

                // $folders = glob($blocks_dir . '*', GLOB_ONLYDIR);
                // $is_premium = vgb_IsPremium();

                // foreach ($folders as $folder) {
                //     $name = basename($folder);
                    
                //     // LOGIC LOCK: Hardcoded whitelist for Free users
                //     if (!$is_premium && $name !== 'video-gallery-block') {
                //        continue;
                //     }

                //     if (file_exists($folder . '/block.json')) {
                //         register_block_type($folder);
                //     }
                // }
            // }

            public function vgbEnqueueBlockEditorAssets() {
                wp_add_inline_script(
                    'bvb-video-blocks-gallery-editor-script',
                    'const vgbpipecheck = ' . wp_json_encode(vgb_IsPremium()) . ';',
                    'before'
                );
            }
        }

        new VGBPlugin();
    }

}

// Add custom block category
add_filter('block_categories_all', function ($categories, $post) {
    array_unshift($categories, [
        'slug'  => 'videoblocks',
        'title' => __('Video Blocks', 'video-gallery-block'),
        'icon'  => 'video-alt',
    ]);
    return $categories;
}, 10, 2);