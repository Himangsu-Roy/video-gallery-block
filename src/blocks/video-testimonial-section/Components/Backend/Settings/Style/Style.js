import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  RangeControl,
} from "@wordpress/components";
import {
  Background,
  Typography,
  ShadowControl,
  ColorControl,
  BoxControl,
} from "../../../../../../../../bpl-tools/Components";

import {
  pxUnit,
  perUnit,
  emUnit,
} from "../../../../../../../../bpl-tools/utils/options";
import { updateData } from "../../../../../../../../bpl-tools/utils/functions";
import {
  renderComponentControl,
  setFreeFields,
} from "../../../../utils/functions";

const Style = ({ attributes, setAttributes, device, premiumProps }) => {
  const { items, gallery } = attributes;

  setFreeFields([
    "Background",
    "Padding",
    "Border",
    "Shadow",
    "Title Margin",
    "title typography",
    "title color",
    "Subtitle Margin",
    "Subtitle Typography",
    "Subtitle Color",
    "Border Radius",
    "Info Background Color",
    "Max Width",
    "Height",
    "Indicator Color",
    "Info Padding",
    "Skip Hover Color",
    "Play/Pause Button Size",
    "Play/Pause Border Radius",
    "Icon Size",
    "Stroke Width",
    "Time Typography",
    "Controls Gap",
    "Padding",
    "Overlay Color",
    "Play/Pause Background Color",
    "Play/Pause Background Hover Color",
    "color",
    "Progress Bar Color",
    "Progress Bar Height",
    "Progress Slider Thumb Size",
    "Progress Slide Thumb Color",
    "Progress Slider Thumb Border",
    "Progress Slider Thumb Border Radius",
    "Play/Pause Border",
    "margin"
  ]);

  return (
    <>
      {/* Gallery Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Gallery", "video-gallery")}
      >
        {renderComponentControl({
          label: "Max Width",
          value: gallery?.container?.maxWidth,
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "container", "maxWidth"),
            }),
          Component: RangeControl,
          min: 200,
          max: 2000,
          defaultValue: gallery?.container?.maxWidth,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Background",
          value: gallery?.background,
          className: "mt20",
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "background"),
            }),
          Component: Background,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Margin",
          className: "mt20",
          values: gallery?.margin[device],
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "margin", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Padding",
          className: "mt20",
          values: gallery?.padding[device],
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "padding", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border",
          className: "mt20",
          value: gallery?.border,
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "border"),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border Radius",
          className: "mt20",
          values: gallery?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "borderRadius", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Shadow",
          className: "mt20",
          value: gallery?.shadow,
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "shadow"),
            }),
          Component: ShadowControl,
          ...premiumProps,
        })}
      </PanelBody>

      {/* Items Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Items", "video-gallery")}
        initialOpen={false}
      >
        {items?.title?.show && (
          <>
            {renderComponentControl({
              label: "Title Typography",
              value: items?.title?.typography,
              onChange: (val) =>
                setAttributes({
                  items: {
                    ...items,
                    title: { ...items?.title, typography: val },
                  },
                }),
              Component: Typography,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Title Color",
              className: "mt20",
              value: items?.title?.color,
              onChange: (val) =>
                setAttributes({
                  items: updateData(items, val, "title", "color"),
                }),
              Component: ColorControl,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Title Margin",
              className: "mt20",
              values: items?.title?.margin?.[device],
              onChange: (val) =>
                setAttributes({
                  items: updateData(items, val, "title", "margin", device),
                }),
              Component: BoxControl,
              isDeviceControl: true,
              ...premiumProps,
            })}
          </>
        )}

        {renderComponentControl({
          label: "Subtitle Typography",
          className: "mt20",
          value: items?.subtitle?.typography,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "subtitle", "typography"),
            }),
          Component: Typography,
          defaults: {
            fontSize: { desktop: 14, tablet: 14, mobile: 14 },
          },
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Subtitle Color",
          className: "mt20",
          value: items?.subtitle?.color,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "subtitle", "color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Subtitle Margin",
          className: "mt20",
          values: items?.subtitle?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "subtitle", "margin", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Info Padding",
          className: "mt20",
          values: items?.info?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "info", "padding", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border Radius",
          className: "mt20",
          values: items?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "borderRadius", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Info Background Color",
          className: "mt20",
          value: items?.background?.color,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "background", "color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Shadow",
          className: "mt20",
          value: items?.shadow,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "shadow"),
            }),
          Component: ShadowControl,
          defaults: [
            {
              hOffset: "0px",
              vOffset: "20px",
              blur: "25px",
              spreed: "-5px",
              color: "rgba(0, 0, 0, 0)",
              isInset: false,
            },
          ],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Height",
          className: "mt20",
          value: items?.video?.height[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "video", "height", device),
            }),
          Component: RangeControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          min: 100,
          max: 1800,
          isDeviceControl: true,
          ...premiumProps,
        })}
      </PanelBody>

      {/* Player Controls Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Player Controls", "video-gallery")}
        initialOpen={false}
      >
        {renderComponentControl({
          label: "Color",
          value: items?.controls?.color,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "color"),
            }),
          Component: ColorControl,
          labelPosition: "left",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Play/Pause Background Color",
          value: items?.controls?.playPauseBtn?.color,
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "controls",
                "playPauseBtn",
                "color"
              ),
            }),
          Component: ColorControl,
          labelPosition: "left",
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Play/Pause Background Hover Color",
          value: items?.controls?.playPauseBtn?.hoverColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "controls",
                "playPauseBtn",
                "hoverColor"
              ),
            }),
          Component: ColorControl,
          labelPosition: "left",
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Skip Hover Color",
          value: items?.controls?.skipHoverColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "skipHoverColor"),
            }),
          Component: ColorControl,
          labelPosition: "left",
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Progress Bar Color",
          value: items?.controls?.progressBar?.color,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "progressBar", "color"),
            }),
          labelPosition: "left",
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Progress Slide Thumb Color",
          value: items?.controls?.progressBar?.sliderThumb?.color,
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "controls",
                "progressBar",
                "sliderThumb",
                "color"
              ),
            }),
          labelPosition: "left",
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Overlay Color",
          value: items?.controls?.overlayColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "overlayColor"),
            }),
          Component: ColorControl,
          labelPosition: "left",
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Play/Pause Button Size",
          value: items?.controls?.playPauseBtn?.size?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "controls",
                "playPauseBtn",
                "size",
                device
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          defaults: { desktop: 40, tablet: 40, mobile: 40 },
          className: "mt20",
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Play/Pause Border",
          className: "mt20",
          value: items?.controls?.playPauseBtn?.border,
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "controls",
                "playPauseBtn",
                "border"
              ),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Play/Pause Border Radius",
          values: items?.controls?.playPauseBtn?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "controls",
                "playPauseBtn",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          className: "mt20",
          defaults: {
            top: "50%",
            right: "50%",
            bottom: "50%",
            left: "50%",
          },
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon Size",
          value: items?.controls?.iconSize?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "iconSize", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          defaults: { desktop: 20, tablet: 20, mobile: 20 },
          labelPosition: "left",
          className: "mt20",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Stroke Width",
          className: "mt20",
          value: items?.controls?.strokeWidth?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "strokeWidth", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          defaults: { desktop: 2, tablet: 2, mobile: 2 },
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Time Typography",
          className: "mt20",
          value: items?.controls?.typography,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "typography"),
            }),
          Component: Typography,
          defaults: { fontSize: { desktop: 14, tablet: 14, mobile: 14 } },

          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Controls Gap",
          className: "mt20",
          value: items?.controls?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "gap", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          defaults: { desktop: "8px", tablet: "8px", mobile: "8px" },
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Progress Bar Height",
          className: "mt20",
          value: items?.controls?.progressBar?.height,
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "controls",
                "progressBar",
                "height"
              ),
            }),
          Component: UnitControl,
          units: [pxUnit()],
          defaults: { desktop: "4px", tablet: "4px", mobile: "4px" },
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Progress Slider Thumb Size",
          className: "mt20",
          value: items?.controls?.progressBar?.sliderThumb?.size,
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "controls",
                "progressBar",
                "sliderThumb",
                "size"
              ),
            }),
          Component: UnitControl,
          units: [pxUnit()],
          defaults: { desktop: "16px", tablet: "16px", mobile: "16px" },
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Progress Slider Thumb Border Radius",
          className: "mt20",
          values: items?.controls?.progressBar?.sliderThumb?.borderRadius,
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "controls",
                "progressBar",
                "sliderThumb",
                "borderRadius"
              ),
            }),
          Component: BoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Progress Slider Thumb Border",
          className: "mt20",
          value: items?.controls?.progressBar?.sliderThumb?.border,
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "controls",
                "progressBar",
                "sliderThumb",
                "border"
              ),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Padding",
          className: "mt20",
          labelPosition: "left",
          values: items?.controls?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "padding", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}
      </PanelBody>
    </>
  );
};

export default Style;
