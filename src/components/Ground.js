import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
import { NearestFilter, RepeatWrapping } from "three";
import { useStore } from "../hooks/useStore";

export const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  const [addCube] = useStore((state) => [state.addCube]);

  groundTexture.wrapS = groundTexture.wrapT = RepeatWrapping;

  groundTexture.repeat.set(100, 100);
  groundTexture.magFilter = NearestFilter;

  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map((val) => Math.ceil(val));
        addCube(x, y, z - 1);
      }}
      ref={ref}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};
