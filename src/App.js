import React,{lazy,Suspense,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu"
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const Instamart=lazy(()=>import("./components/Instamart"));

import { Provider } from "react-redux";
import store from "./utils/store";

const AppLayout = () =>{
  const[newUser,setNewUser]=useState({
    name: "Aman Fangeria",
    email: "amanfangeria980@gmail.com"
  })

  return (
    <>
    <Provider store={store}>
    <UserContext.Provider value={{
      user: newUser,
    }}>
      <Header />
      <Outlet/>
      <Footer />
    </UserContext.Provider>
    </Provider>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About />,
        children:[
          {
            path: "profile",
            element: <Profile name={"Aman"}/>
          },
        ]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// cons of tailwind
// - too many classes 
// - initially big learning curve for new developers
// 