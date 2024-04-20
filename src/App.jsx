import { BrowserRouter } from "react-router-dom";
import MouseParticles from "react-mouse-particles";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import SocialLink from "./components/SocialLink";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <MouseParticles
        g={0}
        color={["#915EFF"]}
        cull="col,image-wrapper"
      />
      <SocialLink/>
    </BrowserRouter>
  );
};

export default App;
