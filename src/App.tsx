import About from "./components/about/about";
import Banner from "./components/banner/banner";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Portifolio from "./components/portifolio/portifolio";
import Skills from "./components/skills/skills";
import { LanguageProvider } from "./components/context/languageContext";

function App() {
  return (
    <>
    <LanguageProvider>
      <Header />
      <Banner/>
      <Portifolio />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </LanguageProvider>
    </>
  );
}

export default App
