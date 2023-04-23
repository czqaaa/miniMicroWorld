import { nanoid } from "nanoid";
import create from "zustand";

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));

const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
  cubes: getLocalStorage("cubes")?.length
    ? getLocalStorage("cubes")
    : [
        {
          key: nanoid(),
          pos: [-42, 0, -6],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [-41, 0, -6],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [-40, 0, -6],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [-40, 0, -7],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [-40, 0, -8],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [-41, 0, -8],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [-42, 0, -7],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [-42, 0, -8],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [7, 0, 37],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [7, 0, 36],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [8, 0, 36],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [9, 0, 36],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [7, 0, 38],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [8, 0, 38],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [9, 0, 38],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [9, 0, 37],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [36, 0, -22],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [36, 0, -21],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [36, 0, -20],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [35, 0, -20],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [34, 0, -20],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [34, 0, -21],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [34, 0, -22],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [35, 0, -22],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [-33, 0, 37],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [-32, 0, 37],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [-31, 0, 37],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [-31, 0, 38],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [-31, 0, 39],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [-32, 0, 39],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [-33, 0, 39],
          texture: "glass",
        },
        {
          key: nanoid(),
          pos: [-33, 0, 38],
          texture: "glass",
        },
      ],
  logos: [
    {
      key: nanoid(),
      pos: [-41, 0, -7],
    },
    {
      key: nanoid(),
      pos: [8, 0, 37],
    },
    {
      key: nanoid(),
      pos: [35, 0, -21],
    },
    {
      key: nanoid(),
      pos: [-32, 0, 38],
    },
  ],
  removeLogo: (x, y, z) => {
    set((prev) => ({
      logos: prev.logos.filter((logo) => {
        const [X, Y, Z] = logo.pos;
        return x !== X || y !== Y || z !== Z;
      }),
    }));
  },
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture || "glass",
        },
      ],
    }));
  },
  removeCube: (x, y, z) => {
    set((prev) => ({
      cubes: prev.cubes.filter((cube) => {
        const [X, Y, Z] = cube.pos;
        return x !== X || Y !== y || Z !== z;
      }),
    }));
  },
  setTexture: (texture) => {
    set(() => ({
      texture,
    }));
  },
  saveWorld: () => {
    set((prev) => {
      setLocalStorage("cubes", prev.cubes);
    });
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
    }));
    setLocalStorage("cubes", []);
  },
}));
