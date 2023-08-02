import { createGlobalStyle } from "styled-components";
import "./fonts.css";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
body {
  min-height: 100vh;
  
  margin: 0;
  font-family: 'MontserratMedium', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  color: #FBFBFB;
  
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  background: linear-gradient(338deg, #4191c0 12%, #7a2b70 54%, #3e289c 90%);
  background-repeat: no-repeat;    

}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  display: block;
  color: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
button,
p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
