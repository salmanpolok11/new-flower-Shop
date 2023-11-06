import PropTypes from 'prop-types';
const Card = ({flow}) => {
  const {name , image , price} = flow;
  return (
    <div className=" p-3 ">
              <div className=" rounded-md shadow-lg border-white p-8 space-y-4 ">
              <img className=" text-center" src={image} alt="" />
                <div className=" flex justify-center items-center gap-5 "> 
                <h1 className=" font-semibold text-3xl">{name}</h1>
                 <h2 className=" text-2xl">{price}</h2>
                </div>
                <button className="btn btn-outline btn-error w-full">Add to cart</button>
              </div>
    </div>
  );
};

Card.propTypes = {
    flow: PropTypes.node
}

export default Card;