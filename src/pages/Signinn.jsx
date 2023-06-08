import { Box, Button, StyledEngineProvider, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { siginRequest } from "../store/auth/AuthThunk";
import { USERS_ROLE } from "../constans";
import styled from "styled-components";

export const Signinn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      role: USERS_ROLE.USER,
    };
    dispatch(siginRequest(data));
  };
  return (
    <div>
      <FormStyled onSubmit={submitHandler}>
        <Box>
          <TextField
            id="outlined-bacic"
            label="Email "
            variant="outlined"
            value={email}
            onChange={onChangeEmailHandler}
          />
          <TextField
            id="outlined-bacic"
            label="Password "
            variant="outlined"
            value={password}
            onChange={onChangePasswordHandler}
          />
          <Button
            variant="contained"
            color="success"
            sx={{
              width: "100%",
            }}
            type="submit"
          >
            Sign in{" "}
          </Button>
          <div>
            Don,t have an account?
            <Link to="/signup">sing Up</Link>
          </div>
        </Box>
      </FormStyled>
    </div>
  );
};

const FormStyled = styled("form")`
  margin: 0 auto;
  width: 500px;
  height: 290px;
  background-color: white;
  margin-top: 200px;
  padding: 30px;
  border-radius: 15px;
  border: 4px solid #5a1f08;
`;
