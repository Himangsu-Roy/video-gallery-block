// import React, { useEffect, useRef, useState } from "react";
// import Swiper from "swiper";
// import "swiper/css";
// import { sanitizeHTML } from "../../../../../../bpl-tools/utils/common";

// const SliderAutoplayVideo = ({
//   attributes,
//   activeIndex,
//   setActiveIndex = () => {},
// }) => {
//   const sliderRef = useRef(null);
//   const swiperRef = useRef(null);
//   let isScrolling = false;

//   const { videos: slides, gallery, items } = attributes;
//   const [lightboxVideo, setLightboxVideo] = useState(null);

//   useEffect(() => {
//     if (!sliderRef.current) return;

//     swiperRef.current = new Swiper(sliderRef.current, {
//       slidesPerView: "auto",
//       centeredSlides: true,
//       spaceBetween: gallery?.columnGap?.mobile || 40,
//       speed: 1000,
//       allowTouchMove: true,
//       initialSlide: 1,

//       on: {
//         init: function () {
//           setActiveIndex(1);
//           updateVideos(this);
//         },
//         slideChange: function () {
//           setActiveIndex(this.activeIndex);
//           updateVideos(this);
//         },
//       },

//       breakpoints: {
//         575: { spaceBetween: gallery?.columnGap?.desktop || 90 },
//       },
//     });

//     function updateVideos(swiper) {
//       const slides = swiper?.slides;

//       if (slides && slides.length) {
//         slides.forEach((slide, index) => {
//           const video = slide.querySelector("video");
//           if (!video) return;

//           const isReady = video.readyState >= 3;

//           if (index === swiper.activeIndex) {
//             const playVideo = () => {
//               if (video.paused) video.play();
//               video.onended = () => {
//                 video.currentTime = 0;
//                 video.play();
//               };
//             };

//             if (isReady) {
//               setTimeout(playVideo, 250);
//             } else {
//               video.addEventListener("canplay", function handler() {
//                 video.removeEventListener("canplay", handler);
//                 setTimeout(playVideo, 250);
//               });
//             }
//           } else {
//             if (!video.paused && isReady) video.pause();
//           }
//         });
//       }
//     }

//     const slider = sliderRef.current;

//     const wheelHandler = (event) => {
//       const isHorizontalScroll =
//         Math.abs(event.deltaX) > Math.abs(event.deltaY);
//       if (!isHorizontalScroll) return;

//       event.preventDefault();
//       if (isScrolling || Math.abs(event.deltaX) < 30) return;
//       isScrolling = true;

//       const swiper = swiperRef.current;
//       if (!swiper) return;

//       if (event.deltaX > 0) {
//         if (swiper.activeIndex === swiper.slides.length - 1) {
//           swiper.slideTo(0);
//         } else {
//           swiper.slideNext();
//         }
//       } else {
//         if (swiper.activeIndex === 0) {
//           swiper.slideTo(swiper.slides.length - 1);
//         } else {
//           swiper.slidePrev();
//         }
//       }

//       setTimeout(() => (isScrolling = false), swiper.params.speed + 100);
//     };

//     slider.addEventListener("wheel", wheelHandler, { passive: false });
//     const resizeHandler = () => swiperRef.current && swiperRef.current.update();
//     window.addEventListener("resize", resizeHandler);

//     return () => {
//       slider.removeEventListener("wheel", wheelHandler);
//       window.removeEventListener("resize", resizeHandler);
//       if (swiperRef.current) swiperRef.current.destroy();
//     };
//   }, [slides, gallery]);

//   return (
//     <section className="base-template">
//       <div className="wrapper base-template__wrapper">
//         <div className="base-template__content">
//           <div className="video-slider swiper" ref={sliderRef}>
//             <div className="video-slider__wrapper swiper-wrapper">
//               {slides.map((slide, i) => (
//                 <div className="video-slider__slide swiper-slide" key={i}>
//                   <div
//                     className={`video-slider__video-box ${
//                       i === activeIndex ? "bPlNowEditing" : ""
//                     }`}
//                     onClick={() => {
//                       setLightboxVideo(slide?.video);
//                       setActiveIndex(i);
//                     }}
//                   >
//                     <video
//                       className="video-slider__video"
//                       src={slide?.video}
//                       playsInline
//                       muted
//                     />
//                   </div>

