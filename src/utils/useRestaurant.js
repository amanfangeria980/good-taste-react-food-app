import { useEffect,useState } from "react";

const useRestaurant = (setFilteredRestaurants) => {
    const [allRestaurants, setAllRestaurants] = useState(null);
    useEffect(() => {
      getRestaurants();
    }, []);
    
    async function getRestaurants() {
        const data = await fetch(
          "https://www.jsonkeeper.com/b/UZP4"
        );
        const json = await data.json();
        // console.log(json);
        setAllRestaurants(
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurants(
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      }
    return allRestaurants;
}

export default useRestaurant;