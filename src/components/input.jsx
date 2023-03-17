import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #eeeeee;
  border-bottom: 1px solid grey;
  margin-bottom: 10px;
  padding-left: 5px;

  &:hover {
    border-bottom: 1px solid blue;
  }
`;

const StyledLabel = styled.label`
  font-size: 12px;
  color: #333333;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  margin-top: 5px;

  background-color: transparent;
  border: 0;

  &:focus {
    outline: none;
  }
`;

function Input({ label, placeholder }) {
  return (
    <StyledDiv>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput placeholder={placeholder} />
    </StyledDiv>
  );
}

export default Input;
