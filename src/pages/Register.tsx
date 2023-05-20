import styled from "styled-components";
import logo from "/assets/logo.svg";
import {
  LoginFormWrapper,
  LoginButton,
  LoginContainer,
  Logo,
  SignUp,
  LoginInput,
} from "./Login";
import { LoginForm } from "./Login";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputProps } from "../types/styles";
import { useCallback, useEffect, useState } from "react";

interface Inputs {
  email: string;
  password: string;
  repeatedPassword: string;
}

type FieldName = "email" | "password" | "repeatedPassword";

function Register() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const { onChange: originalOnChange, ...restRegisterProps } = register(
    "email",
    {
      required: true,
      minLength: 5,
      maxLength: 50,
    }
  );

  const [error, setError] = useState({
    email: false,
    password: false,
    repeatedPassword: false,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: FieldName
  ): void => {
    originalOnChange(event);
    // const fieldValue = event.target.value;
    const fieldValue = watch(fieldName);
    console.log(`${fieldName} value: `, fieldValue);

    const newErr = {
      ...error,
    };

    fieldValue.length < 1
      ? (newErr[fieldName] = true)
      : (newErr[fieldName] = false);

    setError(newErr);
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement>,
    fieldName: FieldName
  ): void => {
    const fieldValue = event.target.value;
    // const fieldValue = watch(fieldName);
    console.log("value: ", fieldValue);

    const newErr = {
      ...error,
    };

    fieldValue.length < 1
      ? (newErr[fieldName] = true)
      : (newErr[fieldName] = false);

    setError(newErr);
  };

  return (
    <RegisterContainer>
      <Logo src={logo} />

      <RegisterFormWrapper>
        <RegisterForm onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up</h1>
          <RegisterInputContainer>
            <RegisterInput
              type="email"
              placeholder="Email address"
              {...restRegisterProps}
              isError={{ hookForm: errors.email, custom: error.email }}
              onBlur={(e) => handleBlur(e, "email")}
              onChange={(e) => handleChange(e, "email")}
              // aria-invalid={errors.email ? "true" : "false"}
            />

            {error.email || errors.email ? <Msg>Error</Msg> : null}
          </RegisterInputContainer>

          <RegisterInputContainer>
            <RegisterInput
              type="password"
              placeholder="Password"
              {...register("password", { required: true, maxLength: 50 })}
              isError={{ hookForm: errors.password, custom: error.password }}
              onBlur={(e) => handleBlur(e, "password")}
              onChange={(e) => handleChange(e, "password")}
            />

            {error.password || errors.password ? <Msg>Error</Msg> : null}
          </RegisterInputContainer>

          <RegisterInputContainer>
            <RegisterInput
              type="password"
              placeholder="Repeat password"
              {...register("repeatedPassword", {
                required: true,
                maxLength: 50,
              })}
              isError={{
                hookForm: errors.repeatedPassword,
                custom: error.repeatedPassword,
              }}
              onBlur={(e) => handleBlur(e, "repeatedPassword")}
              onChange={(e) => handleChange(e, "repeatedPassword")}
            />

            {error.repeatedPassword || errors.repeatedPassword ? (
              <Msg>Error</Msg>
            ) : null}
          </RegisterInputContainer>
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

//  TODO: change name
const Msg = styled.span`
  color: red;
  width: 20%;
  border: none;
  border-bottom: 1px solid red;
  height: 100%;
  padding: 0px 17px 18px 0px;
  text-align: right;

  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
  z-index: 1;
`;

const RegisterContainer = styled(LoginContainer)``;

const RegisterFormWrapper = styled(LoginFormWrapper)`
  height: 418px;
  position: relative;

  @media (max-width: 400px) {
    height: 420px;
  }
`;

const RegisterForm = styled(LoginForm)``;

const RegisterInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  :nth-child(2) {
    margin-top: 40px;
  }

  /* :nth-child(3) {
    margin-top: 24px;
  } */
`;

const RegisterInput = styled(LoginInput)<InputProps>`
  border-color: ${({ isError }) =>
    isError.hookForm || isError.custom ? "red" : null};

  :focus {
    border-color: ${({ isError }) =>
      isError.hookForm || isError.custom ? "red" : "white"};
  }
  :-webkit-autofill {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white;
  }

  :nth-child(3),
  :nth-child(4) {
    margin-top: 24px;
  }
`;

const RegisterButton = styled(LoginButton)`
  @media (min-width: 400px) {
    margin-top: 24px;
  }
`;

const Login = styled(SignUp)``;
