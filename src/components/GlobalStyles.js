import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  //dark theme
  ${'' /* background: #121212; */}
  background: #ffffff;
  ${'' /* background: #050505; //black (rich black fogra); */}
  ${'' /* font-family: 'Oleo Script', cursive; */}
  font-family: 'Share Tech Mono', monospace;
}


h1, h2, h3, h4, p, div {
  padding: 0;
  margin: 0;
  ${'' /* color: white; */}
  color: black;
  ${'' /* color: #5E8C61; //russian green */}
  ${'' /* color: #426A5A; // darker green "hookers green" */}
  ${'' /* color: #897C80; //metalic gray */}
}
button {
  font-family: "Audiowide", sans-serif;
  padding: 50px;
  border-radius: 16px;
}
`