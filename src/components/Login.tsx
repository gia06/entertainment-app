import styled from "styled-components";
import logo from "/assets/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <LoginContainer>
      <Logo src={logo} />
      <FormContainer>
        <Form>
          <h1>Login</h1>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <LoginButton>Login to your account</LoginButton>
          <SignUp>
            Don’t have an account?
            <Link to="/register">Sign Up</Link>
          </SignUp>
        </Form>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
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

const Logo = styled.img`
  margin-top: 78px;

  @media (max-width: 768px) {
    margin-top: 80px;
  }

  @media (max-width: 400px) {
    margin-top: 48px;
  }
`;

const FormContainer = styled.form`
  width: 400px;
  height: 373px;
  margin-top: 83px;
  padding: 32px;
  border-radius: 20px;
  background: ${({ theme }) => theme.formBackground};

  @media (max-width: 768px) {
  }

  @media (max-width: 400px) {
    width: 327px;
    height: 365px;
  }
`;

const Form = styled.div`
  /* margin: 32px; */

  h1 {
    color: white;
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.inputBorder};
    outline: none;
    padding: 0px 0px 18px 16px;
    background: ${({ theme }) => theme.formBackground};
    caret-color: ${({ theme }) => theme.caretColor};

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
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 40px;
  border-radius: 6px;
  background: ${({ theme }) => theme.submitButton};
  color: #ffffff;
  padding: 14px 0px 15px 0px;

  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
`;

const SignUp = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 24px;
  color: #ffffff;

  a,
  a:visited {
    color: ${({ theme }) => theme.submitButton};
    text-decoration: none;
    margin-left: 9px;
  }
`;
