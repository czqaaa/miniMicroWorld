import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FPV } from "./components/FPV";
import { Cubes } from "./components/Cubes";
import { useEffect } from "react";
import { TextureSelector } from "./components/TexureSelector";
import { Menu } from "./components/Menu";

function App() {
  function pointToCenter(x, y) {
    return function () {
      console.log(1);
      var ev = new MouseEvent("click", { clientX: x, clientY: y });
      console.log(ev);
      document.dispatchEvent(ev);
    };
  }
  // useEffect(() => {
  //   const canvas = document.querySelector("canvas");
  //   console.log(canvas.clientHeight, canvas.clientWidth);
  //   const fullScreenElement = document.fullscreenElement;
  //   if (!fullScreenElement) {
  //     canvas.addEventListener(
  //       "click",
  //       pointToCenter(canvas.clientWidth / 2, canvas.clientHeight / 2)
  //     );
  //     canvas.removeEventListener(
  //       "click",
  //       pointToCenter(canvas.clientWidth / 2, canvas.clientHeight / 2),
  //       false
  //     );
  //   }
  // }, []);

  return (
    <>
      <div>Outside Canvas</div>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className="centered absolute cursor centerd">+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
