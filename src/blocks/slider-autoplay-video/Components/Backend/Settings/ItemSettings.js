import { TextControl } from "@wordpress/components";
import { produce } from "immer";
import { InlineMediaUpload } from "../../../../../../../bpl-tools/Components";
import {
  renderComponentControl,
  setFreeFields,
} from "../../../utils/functions";

const ItemSettings = ({
  attributes,
  setAttributes,
  arrKey,
  index,
  premiumProps,
  setActiveIndex = () => {},
}) => {
  const items = attributes[arrKey];

  const updateItem = (property, val, childProperty = null) => {
    if (!items?.[index]) return;

    const newItems = produce(items, (draft) => {
      if (childProperty !== null) {
        if (!draft[index][property]) draft[index][property] = {};
        draft[index][property][childProperty] = val;
      } else {
        draft[index][property] = val;
      }
    });

    setAttributes({ [arrKey]: newItems });
    setActiveIndex(index);
  };

  setFreeFields(["video", "title", "Subtitle", "Poster"]);

  return (
    <>
      {renderComponentControl({
        label: "Video",
        value: items[index]?.video,
        labelPosition: "left",
        onChange: (media) => {
          const url = typeof media === "string" ? media : media?.url || "";
          updateItem("video", url);
        },
        Component: InlineMediaUpload,
        types: "video",
        placeholder: ["Video url", "video-player"],
        ...premiumProps,
      })}

      {renderComponentControl({
        label: "Title",
        value: items[index]?.title,
        labelPosition: "left",
        onChange: (val) => updateItem("title", val),
        Component: TextControl,
        className: "mt20",
        placeholder: ["Title", "video-player"],
        ...premiumProps,
      })}

      {renderComponentControl({
        label: "Subtitle",
        value: items[index]?.subtitle,
        labelPosition: "left",
        onChange: (val) => updateItem("subtitle", val),
        Component: TextControl,
        className: "mt20",
        placeholder: ["Subtitle", "video-player"],
        ...premiumProps,
      })}
    </>
  );
};

export default ItemSettings;
