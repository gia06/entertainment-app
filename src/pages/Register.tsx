import styled from "styled-components";
import logo from "/assets/logo.svg";
import {
  LoginFormWrapper,
  LoginButton,
  LoginContainer,
  Logo,
  SignUp,
} from "./Login";
import { LoginForm } from "./Login";
import { Link } from "react-router-dom";

function Register() {
  return (
    <RegisterContainer>
      <Logo src={logo} />
      <RegisterFormWrapper>
        <RegisterForm onSubmit={(e) => e.preventDefault()}>
          <h1>Sign Up</h1>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat password" />
          <RegisterButton type="submit">Create an account</RegisterButton>
          <Login>
            Already have an account?<Link to="/login">Login</Link>
          </Login>
        </RegisterForm>
      </RegisterFormWrapper>
    </RegisterContainer>
  );
}

export default Register;

const RegisterContainer = styled(LoginContainer)``;

const RegisterFormWrapper = styled(LoginFormWrapper)`
  height: 418px;

  @media (max-width: 400px) {
    height: 420px;
  }
`;

const RegisterForm = styled(LoginForm)`
  input {
    :nth-child(3),
    :nth-child(4) {
      margin-top: 24px;
    }
  }
`;

const RegisterButton = styled(LoginButton)`
  @media (min-width: 400px) {
    margin-top: 24px;
  }
`;

const Login = styled(SignUp)``;
