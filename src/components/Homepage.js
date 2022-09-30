import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import SwipeableViews from "react-swipeable-views/lib/SwipeableViews";
import ProjectOne from "./ProjectOne";
import Instructions from "./Instructions";
import Footer from "./Footer";
import { useState } from "react";

const Homepage = () => {
  //Keeps track of which slide the user is on based on the index of swipeable-views
  const [index, setIndex] = useState(0);
  const [swipeChange, setSwipeChange] = useState(0);
  const [swivyButton, setSwivyButton] = useState(false);
  const [ecommButton, setECommButton] = useState(false);

  //Funciton that changes the view based on which button is selected by the user
  const handleViewFocus = (e) => {
    switch (e) {
      case 'swivy':
        setSwivyButton(true);
        setECommButton(false);
        window.scrollTo(200, 385);
        return setIndex(1);
      case 'ecommerce':
        setSwivyButton(false);
        setECommButton(true);
        window.scrollTo(200, 385);
        return setIndex(2);
      default: 
        setIndex(0);
    }
    // console.log(e);
    // setIndex(1);
  };
    return (
    <BodyWrapper>
    <ContainerGrid>
    <GlobalStyles />
      <div
        className="box-div">
      </div>
      <div 
        className="box-div grid-span-2 flex-box">
        <div
          className="title-div">
        <h1 data-text='Full-Stack Web Developer'><span className="title-span">Full-Stack Web Developer</span></h1>
        <h2>Bernard Li</h2>
        </div>
      </div>
      <div className="box-div placeholder grid-span-3">
      </div>
      <div className="box-div project-select-div">
      <div>
        <h3>Select a project</h3>
      </div>
        <div
          className="swivy-btn">
        <Button
          isSelected={swivyButton}
          value="swivy"
          onClick={(e) => {
            handleViewFocus(e.target.value)}
            }>
          Swivy
        </Button>
        </div>
        <div
          className="eommerce-btn">
        <Button
          isSelected={ecommButton}
          value="ecommerce"
          onClick={(e) => {
            handleViewFocus(e.target.value)}
            }>
          E-Commerce
        </Button>
        </div>
      </div>
    <Wrapper>
    <SwipeableViews index={index}>
    {/* onChangeIndex={handleSlideChange} */}
    {/* enableMouseEvents */}
    <div
        // style={Object.assign({}, styles.slide, styles.slide1)}
        className="slide slide0">
          <Instructions />
      </div>
      <div
        // style={Object.assign({}, styles.slide, styles.slide1)}
        className="slide slide1">
          <ProjectOne />
      </div>
      <div
        // style={Object.assign({}, styles.slide, styles.slide2)}
        className="slide slide2">
          E-Commerce
      </div>
    </SwipeableViews>
    </Wrapper>
    </ContainerGrid>
    <div
      className="footer-div">
    <Footer />
    </div>
    </BodyWrapper>
  );
};

export default Homepage;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  margin: 8px;
  min-width: 200px;
  height: 80px;
  /* background-color: ${(props) => (props.isSelected) ? 'green' : 'none'}; */
  /* border-top: ${(props) => (props.isSelected) ? '2px solid black' : 'none'}; */
  /* border-bottom: ${(props) => (props.isSelected) ? '2px solid black' : 'none'}; */
  transition: 0.4s ease;
  &:hover {
    cursor: pointer;
    opacity: 0.4;
  }`
  
const BodyWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;`

const ContainerGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  
  .flex-box {
    display: flex;
    justify-content: flex-end;
    font-size: 24px;
    padding-right: 8px;
    .title-span {
      font-style: italic;
    }
    .title-div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      border-bottom: 2px solid black;
    }
  h2 {
    font-style: italic;
  }
  h1 {
    position: relative;
    white-space: nowrap;
    /* color: #426A5A; //#16697A */
    /* color: #16697A; */
    color: black;
    text-transform: uppercase;
  }
  h1::before {
    position: absolute;
    content: attr(data-text);
    font-style: italic;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    color: #16697A;
    -webkit-text-stroke: 0vw #16697A;
    border-right: 2px solid #16697A;
    overflow: hidden;
    animation: animate 6s cubic-bezier(0.4, 0, 0.2, 1) 1 forwards; //change to linear - 1
    //cubic-bezier(0.4, 0, 0.2, 1)
  }
    @keyframes animate {
      0% {
        width: 60%;

      }
      57% {
        width: 0%;
        border-right: 2px solid #16697A;
      }

      90% {
        border-right: 2px solid #16697A;
      }
      100% {
        width: 101%;
        border-right: 2px transparent;
      }
    }
  }

  .project-select-div {
    grid-column-start: 1;
    grid-row-start: 3;

    display: flex;
    flex-direction: column;
    width: 192px;
    border: 2px solid pink;

    .swivy-btn {
      border-bottom: 2px solid black;
      border-left: 2px solid black;
      
    }
  }
  .grid-span-2 {
    grid-column: span 2;
  }
  .placeholder {
    height: 200px;
  }
  .grid-span-3 {
    grid-column: span 3;
  }
  .box-div {
    margin: 8px;
  }`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid pink;
  grid-column-start: 1;
  grid-row-start: 3;
  
  grid-column: span 3;
  gap: 2px;
  
  div {
    &:hover {
      cursor: grab;
    }
    &:active {
      cursor: grabbing;
    }
  }
  .slide {
    padding: 15px;
    min-height: 100px;
    color: black;
    /* border: 2px solid pink; */
  }
  .slide0 {
    border-left: 2px solid black;
  }

`