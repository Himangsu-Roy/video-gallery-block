import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general',title: __('General','textdomain') },
	{ name: 'style',title: __('Style','textdomain') }
];

export const purposeTypeOptions = [
	{ label: 'Test',value: 'test' },
	{ label: 'Final',value: 'final' }
];

export const videoSizeOptions = [
	{ value: "contain",label: "Contain" },
	{ value: "cover",label: "Cover" },
	{ value: "fill",label: "Fill" },
	{ value: "none",label: "None" },
];





{
	/* block control options json */
	// "previousBtn": {
	// 	"color": "#fff",
	// 		"hoverColor": "#f97316",
	// 			"size": {
	// 		"desktop": "24px",
	// 			"tablet": "24px",
	// 				"mobile": "24px"
	// 	},
	// 	"border": {
	// 		"show": false,
	// 			"color": "#fff",
	// 				"width": 0,
	// 					"style": "solid"
	// 	},
	// 	"borderRadius": {
	// 		"desktop": {
	// 			"top": "50%",
	// 				"right": "50%",
	// 					"left": "50%",
	// 						"bottom": "50%"
	// 		},
	// 		"tablet": {
	// 			"top": "50%",
	// 				"right": "50%",
	// 					"left": "50%",
	// 						"bottom": "50%"
	// 		},
	// 		"mobile": {
	// 			"top": "50%",
	// 				"right": "50%",
	// 					"left": "50%",
	// 						"bottom": "50%"
	// 		}
	// 	}
	// },
	// "nextBtn": {
	// 	"color": "#fff",
	// 		"hoverColor": "#f97316",
	// 			"size": {
	// 		"desktop": "24px",
	// 			"tablet": "24px",
	// 				"mobile": "24px"
	// 	},
	// 	"border": {
	// 		"show": false,
	// 			"color": "#fff",
	// 				"width": 0,
	// 					"style": "solid"
	// 	},
	// 	"borderRadius": {
	// 		"desktop": {
	// 			"top": "50%",
	// 				"right": "50%",
	// 					"left": "50%",
	// 						"bottom": "50%"
	// 		},
	// 		"tablet": {
	// 			"top": "50%",
	// 				"right": "50%",
	// 					"left": "50%",
	// 						"bottom": "50%"
	// 		},
	// 		"mobile": {
	// 			"top": "50%",
	// 				"right": "50%",
	// 					"left": "50%",
	// 						"bottom": "50%"
	// 		}
	// 	}
	// },
	// "volumeBtn": {
	// 	"color": "#fff",
	// 		"hoverColor": "#f97316",
	// 			"size": {
	// 		"desktop": "24px",
	// 			"tablet": "24px",
	// 				"mobile": "24px"
	// 	},
	// 	"border": {
	// 		"show": false,
	// 			"color": "#fff",
	// 				"width": 0,
	// 					"style": "solid"
	// 	},
	// 	"borderRadius": {
	// 		"desktop": {
	// 			"top": "50%",
	// 				"right": "50%",
	// 					"left": "50%",
	// 						"bottom": "50%"
	// 		},
	// 		"tablet": {
	// 			"top": "50%",
	// 				"right": "50%",
	// 					"left": "50%",
	// 						"bottom": "50%"
	// 		},
	// 		"mobile": {
	// 			"top": "50%",
	// 				"right": "50%",
	// 					"left": "50%",
	// 						"bottom": "50%"
	// 		}
	// 	}
	// },
	// "fullscreenBtn": {
	// 	"color": "#fff",
	// 		"hoverColor": "#f97316",
	// 			"size": {
	// 		"desktop": "24px",
	// 			"tablet": "24px",
	// 				"mobile": "24px"
	// 	},
	// 	"border": {
	// 		"show": false,
	// 			"color": "#fff",
	// 				"width": 0,
	// 					"style": "solid"
	// 	},
	// 	"borderRadius": {
	// 		"desktop": {
	// 			"top": "50%",
	// 				"right": "50%",
	// 					"left": "50%",
	// 						"bottom": "50%"
	// 		},
	// 		"tablet": {
	// 			"top": "50%",
	// 				"right": "50%",
	// 					"left": "50%",
	// 						"bottom": "50%"
	// 		},
	// 		"mobile": {
	// 			"top": "50%",
	// 				"right": "50%",
	// 					"left": "50%",
	// 						"bottom": "50%"
	// 		}
	// 	}
	// },
	// "playPauseBtn": {
	// 	"color": "#fff",
	// 		"hoverColor": "#f97316",
	// 			"size": {
	// 		"desktop": "24px",
	// 			"tablet": "24px",
	// 				"mobile": "24px"
	// 	},
	// 	"border": {
	// 		"show": false,
	// 			"color": "#fff",
	// 				"width": 0,
	// 					"style": "solid"
	// 	},
	// 	"borderRadius": {
	// 		"desktop": {
	// 			"top": "50%",
	// 				"right": "50%",
	// 					"left": "50%",
	// 						"bottom": "50%"
	// 		},
	// 		"tablet": {
	// 			"top": "50%",
	// 				"right": "50%",
	// 					"left": "50%",
	// 						"bottom": "50%"
	// 		},
	// 		"mobile": {
	// 			"top": "50%",
	// 				"right": "50%",
	// 					"left": "50%",
	// 						"bottom": "50%"
	// 		}
	// 	}
	// },
}
// const [activeControl,setActiveControl] = useState("playPauseBtn");
{/* <PanelBody
	className="bPlPanelBody"
	title={__("Player Controls","video-playlist-gallery")}
	initialOpen={false}
>
	<div className="bPlToggleGroup">
		<ToggleGroupControl
			label={__("Select Control","video-playlist-gallery")}
			value={activeControl}
			onChange={(value) => setActiveControl(value)}
			isBlock
		>
			<ToggleGroupControlOption value="playPauseBtn" label={__("Play/Pause","video-playlist-gallery")} />
			<ToggleGroupControlOption value="previousBtn" label={__("Previous","video-playlist-gallery")} />
			<ToggleGroupControlOption value="nextBtn" label={__("Next","video-playlist-gallery")} />
			<ToggleGroupControlOption value="volumeBtn" label={__("Volume","video-playlist-gallery")} />
			<ToggleGroupControlOption value="fullscreenBtn" label={__("Fullscreen","video-playlist-gallery")} />
		</ToggleGroupControl>
	</div>

	{renderComponentControl({
		label: "Size",
		className: "mt20",
		value: videoPlayer?.controls?.[activeControl]?.size?.[device],
		onChange: (val) =>
			setAttributes({
				styles: updateData(styles,val,"videoPlayer","controls",activeControl,"size",device),
			}),
		Component: UnitControl,
		units: [pxUnit(),emUnit()],
		isDeviceControl: true,
		...premiumProps,
	})}

	{renderComponentControl({
		label: "Color",
		className: "mt20",
		value: videoPlayer?.controls?.[activeControl]?.color,
		onChange: (val) =>
			setAttributes({
				styles: updateData(styles,val,"videoPlayer","controls",activeControl,"color"),
			}),
		Component: ColorControl,
		...premiumProps,
	})}

	{renderComponentControl({
		label: "Hover Color",
		className: "mt20",
		value: videoPlayer?.controls?.[activeControl]?.hoverColor,
		onChange: (val) =>
			setAttributes({
				styles: updateData(styles,val,"videoPlayer","controls",activeControl,"hoverColor"),
			}),
		Component: ColorControl,
		...premiumProps,
	})}

	{renderComponentControl({
		label: "Border",
		className: "mt20",
		value: videoPlayer?.controls?.[activeControl]?.border,
		onChange: (val) =>
			setAttributes({
				styles: updateData(styles,val,"videoPlayer","controls",activeControl,"border"),
			}),
		Component: BorderBoxControl,
		...premiumProps,
	})}

	{renderComponentControl({
		label: "Border Radius",
		className: "mt20",
		values: videoPlayer?.controls?.[activeControl]?.borderRadius?.[device],
		onChange: (val) =>
			setAttributes({
				styles: updateData(styles,val,"videoPlayer","controls",activeControl,"borderRadius",device),
			}),
		Component: BoxControl,
		isDeviceControl: true,
		...premiumProps,
	})}

</PanelBody> */}