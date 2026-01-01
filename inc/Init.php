<?php

namespace VGB;

class Init {
    function __construct() {
        add_action( 'init', [ $this, 'onInit' ] );    
    }

    function onInit() {
		register_setting(
			'vbgPluginSettings',
			'vbgAPIKey',
			[
				'default'		=> '',
				'show_in_rest'	=> true,
				'type'			=> 'string'
			]
		);
		
		// $this->register_all_blocks();

		register_post_type('video_gallery', [
			'label' => __('Video Gallery', 'video-gallery-block'),
			'labels' => [
				'name'                  => __('Video Gallery', 'video-gallery-block'),
				'singular_name'         => __('Video Gallery', 'video-gallery-block'),
				'add_new'               => __('Add New', 'video-gallery-block'),
				'add_new_item'          => __('Add New Video Gallery', 'video-gallery-block'),
				'edit_item'             => __('Edit Video Gallery', 'video-gallery-block'),
				'new_item'              => __('New Video Gallery', 'video-gallery-block'),
				'view_item'             => __('View Video Gallery', 'video-gallery-block'),
				'view_items'            => __('View Video Galleries', 'video-gallery-block'),
				'search_items'          => __('Search Video Galleries', 'video-gallery-block'),
				'not_found'             => __('No Video Galleries found.', 'video-gallery-block'),
				'not_found_in_trash'    => __('No Video Galleries found in Trash.', 'video-gallery-block'),
				'all_items'             => __('All Video Galleries', 'video-gallery-block'),
				'archives'              => __('Video Gallery Archives', 'video-gallery-block'),
			],
            'show_in_rest' => true,
            'public' => true,
            'publicly_queryable' => false,
            'item_published' => 'Video Gallery Block Published',
            'item_updated' => 'Video Gallery Block Updated',
			'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<rect width="512" height="512" rx="15%" fill="var(--wp-admin-theme-color)" />
					<path  d="M413 302c-9-10-29-15-56-15-16 0-33 2-53 5a252 252 0 0 1-52-69c10-30 17-59 17-81 0-17-6-44-30-44-7 0-13 4-17 10-10 18-6 58 13 100a898 898 0 0 1-50 117c-53 22-88 46-91 65-2 9 4 24 25 24 31 0 65-45 91-91a626 626 0 0 1 92-24c38 33 71 38 87 38 32 0 35-23 24-35z" />
				</svg>
			'),
            'template' => [['vgb/video-gallery']],
            'template_lock' => 'all',
        ]);

		wp_set_script_translations( 'vgb-video-gallery-editor-script', 'video-gallery-block', VGB_DIR_PATH . 'languages' );
	}

	// function register_all_blocks() {
	// 	$blocks_dir = PEB_DIR_PATH . '/build/blocks/';
	
	// 	if ( ! is_dir( $blocks_dir ) ) {
	// 		return;
	// 	}
	
	// 	$folders = glob( $blocks_dir . '*', GLOB_ONLYDIR );
	
	// 	foreach ( $folders as $folder ) {
	// 		$folder_name = basename( $folder );
	
	// 		if ( PEB_FREE_VERSION && $folder_name !== 'pdf-embed' ) {
	// 			continue;
	// 		}
	
	// 		$block_json = $folder . '/block.json';
	// 		if ( file_exists( $block_json ) ) {
	// 			register_block_type( $folder );
	// 		}
	// 	}
	// }

}