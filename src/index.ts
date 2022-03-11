import "./styles.css";
import { Cube } from "./cube/index";
import { Hero } from "./hero/index";

const cube = new Cube(document.querySelector("canvas#cube"));
const hero = new Hero(document.querySelector("canvas#hero"));

console.log(cube, hero);
