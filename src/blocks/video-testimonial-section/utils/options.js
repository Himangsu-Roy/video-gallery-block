import { __ } from "@wordpress/i18n";

export const generalStyleTabs = [
  { name: "general", title: __("General", "textdomain") },
  { name: "style", title: __("Style", "textdomain") },
];

// export const videoSizeOptions = {
//   contain: { value: "contain", label: "Contain" },
//   cover: { value: "cover", label: "Cover" },
//   fill: { value: "fill", label: "Fill" },
//   none: { value: "none", label: "None" },
// };

export const videoSizeOptions = [
  { value: "contain", label: "Contain" },
  { value: "cover", label: "Cover" },
  { value: "fill", label: "Fill" },
  { value: "none", label: "None" },
];