//                   <div className="video-slider__info-box">
//                     <h2 className="video-slider__info-title">
//                       {sanitizeHTML(slide?.title)}
//                     </h2>

//                     <time
//                       dateTime={slide?.datetime}
//                       className="video-slider__info-text"
//                     >
//                       {sanitizeHTML(slide?.subtitle)}
//                     </time>
//                   </div>

//                   {/* navigation */}
//                   <div className="video-slider__navigation">
//                     <div className="video-slider__navigation-buttons">
//                       <button
//                         className="video-slider__navigation-button video-slider__navigation-button--prev"
//                         onClick={() => {
//                           swiperRef.current && swiperRef.current.slidePrev();
//                         }}
//                         style={{ marginRight: "10px" }}
//                       >
//                         ‹
//                       </button>
//                       <button
//                         className="video-slider__navigation-button video-slider__navigation-button--next"
//                         onClick={() => {
//                           swiperRef.current && swiperRef.current.slideNext();
//                         }}
//                         style={{ marginLeft: "10px" }}
//                       >
//                         ›
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Lightbox */}
//       {items?.options?.lightbox && lightboxVideo && (
//         <div
//           className="video-lightbox-overlay"
//           onClick={() => setLightboxVideo(null)}
//         >
//           <div
//             className="video-lightbox-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <video
//               src={lightboxVideo}
//               controls
//               autoPlay
//               playsInline
//               style={{
//                 maxWidth: "90vw",
//                 maxHeight: "90vh",
//                 borderRadius: "8px",
//               }}
//             />

//             <button
//               className="video-lightbox-close"
//               onClick={() => setLightboxVideo(null)}
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default SliderAutoplayVideo;

// !
// import React, { useEffect, useRef, useState } from "react";
// import Swiper, { Navigation, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { sanitizeHTML } from "../../../../../../bpl-tools/utils/common";

// Swiper.use([Navigation, Pagination]);

// const SliderAutoplayVideo = ({
//   attributes,
//   activeIndex,
//   setActiveIndex = () => {},
// }) => {
//   const sliderRef = useRef(null);
//   const swiperRef = useRef(null);
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const paginationRef = useRef(null);
//   let isScrolling = false;
//   const navigationRef = useRef({});

//   const { videos: slides, gallery, items } = attributes;
//   const [lightboxVideo, setLightboxVideo] = useState(null);

//   useEffect(() => {
//     if (navigationRef.current) {
//       const swiperContainer = navigationRef.current;

//       // Create next button
//       const swiperButtonNext = document.createElement("div");
//       swiperButtonNext.classList.add("video-slider-next");
//       // swiperButtonNext.innerHTML = nextArrow;
//       swiperButtonNext.innerHTML =
//         "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z'/></svg>";
//       swiperButtonNext.addEventListener("click", handleNext);

//       // Create prev button
//       const swiperButtonPrev = document.createElement("div");
//       swiperButtonPrev.classList.add("video-slider-prev");
//       // swiperButtonPrev.innerHTML = prevArrow;
//       swiperButtonPrev.innerHTML =
//         "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z'/></svg>";
//       swiperButtonPrev.addEventListener("click", handlePrev);

//       // Append buttons to the Swiper container
//       swiperContainer.appendChild(swiperButtonNext);
//       swiperContainer.appendChild(swiperButtonPrev);

//       // Cleanup function to remove buttons on unmount
//       return () => {
//         swiperButtonNext.removeEventListener("click", handleNext);
//         swiperButtonPrev.removeEventListener("click", handlePrev);
//         swiperContainer.removeChild(swiperButtonNext);
//         swiperContainer.removeChild(swiperButtonPrev);
//       };
//     }
//   }, []);

