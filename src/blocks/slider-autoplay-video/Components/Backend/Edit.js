import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import SliderAutoplayVideo from "../Common/SliderAutoplayVideo/SliderAutoplayVideo";
import { useState } from "@wordpress/element";
import { withSelect } from "@wordpress/data";

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
          device,
          activeIndex,
          setActiveIndex,
          isPremium,
          isProModalOpen,
          setIsProModalOpen,
        }}
      />

      <div {...useBlockProps({ draggable: false })}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <SliderAutoplayVideo
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
