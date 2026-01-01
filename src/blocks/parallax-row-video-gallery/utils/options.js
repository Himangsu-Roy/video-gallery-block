import { __ } from "@wordpress/i18n";

export const generalStyleTabs = [
  { name: "general", title: __("General", "textdomain") },
  { name: "style", title: __("Style", "textdomain") },
];

export const purposeTypeOptions = [
  { label: "Test", value: "test" },
  { label: "Final", value: "final" },
];

export const videoSizeOptions = [
  { value: "contain", label: "Contain" },
  { value: "cover", label: "Cover" },
  { value: "fill", label: "Fill" },
  { value: "none", label: "None" },
];

export const controlsDirection = [
  { value: "row", label: "Row" },
  { value: "row-reverse", label: "Row Reverse" },
  { value: "column", label: "Column" },
  { value: "column-reverse", label: "Column Reverse" },
];

export const galleryOriantation = [
  { value: "horizontal", label: "Horizontal" },
  { value: "vertical", label: "Vertical" },
];

// "$schema": "https://schemas.wp.org/trunk/block.json",
