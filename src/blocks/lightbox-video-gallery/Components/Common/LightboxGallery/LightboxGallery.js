import React from "react";
import LightGallery from "lightgallery/react";
import { useRef } from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-video.css";

import lgVideo from "lightgallery/plugins/video";

const LightboxGallery = ({ attributes }) => {
  const { videos = [] } = attributes || {};
  const videoContainerRef = useRef(null);

  return (
    <div className="lightbox-page" ref={videoContainerRef}>
      <LightGallery
        speed={500}
        plugins={[lgVideo]}
        elementClassNames="gallery-container">
        {videos.map((video, index) => {
          const key = video.id || index;
          const subHtml = `<h4>${video.title || ""}</h4><p>${
            video.subtitle || ""
          }</p>`;

          const isHTML5 =
            video.type === "html5" ||
            video.video?.endsWith(".mp4") ||
            video.video?.includes(".mp4");

          if (isHTML5) {
            const videoData = {
              source: [{ src: video.video, type: "video/mp4" }],
              tracks: video.tracks || [],
              attributes: { preload: false, controls: true, playsinline: true },
            };

            return (
              <a
                // className={`video ${
                //   activeIndex === index ? "bPlNowEditing" : ""
                // }`}
                // onClick={() => setActiveIndex(index)}
                key={key}
                className="video"
                data-lg-size="1280-720"
                data-video={JSON.stringify(videoData)}
                data-poster={video.poster}
                data-sub-html={subHtml}>
                <img className="poster" src={video.poster} alt={video.title} />
              </a>
            );
          }

          return (
            <a
              // className={`video ${
              //   activeIndex === index ? "bPlNowEditing" : ""
              // }`}
              // onClick={() => setActiveIndex(index)}
              key={key}
              className="video"
              data-lg-size="1280-720"
              data-src={video.video}
              data-poster={video.poster}
              data-sub-html={subHtml}>
              <img className="poster" src={video.poster} alt={video.title} />
            </a>
          );
        })}
      </LightGallery>
    </div>
  );
};

export default LightboxGallery;
