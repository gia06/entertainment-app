import styled from "styled-components";
import logo from "/assets/logo.svg";

function Login() {
  return (
    <LoginContainer>
      <img src={logo} />
      <LoginForm></LoginForm>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = styled.div`
  width: 400px;
  height: 373px;
  /* margin: 0 auto; */
  border-radius: 20px;
  background: #161d2f;
`;
