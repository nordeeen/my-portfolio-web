import { MyLogo } from '../../assets';

const Header = () => {
  return (
    <header className="h-24 px-6 py-4 bg-white flex justify-between items-center">
      <a
        href="#home"
        className="text-sm md:text-base font-inter font-normal text-second capitalize cursor-pointer hover:text-primary hover:font-bold transition"
      >
        Home
      </a>
      <a
        href="#about"
        className="text-sm md:text-base font-inter font-normal text-second capitalize cursor-pointer hover:text-primary hover:font-bold transition"
      >
        About
      </a>
      <div>
        <MyLogo />
      </div>
      <a
        href="#project"
        className="text-sm md:text-base font-inter font-normal text-second capitalize cursor-pointer hover:text-primary hover:font-bold transition"
      >
        Project
      </a>
      <a
        href="#contact"
        className="text-sm md:text-base font-inter font-normal text-second capitalize cursor-pointer hover:text-primary hover:font-bold transition"
      >
        Contact
      </a>
    </header>
  );
};

export default Header;
