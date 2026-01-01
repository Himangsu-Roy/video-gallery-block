import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import SliderAutoplayVideo from "./Components/Common/SliderAutoplayVideo/SliderAutoplayVideo";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-sapv-slider-autoplay-video"
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        <SliderAutoplayVideo attributes={attributes} />
      </>
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
