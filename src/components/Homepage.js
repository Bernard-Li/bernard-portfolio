import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import SwipeableViews from "react-swipeable-views/lib/SwipeableViews";

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  }
}

const Homepage = () => {
  return (
    <>
    <ContainerGrid>
    <GlobalStyles />
      <div
        className="box-div grid-span-2">
        <h1>Box 1 Lorem</h1> 
        <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      </div>
      <div 
        className="box-div">
        <h1>Box 2</h1>
        <p>lorem10 lorem10lorem10 lorem10lorem10 lorem10lorem10 lorem10lorem10 lorem10lorem10 lorem10</p>
      </div>
      <div className="box-div">
        <h1>Box 3</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...</p>
      </div>
      <div className="box-div grid-span-2">
        <h1>Box 4 </h1>
        <p>Something something here and there, some texst now and then what what hey yooo Something something here and there, some texst now and then what what hey yooo</p>
      </div>
      <div className="box-div">
        <h1>Box 5</h1>
        <p>Pretium nibh ipsum consequat nisl vel. Urna et pharetra pharetra massa massa ultricies mi. Id nibh tort.</p>
      </div>
      <div className="box-div">
        <h1>Box 6 </h1> 
        <p>Something something here and there, some texst now and then what what hey yoo Something something here and there, some texst now and then what what hey yooo</p>
      </div>
    </ContainerGrid>
    <Wrapper>
    <SwipeableViews enableMouseEvents>
      <div
        style={Object.assign({}, styles.slide, styles.slide1)}
        className="slide">
          slide 1
      </div>
      <div
        style={Object.assign({}, styles.slide, styles.slide2)}
        className="slide">
          slide 2
      </div>
      <div
        style={Object.assign({}, styles.slide, styles.slide3)}
        className="slide">
          slide 3
      </div>
    </SwipeableViews>
    </Wrapper>
    </>
  );
};

export default Homepage;

const ContainerGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  
  .grid-span-2 {
    grid-column: span 2;
  }
  .box-div {
    border: 2px solid white;
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

    .slide {
      padding: 15px;
      min-height: 100px;
      color: #ffffff;
    }
  `