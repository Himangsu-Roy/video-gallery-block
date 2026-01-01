import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import VideoSlider from "../Common/VideoSlider/VideoSlider";
import { useState } from "@wordpress/element";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const isPremium = false; // Boolean(vgbpipecheck ?? false);

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
        }}
      />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <VideoSlider
          attributes={attributes}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
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
