import { useState,useRef } from "react";
import Lightbox from "../Lightbox/Lightbox";

const MasonryGrid1 = ({ attributes,activeIndex,setActiveIndex = () => { } }) => {
  const [playingId,setPlayingId] = useState(null);
  const [lightboxOpen,setLightboxOpen] = useState(false);
  const [lightboxVideo,setLightboxVideo] = useState(null);
  const videoRefs = useRef({});
  const { videos,items } = attributes;



  const handlePlayPause = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      if (playingId !== null && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }
      video.play();
      setPlayingId(id);
    }
  };

  const handleCardClick = (video) => {
    if (items?.lightbox?.enabled) {
      setLightboxVideo(video);
      setLightboxOpen(true);
    } else {
      handlePlayPause(video.id);
    }
  };

  // Video duration calculation
  const calculateDuration = (video) => {
    const videoElement = videoRefs.current[video.id];
    if (!videoElement) return "0:00";
    const duration = videoElement.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    //For NaN
    if (isNaN(minutes) || isNaN(seconds)) return "0:00";
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="mvg-grid-1" >
      {/* <div className="mvg-grid-1-header">
        <h2>Modern Clean</h2>
        <p>Minimalist design with hover interactions</p>
      </div> */}
      <div className={`mvg-grid-1-columns`}>
        {videos.map((video,index) => (
          <div
            key={video.id}
            data-video-id={video.id}
            className={`mvg-grid-1-card ${activeIndex === index ? "bPlNowEditing" : ""} ${video.height !== 'custom' ? `h-${video.height}` : ''} ${playingId === video.id ? "playing" : ""}`}
            onClick={() => {
              handleCardClick(video);
              setActiveIndex(index);
            }}
          >
            {/* Video Element */}
            <video
              ref={(el) => (videoRefs.current[video.id] = el)}
              src={video.video}
              loop={items?.video?.loop}
              muted={items?.video?.muted}
              playsInline
              onEnded={() => setPlayingId(null)}
            />

            {/* Overlay */}
            <div
              className={`mvg-grid-1-card-overlay ${playingId === video.id ? "hidden-overlay" : ""
                }`}
            />

            {/* Play Button */}
            <div className="mvg-grid-1-card-play-btn">
              <div className="btn-inner" dangerouslySetInnerHTML={{ __html: items?.playBtn?.icon }} >
                {/* <Play fill="currentColor" /> */}
              </div>
            </div>

            {/* Duration Badge */}
            {items?.video?.showMinutes && (
              <div className="mvg-grid-1-card-duration">{calculateDuration(video)}</div>
            )}

            {/* Info */}
            <div className="mvg-grid-1-card-info">
              <h3 className="mvg-grid-1-card-title">{video.title}</h3>
              {/* <div className="mvg-meta">
                <span>{video.views} views</span>
                <div className="mvg-actions">
                  <button className="heart">
                    <Heart />
                  </button>
                  <button className="msg">
                    <MessageCircle />
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        video={lightboxVideo}
        settings={{
          backgroundColor: items?.lightbox?.backgroundColor,
          closeButtonColor: items?.lightbox?.closeButtonColor,
          closeButtonSize: items?.lightbox?.closeButtonSize?.desktop,
          closeOnClickOutside: items?.lightbox?.closeOnClickOutside,
          showCloseButton: items?.lightbox?.showCloseButton,
        }}
      />
    </div>
  );
};

export default MasonryGrid1;
