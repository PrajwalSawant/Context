import React, { useContext } from "react";
import UserContext from "../context/userContext";
const Login = () => {
  const userContext = useContext(UserContext);
  return (
    <>
      <button onClick={() => userContext.onLoggedIn("userID")}>Login</button>
    </>
  );
};
export default Login;
