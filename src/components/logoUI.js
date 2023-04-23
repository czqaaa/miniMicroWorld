import { useStore } from "../hooks/useStore";

export const LogoUI = () => {
  const [logos, cubes] = useStore((state) => [state.logos, state.cubes]);
  let number = 4 - logos.length;

  if (number === 4) {
    cubes.forEach((cube) => {
      cube.texture = "log";
    });
  }
  return (
    <div className="LogoUI absolute">
      {number < 4 ? <h2>{number}/4</h2> : <h2>恭喜通关🎉</h2>}
      <h2>数媒202 蔡梓麒 201002609</h2>
    </div>
  );
};
