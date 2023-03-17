import styled from 'styled-components'

const StyledAuthButton = styled.button`
  border-radius: 30px;
  background-color: #ff6600;
  border: none;

  color: white;
  min-width: 300px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: bold;
  padding: 6px 0;

  &:hover {
    cursor: pointer;
  }
`;

const StyledButton = styled.button`
  border-radius: 30px;
  background-color: #FFFFFF;
  border: none;

  color: #ff6600;
  min-width: 300px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: bold;
  padding: 6px 0;

  &:hover {
    cursor: pointer;
  }
`;

function AuthButton ({ title }) {
  return (
    <StyledAuthButton>{ title }</StyledAuthButton>
  )
}

function WhiteButton({ title }) {
  return (
    <StyledButton>{title}</StyledButton>
  )
}


export { AuthButton, WhiteButton };