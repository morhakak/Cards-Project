import React, { createContext, useContext } from "react";

//create context
const DataContext = createContext();

//create provider
export default function UserDataProvider({ children }) {
  return (
    <>
      <userDataContext.Provider>{children}</userDataContext.Provider>
    </>
  );
}

//create hook to use the context and handle error
export const useUserData = () => {
  const context = useContext(userDataContext);
  if (!context)
    throw new Error("useUserData must be used within a ContextProvider");
  return context;
};
