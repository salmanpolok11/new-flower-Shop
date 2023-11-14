import { useContext, useEffect, useState } from "react";
import img from "../assets/Rectangle 25.png";
import img1 from "../assets/Rectangle 26.png";
import img2 from "../assets/Rectangle 3.png";
import img3 from "../assets/Rectangle 4.png";
import img4 from "../assets/Rectangle 5.png";
import img5 from "../assets/Rectangle 7.png";
import img6 from "../assets/30234.png";

import Card from "../Components/Card";
import Marquee from "react-fast-marquee";
import { AuthContex } from "../Provider/AuthProvider";

const Home = () => {
  const [flower, setFlower] = useState([]);
  useEffect(() => {
    fetch("/flower.json")
      .then((res) => res.json())
      .then((data) => setFlower(data));
  }, []);

  const {user} = useContext(AuthContex)

  return (
  <div className=" md:h-[2672px]	 bg-[#F2F2F2]  text-black    ">
  <Marquee className=" text-2xl text-red-600" speed='120'>
 {
    user &&
     <div className=" flex items-center gap-4">
          <img className="mt-2 w-12 rounded-full" src={ user.photoURL  ?   user.photoURL : img6    } alt="" />
         <h1>{user.displayName}</h1>
     </div>
 }
</Marquee>
      <section className=" md:flex justify-center items-center p-4">
        <div className=" space-y-4">
          <h1 className=" md:w-[557px] text-6xl ">
            Flowers, 🌻 <br /> what the world <br />
            needs
          </h1>
          <p>Browse between hounders of flowers</p>
          <button className=" bg-[#FF8F52] w-[103px]  py-3 rounded-sm ">
            Browse
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4  ">
          <img className="shadow-lg rounded-lg" src={img} alt="" />
          <img className="shadow-lg rounded-lg" src={img1} alt="" />
          <img className="shadow-lg rounded-lg" src={img2} alt="" />
          <img className="shadow-lg rounded-lg" src={img3} alt="" />
          <img className="shadow-lg rounded-lg" src={img4} alt="" />
          <img className="shadow-lg rounded-lg" src={img5} alt="" />
        </div>
      </section>
 
     

      <section>
        <div className=" h-full">
          <h1 className=" text-5xl font-semibold text-center md:mt-20 mb-5">
            Best selers
          </h1>
          <div className=" md:max-w-[1200px] mx-auto grid md:grid-cols-4">
              { 
                 flower.map( flowers => <Card key={flowers.id}  flowers={flowers}> </Card>)
               }
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className=" text-center text-6xl">
            <h1>Hellow </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
