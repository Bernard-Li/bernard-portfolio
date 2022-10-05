import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

const AboutMe = () => {
  return (
    <>
    <GlobalStyles />
    <Container>
      <h1 
        className="title-header"
        data-content-type={`console.log("hi i'm `}>
          <a href="https://www.linkedin.com/in/bernard-shajoe-li/">
            <span
              className="span-name">Bernard Li
            </span>
          </a>
            <span
              className="span-dev">
              {`"); //javascript web developer`}
            </span>
      </h1>      
      <h2
        className="second-header">
          Welcome to my portfolio!
      </h2>
    </Container>
    </>
  );
};

export default AboutMe;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16em;
  
  a {
    text-decoration: none;
    color: black;
  }
  .span-name {
    font-style: italic;
  }
  .span-dev {
    font-size: .4em;
  }
  .title-header {
    font-size: 3
    
    em;
  }
  .title-header::before {
    content: attr(data-content-type);
    font-size: .4em;
  }
  
  .span-dev::after {
    content: "";    
    border-right: 2px solid black;
    animation: cursor-blink 1.5s steps(2) infinite;
    
  }
  @keyframes cursor-blink {
    0% {
      opacity: 0;
    }
  }
  `