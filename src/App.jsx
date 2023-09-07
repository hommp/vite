import { useRef } from "react"; // Import React
import { Parallax, ParallaxLayer } from "@react-spring/parallax"; // Import Parallax components
import backgroundMusic from "./assets/duvet.mp3"; // Replace with your audio file path

// Import your images
import moon from "./assets/moon.png";
import land from "./assets/land.png";
import cat from "./assets/cat.gif";

function App() {
  const ref = useRef();

  return (
    <div>
      <audio autoPlay loop>
        <source src={backgroundMusic} type="audio/mpeg" />
      </audio>

      <Parallax pages={4} ref={ref}>
        {/* Parallax Layers */}
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={cat} alt="A cute cat" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Never Back Down Never What?</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Never Give Up!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
