<?php
if ( !defined( 'ABSPATH' ) ) { exit; }

if( !class_exists( 'vgbAdminMenu' ) ) { 
	class vgbAdminMenu {
		function __construct() {
			add_action( 'admin_menu', [ $this, 'vgbAdminMenu' ] );
			add_action( 'admin_enqueue_scripts', [$this, 'vgbAdminEnqueueScripts'] );
		}

		function vgbAdminMenu() {
			$icon = "<svg viewBox='0 0 36 36' version='1.1' preserveAspectRatio='xMidYMid meet' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <title>video-gallery-solid</title> <path d='M32.12,10H3.88A1.88,1.88,0,0,0,2,11.88V30.12A1.88,1.88,0,0,0,3.88,32H32.12A1.88,1.88,0,0,0,34,30.12V11.88A1.88,1.88,0,0,0,32.12,10ZM24.18,21.83l-9.77,4.36A1,1,0,0,1,13,25.28V16.56a1,1,0,0,1,1.41-.91L24.18,20A1,1,0,0,1,24.18,21.83Z' class='clr-i-solid clr-i-solid-path-1'></path><path d='M30.14,3h0a1,1,0,0,0-1-1h-22a1,1,0,0,0-1,1h0V4h24Z' class='clr-i-solid clr-i-solid-path-2'></path><path d='M32.12,7V7a1,1,0,0,0-1-1h-26a1,1,0,0,0-1,1h0V8h28Z' class='clr-i-solid clr-i-solid-path-3'></path> <rect x='0' y='0' width='36' height='36' fill-opacity='0'></rect> </g></svg>";


			add_menu_page(
				__('Video Gallery Block', 'video-gallery'),
				__('Video Gallery Block', 'video-gallery'),
				'manage_options',
				'video-gallery-block',
				[ $this, 'renderDashboardPage' ],
				'data:image/svg+xml;base64,' . base64_encode($icon),
				20
			);
			add_submenu_page(
				'video-gallery-block',
				__('Help And Demo', 'video-gallery'),
				__('Help And Demo', 'video-gallery'),
				'manage_options',
				'video-gallery-block',
				[$this, 'renderDashboardPage']
			);
		}

		function renderDashboardPage(){ ?>
			<div
				id='vgbDashboard'
				data-info='<?php echo esc_attr( wp_json_encode( [
					'version' => VGB_PLUGIN_VERSION,
					'isPremium' => vgb_IsPremium(),
					'hasPro' => VGB_HAS_PRO,
					'adminUrl' => admin_url()
				] ) ); ?>'
			></div>
		<?php }

		function vgbAdminEnqueueScripts( $hook ) { //retuen kore toplevel_page_video-gallery-block
			if ('toplevel_page_video-gallery-block' === $hook) {
                wp_enqueue_style('vgb-admin-style', VGB_DIR_URL . 'build/admin/dashboard.css', false, VGB_PLUGIN_VERSION);
                wp_enqueue_script('vgb-admin-script', VGB_DIR_URL . 'build/admin/dashboard.js', ['react', 'react-dom', 'wp-data', "wp-api", "wp-util", "wp-i18n"], VGB_PLUGIN_VERSION, true);
                wp_set_script_translations('vgb-admin-dashboard', 'video-gallery', VGB_DIR_PATH . 'languages');
            }
		}
	}
	new vgbAdminMenu();
}
