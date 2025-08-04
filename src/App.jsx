import "./App.css";
import About from "./components/About";
import Education from "./components/Education";

import Header from "./components/Header";
import Projects from "./components/Projects";

import Skills from "./components/Skills";

function App() {
  return (
   <div className="bg-[#050414]" >
      <div className="pointer-events-none absolute inset-0  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:14px_24px]"></div>
          
      <Header />
      <About />
      <Skills/>
      <Projects/>
      <Education/>
     
   </div>
  );
}

export default App;
