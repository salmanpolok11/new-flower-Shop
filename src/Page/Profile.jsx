import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import img6 from "../assets/BAckground Image.png";
import img7 from "../assets/30234.png";

const Profile = () => {
  const { user } = useContext(AuthContex);
  console.log(user);

  return (
    <div className=" text-center text-black h-screen">
      <div>
        <img className=" relative h-80 w-full" src={img6} alt="" />
      </div>
 <section className=" w-[400px] mx-auto ">
              
  
 <div className="   ">
      <div className=" mx-auto absolute top-40 left-6 md:left-32 bg-red-200 rounded-lg shadow-3xl border-white p-8 space-y-4 ">
        <img className=" w-60 mx-auto rounded-full text-center" src={ user.photoURL  ?   user.photoURL : img7    } alt="" />
        <div className="  justify-center items-center gap-5 ">
          <h1 className=" font-semibold text-4xl">{user.displayName}</h1>
          <h2 className=" text-2xl">
             <span className=" font-bold text-center">User Id:</span> {user.metadata.createdAt}</h2>
          <h2 className=" text-2xl">{user.email}</h2>
      
        </div>
        <button className="btn btn-outline btn-error w-full">
          Add to cart
        </button>
      </div>
    </div>

 </section>

    </div>
  );
};

export default Profile;
