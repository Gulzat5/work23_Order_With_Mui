import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { USERS_ROLE } from "../constans";
import { useDispatch } from "react-redux";
import { signUpRequest } from "../store/auth/AuthThunk";

export const SignUp = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [confirm, setConfirm] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    const data = {
      name,
      email,
      password,

      role: USERS_ROLE.USER,
    };
    e.preventDefault();

    dispatch(signUpRequest(data))
      .unwrap()
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  const OnchangeConfirmHandler = (e) => {
    setConfirm(e.target.value);
  };

  const OnchangeNameHandler = (e) => {
    setName(e.target.value);
  };
  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <FormStyled onSubmit={submitHandler}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: "100%" }}
            value={email}
            id="outlined-bacic"
            label="email"
            variant="outlined"
            onChange={onChangeEmailHandler}
          />
          <TextField
            sx={{ width: "100%" }}
            value={password}
            id="outlined-bacic"
            label="Password"
            variant="outlined"
            onChange={onChangePasswordHandler}
          />
          <TextField
            sx={{ width: "100%" }}
            value={name}
            id="outlined-bacic"
            label="name"
            variant="outlined"
            onChange={OnchangeNameHandler}
          />
          <TextField
            sx={{ width: "100%" }}
            value={confirm}
            id="outlined-bacic"
            label="confirm"
            variant="outlined"
            onChange={OnchangeConfirmHandler}
          />
          <Button variant="contained" type="submit">
            Sign up
          </Button>
          <div>
            You have an account?
            <Link to="signin">sign in</Link>
          </div>
        </Box>
      </FormStyled>
    </div>
  );
};

const FormStyled = styled("form")`
  margin: 0px;
  width: 500px;
  height: 450px;
  background-color: aliceblue;
  margin-top: 200px;
  padding: 30px;
  border-radius: 15px;
  margin-left: 35%;
`;
