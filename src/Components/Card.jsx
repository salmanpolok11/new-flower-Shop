import img from "../assets/Rectangle 58.png";

const Card = ({ flowers }) => {
  const { id, name, image, price } = flowers;

  return (
    <div className=" md:flex justify-center gap-4 p-5  ">
      <div className=" rounded-md shadow-lg border-white p-8 space-y-4 ">
        <img className=" w-full text-center" src={image} alt="" />
        <div className=" flex justify-center items-center gap-5 ">
          <h1 className=" font-semibold text-3xl">{name}</h1>
          <h2 className=" text-2xl">{price}</h2>
        </div>
        <button className="btn btn-outline btn-error w-full">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
