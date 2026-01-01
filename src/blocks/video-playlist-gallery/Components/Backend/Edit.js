import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import VideoPlaylistGallery from "../Common/VideoPlaylistGallery/VideoPlaylistGallery";
import { useState } from "react";


const Edit = (props) => {
  const { attributes,setAttributes,clientId,device } = props;
  const [activeIndex,setActiveIndex] = useState(0);
  const [isProModalOpen,setIsProModalOpen] = useState(false);
  const isPremium = false;



  return (
    <>
      <Settings {...{ attributes,setAttributes,activeIndex,setActiveIndex,isProModalOpen,setIsProModalOpen,isPremium,device }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <VideoPlaylistGallery attributes={attributes} setActiveIndex={setActiveIndex}
          activeIndex={activeIndex} />

      </div>
    </>
  );
};

export default withSelect((select) => {
  const { getDeviceType } = select("core/editor");
  return {
    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);