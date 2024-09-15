import { sourceTexts, textExperiences } from '../../consts';
import { ArrowUp } from '../../assets';

const SectionAbout = () => {
  return (
    <section id="about" className="px-6 py-12 bg-second">
      <div>
        <h3 className="font-inter font-medium text-2xl md:text-4xl text-third capitalize mb-5">
          About Me
        </h3>
        <p className="font-inter font-normal text-sm md:text-xl text-third capitalize">
          {sourceTexts?.wordingAboutMe}
        </p>
      </div>
      <div className="mt-10 flex flex-col justify-start">
        <h4 className="font-inter font-medium text-lg md:text-2xl text-third mb-8 self-start">
          Experience
        </h4>
        <div className="space-y-12">
          {textExperiences.map((value, idx) => (
            <div key={idx}>
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <p className="font-inter font-medium text-lg md:text-xl text-third text-center md:text-left">
                  {value?.title}
                </p>
                <p className="font-inter font-medium text-sm md:text-lg text-third text-center md:text-right">
                  {value?.dates}
                </p>
              </div>
              <p className="font-inter font-medium text-sm md:text-lg text-third text-left">
                {value?.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="self-center mt-10">
          <div className="w-64 flex justify-between hover:cursor-pointer">
            <p className="font-inter font-semibold text-sm md:text-lg text-primary text-center hover:underline">
              {sourceTexts?.wordingHeroLink}
            </p>
            <ArrowUp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
