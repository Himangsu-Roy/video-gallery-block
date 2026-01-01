import { TextareaControl,TextControl } from "@wordpress/components";
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
  setActiveIndex = () => { }
}) => {
  const items = attributes[arrKey];

  const updateItem = (property,val,childProperty = null) => {
    if (!items?.[index]) return;

    const newItems = produce(items,(draft) => {
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

  setFreeFields(["video","title","Subtitle","Poster","Video Height","Height","Description","channel name","category"]);


  return (
    <>
      {renderComponentControl({
        label: "Video",
        value: items[index]?.video,
        labelPosition: "left",
        onChange: (media) => {
          const url = typeof media === "string" ? media : media?.url || "";
          const attachmentId = typeof media === "object" ? media?.id : null;
          updateItem("video",url);
          if (attachmentId) updateItem("attachment_id",attachmentId);
        },
        Component: InlineMediaUpload,
        types: "video",
        placeholder: ["Video url","video-playlist-gallery"],
        ...premiumProps,
      })}

      {renderComponentControl({
        label: "Poster",
        labelPosition: "left",
        className: "mt20",
        value: items[index]?.poster,
        onChange: (media) => {
          const url = typeof media === "string" ? media : media?.url || "";
          const attachmentId = typeof media === "object" ? media?.id : null;
          updateItem("poster",url);
          if (attachmentId) updateItem("poster_attachment_id",attachmentId);
        },
        Component: InlineMediaUpload,
        types: "image",
        placeholder: ["Poster","video-playlist-gallery"],
        ...premiumProps,
      })}

      {renderComponentControl({
        label: "Title",
        value: items[index]?.title,
        labelPosition: "left",
        onChange: (val) => updateItem("title",val),
        Component: TextControl,
        className: "mt20",
        placeholder: ["Title","video-playlist-gallery"],
        ...premiumProps,
      })}

      {/* subtitle */}
      {renderComponentControl({
        label: "subtitle",
        value: items[index]?.subtitle,
        labelPosition: "left",
        onChange: (val) => updateItem("subtitle",val),
        Component: TextControl,
        className: "mt20",
        placeholder: ["subtitle","video-playlist-gallery"],
        ...premiumProps,
      })}

      {renderComponentControl({
        label: "Description",
        value: items[index]?.description,
        labelPosition: "left",
        onChange: (val) => updateItem("description",val),
        Component: TextareaControl,
        className: "mt20",
        placeholder: ["Description","video-playlist-gallery"],
        rows: 3,
        cols: 50,
        ...premiumProps,
      })}

      {/* category */}
      {renderComponentControl({
        label: "Category",
        value: items[index]?.category,
        labelPosition: "left",
        onChange: (val) => updateItem("category",val),
        Component: TextControl,
        className: "mt20",
        placeholder: ["Category","video-playlist-gallery"],
        ...premiumProps,
      })}



    </>
  );
};

export default ItemSettings;
