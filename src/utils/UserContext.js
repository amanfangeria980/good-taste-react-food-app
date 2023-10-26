import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "Dummy Email",
  },
});

UserContext.displayName="UserContext";

export default UserContext;
