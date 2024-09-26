import { createContext, useContext, useState } from "react";
// basically we have made the authUser like a global object using AuthContext, so it could we used by any component inside app
export const AuthContext = createContext();

//we have created a custom hook, useAuthContext that simplifies accessing the AuthContext. Instead of calling useContext(AuthContext) in each component, you can just call useAuthContext()
export const useAuthContext = () => {
    return useContext(AuthContext);
};

//the component below is wrapped around our application in main.jsx to give access of authUser and setAuthUser to every component in our app
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
