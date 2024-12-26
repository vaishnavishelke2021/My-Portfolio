import React from "react";
import Marquee from "react-fast-marquee";
import i1 from "../mockups/byteup.png";
import i2 from "../mockups/uranium.png";
import i3 from "../mockups/oneclick.png";
import i4 from "../mockups/tradetool.png";
import i5 from "../mockups/shreeram.png";
import i6 from "../mockups/deepshape.png";
import i7 from "../mockups/filmbox.png"

const imageData = [
  {
    id: 1,
    src: i1,
    alt: "Image 1",
  },
  {
    id: 2,
    src: i2,
    alt: "Image 2",
  },
  {
    id: 3,
    src: i3,
    alt: "Image 3",
  },
  {
    id: 4,
    src: i4,
    alt: "Image 1",
  },
  {
    id: 5,
    src: i5,
    alt: "Image 2",
  },
  {
    id: 6,
    src: i6,
    alt: "Image 3",
  },
  {
    id: 7,
    src: i7,
    alt: "Image 3",
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
