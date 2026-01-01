import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { blockIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: blockIcon,
	edit: Edit
});


// src/index.js
// import { registerBlockType } from '@wordpress/blocks';
// import metadata from './block.json';
// import Edit from './Components/Backend/Edit';
// import { blockIcon } from './utils/icons';
// import './editor.scss';

// registerBlockType(metadata.name,{
// 	...metadata,
// 	icon: blockIcon,
// 	edit: Edit,

// 	supports: {
// 		align: ['wide','full'],
// 		html: false,
// 		blockAlign: {
// 			disableNone: true       
// 		}
// 	}
// });



// const settings = {
// 	...metadata,
// 	supports: {
// 		...metadata.supports,
// 		align: ['wide','full']
// 	},
// 	icon: blockIcon,
// 	edit: Edit,
// };

// registerBlockType(metadata.name,settings);


// wp.hooks.addFilter(
// 	'blocks.registerBlockType',
// 	'vpg/video-playlist-gallery',
// 	function (settings,name) {

// 		// USE THE ACTUAL BLOCK NAME FROM block.json
// 		if (name === metadata.name) {
// 			if (!settings.supports) settings.supports = {};

// 			// Only show Wide + Full
// 			settings.supports.align = ['wide','full'];
// 		}

// 		return settings;
// 	}
// );