import React from "react";
import Marquee from "react-fast-marquee";

const imageData = [
  {
    id: 1,
    src: "https://framerusercontent.com/images/AGpBGSlAeiBe8absF2xAK8RBIA.jpeg?scale-down-to=512",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://framerusercontent.com/images/6prmhvfmhanjxVLvZZpcJn7WllA.webp?scale-down-to=1024",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://framerusercontent.com/images/AGpBGSlAeiBe8absF2xAK8RBIA.jpeg?scale-down-to=512",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://framerusercontent.com/images/6prmhvfmhanjxVLvZZpcJn7WllA.webp?scale-down-to=1024",
    alt: "Image 4",
  },
];

const HomeMarquee = () => {
  return (
    <div className="p-5 py-7 md:p-7 lg:px-16 xl:px-28 mt-5">
      <Marquee gradient={false} speed={55}>
        {imageData.map((image) => (
          <div
            key={image.id}
            className="h-[200px] w-[300px] sm:h-[230px] sm:w-[350px] rounded-2xl mx-2"
          >
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default HomeMarquee;
