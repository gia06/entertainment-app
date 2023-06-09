import styled from "styled-components";
import logo from "/assets/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <LoginContainer>
      <Logo src={logo} />
      <LoginFormWrapper>
        <LoginForm onSubmit={(e) => e.preventDefault()}>
          <h1>Login</h1>
          <LoginInput type="email" placeholder="Email address" />
          <LoginInput type="password" placeholder="Password" />
          <LoginButton type="submit">Login to your account</LoginButton>
          <SignUp>
            Don’t have an account?
            <Link to="/register">Sign Up</Link>
          </SignUp>
        </LoginForm>
      </LoginFormWrapper>
    </LoginContainer>
  );
}

export default Login;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
    font-weight: 300;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
  }
`;

export const Logo = styled.img`
  margin-top: 78px;

  @media (max-width: 768px) {
    margin-top: 80px;
  }

  @media (max-width: 400px) {
    margin-top: 48px;
  }
`;

export const LoginFormWrapper = styled.div`
  width: 400px;
  height: 373px;
  margin-top: 83px;
  padding: 32px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.formBackground};

  @media (max-width: 400px) {
    width: 327px;
    height: 365px;
  }
`;

export const LoginForm = styled.form`
  h1 {
    color: white;
  }
`;

export const LoginInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.inputBorder};
  outline: none;
  padding: 0px 0px 18px 16px;
  background: transparent;
  caret-color: ${({ theme }) => theme.colors.caretColor};
  color: #ffffff;

  :nth-child(2) {
    margin-top: 40px;
  }

  :nth-child(3) {
    margin-top: 24px;
  }

  ::placeholder {
    color: #ffffff80;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 40px;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.submitButton};
  color: #ffffff;
  cursor: pointer;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;

  :hover {
    background-color: #ffffff;
    color: #10141e;
  }
`;

export const SignUp = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 24px;
  color: #ffffff;

  a,
  a:visited {
    color: ${({ theme }) => theme.colors.submitButton};
    text-decoration: none;
    margin-left: 9px;
  }
`;
