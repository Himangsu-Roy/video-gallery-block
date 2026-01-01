import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalNumberControl as NumberControl,
  ToggleControl,
  RangeControl,
} from "@wordpress/components";
import {
  BButtonGroup,
  HelpPanel,
  ItemsPanel,
} from "../../../../../../../../bpl-tools/Components";

import {
  renderComponentControl,
  setFreeFields,
} from "../../../../utils/functions";
import {
  updateAttributes,
  updateData,
} from "../../../../../../../../bpl-tools/utils/functions";
import { videoSizeOptions } from "../../../../utils/options";
import ItemSettings from "../ItemSettings";

const General = ({
  attributes,
  setAttributes,
  device,
  itemsProps,
  premiumProps,
  clientId,
  activeIndex,
  setActiveIndex,
}) => {
  setFreeFields([
    "Row Gap",
    "Column Gap",
    "Columns",
    "Video Fit",
    "autoplay",
    "muted",
    "Unmuted",
    "Orientation",
    "Columns",
    "Autoplay",
    "Muted",
    "Unmuted",
    "Lazy Load",
    "Lightbox",
    "Show Navigation Arrows",
    "Initially centered video",
    "Slider Loop",
    "Slide Speed (ms)",
  ]);

  const { gallery, items, videos } = attributes;
  const updateObj = updateAttributes(attributes, setAttributes);

  return (
    <>
      <HelpPanel
        slug="video-gallery-block"
        docsLink="https://bblockswp.com/docs/video-gallery-block"
      />
      <PanelBody
        className="bPlPanelBody"
        title={__("Videos", "video-gallery")}
        initialOpen={true}
      >
        <ItemsPanel
          {...itemsProps}
          attributes={attributes}
          setAttributes={setAttributes}
          clientId={clientId}
          arrKey="videos"
          newItem={{
            id: Math.random().toString(36).substr(2, 9),
            title: "Title",
            subtitle: "Subtitle",
            video:
              "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          }}
          ItemSettings={ItemSettings}
          itemLabel="Video"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          premiumProps={premiumProps}
          design="sortable"
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Layout Settings", "video-gallery")}
        initialOpen={false}
      >
        {renderComponentControl({
          label: "Column Gap",
          className: "mt20",
          value: gallery?.columnGap[device],
          onChange: (val) => updateObj("gallery", val, "columnGap", device),
          Component: NumberControl,
          isDeviceControl: true,
          ...premiumProps,
        })}
      </PanelBody>

      <PanelBody title="Options" className="bPlPanelBody" initialOpen={false}>
        {renderComponentControl({
          label: "Video Fit",
          labelPosition: "left",
          value: items?.options?.objectFit,
          onChange: (value) =>
            updateObj("items", value, "options", "objectFit"),
          options: videoSizeOptions,
          Component: BButtonGroup,
          ...premiumProps,
        })}

        {renderComponentControl({
          className: "mt20",
          
          label: "Lightbox",
          checked: items?.options?.lightbox,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "options", "lightbox"),
            }),
          Component: ToggleControl,
          ...premiumProps,
        })}

        {/* Slider Speed */}
        {renderComponentControl({
          label: "Slide Speed (ms)",
          className: "mt20",
          value: gallery?.slideSpeed,
          onChange: (val) => updateObj("gallery", val, "slideSpeed"),
          Component: NumberControl,
          min: 0,
          max: 10000,
          step: 100,
          help: __("Set the speed of slide transitions in milliseconds"),
          ...premiumProps,
        })}


        {renderComponentControl({
          className: "mt20",
          label: "Slider Loop",
          checked: gallery?.loop,
          onChange: (val) => updateObj("gallery", val, "loop"),
          Component: ToggleControl,
          help: __("Enable continuous loop mode for the slider"),
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Show Navigation Arrows"),
          className: "mt20",
          checked: gallery?.arrow?.show ?? true,
          onChange: (val) => updateObj("gallery", val, "arrow", "show"),
          Component: ToggleControl,
          help: __("Display left/right arrows for navigation"),
          ...premiumProps,
        })}

        {renderComponentControl({
          className: "mt20",
          label: "Initially centered video",
          help: "Choose which video appears in the center when the page loads",
          // Show: 1,2,3… but internally subtract 1 when saving
          value: (gallery?.initialVideoIndex ?? 0) + 1,
          onChange: (displayValue) =>
            updateObj("gallery", displayValue - 1, "initialVideoIndex"),
          min: 1,
          max: videos?.length || 1,
          step: 1,
          Component: RangeControl,
          // Optional: show the video title next to the number
          renderValue: () => {
            const idx = gallery?.initialVideoIndex ?? 0;
            const title = videos?.[idx]?.title || `Video ${idx + 1}`;
            return `${idx + 1}: ${title.substring(0, 30)}${title.length > 30 ? "…" : ""
              }`;
          },
          ...premiumProps,
        })}
      </PanelBody>
    </>
  );
};

export default General;
