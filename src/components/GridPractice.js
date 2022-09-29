import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import SwipeableViews from "react-swipeable-views/lib/SwipeableViews";
import ProjectOne from "./ProjectOne";
import Instructions from "./Instructions";
// const styles = {
//   slide: {
//     padding: 15,
//     minHeight: 100,
//     color: '#fff',
//   },
//   slide1: {
//     background: '#FEA900',
//   },
//   slide2: {
//     background: '#B3DC4A',
//   },
//   slide3: {
//     background: '#6AC0FF',
//   }
// }

const GridPractice = () => {
  return (
    <>
    <ContainerGrid>
    <GlobalStyles />
      <div
        className="box-div">
      </div>
      <div 
        className="box-div grid-span-2 flex-box">
        <div>
        <h1 data-text='Full-Stack Web Developer'><span className="title-span">Full-Stack Web Developer</span></h1>
        <span><h2>Bernard Li</h2></span>
        </div>
      </div>
      <div className="box-div">
        <h1>Box 3</h1>
      </div>
      <div className="box-div">
        <h1>Box 4 </h1>
      </div>
      <div className="box-div">
        <h1>Box 5</h1>
      </div>
      <div className="box-div">
        <h1>Box 6 </h1> 
      </div>
    </ContainerGrid>
    <Wrapper>
    <SwipeableViews enableMouseEvents>
    <div
        // style={Object.assign({}, styles.slide, styles.slide1)}
        className=" slide slide0">
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
      <div
        // style={Object.assign({}, styles.slide, styles.slide3)}
        className="slide slide3">
          slide 3
      </div>
    </SwipeableViews>
    </Wrapper>
    </>
  );
};

export default GridPractice;

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
    
  h1 {
    position: relative;
    white-space: nowrap;
    color: #426A5A;
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
    color: white;
    -webkit-text-stroke: 0vw white;
    border-right: 2px transparent #121212;
    overflow: hidden;
    animation: animate 6s linear 1 forwards;
  }
    @keyframes animate {
      0% {
        width: 60%;
      }
      57% {
        width: 0%;
      }   
      100% {
        width: 101%;
      }
    }
  }

  .grid-span-2 {
    grid-column: span 2;
  }
  .box-div {
    border: 2px pink solid;
    margin: 8px;
  }
  .box-div:last-child {
    grid-column-start: 1; //shorthand grid-column for grid-column-start
    grid-row-start: 2;
    grid-row-end: span 2;
  }`

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    border: 2px solid pink;
    div {
      &:hover {
        cursor: grab;
      }
    }
    .slide {
      padding: 15px;
      min-height: 100px;
      color: #ffffff;
      /* border: 2px solid pink; */
    }`