//   useEffect(() => {
//     if (!sliderRef.current) return;

//     swiperRef.current = new Swiper(sliderRef.current, {
//       slidesPerView: "auto",
//       centeredSlides: true,
//       spaceBetween: gallery?.columnGap?.mobile || 40,
//       speed: 1000,
//       allowTouchMove: true,
//       loop: false,
//       initialSlide: 1,

//       navigation: {
//         nextEl: nextRef?.current,
//         prevEl: prevRef?.current,
//       },

//       // pagination: {
//       //   el: paginationRef?.current,
//       //   clickable: true,
//       // },

//       // pagination: {
//       //   el: paginationRef.current,
//       //   clickable: true,
//       //   renderBullet: function (index, className) {
//       //     console.log(index, "index");
//       //     return '<span class="' + className + '">' + (index + 1) + "</span>";
//       //   },

//       // },

//       // pagination: {
//       //   el: paginationRef.current,
//       //   clickable: true,
//       //   renderBullet: (index, className) =>
//       //     `<span class="${className}">${index + 1}</span>`,
//       // },

//       on: {
//         init: function () {
//           setActiveIndex(1);
//           updateVideos(this);
//         },
//         slideChange: function () {
//           setActiveIndex(this.activeIndex);
//           updateVideos(this);
//         },
//       },

//       breakpoints: {
//         575: { spaceBetween: gallery?.columnGap?.desktop || 90 },
//       },
//     });

//     function updateVideos(swiper) {
//       const slides = swiper?.slides;
//       if (!slides?.length) return;

//       slides.forEach((slide, index) => {
//         const video = slide.querySelector("video");
//         if (!video) return;

//         const ready = video.readyState >= 3;

//         if (index === swiper.activeIndex) {
//           const playVideo = () => {
//             if (video.paused) video.play();
//             video.onended = () => {
//               video.currentTime = 0;
//               video.play();
//             };
//           };

//           if (ready) {
//             setTimeout(playVideo, 250);
//           } else {
//             video.addEventListener("canplay", function handler() {
//               video.removeEventListener("canplay", handler);
//               setTimeout(playVideo, 250);
//             });
//           }
//         } else {
//           if (!video.paused && ready) video.pause();
//         }
//       });
//     }

//     const slider = sliderRef.current;

//     const wheelHandler = (event) => {
//       const isHorizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
//       if (!isHorizontal) return;

//       event.preventDefault();
//       if (isScrolling || Math.abs(event.deltaX) < 30) return;
//       isScrolling = true;

//       const swiper = swiperRef.current;
//       if (!swiper) return;

//       if (event.deltaX > 0) {
//         swiper.activeIndex === swiper.slides.length - 1
//           ? swiper.slideTo(0)
//           : swiper.slideNext();
//       } else {
//         swiper.activeIndex === 0
//           ? swiper.slideTo(swiper.slides.length - 1)
//           : swiper.slidePrev();
//       }

//       setTimeout(() => (isScrolling = false), swiper.params.speed + 100);
//     };

//     slider.addEventListener("wheel", wheelHandler, { passive: false });

//     const resizeHandler = () => swiperRef.current?.update();
//     window.addEventListener("resize", resizeHandler);

//     return () => {
//       slider.removeEventListener("wheel", wheelHandler);
//       window.removeEventListener("resize", resizeHandler);
//       swiperRef.current?.destroy();
//     };
//   }, [slides, gallery]);

//   const handleNext = () => sliderRef.current.swiper.slideNext();
//   const handlePrev = () => sliderRef.current.swiper.slidePrev();

