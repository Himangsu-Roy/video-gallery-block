import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  CardDivider,
} from "@wordpress/components";

import {
  Background,
  Typography,
  ShadowControl,
  ColorControl,
  BoxControl,
  Label,
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

const Style = ({ attributes,setAttributes,device,premiumProps }) => {
  const { styles } = attributes;
  const { videoPlayer,sidebar,gallery } = styles;
  const { category,title,description } = videoPlayer?.info;

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
    "Middle Overlay Color",
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
    "Active Border",
    "Width",
    "",
    "Scale on Default",
    "Background Color",
    "Description Typography",
    "Description Color",
    "Description Margin",
    "Category Typography",
    "Category Color",
    "Category Margin",
    "Category Padding",
    "Category Border",
    "Category Border Radius",
    "Category Shadow",
    "Category Background Color",
    "Gap",
    "Close Button Size",
    "Close Button Color",
    "Close Button Hover Background",
    "Close Button Padding",
    "Close Button Margin",
    "Close Button Border Radius",
    "Count Typography",
    "Count Color",
    "Count Margin",
    "Header Padding",
    "Header Bottom Border",
    "Video Metadata Typography",
    "Video Metadata Color",
    "Video Metadata Margin",
    "Playlist Padding",
    "Playlist Gap",
    "Active Item Background",
    "Active Item Border",
    "Item Inner Gap",
    "Item Inner Padding",
    "Item Inner Border Radius",
    "Item Hover Background Color",
    "Item Hover Title Color",
    "Thumbnail Width",
    "Thumbnail Border Radius",
    "Thumbnail Hover Overlay Color",
    "Duration Background Color",
    "Duration Color",
    "Duration Typography",
    "Duration Padding",
    "Duration Border Radius",
    "Typography",
    "Hover Item Background",
    "Hover Height",
    "Border Left"
  ]);



  return (
    <>
      {/* Gallery Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Gallery","video-gallery")}
      >
        {/* {renderComponentControl({
          label: "Max Width",
          value: gallery?.container?.maxWidth,
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery,val,"container","maxWidth"),
            }),
          Component: RangeControl,
          min: 200,
          max: 2000,
          defaultValue: gallery?.container?.maxWidth,
          isDeviceControl: true,
          ...premiumProps,
        })} */}

        {/* {renderComponentControl({
          label: "Background",
          value: gallery?.background,
          className: "mt20",
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery,val,"background"),
            }),
          Component: Background,
          ...premiumProps,
        })} */}

        {renderComponentControl({
          label: "Margin",
          values: gallery?.margin[device],
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"gallery","margin",device),
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
              styles: updateData(styles,val,"gallery","padding",device),
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
              styles: updateData(styles,val,"gallery","border"),
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
              styles: updateData(styles,val,"gallery","borderRadius",device),
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
              styles: updateData(styles,val,"gallery","shadow"),
            }),
          Component: ShadowControl,
          ...premiumProps,
        })}
      </PanelBody>

      {/* Player Container */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Video Player Container","video-playlist-gallery")}
        initialOpen={false}
      >
        {renderComponentControl({
          label: "Background",
          value: videoPlayer?.background,
          className: "mt20",
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","background"),
            }),
          Component: Background,
          ...premiumProps,
        })}
      </PanelBody>

      {/* Items Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Video Player Info","video-playlist-gallery")}
        initialOpen={false}
      >

        {/* Category */}
        {renderComponentControl({
          label: "Category Typography",
          value: category?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","info","category","typography"),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Category Color",
          className: "mt20",
          value: category?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","info","category","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Category Background Color",
          className: "mt20",
          value: category?.backgroundColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","info","category","backgroundColor"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Category Margin",
          className: "mt20",
          values: category?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","info","category","margin",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Category Padding",
          className: "mt20",
          values: category?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","info","category","padding",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Category Border",
          className: "mt20",
          value: category?.border,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","info","category","border"),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Category Border Radius",
          className: "mt20",
          values: category?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","info","category","borderRadius",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Title */}
        {renderComponentControl({
          label: "Title Typography",
          className: "mt20",
          value: title?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","info","title","typography"),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Title Color",
          className: "mt20",
          value: title?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","info","title","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Title Margin",
          className: "mt20",
          values: title?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","info","title","margin",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Description */}
        {renderComponentControl({
          label: "Description Typography",
          className: "mt20",
          value: description?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","info","description","typography"),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Description Color",
          className: "mt20",
          value: description?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","info","description","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Description Margin",
          className: "mt20",
          values: description?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","info","description","margin",device),
            }),
          Component: BoxControl,
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
          label: "Padding",
          className: "mt20",
          values: videoPlayer?.info?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","info","padding",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Gap",
          className: "mt20",
          value: videoPlayer?.info?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","info","gap",device),
            }),
          Component: UnitControl,
          units: [pxUnit(),perUnit(),emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Player Controls","video-playlist-gallery")}
        initialOpen={false}
      >

        {renderComponentControl({
          label: "Color",
          value: videoPlayer?.controls?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Hover Color",
          className: "mt20",
          value: videoPlayer?.controls?.hoverColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","hoverColor"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Bottom Overlay Color",
          className: "mt20",
          value: videoPlayer?.controls?.bottomOverlayColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","bottomOverlayColor"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Gap",
          className: "mt20",
          value: videoPlayer?.controls?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","gap",device),
            }),
          Component: UnitControl,
          units: [pxUnit(),emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Padding",
          className: "mt20",
          values: videoPlayer?.controls?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","padding",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />
        <Label>{__("Progress Bar","video-playlist-gallery")}</Label>

        {renderComponentControl({
          label: "Color",
          className: "mt20",
          value: videoPlayer?.controls?.progressBar?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","progressBar","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Height",
          className: "mt20",
          value: videoPlayer?.controls?.progressBar?.height,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","progressBar","height"),
            }),
          Component: UnitControl,
          units: [pxUnit(),emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Hover Height",
          className: "mt20",
          value: videoPlayer?.controls?.progressBar?.hoverHeight,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","progressBar","hoverHeight"),
            }),
          Component: UnitControl,
          units: [pxUnit(),emUnit()],
          ...premiumProps,
        })}

        <CardDivider />
        <Label>{__("Progress Bar Thumb","video-playlist-gallery")}</Label>

        {renderComponentControl({
          label: "Size",
          className: "mt20",
          value: videoPlayer?.controls?.progressBar?.sliderThumb?.size,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","progressBar","sliderThumb","size"),
            }),
          Component: UnitControl,
          units: [pxUnit(),emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Color",
          className: "mt20",
          value: videoPlayer?.controls?.progressBar?.sliderThumb?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","progressBar","sliderThumb","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border",
          className: "mt20",
          value: videoPlayer?.controls?.progressBar?.sliderThumb?.border,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","progressBar","sliderThumb","border"),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border Radius",
          className: "mt20",
          values: videoPlayer?.controls?.progressBar?.sliderThumb?.borderRadius,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","progressBar","sliderThumb","borderRadius"),
            }),
          Component: BoxControl,
          ...premiumProps,
        })}



        <CardDivider />
        <Label>{__("Volume Range","video-playlist-gallery")}</Label>

        {renderComponentControl({
          label: "Color",
          className: "mt20",
          value: videoPlayer?.controls?.volume?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","volume","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Height",
          className: "mt20",
          value: videoPlayer?.controls?.volume?.height,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","volume","height"),
            }),
          Component: UnitControl,
          units: [pxUnit(),emUnit()],
          ...premiumProps,
        })}

        <CardDivider />
        <Label>{__("Volume Range Thumb","video-playlist-gallery")}</Label>

        {renderComponentControl({
          label: "Size",
          className: "mt20",
          value: videoPlayer?.controls?.volume?.sliderThumb?.size,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","volume","sliderThumb","size"),
            }),
          Component: UnitControl,
          units: [pxUnit(),emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Color",
          className: "mt20",
          value: videoPlayer?.controls?.volume?.sliderThumb?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","volume","sliderThumb","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border",
          className: "mt20",
          value: videoPlayer?.controls?.volume?.sliderThumb?.border,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","volume","sliderThumb","border"),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border Radius",
          className: "mt20",
          values: videoPlayer?.controls?.volume?.sliderThumb?.borderRadius,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","volume","sliderThumb","borderRadius"),
            }),
          Component: BoxControl,
          ...premiumProps,
        })}


        <CardDivider />
        <Label>{__("Duration","video-playlist-gallery")}</Label>

        {renderComponentControl({
          label: "Color",
          className: "mt20",
          value: videoPlayer?.controls?.duration?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","duration","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Typography",
          className: "mt20",
          value: videoPlayer?.controls?.duration?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","controls","duration","typography"),
            }),
          Component: Typography,
          ...premiumProps,
        })}

      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Sidebar","video-playlist-gallery")}
        initialOpen={false}
      >

        {/* Background */}
        {renderComponentControl({
          label: "Background Color",
          className: "mt20",
          value: sidebar?.background,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","background"),
            }),
          Component: Background,
          ...premiumProps,
        })}

        {/* Width */}
        {renderComponentControl({
          label: "Width",
          className: "mt20",
          value: sidebar?.width[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","width",device),
            }),
          Component: UnitControl,
          units: [pxUnit(),emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Border left */}
        {renderComponentControl({
          label: "Border Left",
          className: "mt20",
          value: sidebar?.borderLeft,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","borderLeft"),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}

      </PanelBody>


      <PanelBody
        className="bPlPanelBody"
        title={__("Sidebar Header","video-playlist-gallery")}
        initialOpen={false}
      >
        {/* Close Button */}
        {renderComponentControl({
          label: "Close Button Size",
          value: sidebar?.header?.close?.size?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","header","close","size",device),
            }),
          Component: UnitControl,
          units: [pxUnit(),perUnit(),emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Close Button Color",
          className: "mt20",
          value: sidebar?.header?.close?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","header","close","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Close Button Hover Background",
          className: "mt20",
          value: sidebar?.header?.close?.hoverBgColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","header","close","hoverBgColor"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Close Button Padding",
          className: "mt20",
          values: sidebar?.header?.close?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","header","close","padding",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Close Button Margin",
          className: "mt20",
          values: sidebar?.header?.close?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","header","close","margin",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Close Button Border Radius",
          className: "mt20",
          values: sidebar?.header?.close?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","header","close","borderRadius",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Title */}
        {renderComponentControl({
          label: "Title Typography",
          className: "mt20",
          value: sidebar?.header?.title?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","header","title","typography"),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Title Color",
          className: "mt20",
          value: sidebar?.header?.title?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","header","title","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Title Margin",
          className: "mt20",
          values: sidebar?.header?.title?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","header","title","margin",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Count */}
        {renderComponentControl({
          label: "Count Typography",
          className: "mt20",
          value: sidebar?.header?.count?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","header","count","typography"),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Count Color",
          className: "mt20",
          value: sidebar?.header?.count?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","header","count","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Count Margin",
          className: "mt20",
          values: sidebar?.header?.count?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","header","count","margin",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Header Padding */}
        {renderComponentControl({
          label: "Header Padding",
          className: "mt20",
          values: sidebar?.header?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","header","padding",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Header Border */}
        {renderComponentControl({
          label: "Header Bottom Border",
          className: "mt20",
          value: sidebar?.header?.borderBottom,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","header","borderBottom"),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}

      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Sidebar Playlist","video-playlist-gallery")}
        initialOpen={false}
      >
        {/* Playlist Info - Title */}
        {renderComponentControl({
          label: "Title Typography",
          value: sidebar?.playlist?.info?.title?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","info","title","typography"),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Title Color",
          className: "mt20",
          value: sidebar?.playlist?.info?.title?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","info","title","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Title Margin",
          className: "mt20",
          values: sidebar?.playlist?.info?.title?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","info","title","margin",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Playlist Info - Subtitle */}
        {renderComponentControl({
          label: "Subtitle Typography",
          className: "mt20",
          value: sidebar?.playlist?.info?.subtitle?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","info","subtitle","typography"),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Subtitle Color",
          className: "mt20",
          value: sidebar?.playlist?.info?.subtitle?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","info","subtitle","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Subtitle Margin",
          className: "mt20",
          values: sidebar?.playlist?.info?.subtitle?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","info","subtitle","margin",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Playlist Info - Video Metadata */}
        {renderComponentControl({
          label: "Video Metadata Typography",
          className: "mt20",
          value: sidebar?.playlist?.info?.videoMetadata?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","info","videoMetadata","typography"),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Video Metadata Color",
          className: "mt20",
          value: sidebar?.playlist?.info?.videoMetadata?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","info","videoMetadata","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Video Metadata Margin",
          className: "mt20",
          values: sidebar?.playlist?.info?.videoMetadata?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","info","videoMetadata","margin",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Playlist Padding */}
        {renderComponentControl({
          label: "Playlist Padding",
          className: "mt20",
          values: sidebar?.playlist?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","padding",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Playlist Gap */}
        {renderComponentControl({
          label: "Playlist Gap",
          className: "mt20",
          value: sidebar?.playlist?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","gap",device),
            }),
          Component: UnitControl,
          units: [pxUnit(),perUnit(),emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Playlist Item Active */}
        {renderComponentControl({
          label: "Active Item Background",
          className: "mt20",
          value: sidebar?.playlist?.playlistItemActive?.background,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","playlistItemActive","background"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Hover Item Background",
          className: "mt20",
          value: sidebar?.playlist?.playlistItemInner?.hoverBgColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","playlistItemInner","hoverBgColor"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Active Item Border",
          className: "mt20",
          value: sidebar?.playlist?.playlistItemActive?.border,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","playlistItemActive","border"),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}

        {/* Playlist Item Inner */}
        {renderComponentControl({
          label: "Item Inner Gap",
          className: "mt20",
          value: sidebar?.playlist?.playlistItemInner?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","playlistItemInner","gap",device),
            }),
          Component: UnitControl,
          units: [pxUnit(),perUnit(),emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Item Inner Padding",
          className: "mt20",
          values: sidebar?.playlist?.playlistItemInner?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","playlistItemInner","padding",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Item Inner Border Radius",
          className: "mt20",
          values: sidebar?.playlist?.playlistItemInner?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","playlistItemInner","borderRadius",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Item Hover Background Color",
          className: "mt20",
          value: sidebar?.playlist?.playlistItemInner?.hoverBgColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","playlistItemInner","hoverBgColor"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Item Hover Title Color",
          className: "mt20",
          value: sidebar?.playlist?.playlistItemInner?.hoverTitleColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","playlistItemInner","hoverTitleColor"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {/* Thumbnail */}
        {renderComponentControl({
          label: "Thumbnail Width",
          className: "mt20",
          value: sidebar?.playlist?.thumbnail?.width,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","thumbnail","width"),
            }),
          Component: UnitControl,
          units: [pxUnit(),perUnit(),emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Thumbnail Border Radius",
          className: "mt20",
          values: sidebar?.playlist?.thumbnail?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","thumbnail","borderRadius",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Thumbnail Hover Overlay Color",
          className: "mt20",
          value: sidebar?.playlist?.thumbnail?.overlayColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","thumbnail","overlayColor"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {/* Thumbnail Duration */}
        {renderComponentControl({
          label: "Duration Background Color",
          className: "mt20",
          value: sidebar?.playlist?.thumbnail?.duration?.backgroundColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","thumbnail","duration","backgroundColor"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Duration Color",
          className: "mt20",
          value: sidebar?.playlist?.thumbnail?.duration?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","thumbnail","duration","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Duration Typography",
          className: "mt20",
          value: sidebar?.playlist?.thumbnail?.duration?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","thumbnail","duration","typography"),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Duration Padding",
          className: "mt20",
          values: sidebar?.playlist?.thumbnail?.duration?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","thumbnail","duration","padding",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Duration Border Radius",
          className: "mt20",
          values: sidebar?.playlist?.thumbnail?.duration?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","thumbnail","duration","borderRadius",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

      </PanelBody>


      <PanelBody
        className="bPlPanelBody"
        title={__("Active Playing Badge","video-playlist-gallery")}
        initialOpen={false}
      >
        {renderComponentControl({
          label: "Background Color",
          value: sidebar?.playlist?.thumbnail?.activePlayBadge?.backgroundColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","thumbnail","activePlayBadge","backgroundColor"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Color",
          className: "mt20",
          value: sidebar?.playlist?.thumbnail?.activePlayBadge?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","thumbnail","activePlayBadge","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Typography",
          className: "mt20",
          value: sidebar?.playlist?.thumbnail?.activePlayBadge?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","thumbnail","activePlayBadge","typography"),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Padding",
          className: "mt20",
          values: sidebar?.playlist?.thumbnail?.activePlayBadge?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","thumbnail","activePlayBadge","padding",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border Radius",
          className: "mt20",
          values: sidebar?.playlist?.thumbnail?.activePlayBadge?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","thumbnail","activePlayBadge","borderRadius",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border",
          className: "mt20",
          values: sidebar?.playlist?.thumbnail?.activePlayBadge?.border,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","playlist","thumbnail","activePlayBadge","border"),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Up Next Toggle","video-playlist-gallery")}
        initialOpen={false}
      >
        {renderComponentControl({
          label: "Background Color",
          value: sidebar?.upNextToggle?.backgroundColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","upNextToggle","backgroundColor"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Color",
          className: "mt20",
          value: sidebar?.upNextToggle?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","upNextToggle","color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Typography",
          className: "mt20",
          value: sidebar?.upNextToggle?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","upNextToggle","typography"),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Padding",
          className: "mt20",
          values: sidebar?.upNextToggle?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","upNextToggle","padding",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border Radius",
          className: "mt20",
          values: sidebar?.upNextToggle?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","upNextToggle","borderRadius",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Shadow",
          className: "mt20",
          value: sidebar?.upNextToggle?.shadow,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"sidebar","upNextToggle","shadow"),
            }),
          Component: ShadowControl,
          ...premiumProps,
        })}

      </PanelBody>

    </>
  );
};

export default Style;