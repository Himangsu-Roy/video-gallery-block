import React, { useState, useRef, useEffect } from "react";
import { Star } from "lucide-react";

const VideoSlider = ({
  attributes,
  activeIndex,
  setActiveIndex = () => {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isPlaying, setIsPlaying] = useState(null);
  const videoRefs = useRef([]);
  const { videos: testimonials, items } = attributes;
  const { video } = items;
  const { autoplay, muted } = video;

  useEffect(() => {
    if (autoplay && videoRefs.current[currentIndex]) {
      const centerVideo = videoRefs.current[currentIndex];

      centerVideo
        .play()
        .then(() => {
          setIsPlaying(currentIndex);
        })
        .catch(() => {
          setIsPlaying(null);
        });
    } else {
      pauseAllVideos();
    }
  }, [currentIndex, autoplay, testimonials]);

  const pauseAllVideos = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
    setIsPlaying(null);
  };

  const playVideo = (index) => {
    pauseAllVideos();
    const video = videoRefs.current[index];
    if (video) {
      video
        .play()
        .then(() => {
          setIsPlaying(index);
        })
        .catch((err) => console.error("Play prevented:", err));
    }
  };

  const handleVideoClick = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);

      setTimeout(() => playVideo(index), 300);
    } else {
      const video = videoRefs.current[index];
      if (video) {
        if (isPlaying === index) {
          video.pause();
          setIsPlaying(null);
        } else {
          playVideo(index);
        }
      }
    }
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
    setCurrentIndex(newIndex);
    if (autoplay) {
      setTimeout(() => playVideo(newIndex), 300);
    }
  };

  const goToNext = () => {
    const newIndex =
      currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    if (autoplay) {
      setTimeout(() => playVideo(newIndex), 300);
    }
  };

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`star ${i < rating ? "star--filled" : "star--empty"}`}
      />
    ));

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index =
        (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({
        ...testimonials[index],
        originalIndex: index,
        position: i,
      });
    }
    return visible;
  };

  return (
    <section className="video-slider">
      <div className="video-slider__container">
        {/* <div className="video-slider__header">
          <h2>What Our Customers Say</h2>
          <p>
            Discover real stories from customers who transformed their
            experience with our products
          </p>
        </div> */}

        <div className="video-slider__wrapper">
          <button
            onClick={goToPrevious}
            className="nav-button nav-button--left"
            aria-label="Previous testimonial"
            dangerouslySetInnerHTML={{ __html: items?.navigation?.prevIcon }}
          >
            {/* <ChevronLeft /> */}
          </button>

          <button
            onClick={goToNext}
            className="nav-button nav-button--right"
            aria-label="Next testimonial"
            dangerouslySetInnerHTML={{ __html: items?.navigation?.nextIcon }}
          >
            {/* <ChevronRight /> */}
          </button>

          <div className="video-slider__track">
            {getVisibleTestimonials().map((testimonial) => {
              const { position, originalIndex } = testimonial;
              const isCenter = position === 0;
              const isAdjacent = Math.abs(position) === 1;

              return (
                <div
                  key={`${testimonial.id}-${position} ${testimonial?.video}`}
                  className={`slide ${
                    isCenter
                      ? "slide--center"
                      : isAdjacent
                      ? "slide--adjacent"
                      : "slide--side"
                  } ${originalIndex === activeIndex ? "bPlNowEditing" : ""}`}
                  onClick={() => {
                    handleVideoClick(originalIndex);
                    setActiveIndex(originalIndex);
                  }}
                >
                  <div className="slide__content">
                    <video
                      ref={(el) => {
                        videoRefs.current[originalIndex] = el;
                      }}
                      className="slide__video"
                      loop
                      // muted={isCenter ? !autoplay : true}
                      muted={muted}
                      autoPlay={isCenter && autoplay}
                      playsInline
                      poster={testimonial.poster}
                      onPlay={() => setIsPlaying(originalIndex)}
                      onPause={() => setIsPlaying(null)}
                    >
                      <source src={testimonial.video} type="video/mp4" />
                    </video>

                    <div className="slide__overlay" />

                    {isPlaying !== originalIndex && (
                      <div className="slide__play-overlay">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: items?.playBtn?.icon,
                          }}
                          className="slide__play-btn"
                        >
                          {/* <Play /> */}
                        </div>
                      </div>
                    )}

                    <div className="slide__info">
                      <h3 className="title">{testimonial.title}</h3>
                      <div className="stars">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => handleVideoClick(index)}
                className={`dot ${index === currentIndex ? "dot--active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;
