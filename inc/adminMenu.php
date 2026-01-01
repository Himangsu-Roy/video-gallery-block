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

            if ('tools_page_video-gallery-block' === $hook) {
                wp_enqueue_style('vgb-admin-style', VGB_DIR_URL . 'build/admin/dashboard.css', false, VGB_PLUGIN_VERSION);
                wp_enqueue_script('vgb-admin-script', VGB_DIR_URL . 'build/admin/dashboard.js', ['react', 'react-dom', 'wp-data', "wp-api", "wp-util", "wp-i18n"], VGB_PLUGIN_VERSION, true);
                wp_set_script_translations('vgb-admin-dashboard', 'video-gallery', VGB_DIR_PATH . 'languages');
            }
        }

        public function adminMenu()
        {
            add_submenu_page(
                // "tools.php",
                'edit.php?post_type=vgb',
                __('Video Gallery Block', 'video-gallery'),
                __('Video Gallery Block', 'video-gallery'),
                'manage_options',
                'video-gallery-block',
                [$this, 'renderDashboardPage'],
            );
        }

        public function renderDashboardPage()
        { ?>
            <div id='vgbDashboard' data-info='<?php echo esc_attr(wp_json_encode([
                'version' => VGB_PLUGIN_VERSION,
                'isPremium' => vgb_IsPremium(),
                'hasPro' => VGB_HAS_PRO,
            ])); ?>'></div>
        <?php }

    }
    new vgbAdminMenu();
}