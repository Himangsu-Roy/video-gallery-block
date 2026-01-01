import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import VideoTestimonialSection from "./Components/Common/VideoTestimonialSection/VideoTestimonialSection";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-vts-video-testimonial-section"
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        <VideoTestimonialSection attributes={attributes} />
      </>
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
