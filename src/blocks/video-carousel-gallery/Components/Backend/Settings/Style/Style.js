import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  CardDivider,
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
  const { styles } = attributes;
  const { items, lightbox, gallery } = styles;

  setFreeFields([
    "Background",
    "Padding",
    "Border",
    "Shadow",
    "Margin",
    "Border Radius",
    "Max Width",
    "Gap",
    "Width",
    "Title Color",
    "Title Typography",
    "Title Margin",
    "Product Pricing Gap",
    "Product Price Gap",
    "Product Current Price Color",
    "Product Current Price Typography",
    "Product Current Price Margin",
    "Product Original Price Typography",
    "Product Original Price Color",
    "Product Original Price Margin",
    "Product Info Padding",
    "Product Info Gap",
    "Product Info Radius",
    "Product Image Size",
    "Product Image Radius",
    "Video Preview Overlay Color",
    "Video Preview Radius",
    "Video Preview Margin",
    "Video Border Radius",
    "Video Gap",
    "Video Side Width",
    "Video Center Width",
    "Video Height",
    "Buttons Size",
    "Buttons Background Color",
    "Buttons Icon Color",
    "Buttons Background Blur",
    "Buttons Icons Size",
    "Product Info Background Color",
    "Product Info Background Blur",
    "Product Info Border Radius",
    "Product Info Title Typography",
    "Product Info Title Color",
    "Product Current Price Typography",
    "Product Current Price Color",
    "Product Pricing Gap",
    "Info Button Background Color",
    "Info Button Text Color",
    "Info Button Typography",
    "Info Wrapper Background",
    "Info Wrapper Padding",
    "Product Info Title Margin",
    "Info Button Border Radius",
    "Info Button Padding",
    "Buttons Border Radius",
    "Close Button Size",
    "Close Button Background Color",
    "Close Button Hover Background Color",
    "Close Button Icon Size",
    "Close Button Icon Color",
    "Close Button Border Radius",
    "Product Current Price Currency Size",
    "Product Original Price Currency Size",
  ]);

  return (
    <>
      {/* Gallery Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Gallery", "video-carousel-gallery")}>
        {renderComponentControl({
          label: "Max Width",
          value: gallery?.container?.maxWidth,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "gallery",
                "container",
                "maxWidth"
              ),
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
              styles: updateData(styles, val, "gallery", "background"),
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
              styles: updateData(styles, val, "gallery", "margin", device),
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
              styles: updateData(styles, val, "gallery", "padding", device),
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
              styles: updateData(styles, val, "gallery", "border"),
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
              styles: updateData(
                styles,
                val,
                "gallery",
                "borderRadius",
                device
              ),
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
              styles: updateData(styles, val, "gallery", "shadow"),
            }),
          Component: ShadowControl,
          ...premiumProps,
        })}
      </PanelBody>

      {/* Items Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Items", "video-carousel-gallery")}
        initialOpen={false}>
        {renderComponentControl({
          label: "Gap",
          value: items?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "items", "gap", device),
            }),
          Component: UnitControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Padding",
          className: "mt20",
          values: items?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "items", "padding", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Width",
          className: "mt20",
          value: items?.width?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "items", "width", device),
            }),
          Component: UnitControl,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: "Title Color",
          className: "mt20",
          value: items?.info?.title?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "title",
                "color"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Title Typography",
          className: "mt20",
          value: items?.info?.title?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "title",
                "typography"
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Title Margin",
          className: "mt20",
          values: items?.info?.title?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "title",
                "margin",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: "Product Pricing Gap",
          className: "mt20",
          value: items?.info?.productPricing?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "gap",
                device
              ),
            }),
          Component: UnitControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Current Price Color",
          className: "mt20",
          value: items?.info?.productPricing?.currentPrice?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "currentPrice",
                "color"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Current Price Typography",
          className: "mt20",
          value: items?.info?.productPricing?.currentPrice?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "currentPrice",
                "typography"
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Current Price Margin",
          className: "mt20",
          values: items?.info?.productPricing?.currentPrice?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "currentPrice",
                "margin",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Current Price Currency Size",
          className: "mt20",
          value:
            items?.info?.productPricing?.currentPrice?.currencySize?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "currentPrice",
                "currencySize",
                device
              ),
            }),
          Component: UnitControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: "Product Original Price Typography",
          className: "mt20",
          value: items?.info?.productPricing?.originalPrice?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "originalPrice",
                "typography"
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Original Price Color",
          className: "mt20",
          value: items?.info?.productPricing?.originalPrice?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "originalPrice",
                "color"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Original Price Margin",
          className: "mt20",
          values: items?.info?.productPricing?.originalPrice?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "originalPrice",
                "margin",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Original Price Currency Size",
          className: "mt20",
          value:
            items?.info?.productPricing?.originalPrice?.currencySize?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "originalPrice",
                "currencySize",
                device
              ),
            }),
          Component: UnitControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: "Product Info Padding",
          className: "mt20",
          values: items?.info?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "padding",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Info Gap",
          className: "mt20",
          value: items?.info?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "items", "info", "gap", device),
            }),
          Component: UnitControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* {renderComponentControl({
          label: "Bottom Overlay Color",
          className: "mt20",
          value: videoPlayer?.bottomOverlay,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","bottomOverlay"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })} */}

        {/* {renderComponentControl({
          label: "Border Radius",
          className: "mt20",
          values: videoPlayer?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","borderRadius",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })} */}

        {/* {renderComponentControl({
          label: "Shadow",
          className: "mt20",
          value: videoPlayer?.shadow,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","shadow"),
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
        })} */}

        {renderComponentControl({
          label: "Product Info Radius",
          className: "mt20",
          values: items?.info?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: "Product Image Size",
          className: "mt20",
          value: items?.info?.productImage?.size,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productImage",
                "size"
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Image Radius",
          className: "mt20",
          values: items?.info?.productImage?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productImage",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: "Video Preview Overlay Color",
          className: "mt20",
          value: items?.preview?.overlayColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "preview",
                "overlayColor"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Video Preview Radius",
          className: "mt20",
          values: items?.preview?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "preview",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Video Preview Margin",
          className: "mt20",
          values: items?.preview?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "preview",
                "margin",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}
      </PanelBody>

      {/*lightbox*/}
      <PanelBody
        className="bPlPanelBody"
        title={__("Lightbox", "video-carousel-gallery")}
        initialOpen={false}>
        {renderComponentControl({
          label: "Background",
          value: lightbox?.background,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "lightbox", "background"),
            }),
          Component: Background,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Video Border Radius",
          className: "mt20",
          values: lightbox?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Video Gap",
          className: "mt20",
          value: lightbox?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "lightbox", "gap", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Video Side Width",
          className: "mt20",
          value: lightbox?.sideWidth?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "lightbox", "sideWidth", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Video Center Width",
          className: "mt20",
          value: lightbox?.centerMaxWidth?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "centerMaxWidth",
                device
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Video Height",
          className: "mt20",
          value: lightbox?.height?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "lightbox", "height", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: "Buttons Size",
          className: "mt20",
          value: lightbox?.buttons?.size,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "lightbox", "buttons", "size"),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Buttons Background Color",
          className: "mt20",
          values: lightbox?.buttons?.bgColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "lightbox", "buttons", "bgColor"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Buttons Icon Color",
          className: "mt20",
          values: lightbox?.buttons?.iconColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "buttons",
                "iconColor"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Buttons Background Blur",
          className: "mt20",
          value: lightbox?.buttons?.blur,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "lightbox", "buttons", "blur"),
            }),
          Component: RangeControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Buttons Icons Size",
          className: "mt20",
          value: lightbox?.buttons?.iconSize,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "buttons",
                "iconSize"
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Buttons Border Radius",
          className: "mt20",
          values: lightbox?.buttons?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "buttons",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: "Info Wrapper Background",
          className: "mt20",
          value: lightbox?.infoWrapper?.background,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "infoWrapper",
                "background"
              ),
            }),
          Component: Background,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Info Wrapper Padding",
          className: "mt20",
          values: lightbox?.infoWrapper?.padding[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "infoWrapper",
                "padding",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: "Product Info Background Color",
          className: "mt20",
          value: lightbox?.productInfo?.background,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "background"
              ),
            }),
          Component: Background,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Info Background Blur",
          className: "mt20",
          value: lightbox?.productInfo?.blur,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "blur"
              ),
            }),
          Component: RangeControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Info Border Radius",
          className: "mt20",
          values: lightbox?.productInfo?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Info Padding",
          className: "mt20",
          values: lightbox?.productInfo?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "padding",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Info Gap",
          className: "mt20",
          value: lightbox?.productInfo?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "gap",
                device
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: "Product Image Size",
          className: "mt20",
          value: lightbox?.productInfo?.productImage?.size,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productImage",
                "size"
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Image Radius",
          className: "mt20",
          values: lightbox?.productInfo?.productImage?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productImage",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: "Product Info Title Typography",
          className: "mt20",
          value: lightbox?.productInfo?.title?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "title",
                "typography"
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Info Title Color",
          className: "mt20",
          value: lightbox?.productInfo?.title?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "title",
                "color"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Info Title Margin",
          className: "mt20",
          values: lightbox?.productInfo?.title?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "title",
                "margin",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: "Product Current Price Typography",
          className: "mt20",
          value:
            lightbox?.productInfo?.productPricing?.currentPrice?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productPricing",
                "currentPrice",
                "typography"
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Current Price Color",
          className: "mt20",
          value: lightbox?.productInfo?.productPricing?.currentPrice?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productPricing",
                "currentPrice",
                "color"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Current Price Currency Size",
          className: "mt20",
          value:
            lightbox?.productInfo?.productPricing?.currentPrice?.currencySize?.[
              device
            ],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productPricing",
                "currentPrice",
                "currencySize",
                device
              ),
            }),
          Component: UnitControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: "Product Original Price Typography",
          className: "mt20",
          value:
            lightbox?.productInfo?.productPricing?.orginalPrice?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productPricing",
                "orginalPrice",
                "typography"
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Original Price Color",
          className: "mt20",
          value: lightbox?.productInfo?.productPricing?.orginalPrice?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productPricing",
                "orginalPrice",
                "color"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Original Price Currency Size",
          className: "mt20",
          value:
            lightbox?.productInfo?.productPricing?.originalPrice
              ?.currencySize?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productPricing",
                "originalPrice",
                "currencySize",
                device
              ),
            }),
          Component: UnitControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Product Pricing Gap",
          className: "mt20",
          value: lightbox?.productInfo?.productPricing?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productPricing",
                "gap",
                device
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: "Info Button Background Color",
          className: "mt20",
          value: lightbox?.productInfo?.shopButton?.backgroundColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "shopButton",
                "backgroundColor"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Info Button Text Color",
          className: "mt20",
          value: lightbox?.productInfo?.shopButton?.textColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "shopButton",
                "textColor"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Info Button Typography",
          className: "mt20",
          value: lightbox?.productInfo?.shopButton?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "shopButton",
                "typography"
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Info Button Padding",
          className: "mt20",
          values: lightbox?.productInfo?.shopButton?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "shopButton",
                "padding",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Info Button Border Radius",
          className: "mt20",
          values: lightbox?.productInfo?.shopButton?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "shopButton",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: "Close Button Size",
          className: "mt20",
          value: lightbox?.closeButton?.size,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "closeButton",
                "size"
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Close Button Background Color",
          className: "mt20",
          value: lightbox?.closeButton?.backgroundColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "closeButton",
                "backgroundColor"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Close Button Hover Background Color",
          className: "mt20",
          value: lightbox?.closeButton?.hoverBackgroundColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "closeButton",
                "hoverBackgroundColor"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Close Button Icon Size",
          className: "mt20",
          value: lightbox?.closeButton?.iconSize,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "closeButton",
                "iconSize"
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Close Button Icon Color",
          className: "mt20",
          value: lightbox?.closeButton?.iconColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "closeButton",
                "iconColor"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Close Button Border Radius",
          className: "mt20",
          values: lightbox?.closeButton?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "closeButton",
                "borderRadius",
                device
              ),
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
