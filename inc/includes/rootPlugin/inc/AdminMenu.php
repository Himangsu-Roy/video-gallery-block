<?php
namespace VGB\Admin;

if (! defined('ABSPATH')) {
    exit;
}


if (! class_exists('vgbAdminMenu')) {

    class vgbAdminMenu
    {
        public function __construct()
        {
            add_action('admin_enqueue_scripts', [$this, 'adminEnqueueScripts']);
            add_action('admin_menu', [$this, 'adminMenu']);
        }

        public function adminEnqueueScripts($hook)
        {
            if ($hook === 'toplevel_page_video-gallery') {
                wp_enqueue_style('vgb-admin-style', VGB_DIR_URL . 'build/admin/dashboard.css', false, VGB_PLUGIN_VERSION);
                wp_enqueue_script('vgb-admin-script', VGB_DIR_URL . 'build/admin/dashboard.js', ['react', 'react-dom', 'wp-data', "wp-api", "wp-util", "wp-i18n"], VGB_PLUGIN_VERSION, true);
                wp_set_script_translations('vgb-admin-dashboard', 'video-gallery', VGB_DIR_PATH . 'languages');
            }
            
            wp_enqueue_script( 'admin-post-js', VGB_DIR_URL . 'build/admin-post.js', [], VGB_PLUGIN_VERSION, true );
            wp_enqueue_style( 'admin-post-css', VGB_DIR_URL . 'build/admin-post.css', [], VGB_PLUGIN_VERSION );
        }

        public function adminMenu()
        {
            // add_menu_page(
            //     __( 'Video Gallery Block', 'video-gallery' ),      // Page title
            //     __( 'Video Gallery Block', 'video-gallery' ),        // Menu title
            //     'manage_options',                         // Capability required
            //     'video-gallery',                    // Menu slug (unique identifier)
            //     [$this, 'renderDashboardPage'],            // Callback function to render the page content
            //     'dashicons-admin-generic',                // Icon URL or Dashicon class
            //     3                                         // Position in the menu (optional)
            // );

                 
            // add_submenu_page(
            //     'edit.php?post_type=video-gallery-block',
            //     'Demo & Help',
            //     'Demo & Help',
            //     'manage_options',
            //     'video-gallery-demo',
            //     [$this, 'renderDashboardPage'],
            //     'dashicons-admin-generic',                // Icon URL or Dashicon class
            //     3                                         // Position in the menu (optional)
            // );

            $icon = "<svg fill='#f0f6fc99' height='200px' width='200px' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 490.718 490.718' xml:space='preserve'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <g> <path d='M245.359,0.359C109.852,0.359,0,110.049,0,245.358s109.852,245,245.359,245s245.359-109.691,245.359-245 S380.866,0.359,245.359,0.359z M176.828,341.011V140.824l187.489,100.098L176.828,341.011z'></path> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>";


            add_menu_page(
				__('Video Gallery Block', 'video-gallery'),
				__('Video Gallery Block', 'video-gallery'),
				'manage_options',
				'video-gallery',
				[ $this, 'renderDashboardPage'],
				'data:image/svg+xml;base64,' . base64_encode($icon),
				20
			);

			add_submenu_page(
				'video-gallery',
				__('Help - bPlugins', 'video-gallery'),
				__('Help And Demo', 'video-gallery'),
				'manage_options',
				'video-gallery',
				[$this, 'renderDashboardPage']
			);

        }


        public function renderDashboardPage()
        { ?>
            <div id='vgbDashboard' data-info='<?php echo esc_attr(wp_json_encode([
                'version' => VGB_PLUGIN_VERSION,
                'isPremium' => vgb_IsPremium(),
                'hasPro' => VGB_HAS_PRO,
                'adminUrl' => admin_url()
            ])); ?>'></div>
        <?php }

    }
}