//   return (
//     <section className="base-template">
//       <div className="wrapper base-template__wrapper" ref={navigationRef}>
//         <div className="base-template__content">
//           {/* Swiper Container */}
//           <div className="video-slider swiper" ref={sliderRef}>
//             <div className="video-slider__wrapper swiper-wrapper">
//               {slides.map((slide, i) => (
//                 <div className="video-slider__slide swiper-slide" key={i}>
//                   <div
//                     className={`video-slider__video-box ${
//                       i === activeIndex ? "bPlNowEditing" : ""
//                     }`}
//                     onClick={() => {
//                       setLightboxVideo(slide?.video);
//                       setActiveIndex(i);
//                     }}
//                   >
//                     <video
//                       className="video-slider__video"
//                       src={slide?.video}
//                       playsInline
//                       muted
//                     />
//                   </div>

//                   <div className="video-slider__info-box">
//                     <h2 className="video-slider__info-title">
//                       {sanitizeHTML(slide?.title)}
//                     </h2>
//                     <time
//                       dateTime={slide?.datetime}
//                       className="video-slider__info-text"
//                     >
//                       {sanitizeHTML(slide?.subtitle)}
//                     </time>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* <div className="video-slider-pagination" ref={paginationRef}></div> */}
//         </div>
//       </div>

//       {/* Lightbox */}
//       {items?.options?.lightbox && lightboxVideo && (
//         <div
//           className="video-lightbox-overlay"
//           onClick={() => setLightboxVideo(null)}
//         >
//           <div
//             className="video-lightbox-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <video
//               src={lightboxVideo}
//               controls
//               autoPlay
//               playsInline
//               style={{
//                 maxWidth: "90vw",
//                 maxHeight: "90vh",
//                 borderRadius: "8px",
//               }}
//             />
//             <button
//               className="video-lightbox-close"
//               onClick={() => setLightboxVideo(null)}
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default SliderAutoplayVideo;

// !

// import React, { useEffect, useRef, useState } from "react";
// import Swiper, { Navigation, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { sanitizeHTML } from "../../../../../../bpl-tools/utils/common";

// Swiper.use([Navigation, Pagination]);

// const SliderAutoplayVideo = ({
//   attributes,
//   activeIndex,
//   setActiveIndex = () => {},
// }) => {
//   const sliderRef = useRef(null);
//   const swiperRef = useRef(null);
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const paginationRef = useRef(null);
//   const navigationRef = useRef(null);

//   const { videos: slides = [], gallery, items } = attributes;

//   // Use user-defined initial index, or default to 1 (second slide)
//   const userInitialIndex = gallery?.initialVideoIndex;
//   const safeInitialIndex =
//     slides.length > 0
//       ? Math.max(0, Math.min(userInitialIndex, slides.length - 1))
//       : 0;

//   console.log(safeInitialIndex, "safeInitialIndex");
//   console.log(userInitialIndex, "userInitialIndex");

//   const [lightboxVideo, setLightboxVideo] = useState(null);

//   // Create custom navigation arrows
//   useEffect(() => {
//     if (!navigationRef.current) return;
//     const container = navigationRef.current;
//     const nextBtn = document.createElement("div");
//     nextBtn.className = "video-slider-next";
//     nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>`;

//     const prevBtn = document.createElement("div");
//     prevBtn.className = "video-slider-prev";
//     prevBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>`;

//     const handleNext = () => swiperRef.current?.slideNext();
//     const handlePrev = () => swiperRef.current?.slidePrev();

//     nextBtn.addEventListener("click", handleNext);
//     prevBtn.addEventListener("click", handlePrev);

//     container.appendChild(nextBtn);
//     container.appendChild(prevBtn);

//     return () => {
//       nextBtn.removeEventListener("click", handleNext);
//       prevBtn.removeEventListener("click", handlePrev);
//       nextBtn.remove();
//       prevBtn.remove();
//     };
//   }, []);

//   // Auto-play/pause logic
//   const updateVideos = (swiper) => {
//     swiper.slides.forEach((slide, index) => {
//       const video = slide.querySelector("video");
//       if (!video) return;

