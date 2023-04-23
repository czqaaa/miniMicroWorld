import { useGLTF, useFBX } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";
import { useStore } from "../hooks/useStore";
import { Logo } from "./Logo";
import { Models } from "../images/textures";
export const Logos = () => {
  const [logos] = useStore((state) => [state.logos]);
  //   const materials = useLoader(MTLLoader, "../FBX/tree.mtl");
  //   const fbx = useLoader(OBJLoader, "../FBX/tree.obj", (loader) => {
  //     materials.preload();
  //     loader.setMaterials(materials);
  //   });
  const { scene } = useGLTF(Models[0].url);

  return logos.map(({ key, pos }) => {
    return <Logo key={key} position={pos} fbx={scene} />;
  });
};
