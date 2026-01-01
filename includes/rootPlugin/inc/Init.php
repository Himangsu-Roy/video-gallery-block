<?php

namespace VGB;

class Init {
    function __construct() {
        add_action( 'init', [ $this, 'onInit' ] );    
    }

    function onInit() {
		register_setting(
			'vgbPluginSettings',
			'vgbAPIKey',
			[
				'default'		=> '',
				'show_in_rest'	=> true,
				'type'			=> 'string'
			]
		);
		
		$this->register_all_blocks();

		register_post_type('video-gallery-block', [
			'label' => __('Video Gallery Block', 'video-gallery'),
			'labels' => [
				'name'                  => __('Video Gallery Block', 'video-gallery'),
				'singular_name'         => __('Video Gallery Block', 'video-gallery'),
				'add_new'               => __('Add New', 'video-gallery'),
				'add_new_item'          => __('Add New Video Gallery Block', 'video-gallery'),
				'edit_item'             => __('Edit Video Gallery Block', 'video-gallery'),
				'new_item'              => __('New Video Gallery Block', 'video-gallery'),
				'view_item'             => __('View Video Gallery Block', 'video-gallery'),
				'view_items'            => __('View Video Gallery Blocks', 'video-gallery'),
				'search_items'          => __('Search Video Gallery Blocks', 'video-gallery'),
				'not_found'             => __('No Video Gallery Blocks found.', 'video-gallery'),
				'not_found_in_trash'    => __('No Video Gallery Blocks found in Trash.', 'video-gallery'),
				'all_items'             => __('All Video Gallery Blocks', 'video-gallery'),
				'archives'              => __('Video Gallery Block Archives', 'video-gallery'),
			],
            'show_in_rest' => true,
            'public' => true,
            'publicly_queryable' => false,
            'item_published' => 'Video Gallery Block Published',
            'item_updated' => 'Video Gallery Updated',
			'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('
				<svg fill="#f0f6fc99" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490.718 490.718" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M245.359,0.359C109.852,0.359,0,110.049,0,245.358s109.852,245,245.359,245s245.359-109.691,245.359-245 S380.866,0.359,245.359,0.359z M176.828,341.011V140.824l187.489,100.098L176.828,341.011z"></path> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
			'),
            'template' => [['vgb/video-gallery']],
            'template_lock' => 'all',

        ]);

		wp_set_script_translations( 'vgb-video-gallery-editor-script', 'video-gallery-block', VGB_DIR_PATH . 'languages' );
	}

	// function register_all_blocks() {
	// 	$blocks_dir = VGB_DIR_PATH . '/build/blocks/';
	
	// 	if ( ! is_dir( $blocks_dir ) ) {
	// 		return;
	// 	}
	
	// 	$folders = glob( $blocks_dir . '*', GLOB_ONLYDIR );
	
	// 	foreach ( $folders as $folder ) {
	// 		$folder_name = basename( $folder );
	
	// 		if ( VGB_FREE_VERSION && $folder_name !== 'video-gallery-block' ) {
	// 			continue;
	// 		}
	
	// 		$block_json = $folder . '/block.json';
	// 		if ( file_exists( $block_json ) ) {
	// 			register_block_type( $folder );
	// 		}
	// 	}
	// }



	public function register_all_blocks() {
                if (!current_user_can('manage_options') && is_admin()) {
                    return; 
                }

                $blocks_dir = VGB_DIR_PATH . 'build/blocks/';
                if (!is_dir($blocks_dir)) return;

                $folders = glob($blocks_dir . '*', GLOB_ONLYDIR);
                $is_premium = vgb_IsPremium();

                foreach ($folders as $folder) {
                    $name = basename($folder);
                    
                    // LOGIC LOCK: Hardcoded whitelist for Free users
                    if (!$is_premium && $name !== 'video-gallery-block') {
                       continue;
                    }

                    if (file_exists($folder . '/block.json')) {
                        register_block_type($folder);
                    }
                }
            }

}