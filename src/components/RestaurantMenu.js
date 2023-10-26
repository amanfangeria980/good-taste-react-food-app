import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useMenu from "../utils/useMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menu=useMenu(resId);
  // console.log(menu)

  const dispatch=useDispatch(); 

  const handleAddFoodItem=(item)=>{
    dispatch(addItem(item));  
  }

  return !menu ? (
    <Shimmer />
  ) : (
    <div className="flex m-5">
      <div>
        <h1 className="text-xl font-bold">Restaurant id : {menu?.cards[0]?.card?.card?.info?.id} </h1>
        <h2 className="text-xl font-bold">{menu?.cards[0]?.card?.card?.info?.name}</h2>
        <img className="w-96"
          src={
            IMG_CDN_URL + menu?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt="restaurantImage"
        />
        <h3 className="text-lg">{menu?.cards[0]?.card?.card?.info?.areaName+", "+menu?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{menu?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>


      <div className="m-5">
        <h1 className="font-bold text-2xl">Menu</h1>
        <ul>
          {menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (item) => (
              <li className="mb-1" key={item?.card?.info?.id}>{item?.card?.info?.name} - <button className="p-1 bg-green-100 rounded-md" onClick={()=>handleAddFoodItem(item?.card?.info)}>Add</button></li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
