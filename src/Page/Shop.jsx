import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";


const Shop = () => {

  const authInfo = useContext(AuthContex)
  console.log(authInfo);
  return (
    <div>
       <h1>This Shope: {authInfo.name}</h1>
    </div>
  );
};

export default Shop;