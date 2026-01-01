import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import LightboxGallery from "./Components/Common/LightboxGallery/LightboxGallery";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-lvg-lightbox-video-gallery"
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        <LightboxGallery attributes={attributes} />
      </>
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
