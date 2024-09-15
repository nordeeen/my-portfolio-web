import Header from './components/header';
import HeroPage from './components/sectionHero';
import SectionAbout from './components/sectionAbout';
import SectionProject from './components/sectionProjects';
import Footer from './components/footer';

const App = () => {
  return (
    <main className="w-full bg-yellow-100 scroll-smooth">
      <Header />
      <HeroPage />
      <SectionAbout />
      <SectionProject />
      <Footer />
    </main>
  );
};

export default App;
