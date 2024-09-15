import { textProjects } from '../../consts';

const SectionProject = () => {
  return (
    <section
      id="project"
      className="bg-white px-4 md:px-6 lg:px-12 py-8 md:py-12 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <h3 className="font-inter font-medium text-2xl md:text-3xl lg:text-4xl text-second capitalize flex justify-center text-center mb-8 md:mb-12">
          My Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {textProjects.map((item, index) => (
            <div
              key={index}
              className="bg-third rounded-3xl flex flex-col p-4 md:p-6 h-full">
              <div className="flex-grow space-y-4 md:space-y-6">
                <p className="font-inter font-medium text-lg md:text-xl lg:text-2xl text-second text-center">
                  {item?.name}
                </p>
                <p className="font-inter font-medium text-sm md:text-base lg:text-lg text-second text-center md:text-left">
                  {item?.desc}
                </p>
              </div>
              <div className="mt-6 flex flex-col space-y-4">
                <a
                  href={item?.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 bg-primary rounded-full font-inter font-semibold text-sm md:text-base lg:text-lg text-third text-center capitalize outline-none"
                  type="button">
                  demo
                </a>
                <a
                  href={item?.repo || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 bg-third rounded-full font-inter font-semibold text-sm md:text-base lg:text-lg text-primary text-center capitalize outline-none"
                  type="button">
                  code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProject;