import styled from "styled-components";

const ProjectButton = (props) => {
  return (
    <>
      <Button>
        Click here!
      </Button>
    </>
  );
};

export default ProjectButton;

const Button = styled.button`
  
  border: none;
  margin: 8px;

  &:hover {
    cursor: pointer;
  }`