//       if (index === swiper.activeIndex) {
//         const playVideo = () => {
//           if (video.paused) {
//             video.play().catch(() => {}); // ignore autoplay errors
//           }
//           video.onended = () => {
//             video.currentTime = 0;
//             video.play().catch(() => {});
//           };
//         };

//         if (video.readyState >= 3) {
//           setTimeout(playVideo, 250);
//         } else {
//           const handler = () => {
//             video.removeEventListener("canplay", handler);
//             setTimeout(playVideo, 250);
//           };
//           video.addEventListener("canplay", handler);
//         }
//       } else {
//         if (!video.paused) video.pause();
//         video.currentTime = 0;
//       }
//     });
//   };

//   // Initialize Swiper
//   useEffect(() => {
//     if (!sliderRef.current || slides.length === 0) return;

//     swiperRef.current = new Swiper(sliderRef.current, {
//       slidesPerView: "auto",
//       centeredSlides: true,
//       spaceBetween: gallery?.columnGap?.mobile || 40,
//       speed: 1000,
//       allowTouchMove: true,
//       loop: false,
//       initialSlide: safeInitialIndex, // User-controlled starting slide

//       navigation: {
//         nextEl: ".video-slider-next",
//         prevEl: ".video-slider-prev",
//       },

//       on: {
//         init: function (swiper) {
//           setActiveIndex(swiper.activeIndex);
//           updateVideos(swiper);
//         },
//         slideChange: function (swiper) {
//           setActiveIndex(swiper.activeIndex);
//           updateVideos(swiper);
//         },
//       },

//       breakpoints: {
//         575: {
//           spaceBetween: gallery?.columnGap?.desktop || 90,
//         },
//       },
//     });

//     // Mouse wheel horizontal navigation
//     let isScrolling = false;
//     const wheelHandler = (e) => {
//       if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
//       e.preventDefault();
//       if (isScrolling) return;
//       isScrolling = true;

//       if (e.deltaX > 0) {
//         swiperRef.current?.slideNext();
//       } else {
//         swiperRef.current?.slidePrev();
//       }

//       setTimeout(() => (isScrolling = false), 1100);
//     };

//     const sliderEl = sliderRef.current;
//     sliderEl.addEventListener("wheel", wheelHandler, { passive: false });

//     const resizeHandler = () => swiperRef.current?.update();
//     window.addEventListener("resize", resizeHandler);

//     return () => {
//       sliderEl.removeEventListener("wheel", wheelHandler);
//       window.removeEventListener("resize", resizeHandler);
//       swiperRef.current?.destroy(true, true);
//       swiperRef.current = null;
//     };
//   }, [slides, gallery, safeInitialIndex]);

//   return (
//     <section className="base-template">
//       <div className="wrapper base-template__wrapper" ref={navigationRef}>
//         <div className="base-template__content">
//           <div className="video-slider swiper" ref={sliderRef}>
//             <div className="video-slider__wrapper swiper-wrapper">
//               {slides.map((slide, i) => (
//                 <div className="video-slider__slide swiper-slide" key={i}>
//                   <div
//                     className={`video-slider__video-box ${
//                       i === activeIndex ? "bPlNowEditing" : ""
//                     }`}
//                     onClick={() => {
//                       setLightboxVideo(slide?.video);
//                       setActiveIndex(i);
//                     }}
//                   >
//                     <video
//                       className="video-slider__video"
//                       src={slide?.video}
//                       playsInline
//                       muted
//                       loop={false}
//                     />
//                   </div>

//                   <div className="video-slider__info-box">
//                     <h2 className="video-slider__info-title">
//                       {sanitizeHTML(slide?.title)}
//                     </h2>
//                     <time className="video-slider__info-text">
//                       {sanitizeHTML(slide?.subtitle)}
//                     </time>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Lightbox */}
//       {items?.options?.lightbox && lightboxVideo && (
//         <div
//           className="video-lightbox-overlay"
//           onClick={() => setLightboxVideo(null)}
//         >
//           <div
//             className="video-lightbox-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <video
//               src={lightboxVideo}
//               controls
//               autoPlay
//               playsInline
//               style={{
//                 maxWidth: "90vw",
//                 maxHeight: "90vh",
//                 borderRadius: "8px",
//               }}
//             />
//             <button
//               className="video-lightbox-close"
//               onClick={() => setLightboxVideo(null)}
//             >
//               ×
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default SliderAutoplayVideo;

