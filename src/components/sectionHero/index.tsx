import React from 'react';
import { sourceTexts, sourceTextMarquee } from '../../consts';
import { ArrowUp } from '../../assets';
import Marquee from 'react-fast-marquee';

const HeroPage = () => {
  const wordingHeroRole = sourceTexts?.wordingHeroRole || '';
  const frontEndRegex = /(Front-end)/i;
  const parts = wordingHeroRole.split(frontEndRegex);

  return (
    <React.Fragment>
      <section
        id="home"
        className="pt-20 pb-18 px-6 bg-white flex justify-center items-center"
      >
        <div className="h-80 space-y-8 flex flex-col items-center">
          <p className="font-inter font-medium text-3xl md:text-5xl text-second text-center capitalize">
            {sourceTexts?.wordingHero}
          </p>
          <h1 className="font-inter font-bold text-3xl md:text-6xl text-second text-center">
            {parts.map((part, index) =>
              part.toLowerCase() === 'front-end' ? (
                <span key={index} className="text-primary">
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </h1>
          <p className="font-inter font-medium text-sm md:text-lg text-second text-center">
            {sourceTexts?.wordingHeroDesc}
          </p>
          <div className="w-64 flex justify-between items-center hover:cursor-pointer">
            <p className="font-inter font-semibold text-sm md:text-lg text-primary text-center hover:underline">
              {sourceTexts?.wordingHeroLink}
            </p>
            <ArrowUp />
          </div>
        </div>
      </section>
      <section className="bg-primary py-4 h-24 flex justify-center items-center">
        <Marquee
          speed={50}
          direction="right"
          pauseOnHover={true}
          className="w-full"
        >
          {sourceTextMarquee.map((item, index) => (
            <p
              key={index}
              className="font-inter font-bold text-lg md:text-2xl text-third text-center mx-6 whitespace-nowrap"
            >
              {item}
            </p>
          ))}
        </Marquee>
      </section>
    </React.Fragment>
  );
};

export default HeroPage;
