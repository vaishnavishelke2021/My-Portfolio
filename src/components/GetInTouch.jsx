import React from "react";

const GetInTouch = () => {
  const email = "your-email@example.com"; // Replace with your actual email address
  const subject = "I'm Interested in Connecting!";
  const body = "Hello, I would like to get in touch regarding opportunities.";

  return (
    <div className="w-full md:w-[80%] lg:w-[65%] p-5 py-9 md:py-20 lg:px-16 xl:px-28 mt-5 rounded-lg">
      <h1 className="text-4xl w-[80%] md:text-5xl font-extrabold text-primary mb-4 md:leading-[50px]">
        I'm Open to Work.{" "}
        <span className="text-primary/40">Let's Get In Touch!</span>
      </h1>
      <p className="text-lg md:text-[17px] text-primary/80 mb-12 leading-relaxed">
        I'm currently looking for new opportunities. My inbox is always open.
        Whether you have a question or just want to say hi, I'll get back to
        you.
      </p>
      <a
        href={`mailto:vaishnavishelke7777@gmail.com`}
        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80  transition-all duration-300"
      >
        Get In Touch
      </a>
    </div>
  );
};

export default GetInTouch;
