import Experiencecards from "./Experiencecards";

const HomeExperience = () => {
  return (
    <div className="p-5 py-7 md:py-14 lg:px-16 xl:px-28 mt-5 bg-secondary">
      {/* heading  */}
      <div className="flex justify-between items-center mt-5">
        <h1 className="uppercase text-primary/80 gradient-text">02 - Experience</h1>
      </div>

      {/* cards  */}
      <div className="mt-8 pb-5">
        <Experiencecards />
      </div>
    </div>
  );
};

export default HomeExperience;
