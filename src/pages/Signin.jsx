// import { Button, TextField } from "@mui/material";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, Outlet } from "react-router-dom";
// import { siginRequest } from "../store/auth/AuthThunk";
// import { USERS_ROLE } from "../constans";

// export const Signin = () => {
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const dispatch = useDispatch();

//   const onChangePasswordHandler = (e) => {
//     setPassword(e.target.value);
//   };

//   const onChangeEmailHandler = (e) => {
//     setEmail(e.target.value);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const data = {
//       email,
//       password,
//       role: USERS_ROLE.USER,
//     };
//     dispatch(siginRequest(data));
//   };
//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <>
//           <TextField
//             id="outlined-bacic"
//             label="Email "
//             variant="outlined"
//             value={email}
//             onChange={onChangeEmailHandler}
//           />
//           <TextField
//             id="outlined-bacic"
//             label="Password "
//             variant="outlined"
//             value={password}
//             onChange={onChangePasswordHandler}
//           />
//         </>
//         <Link to="/signin">Create an account</Link>
//         <Button
//           sx={{
//             width: "100%",
//           }}
//           type="submit"
//         >
//           Sign in{" "}
//         </Button>
//       </form>
//       <Link to="/signup">Crate an accpunt </Link>
//       <Outlet />
//     </div>
//   );
// };

// const styleTextFiled=styled(TextField)(()=>({
//   // '&.MuiTextFiled-root'
// }))
