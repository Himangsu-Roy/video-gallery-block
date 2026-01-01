import { useState } from "react";
import VideoThumbnail from "react-video-thumbnail";
import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import VideoGalleryFilter from "../Common/VideoGalleryFilter";
import { prefix } from "../../utils/data";
import { getYoutubeThumbnail } from "../../utils/functions";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { videos, options } = attributes;

  const [activeIndex, setActiveIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState("");
  const id = `${prefix}-${clientId}`;
	
  


  return (
    <>
      <Settings
        attributes={attributes}
        setAttributes={setAttributes}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <div {...useBlockProps()} id={id}>
        <Style attributes={attributes} id={id} itemWidth={itemWidth} />

        <div className={prefix}>
          <VideoGalleryFilter
            attributes={attributes}
            id={id}
            itemWidth={itemWidth}
            setItemWidth={setItemWidth}
          />

          <div id={`${id}-gallery`} className="videoGallery">
            {videos?.map((item, index) => {
              const { video, poster, albs } = item;

              // const galleryItem = useRef(null);
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`galleryItem ${albs
                    ?.map((c) => lodash.camelCase(c))
                    .join(" ")} ${
                    index === activeIndex ? "bPlNowEditing" : ""
                  }`}
                  // ref={galleryItem}
                  id={`galleryItem-${index}`}>
                  {poster || getYoutubeThumbnail(video) ? (
                    <figure className="galleryFigure">
                      <img src={poster || getYoutubeThumbnail(video)} />
                    </figure>
                  ) : (
                    <VideoThumbnail
                      width={600}
                      videoUrl={video}
                      snapshotAtTime={2}
                    />
                  )}
                  {options?.showCaptionOnThumbnail && item.caption && (
                    <div className="galleryItemCaption">{item.caption}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Edit;
