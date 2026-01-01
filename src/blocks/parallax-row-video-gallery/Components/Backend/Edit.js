import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import ParallaxVideoGallery from "../Common/ParallaxRowVideoGallery/ParallaxVideoGallery";
import { useState } from "@wordpress/element";
import { withSelect } from "@wordpress/data";

const Edit = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const isPremium = false; // Boolean(vgbpipecheck ?? false);
  const [groupIndex, setGroupIndex] = useState(0);
  const { attributes, setAttributes, clientId, device } = props;

  return (
    <>
      <Settings
        {...{
          attributes,
          setAttributes,
          activeIndex,
          setActiveIndex,
          device,
          isPremium,
          isProModalOpen,
          setIsProModalOpen,
          setGroupIndex,
        }}
      />

      <div {...useBlockProps({ draggable: false })}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <ParallaxVideoGallery
          attributes={attributes}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          groupIndex={groupIndex}
          setGroupIndex={setGroupIndex}
          isBackend={true}
        />
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
