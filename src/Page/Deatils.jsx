import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";

const Deatils = () => {

  const {user} = useContext(AuthContex)
  console.log(user);

  return (
    <div>
              <h1>{user.email}</h1>
    </div>
  );
};

export default Deatils;