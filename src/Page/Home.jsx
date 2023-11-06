import { useEffect, useState } from "react";
import img from "../assets/Rectangle 25.png";
import img1 from "../assets/Rectangle 26.png";
import img2 from "../assets/Rectangle 3.png";
import img3 from "../assets/Rectangle 4.png";
import img4 from "../assets/Rectangle 5.png";
import img5 from "../assets/Rectangle 7.png";
import Card from "../Components/Card";

const Home = () => {
  const [flower, setFlower] = useState([]);
  useEffect(() => {
    fetch("/public/Hflower.json")
      .then((res) => res.json())
      .then((data) => setFlower(data));
  }, []);

  return (
    <div className="   text-black md:mt-16   ">
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
        <div className=" h-full" >
          <h1 className=" text-5xl font-semibold text-center md:mt-20 mb-5">Best selers</h1>
          <div className=" md:flex justify-center">
            {flower.map((flow) => (
              <Card key={flower.id} flow={flow}></Card>
            ))}
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
