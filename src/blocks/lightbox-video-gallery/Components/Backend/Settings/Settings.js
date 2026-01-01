import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { tabController } from "../../../../../../../bpl-tools/utils/functions";
import { generalStyleTabs } from "../../../utils/options";
import General from "./General/General";
import Style from "./Style/Style";

const Settings = ({
  attributes,
  setAttributes,
  activeIndex,
  setActiveIndex,
  device,
  setIsProModalOpen,
  isProModalOpen,
  isPremium,
}) => {
  const { alignment } = attributes;
  const premiumProps = { isPremium, setIsProModalOpen };

  const itemsProps = {
    attributes,
    setAttributes,
    activeIndex,
    setActiveIndex,
    device,
    premiumProps,
  };

  return (
    <>
      <InspectorControls>
        <div className="bBlocksInspectorInfo">
          Need more block like this? Checkout the bundle ➡{" "}
          <a
            href="https://wordpress.org/plugins/b-blocks"
            target="_blank"
            rel="noopener noreferrer"
          >
            B Blocks
          </a>
        </div>

        <TabPanel
          className="bPlTabPanel wp-block-lvg-lightbox-video-gallery"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={tabController}
        >
          {(tab) => (
            <>
              {"general" === tab.name && <General {...itemsProps} />}

              {"style" === tab.name && <Style {...itemsProps} />}
            </>
          )}
        </TabPanel>
      </InspectorControls>

      <BlockControls>
        <AlignmentToolbar
          value={alignment}
          onChange={(val) => setAttributes({ alignment: val })}
          describedBy={__("Block Name Alignment")}
          alignmentControls={[
            {
              title: __("Block Name in left", "textdomain"),
              align: "left",
              icon: "align-left",
            },
            {
              title: __("Block Name in center", "textdomain"),
              align: "center",
              icon: "align-center",
            },
            {
              title: __("Block Name in right", "textdomain"),
              align: "right",
              icon: "align-right",
            },
          ]}
        />
      </BlockControls>
    </>
  );
};
export default Settings;
