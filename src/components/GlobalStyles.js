import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

body {
  //dark theme
  background: #121212;
  ${'' /* background: #ffffff; */}
  ${'' /* background: #050505; //black (rich black fogra); */}
  font-family: "Audiowide", sans-serif;
}

h1, h2, h3, h4, p, div {
  color: white;
  ${'' /* color: #5E8C61; //russian green */}
  ${'' /* color: #426A5A; // darker green "hookers green" */}
  ${'' /* color: #897C80; //metalic gray */}
}

`