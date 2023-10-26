import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "./cartSlice"

const store=configureStore({
    reducer: {
        cart: cartSlice,
    }
});

export default store;





// Steps 
/* 
*Create Store:
    -configureStore() - RTK
*Provided my store to app
    -<Provider store={store}> - import from react-redux
*Created a Slice
    -RTK - createSlice({
        name: "",
        initialState: 0,
        reducers:{
            addItem: (state,action)=>{state=action.payload / modify our state}
        }
    })
    export {addItem}=cartSlice.actions;
    export default cartSlice.reducer;
*Put that slice into store
    -{
        reducer: {
            cart: cartSlice
            user: userSlice
        }
    }
*Reading from the slice in our cart items(subscribing to our store)
    - useSelector () imported from react-redux
    -  const cartItems=useSelector(store=>store.cart.items)

*Dispatching an Event
In RestaurantMenu
    (importing action from our slice)
    -import { addItem } from "../utils/cartSlice"; 
    (importing useDispatch method from react-redux to use dispatch)
    -import { useDispatch } from "react-redux";
    -const dipatch=useDispatch();
    -On addItem button click, we create a function named handleAddItem
    -Here's the body of the logic:
        const handleAddItem=()=>{
        [dispatch(action(payload))]
        dispatch(addItem("Grapes"));  
        }
    -But, the data will not be saved to our store, when we will refresh, it will again be back to its initialValue
    
*/