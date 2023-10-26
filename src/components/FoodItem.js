import { IMG_CDN_URL } from "../constants";
const FoodItem = ({name,description,imageId
  ,price}) => {
    return (
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img src={IMG_CDN_URL+imageId} alt="card1" />
        <h2 className="text-xl">{name}</h2>
        <h6 className="text-md">{description}</h6>
        <h2 className="text-lg">Rs. {price/100}</h2>
      </div>
    );
  };

  export default FoodItem;
