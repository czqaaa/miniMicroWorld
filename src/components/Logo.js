import { useBox } from "@react-three/cannon";
import { useStore } from "../hooks/useStore";
import { useEffect, useRef } from "react";
import { BufferAttribute, BufferGeometry } from "three";
import * as THREE from "three";

export const Logo = (props) => {
  const { position, fbx } = props;
  const [ref] = useBox(() => ({
    type: "Static",
    position: position,
    args: [3.4, 1, 3.5],
    scale: [10, 10, 10],
  }));

  const model = useRef();
  const children = fbx.children[0];
  const values = useRef([0, 0]);
  useEffect(() => {
    model.current.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array(children.geometry.attributes.position),
        3
      )
    );
    model.current.setAttribute(
      "normal",
      new THREE.BufferAttribute(
        new Float32Array(children.geometry.attributes.normal),
        3
      )
    );
    model.current.setAttribute(
      "uv",
      new THREE.BufferAttribute(
        new Float32Array(children.geometry.attributes.uv),
        3
      )
    );
  }, []);
  console.log(fbx);

  //   fbx.position.set(1, 1, 1);
  //   fbx.scale.set(10, 10, 10);
  //   const [removeLogo] = useStore((state) => [state.removeLogo]);\
  return (
    <mesh ref={ref}>
      <bufferGeometry ref={ref} />
      <meshStandardMaterial />
    </mesh>
  );
};
