import "./App.css";
import About from "./components/About";
import Header from "./components/Header";

import Skills from "./components/Skills";

function App() {
  return (
   <div className="bg-[#050414]" >
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:14px_24px]"></div>
          
      <Header />
      <About />
      <Skills/>
   </div>
  );
}

export default App;
