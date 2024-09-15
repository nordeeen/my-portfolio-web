import { MyLogo } from '../../assets';
import { sourceMedsos } from '../../consts';

const Footer = () => {
  return (
    <footer id="contact" className="py-6 px-6 bg-second">
      <div className="flex justify-between items-center">
        <MyLogo />
        <div className="flex space-x-4">
          {sourceMedsos.map((item, index) => (
            <a
              key={index}
              href={item?.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              {item?.logo()}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center pt-4 border-t border-[#1f2937]">
        <p className="font-inter font-normal text-sm md:text-lg text-center text-third">
          Copyrights © 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
