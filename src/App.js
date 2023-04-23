import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FPV } from "./components/FPV";
import { Cubes } from "./components/Cubes";
import { useEffect, useState } from "react";
import { TextureSelector } from "./components/TexureSelector";
import { Menu } from "./components/Menu";

import { LogoUI } from "./components/logoUI";

function App() {
  const [switchDay, setSwitchDay] = useState(true);
  const [question, setQuestion] = useState(true);
  // function pointToCenter(x, y) {
  //   return function () {
  //     console.log(1);
  //     var ev = new MouseEvent("click", { clientX: x, clientY: y });
  //     console.log(ev);
  //     document.dispatchEvent(ev);
  //   };
  // }
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

  const handleQuestion = () => {
    setQuestion(!question);
  };
  const handleSwitch = () => {
    setSwitchDay(!switchDay);
    if (switchDay) {
      document.querySelector("body").style.backgroundColor = "black";
    } else document.querySelector("body").style.backgroundColor = "lightblue";
  };

  return (
    <>
      <div className="absolute navbar">
        <button onClick={handleSwitch}>{switchDay ? "黑夜" : "白天"}</button>
        <button onClick={handleQuestion}>?</button>
      </div>
      <Canvas>
        {switchDay && <Sky sunPosition={[100, 100, 20]} />}
        <ambientLight intensity={0.5} color={switchDay ? "white" : "gray"} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />

          <Ground />
        </Physics>
      </Canvas>
      <div className="centered absolute cursor centerd">+</div>
      <TextureSelector />
      <LogoUI />
      <Menu />

      {question && (
        <div className="details absolute">
          <h1>游戏说明</h1>
          <p>
            开始游戏请务必
            点击屏幕中央十字进入全屏模式，按esc退出，点击1-5切换物块，按alt（option）键删除物块,
            请分别前往四个矩阵中央，开启木头转换仪式
          </p>
          <button onClick={handleQuestion}>+</button>
        </div>
      )}
    </>
  );
}

export default App;
