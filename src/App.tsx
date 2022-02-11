import { ColorPallete } from "./themes/theme";
import Fade from "react-reveal/Fade";
import { Header } from "./Pages/Header";
import { About } from "./Pages/About";
import { Skills } from "./Pages/Skills";

function App() {
  return (
    <div className="App">
      <Fade bottom>
        <div style={{ backgroundColor: `${ColorPallete.main}` }}>
          <Header />
        </div>
      </Fade>
      <Fade bottom>
        <div style={{ backgroundColor: `${ColorPallete.secondary}` }} id="about">
          <About />
        </div>
      </Fade>
      <Fade bottom>
        <div style={{ backgroundColor: `${ColorPallete.main}`, zIndex: 999 }}>
          <Skills />
        </div>
      </Fade>
      
    </div>
  );
}

export default App;
