import {
  amber,
  blue,
  blueGrey,
  brown,
  common,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from "..";
import { ColorPalette } from "../types/ColorPalette";

describe("common", () => {
  it("should have black and white", () => {
    expect(common.black).toBe("#000");
    expect(common.white).toBe("#fff");
  });
});

const colors = [
  { name: "amber", color: amber },
  { name: "blue", color: blue },
  { name: "blueGrey", color: blueGrey },
  { name: "brown", color: brown },
  { name: "cyan", color: cyan },
  { name: "deepOrange", color: deepOrange },
  { name: "deepPurple", color: deepPurple },
  { name: "green", color: green },
  { name: "grey", color: grey },
  { name: "indigo", color: indigo },
  { name: "lightBlue", color: lightBlue },
  { name: "lightGreen", color: lightGreen },
  { name: "lime", color: lime },
  { name: "orange", color: orange },
  { name: "pink", color: pink },
  { name: "purple", color: purple },
  { name: "red", color: red },
  { name: "teal", color: teal },
  { name: "yellow", color: yellow },
];

const numericShades: Array<keyof ColorPalette> = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const alphaShades: Array<keyof ColorPalette> = ["A100", "A200", "A400", "A700"];

colors.forEach((colDef) => {
  describe(`${colDef.name}`, () => {
    const numericValues = numericShades.map((shade) => colDef.color[shade]);
    const alphaValues = alphaShades.map((shade) => colDef.color[shade]);

    it("uniq shades for the numeric shades", () => {
      expect(new Set(numericValues).size).toBe(numericValues.length);
    });
    it("uniq shades for the alpha shades", () => {
      expect(new Set(alphaValues).size).toBe(alphaValues.length);
    });
  });
});
