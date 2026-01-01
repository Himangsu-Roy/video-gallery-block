import { __ } from "@wordpress/i18n";

export const generalStyleTabs = [
  { name: "general", title: __("General", "textdomain") },
  { name: "style", title: __("Style", "textdomain") },
];

export const purposeTypeOptions = [
  { label: "Test", value: "test" },
  { label: "Final", value: "final" },
];

export const videoSizeOptions = [
  { value: "contain", label: "Contain" },
  { value: "cover", label: "Cover" },
  { value: "fill", label: "Fill" },
  { value: "none", label: "None" },
];

export const videoData = [
  // First row (moves right to left)
  [
    {
      id: "pachinko",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster:
        "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "PACHINKO",
      subtitle: "Apple TV+",
    },
    {
      id: "usher",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      poster:
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "USHER",
      subtitle: "Apple Music",
    },
    {
      id: "documentary",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster:
        "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "บลิงก์ ทวิช",
      subtitle: "Documentary",
    },
    {
      id: "presumed",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      poster:
        "https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "PRESUMED INNOCENT",
      subtitle: "Apple TV+",
    },
    {
      id: "maritime",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      poster:
        "https://images.pexels.com/photos/8728556/pexels-photo-8728556.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "ดินแดนโจรสลัด",
      subtitle: "Adventure",
    },
    {
      id: "phoenix",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      poster:
        "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "PHOENIX โค่น",
      subtitle: "Action",
    },
  ],
  // Second row (moves left to right)
  [
    {
      id: "jennifer",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      poster:
        "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Jennifer Lopez",
      subtitle: "Apple Music",
    },
    {
      id: "angrybirds",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      poster:
        "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "ANGRY BIRDS RELOADED",
      subtitle: "Apple Arcade",
    },
    {
      id: "western",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Subaru.mp4",
      poster:
        "https://images.pexels.com/photos/2906064/pexels-photo-2906064.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "พรีเดเตอร์",
      subtitle: "Western",
    },
    {
      id: "icespice",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      poster:
        "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Ice Spice",
      subtitle: "Apple Music",
    },
    {
      id: "dreamlight",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
      poster:
        "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "DREAMLIGHT VALLEY",
      subtitle: "Apple Arcade",
    },
    {
      id: "badboys",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      poster:
        "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "BAD BOYS: RIDE OR DIE",
      subtitle: "Action",
    },
  ],
  // Third row (moves right to left)
  [
    {
      id: "drama",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster:
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "IT ENDS WITH US",
      subtitle: "Drama",
    },
    {
      id: "animated",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      poster:
        "https://images.pexels.com/photos/163016/bitcoin-cryptocurrency-digital-currency-money-163016.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "โปเกมอนสตาร์ดิวม",
      subtitle: "Animation",
    },
    {
      id: "horror",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster:
        "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "บิดเบือนบิดเบี้ยว",
      subtitle: "Horror",
    },
    {
      id: "family",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      poster:
        "https://images.pexels.com/photos/163036/mario-luigi-figures-funny-163036.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Tamy & Jelly ADVENTURE KINGDOM",
      subtitle: "Apple Arcade",
    },
    {
      id: "silo",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      poster:
        "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "SILO",
      subtitle: "Apple TV+",
    },
    {
      id: "music",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      poster:
        "https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Music Documentary",
      subtitle: "Apple Music",
    },
  ],
];
