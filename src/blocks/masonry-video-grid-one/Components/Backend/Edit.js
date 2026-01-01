import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import MasonryVideoGrid from "../Common/MasonryVideoGrid/MasonryVideoGrid";
import { withSelect } from "@wordpress/data";
import { useState } from "react";

const Edit = (props) => {
  const { attributes,setAttributes,clientId,device } = props;
  const [activeIndex,setActiveIndex] = useState(0);
  const [isProModalOpen,setIsProModalOpen] = useState(false);
  const isPremium = false;

  return (
    <>
      <Settings {...{ attributes,setAttributes,device,activeIndex,setActiveIndex,isProModalOpen,setIsProModalOpen,isPremium }} />
      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <MasonryVideoGrid attributes={attributes} activeIndex={activeIndex}
          setActiveIndex={setActiveIndex} />
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
