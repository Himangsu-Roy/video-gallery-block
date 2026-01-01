import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import ParallaxVideoGallery from "./Components/Common/ParallaxRowVideoGallery/ParallaxVideoGallery";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-prvg-parallax-row-video-gallery"
  );

  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        <ParallaxVideoGallery attributes={attributes} />
      </>
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
