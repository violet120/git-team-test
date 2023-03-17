import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #eeeeee;
  border-bottom: 1px solid grey;
  margin-bottom: 10px;
  padding-left: 5px;

  &:hover {
    border-bottom: 1px solid blue;
  }

  &: focus-within {
    border-bottom: 1px solid green;
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

// put in App.jsx
// <Input label="帳號" placeholder="請輸入帳號" />
// <Input label="密碼" placeholder="請輸入密碼" />
