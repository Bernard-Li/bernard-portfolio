import styled from "styled-components";
import Swivy_mobile2 from "../images/Swivy_mobile2.PNG";

const ProjectOne = () => {
  return (
    <Container>
      <h1>Swivy</h1>
      <img alt='swivy project' src={Swivy_mobile2} />
    </Container>
      )
}

export default ProjectOne;

const Container = styled.div`
  border: 2px solid pink;`
