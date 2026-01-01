import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import VideoSlider from "./Components/Common/VideoSlider/VideoSlider";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(".wp-block-vs-video-slider");
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        <VideoSlider attributes={attributes} />
      </>
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
