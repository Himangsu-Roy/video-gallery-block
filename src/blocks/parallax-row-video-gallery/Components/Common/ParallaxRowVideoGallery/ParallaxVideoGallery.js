import React, { useEffect, useState, useRef, useCallback } from "react";
import ParallaxRow from "./ParallaxRow";
import VideoLightbox from "./VideoLightbox";

function ParallaxVideoGallery({
  attributes,
  activeIndex,
  setActiveIndex,
  groupIndex,
  setGroupIndex,
  isBackend = false,
}) {
  const [scrollY, setScrollY] = useState();
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const { videos, gallery, items } = attributes;
  const { orientation } = gallery;
  const videoContainerRef = useRef(null);
  const currentEditingRef = useRef(null);
  const [lightboxVideoSrc, setLightboxVideoSrc] = useState(null);

  useEffect(() => {
    if (isBackend) {
      const container =
        document.querySelector(".interface-interface-skeleton__content") ||
        document.querySelector(".block-editor-block-list__layout") ||
        document.querySelector(".wp-block-prvg-parallax-row-video-gallery");

      if (container) {
        const handleEditorScroll = () => {
          setScrollY(container.scrollTop || 0);
        };

        container.addEventListener("scroll", handleEditorScroll, {
          passive: true,
        });

        setScrollY(container.scrollTop || 0);

        return () => {
          container.removeEventListener("scroll", handleEditorScroll);
        };
      }
    } else {
      const handleWindowScroll = () => {
        setScrollY(window.scrollY || 0);
      };

      window.addEventListener("scroll", handleWindowScroll, { passive: true });
      setScrollY(window.scrollY || 0);

      return () => window.removeEventListener("scroll", handleWindowScroll);
    }
  }, [isBackend]);

  const handleVideoPlay = useCallback(
    (videoId) => {
      const allVideos = videos.flat();
      const video = allVideos.find((v) => v.id === videoId);
      if (!video) return;

      if (items?.video?.lightbox) {
        setLightboxVideoSrc(video?.video);
        setPlayingVideoId(videoId);
      } else {
        setPlayingVideoId(videoId);
      }
    },
    [videos, items?.video?.lightbox]
  );

  const onVideoPause = useCallback(() => setPlayingVideoId(null), []);

  useEffect(() => {
    const container = videoContainerRef.current;
    if (!container) return;
    if (isBackend) {
      const handleClick = (e) => {
        const target = e.target.closest(".video-wrapper");
        if (!target) return;

        if (currentEditingRef.current) {
          currentEditingRef.current.classList.remove("bPlNowEditing");
        }

        target.classList.add("bPlNowEditing");
        currentEditingRef.current = target;
      };

      container.addEventListener("click", handleClick);

      return () => {
        container.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <div className="parallax-gallery" ref={videoContainerRef}>
      {videos?.map((group, index) => (
        <ParallaxRow
          key={`group-${index}`}
          videos={group}
          direction={index % 2 === 0 ? "left" : "right"}
          // speed={0.5}
          speed={0.5 + index * 0.1}
          scrollY={scrollY}
          playingVideoId={!items?.video?.lightbox ? playingVideoId : null}
          onVideoPlay={handleVideoPlay}
          onVideoPause={onVideoPause}
          repeatCount={1}
          attributes={attributes}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          groupIndex={groupIndex}
          orientation={orientation}
          gIndex={index}
          setGroupIndex={setGroupIndex}
        />
      ))}
      {items?.video?.lightbox && lightboxVideoSrc && playingVideoId && (
        <VideoLightbox
          videoSrc={lightboxVideoSrc}
          onClose={() => {
            setLightboxVideoSrc(null);
            setPlayingVideoId(null);
          }}
        />
      )}
    </div>
  );
}

export default ParallaxVideoGallery;
