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
import {
  updateAttributes,
  updateData,
} from "../../../../../../../../bpl-tools/utils/functions";
import {
  renderComponentControl,
  setFreeFields,
} from "../../../../utils/functions";

const Style = ({ attributes, setAttributes, device, premiumProps }) => {
  const { items, gallery } = attributes;
  const updateObj = updateAttributes(attributes, setAttributes);

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
    "Width",
    "Height",
    "Padding",
    "Overlay Color",
    "Background Color",
    "gap",
    "margin",
    "Info Padding",
    "Bottom Overlay Color",
    "Max Width",
    "Vertical Position",
    "Horizontal Position",
    "Button Size",
    "Icon Size",
    "Button Background Color",
    "Button Icon Color",
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
          value: gallery?.maxWidth?.[device],

          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "maxWidth", device),
            }),
          Component: UnitControl,
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

        {renderComponentControl({
          label: "Height",
          className: "mt20",
          value: gallery?.height?.[device],
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "height", device),
            }),
          Component: UnitControl,
          isDeviceControl: true,
          ...premiumProps,
        })}
      </PanelBody>

      {/* Items Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Items", "video-gallery")}
        initialOpen={false}
      >
        {items?.info?.title?.show && (
          <>
            {renderComponentControl({
              label: "Title Typography",
              value: items?.info?.title?.typography,
              onChange: (val) =>
                updateObj("items", val, "info", "title", "typography"),
              Component: Typography,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Title Color",
              className: "mt20",
              value: items?.info?.title?.color,
              onChange: (val) =>
                updateObj("items", val, "info", "title", "color"),
              Component: ColorControl,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Title Margin",
              className: "mt20",
              values: items?.info?.title?.margin?.[device],
              onChange: (val) =>
                updateObj("items", val, "info", "title", "margin", device),
              Component: BoxControl,
              isDeviceControl: true,
              ...premiumProps,
            })}
          </>
        )}

        {items?.info?.subtitle?.show && (
          <>
            {renderComponentControl({
              label: "Subtitle Typography",
              className: "mt20",
              value: items?.info?.subtitle?.typography,
              onChange: (val) =>
                updateObj("items", val, "info", "subtitle", "typography"),
              Component: Typography,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Subtitle Color",
              className: "mt20",
              value: items?.info?.subtitle?.color,
              onChange: (val) =>
                updateObj("items", val, "info", "subtitle", "color"),
              Component: ColorControl,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Subtitle Margin",
              className: "mt20",
              values: items?.info?.subtitle?.margin?.[device],
              onChange: (val) =>
                updateObj("items", val, "info", "subtitle", "margin", device),
              Component: BoxControl,
              isDeviceControl: true,
              ...premiumProps,
            })}
          </>
        )}

        {renderComponentControl({
          label: "Overlay Color",
          className: "mt20",
          value: items?.overlayColor,
          onChange: (val) => updateObj("items", val, "overlayColor"),
          Component: ColorControl,
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

        {/* Video Width and Height */}
        {renderComponentControl({
          label: "Width",
          className: "mt20",
          value: items?.video?.width[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "video", "width", device),
            }),
          Component: UnitControl,
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
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          min: 100,
          max: 1000,
          isDeviceControl: true,
          ...premiumProps,
        })}
      </PanelBody>

      {
        /* Arrow Panel */
        gallery?.arrow?.show && (
          <PanelBody
            className="bPlPanelBody"
            title={__("Arrows", "video-gallery")}
            initialOpen={false}
          >
            {renderComponentControl({
              label: "Vertical Position",
              className: "mt20",
              value: gallery?.arrow?.verticalPosition?.[device],
              onChange: (val) =>
                updateObj("gallery", val, "arrow", "verticalPosition", device),
              Component: RangeControl,
              isDeviceControl: true,
              min: 0,
              max: 500,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Horizontal Position",
              className: "mt20",
              value: gallery?.arrow?.horizontalPosition?.[device],
              onChange: (val) =>
                updateObj(
                  "gallery",
                  val,
                  "arrow",
                  "horizontalPosition",
                  device
                ),
              Component: RangeControl,
              isDeviceControl: true,
              min: 0,
              max: 100,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Gap",
              className: "mt20",
              value: gallery?.arrow?.gap?.[device],
              onChange: (val) =>
                updateObj("gallery", val, "arrow", "gap", device),
              Component: RangeControl,
              isDeviceControl: true,
              min: 0,
              max: 1000,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Button Size",
              className: "mt20",
              value: gallery?.arrow?.btnSize?.[device],
              onChange: (val) =>
                updateObj("gallery", val, "arrow", "btnSize", device),
              Component: UnitControl,
              isDeviceControl: true,
              min: 0,
              max: 500,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Icon Size",
              className: "mt20",
              value: gallery?.arrow?.iconSize?.[device],
              onChange: (val) =>
                updateObj("gallery", val, "arrow", "iconSize", device),
              Component: UnitControl,
              isDeviceControl: true,
              min: 0,
              max: 500,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Border Radius",
              className: "mt20",
              value: gallery?.arrow?.btnBorderRadius,
              onChange: (val) =>
                updateObj("gallery", val, "arrow", "btnBorderRadius"),
              Component: RangeControl,
              min: 0,
              max: 100,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Border",
              className: "mt20",
              value: gallery?.arrow?.border,
              labelPosition: "left",
              onChange: (val) =>
                setAttributes({
                  gallery: updateData(gallery, val, "arrow", "border"),
                }),
              Component: BorderBoxControl,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Button Background Color",
              className: "mt20",
              value: gallery?.arrow?.button?.backgroundColor,
              labelPosition: "left",
              onChange: (val) =>
                setAttributes({
                  gallery: updateData(
                    gallery,
                    val,
                    "arrow",
                    "button",
                    "backgroundColor"
                  ),
                }),
              Component: ColorControl,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Button Icon Color",
              className: "mt20",
              value: gallery?.arrow?.button?.iconColor,
              labelPosition: "left",
              onChange: (val) =>
                setAttributes({
                  gallery: updateData(
                    gallery,
                    val,
                    "arrow",
                    "button",
                    "iconColor"
                  ),
                }),
              Component: ColorControl,
              ...premiumProps,
            })}
          </PanelBody>
        )
      }
    </>
  );
};

export default Style;
