import React, { useContext } from "react";
import UserContext from "../context/userContext";
const MovieRow = () => {
  const userContext = useContext(UserContext);
  console.log("userContext", userContext);
  return (
    <>
      <div>
        Movie Row -{" "}
        {userContext.currentUser
          ? userContext.currentUser.name
          : "No User Found"}
      </div>
    </>
  );
};
export default MovieRow;
