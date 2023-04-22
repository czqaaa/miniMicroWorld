import { useBox } from "@react-three/cannon";
import * as textures from "../images/textures";
import { useStore } from "../hooks/useStore";
import log from "ipfs-api/src/log";
import { useState } from "react";
export const Cube = (props) => {
  const [isHoverd, setIsHoverd] = useState(false);
  const { position, texture } = props;
  const [ref] = useBox(() => ({
    type: "Static",
    position: position,
  }));
  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);
  const activeTexture = textures[texture + "Texture"];
  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHoverd(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHoverd(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;
        if (e.altKey) {
          removeCube(x, y, z);
          return;
        }
        switch (clickedFace) {
          case 0:
            addCube(x + 1, y, z);
            return;
          case 1:
            addCube(x - 1, y, z);
            return;
          case 2:
            addCube(x, y + 1, z);
            return;
          case 3:
            addCube(x, y - 1, z);
            return;
          case 4:
            addCube(x, y, z + 1);
            return;
          case 5:
            addCube(x, y, z - 1);
            return;
          default:
            return;
        }
      }}
      ref={ref}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHoverd ? "grey" : "white"}
        transparent={true}
        opacity={activeTexture === "glass" ? 0.8 : 1}
        map={activeTexture}
        attach="material"
      />
    </mesh>
  );
};
