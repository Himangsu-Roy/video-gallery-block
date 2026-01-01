import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  RangeControl,
  __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import {
  Background,
  Typography,
  ShadowControl,
  ColorControl,
  BoxControl,
  IconLibrary,
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
    "Icon Size",
    "Stroke Width",
    "Time Typography",
    "Controls Gap",
    "Padding",
    "Overlay Color",
    "color",
    "Rating Color",
    "Rating Gap",
    "Rating Margin",
    "Rating Size",
    "Bottom Overlay Color",
    "Hover Overlay Color",
    "Hover Overlay Opacity",
    "Background Color",
    "Background Hover Color",
    "Icon Stroke Color",
    "Icon Fill Color",
    "Button",
    "Size",
    "Icon Size",
    "Border Radius",
    "Icon",
    "Scale on Hover",
    "Hover Padding",
    "Hover Background Color",
    "Hover Color",
    "Hover Box Shadow",
    "Hover Scale",
    "gap",
    "margin",
    "Active Scale",
    "Active Color",
    "Hover Shadow",
    "Vertical Position",
    "Horizontal Position",
    "Icon Stroke Hover Color",
    "Icon Fill Hover Color",
    "Next Icon",
    "Previous Icon",
    "Active Border",
    "Width",
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
                  items: updateData(items, val, "title", "typography"),
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

        {/*Star Ratings */}
        {renderComponentControl({
          label: "Rating Size",
          className: "mt20",
          value: items?.rating?.size?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "rating", "size", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Rating Margin",
          className: "mt20",
          values: items?.rating?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "rating", "margin", device),
            }),
          Component: BoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Rating Gap",
          className: "mt20",
          value: items?.rating?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "rating", "gap", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Rating Color",
          className: "mt20",
          value: items?.rating?.color,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "rating", "color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Overlay Color",
          className: "mt20",
          value: items?.overlay,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "overlay"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Hover Overlay Opacity",
          className: "mt20",
          value: items?.hoverOpacity,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "hoverOpacity"),
            }),
          min: 0,
          max: 1,
          step: 0.1,
          Component: NumberControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Bottom Overlay Color",
          className: "mt20",
          value: items?.bottomOverlay,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "bottomOverlay"),
            }),
          Component: ColorControl,
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
          label: "Padding",
          className: "mt20",
          values: items?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "padding", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Video Width and Height */}
        {renderComponentControl({
          label: "Width",
          className: "mt20",
          value: items?.video?.width[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "video", "width", device),
            }),
          Component: RangeControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          min: 100,
          max: 1000,
          isDeviceControl: true,
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
          max: 1000,
          isDeviceControl: true,
          ...premiumProps,
        })}
      </PanelBody>

      {/* Play Button Controls */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Play Button", "video-gallery")}
        initialOpen={false}
      >
        {renderComponentControl({
          label: "Background Color",
          value: items?.playBtn?.bg,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "bg"),
            }),
          Component: ColorControl,
          labelPosition: "left",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Background Hover Color",
          value: items?.playBtn?.bgHoverColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "bgHoverColor"),
            }),
          labelPosition: "left",
          className: "mt20",
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon Stroke Color",
          value: items?.playBtn?.iconStrokeColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "iconStrokeColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon Fill Color",
          value: items?.playBtn?.iconFillColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "iconFillColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon Size",
          className: "mt20",
          value: items?.playBtn?.iconSize?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "iconSize", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border Radius",
          values: items?.playBtn?.borderRadius,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "borderRadius"),
            }),
          Component: BoxControl,
          units: [pxUnit(), perUnit(), emUnit()],
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Padding",
          className: "mt20",
          values: items?.playBtn?.padding,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "padding"),
            }),
          Component: BoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Hover Padding",
          className: "mt20",
          values: items?.playBtn?.hoverPadding,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "hoverPadding"),
            }),
          Component: BoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Scale on Hover",
          className: "mt20",
          value: items?.playBtn?.scaleEffect,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "scaleEffect"),
            }),
          min: 0,
          max: 2,
          step: 0.1,
          Component: NumberControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon",
          value: items?.playBtn?.icon,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "icon"),
            }),
          Component: IconLibrary,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Shadow",
          value: items?.playBtn?.shadow,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "shadow"),
            }),
          Component: ShadowControl,
          className: "mt20",
          ...premiumProps,
        })}
      </PanelBody>

      {/* Navigation Button Control */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Navigation Button", "video-gallery")}
        initialOpen={false}
      >
        {renderComponentControl({
          label: "Next Icon",
          value: items?.navigation?.nextIcon,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "nextIcon"),
            }),
          Component: IconLibrary,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Previous Icon",
          value: items?.navigation?.prevIcon,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "prevIcon"),
            }),
          Component: IconLibrary,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Background Color",
          value: items?.navigation?.bgColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "bgColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Background Hover Color",
          value: items?.navigation?.hoverBgColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "hoverBgColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon Stroke Color",
          value: items?.navigation?.iconStrokeColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "iconStrokeColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon Fill Color",
          value: items?.navigation?.iconFillColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "iconFillColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon Stroke Hover Color",
          value: items?.navigation?.iconStrokeHoverColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "navigation",
                "iconStrokeHoverColor"
              ),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon Fill Hover Color",
          value: items?.navigation?.iconFillHoverColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "iconFillHoverColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Padding",
          className: "mt20",
          values: items?.navigation?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "padding", device),
            }),
          Component: BoxControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon Size",
          className: "mt20",
          value: items?.navigation?.iconSize?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "iconSize", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border",
          value: items?.navigation?.border,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "border"),
            }),
          Component: BorderBoxControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Scale on Hover",
          className: "mt20",
          value: items?.navigation?.scaleEffect,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "scaleEffect"),
            }),
          min: 0,
          max: 2,
          step: 0.1,
          Component: NumberControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border Radius",
          values: items?.navigation?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "navigation",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Shadow",
          value: items?.navigation?.shadow,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "shadow"),
            }),
          Component: ShadowControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Hover Shadow",
          value: items?.navigation?.hoverShadow,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "hoverShadow"),
            }),
          Component: ShadowControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Vertical Position",
          value: items?.navigation?.position?.vertical?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "navigation",
                "position",
                "vertical",
                device
              ),
            }),
          step: 1,
          Component: UnitControl,
          isDeviceControl: true,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Horizontal Position",
          value: items?.navigation?.position?.horizontal?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "navigation",
                "position",
                "horizontal",
                device
              ),
            }),
          step: 1,
          Component: UnitControl,
          isDeviceControl: true,
          className: "mt20",
          ...premiumProps,
        })}
      </PanelBody>

      {/* Navigation Dots Control */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Dots", "video-gallery")}
        initialOpen={false}
      >
        {renderComponentControl({
          label: "Size",
          value: items?.dots?.size?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "size", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Gap",
          className: "mt20",
          value: items?.dots?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "gap", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Color",
          value: items?.dots?.bgColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "bgColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Active Color",
          value: items?.dots?.bgActiveColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "bgActiveColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border Radius",
          className: "mt20",
          values: items?.dots?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "borderRadius", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border",
          value: items?.dots?.border,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "border"),
            }),
          Component: BorderBoxControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Active Border",
          value: items?.dots?.activeBorder,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "activeBorder"),
            }),
          Component: BorderBoxControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Active Scale",
          className: "mt20",
          value: items?.dots?.activeScaleEffect,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "activeScaleEffect"),
            }),
          min: 0,
          max: 2,
          step: 0.1,
          Component: NumberControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Shadow",
          value: items?.dots?.shadow,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "shadow"),
            }),
          Component: ShadowControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Margin",
          values: items?.dots?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "margin", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          className: "mt20",
          ...premiumProps,
        })}
      </PanelBody>
    </>
  );
};

export default Style;
