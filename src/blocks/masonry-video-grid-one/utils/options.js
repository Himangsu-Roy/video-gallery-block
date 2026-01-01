import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'textdomain') },
	{ name: 'style', title: __('Style', 'textdomain') }
];

export const purposeTypeOptions = [
	{ label: 'Test', value: 'test' },
	{ label: 'Final', value: 'final' }
];

export const videoSizeOptions = [
	{ value: "contain", label: "Contain" },
	{ value: "cover", label: "Cover" },
	{ value: "fill", label: "Fill" },
	{ value: "none", label: "None" },
];

// tall, short, medium
export const videoHeightOptions = [
	{ value: "tall", label: "Tall" },
	{ value: "medium", label: "Medium" },
	{ value: "short", label: "Short" },
];

export const videoHeightOptions2 = [
	{ value: "tall", label: "Tall" },
	{ value: "medium", label: "Medium" },
	{ value: "short", label: "Short" },
	{ value: "custom", label: "Custom" },
];
