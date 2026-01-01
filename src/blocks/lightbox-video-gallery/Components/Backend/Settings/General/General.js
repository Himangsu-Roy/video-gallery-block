import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalNumberControl as NumberControl,
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
import { updateAttributes } from "../../../../../../../../bpl-tools/utils/functions";
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
  ]);

  const { gallery, items } = attributes;
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
            id: Math.random().toString(36).slice(2, 11),
            // type: "html5",
            video:
              "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            poster:
              "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
            caption: "Big Buck Bunny",
            albs: [],
            title: "Big Buck Bunny",
            subtitle: "By Blender Foundation",
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
          label: "Columns",
          value: gallery?.columns[device],
          onChange: (val) => updateObj("gallery", val, "columns", device),
          Component: RangeControl,
          min: 1,
          max: 6,
          step: 1,
          beforeIcon: "grid-view",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Column Gap",
          className: "mt20",
          value: gallery?.columnGap[device],
          onChange: (val) => updateObj("gallery", val, "columnGap", device),
          Component: NumberControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Row Gap",
          className: "mt20",
          value: gallery?.rowGap[device],
          onChange: (val) => updateObj("gallery", val, "rowGap", device),
          Component: NumberControl,
          isDeviceControl: true,
          ...premiumProps,
        })}
      </PanelBody>

      <PanelBody title="Options" className="bPlPanelBody" initialOpen={false}>
        {renderComponentControl({
          label: "Video Fit",
          labelPosition: "top",
          value: items?.video?.objectFit,
          onChange: (value) => updateObj("items", value, "video", "objectFit"),
          options: videoSizeOptions,
          Component: BButtonGroup,
          ...premiumProps,
        })}
      </PanelBody>
    </>
  );
};

export default General;