// ?

import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { sanitizeHTML } from "../../../../../../../bpl-tools/utils/common";

Swiper.use([Navigation]);

const SliderAutoplayVideo = ({
  attributes,
  activeIndex,
  setActiveIndex = () => {},
}) => {
  const sliderRef = useRef(null);
  const swiperRef = useRef(null);
  const navigationRef = useRef(null);

  const { videos: slides = [], gallery = {}, items } = attributes;
  const showArrows = gallery.arrow?.show !== false; // default = true

  // User-defined starting video (0 = first)
  const userInitialIndex = gallery?.initialVideoIndex ?? 0;
  const safeInitialIndex =
    slides.length > 0
      ? Math.max(0, Math.min(userInitialIndex, slides.length - 1))
      : 0;

  const [lightboxVideo, setLightboxVideo] = useState(null);

  // === Create/Hide Navigation Arrows Only If Enabled ===
  // useEffect(() => {
  //   if (!navigationRef.current || !showArrows) {
  //     // Clean up any existing arrows if disabled
  //     document
  //       .querySelectorAll(".video-slider-prev, .video-slider-next")
  //       .forEach((el) => el.remove());
  //     return;
  //   }

  //   const container = navigationRef.current;

  //   // Avoid duplicates
  //   if (container.querySelector(".video-slider-prev")) return;

  //   const prevBtn = document.createElement("div");
  //   prevBtn.className = "video-slider-prev btn-position-left";
  //   prevBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>`;

  //   const nextBtn = document.createElement("div");
  //   nextBtn.className = "video-slider-next btn-position-right";
  //   nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>`;

  //   prevBtn.addEventListener("click", () => swiperRef.current?.slidePrev());
  //   nextBtn.addEventListener("click", () => swiperRef.current?.slideNext());

  //   container.appendChild(prevBtn);
  //   container.appendChild(nextBtn);

  //   return () => {
  //     prevBtn.remove();
  //     nextBtn.remove();
  //   };
  // }, [showArrows]);

  // === Create Arrows Inside a Shared Wrapper ===
  useEffect(() => {
    if (!navigationRef.current || !showArrows) {
      // Remove entire wrapper + arrows if disabled
      document.querySelector(".video-slider-arrows-wrapper")?.remove();
      return;
    }

    const container = navigationRef.current;

    // Remove old wrapper to prevent duplicates
    container.querySelector(".video-slider-arrows-wrapper")?.remove();

    // Create the wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "video-slider-arrows-wrapper";

    // Create prev button
    const prevBtn = document.createElement("div");
    prevBtn.className = "video-slider-prev";

    // Create next button
    const nextBtn = document.createElement("div");
    nextBtn.className = "video-slider-next";

    // === Use Custom Icons or Default SVG ===
    const leftIcon = gallery?.arrow?.leftIcon;
    const rightIcon = gallery?.arrow?.rightIcon;

    prevBtn.innerHTML = leftIcon
      ? `<img src="${leftIcon}" alt="Previous" />`
      : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>`;

    nextBtn.innerHTML = rightIcon
      ? `<img src="${rightIcon}" alt="Next" />`
      : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>`;

    // Click handlers
    prevBtn.onclick = () => swiperRef.current?.slidePrev();
    nextBtn.onclick = () => swiperRef.current?.slideNext();

    // Append buttons to wrapper
    wrapper.appendChild(prevBtn);
    wrapper.appendChild(nextBtn);

    // Append wrapper to container
    container.appendChild(wrapper);

    // Cleanup
    return () => {
      wrapper.remove();
    };
  }, [showArrows, gallery?.arrow?.leftIcon, gallery?.arrow?.rightIcon]);

  // Auto-play active video
  const updateVideos = (swiper) => {
    swiper.slides.forEach((slide, i) => {
      const video = slide.querySelector("video");
      if (!video) return;

      if (i === swiper.activeIndex) {
        const play = () => video.play().catch(() => {});
        video.onended = () => {
          video.currentTime = 0;
          play();
        };
        video.readyState >= 3
          ? setTimeout(play, 250)
          : video.addEventListener("canplay", play, { once: true });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  // Smart arrow visibility (only if arrows are enabled)
  const updateArrows = () => {
    if (!showArrows) return;
    const prev = document.querySelector(".video-slider-prev");
    const next = document.querySelector(".video-slider-next");
    prev?.classList.toggle("hidden", swiperRef.current?.isBeginning || false);
    next?.classList.toggle("hidden", swiperRef.current?.isEnd || false);
  };

  // Main Swiper
  useEffect(() => {
    if (!sliderRef.current || slides.length === 0) return;

    swiperRef.current = new Swiper(sliderRef.current, {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: gallery?.columnGap?.mobile || 40,
      speed: gallery?.slideSpeed,
      allowTouchMove: true,
      loop: gallery?.loop === true,
      initialSlide: safeInitialIndex,

      on: {
        init(swiper) {
          setActiveIndex(swiper.activeIndex);
          updateVideos(swiper);
          updateArrows();
        },
        slideChange(swiper) {
          setActiveIndex(swiper.activeIndex);
          updateVideos(swiper);
          updateArrows();
        },
        resize: updateArrows,
      },

      breakpoints: {
        575: { spaceBetween: gallery?.columnGap?.desktop || 90 },
      },
    });

    // Wheel navigation
    let scrolling = false;
    const wheelHandler = (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (scrolling) return;
      scrolling = true;
      e.deltaX > 0
        ? swiperRef.current?.slideNext()
        : swiperRef.current?.slidePrev();
      setTimeout(() => (scrolling = false), 1100);
    };

    sliderRef.current.addEventListener("wheel", wheelHandler, {
      passive: false,
    });
    window.addEventListener("resize", () => swiperRef.current?.update());

    return () => {
      sliderRef.current?.removeEventListener("wheel", wheelHandler);
      swiperRef.current?.destroy(true, true);
      swiperRef.current = null;
    };
  }, [slides, gallery, safeInitialIndex, showArrows]);

  return (
    <>
      <section className="base-template">
        <div className="wrapper base-template__wrapper" ref={navigationRef}>
          <div className="base-template__content">
            <div className="video-slider swiper" ref={sliderRef}>
              <div className="video-slider__wrapper swiper-wrapper">
                {slides.map((slide, i) => (
                  <div className="video-slider__slide swiper-slide" key={i}>
                    <div
                      className={`video-slider__video-box ${
                        i === activeIndex ? "bPlNowEditing" : ""
                      }`}
                      onClick={() => {
                        setLightboxVideo(slide?.video);
                        setActiveIndex(i);
                      }}>
                      <video
                        className="video-slider__video"
                        src={slide?.video}
                        playsInline
                        muted
                      />
                    </div>

                    <div className="video-slider__info-box">
                      <h2 className="video-slider__info-title">
                        {sanitizeHTML(slide?.title)}
                      </h2>
                      <time className="video-slider__info-text">
                        {sanitizeHTML(slide?.subtitle)}
                      </time>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {items?.options?.lightbox && lightboxVideo && (
          <div
            className="video-lightbox-overlay"
            onClick={() => setLightboxVideo(null)}>
            <div
              className="video-lightbox-content"
              onClick={(e) => e.stopPropagation()}>
              <video
                src={lightboxVideo}
                controls
                autoPlay
                playsInline
                style={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  borderRadius: "8px",
                }}
              />
              <button
                className="video-lightbox-close"
                onClick={() => setLightboxVideo(null)}>
                ×
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SliderAutoplayVideo;
