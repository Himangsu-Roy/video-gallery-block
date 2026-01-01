<?php

if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! function_exists( 'vgbIsPremium' ) ) {
	function vgbIsPremium() {
		return VGB_HAS_PRO ? vgb_fs()->can_use_premium_code() : false;
	}
}


if ( ! function_exists( 'vgb_restrict_free_user_access' ) ) {
	add_action( 'load-plugin-editor.php', function() {
		if ( ! vgbIsPremium() && isset( $_GET['file'] ) ) {
			$file = sanitize_text_field( wp_unslash( $_GET['file'] ) );

			$restricted_files = [
				'video-gallery-block/inc/functions.php',
				'video-gallery-block/inc/ShortCode.php',
				'video-gallery-block/inc/CustomColumn.php',
				'video-gallery-block/inc/Init.php',
			];

			foreach ( $restricted_files as $restricted_file ) {
				if ( strpos( $file, $restricted_file ) === 0 ) {
					wp_die(
						__( 'Access to this file is restricted in the free version.', 'video-gallery-block' ),
						__( 'Permission Denied', 'video-gallery-block' ),
						array( 'response' => 403 )
					);
				}
			}
		}
	});
}


