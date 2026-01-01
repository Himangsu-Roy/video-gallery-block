const slug = "video-gallery-block";

export const dashboardInfo = (info) => {
  const { version, isPremium, hasPro } = info;

  const proSuffix = isPremium ? " Pro" : "";

  return {
    name: `Video Gallery Block${proSuffix}`,
    displayName: `Video Gallery Block${proSuffix} - Display Multiple Videos in Grid or Lightbox`,
    description:
      "A lightweight Gutenberg block plugin for WordPress that lets you easily create responsive video galleries with albums, filters, captions, and lightbox support. Showcase YouTube, Vimeo, Wistia, or self-hosted videos in a lightbox grid layout directly in the block editor.",
    slug,
    logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
    banner: `https://i.ibb.co/cXD0dPY3/video-gallery-block.gif`,
    // banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
    // video: "https://www.youtube.com/watch?v=milYZrqLJsE",
    isYoutube: true,
    version,
    isPremium,
    hasPro,
    pages: {
      org: `https://wordpress.org/plugins/${slug}/`,
      // landing: `https://bplugins.com/products/${slug}/`,
      docs: `https://bblockswp.com/docs/${slug}/`,
      // docs: `https://bplugins.com/docs/${slug}/`,
      pricing: `https://bplugins.com/products/${slug}/pricing`,
    },
    freemius: {
      product_id: 20637,
      plan_id: 34353,
      public_key: "pk_02d017aab6844d54db3238a59e91c",
    },
  };
};

export const changelogs = [
  {
    version: "1.1.1 - 12 Aug 25",
    list: ["Fix issues"],
  },
  {
    version: "1.1.0 - 30 Jan 25",
    list: ["Update Fancybox library v5"],
  },
  {
    version: "1.0.8 - 27 Nov 24",
    list: ["Hide the all(common) album button by remove its label"],
  },
  {
    version: "1.0.7",
    list: ["Option for changing the common label of the filter"],
  },
];

export const demoInfo = {
  title: "Live Overview",
  description: "Click on any section to view it live",
  allInOneLabel: "See All Demos",
  allInOneLink: "https://apb.bplugins.com/all-demos-in-one-place/",
  demos: [
    {
      icon: "",
      title: "Grid- Default layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/grid-default-layout/",
    },
    {
      icon: "",
      title: "Grid- Title Meta layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/grid-title-meta-layout/",
    },
    {
      icon: "",
      title: "Grid- Side Image layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/grid-side-image-layout/",
    },
    {
      icon: "",
      title: "Grid- Overlay layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/grid-overlay-layout/",
    },
    {
      icon: "",
      title: "Masonry- Default layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/masonry-default-layout/",
    },
    {
      icon: "",
      title: "Masonry- Title Meta layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/masonry-title-meta-layout/",
    },
    {
      icon: "",
      title: "Masonry- Side Image layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/masonry-side-image-layout/",
    },
    {
      icon: "",
      title: "Masonry- Overlay layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/masonry-overlay-layout/",
    },
    {
      icon: "",
      title: "Slider- Side Image layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/slider-side-image-layout/",
    },
    {
      icon: "",
      title: "Slider- Overlay layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/slider-overlay-layout/",
    },
    {
      icon: "",
      title: "Ticker- Side Image layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/ticker-side-image-layout/",
    },
    {
      icon: "",
      title: "Ticker- Overlay layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/ticker-overlay-layout/",
    },
    {
      icon: "",
      title: "All Posts",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/all-posts/",
    },
    {
      icon: "",
      title: "Post Section (Design 1)",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/design-1/",
    },
    {
      icon: "",
      title: "Post Section (Design 2)",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/post-section-design-2/",
    },
    {
      icon: "",
      title: "Post Section (Design 3)",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/post-section-design-3/",
    },
    {
      icon: "",
      title: "Post Section (Design 4)",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/post-section-design-4/",
    },
    {
      icon: "",
      title: "Post Section (Design 5)",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/post-section-design-5/",
    },
  ],
};

