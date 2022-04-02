import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