export const pricingInfo = {
  cycles: [
    // {
    //   cycle: "monthly",
    //   label: "Monthly",
    //   isDefault: false,
    // },
    // {
    //   cycle: "annual",
    //   label: "Yearly",
    //   isDefault: true,
    // },
    {
      cycle: "lifetime",
      label: "Lifetime",
      isDefault: false,
    },
  ],

  heading: "One-time payment, lifetime access",
  headingStyles: {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "25px",
  },

  plans: [
    {
      name: "Single Site",
      quantity: 1,
      prices: {
        monthly: "4.99",
        annual: "29",
        lifetime: "29",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: false,
      note: "",
    },
    {
      name: "3 Sites",
      quantity: 3,
      prices: {
        monthly: "8.99",
        annual: "79",
        lifetime: "79",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: true,
      note: "",
    },
    {
      name: "Unlimited Sites",
      quantity: "null",
      prices: {
        monthly: "33.99",
        annual: "199",
        lifetime: "199",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: false,
      note: "",
    },
  ],

  features: [
    "Add videos from YouTube, Vimeo, Wistia, or files",
    "Use custom poster images for previews",
    "Add titles, subtitles, and captions",
    "Show star ratings for reviews",
    "Group videos into albums",
    "Choose from multiple gallery styles",
    "Use sliders, carousels, lightboxes, and more",
    "Adjust columns, rows, and spacing",
    "Add optional headers and subheaders",
    "Customize video size and play button",
    "Style navigation arrows, dots, and thumbnails",
    "Optimize galleries for desktop, tablet, and mobile",
    "Edit with a visual WordPress editor",
  ],
  button: {
    label: "Buy Now ➜",
  },
  featured: {
    text: "",
    // text: "Best Value",
  },
};

export const filterDemoInfo = {
  categories: [
    { label: "All", value: "all", col: 3, height: "300px" },
    { label: "Default", value: "default", col: 1, height: "100%" },
    {
      label: "Testimonial",
      value: "videoTestimonialSection",
      col: 1,
      height: "100%",
    },
    {
      label: "Parallax Row",
      value: "parallaxRowVideoGallery",
      col: 1,
      height: "100%",
    },
    {
      label: "Slider",
      value: "videoSlider",
      col: 1,
      height: "100%",
    },
    {
      label: "Slider Autoplay",
      value: "sliderAutoplayVideo",
      col: 1,
      height: "100%",
    },
    {
      label: "Lightbox Gallery",
      value: "lightboxGallery",
      col: 1,
      height: "100%",
    },
    {
      label: "Masonry Grid",
      value: "masonryVideoGrid",
      col: 1,
      height: "100%",
    },
    {
      label: "Playlist Gallery",
      value: "videoPlaylistGallery",
      col: 1,
      height: "100%",
    },
    {
      label: "Carousel Gallery",
      value: "videoCarouselGallery",
      col: 1,
      height: "100%",
    },
  ],

  demos: [
    {
      title: "Default",
      categories: ["default"],
      url: "https://i.ibb.co/B532hWtN/Video-Gallery-Demo-Default-min.png",
    },
    {
      title: "Video Testimonial Section",
      categories: ["videoTestimonialSection"],
      url: "https://i.ibb.co/KjDJBLxg/Video-Testimonial-Section-Demo-1-min.png",
    },
    {
      title: "Parallax Row Video Gallery",
      categories: ["parallaxRowVideoGallery"],
      url: "https://i.ibb.co/ccY3mX0j/Parallax-Row-Video-Gallery-Demo-2-min.png",
    },
    {
      title: "Video Slider",
      categories: ["videoSlider"],
      url: "https://i.ibb.co/HDjnG2w1/Video-Slider-Demo-3-min.png",
    },
    {
      title: "Slider Autoplay Video",
      categories: ["sliderAutoplayVideo"],
      url: "https://i.ibb.co/d0LpH2PB/Slider-Autoplay-Video-Demo-4-min.png",
    },
    {
      title: "Lightbox Gallery",
      categories: ["lightboxGallery"],
      url: "https://i.ibb.co/DDsv3w6K/Lightbox-Video-Gallery-Demo-5-min.png",
    },
    {
      title: "Masonry Video Grid",
      categories: ["masonryVideoGrid"],
      url: "https://i.ibb.co/jPyPLxXt/Masonry-Video-Grid-Demo-6-min.png",
    },
    {
      title: "Video Playlist Gallery",
      categories: ["videoPlaylistGallery"],
      url: "https://i.ibb.co/6cvQWFgH/Video-Playlist-Gallery-Demo-7-min.png",
    },
    {
      title: "Video Carousel Gallery",
      categories: ["videoCarouselGallery"],
      url: "https://i.ibb.co/spJndDYB/Video-Carousel-Gallery-Demo-8-min.png",
    },
  ],
};
