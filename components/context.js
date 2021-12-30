import React, { useContext, useState } from "react";

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
const [propsObj, setPropsObj] = useState(null);
const [isModalOpen, setModalOpen] = useState(false)
const [isConnected, setConnected] = useState(false)
return (
<AppContext.Provider
value={{
propsObj,
setPropsObj,
isModalOpen, 
setModalOpen,
isConnected,
setConnected
}} 
> 
{children}
</AppContext.Provider> 
 ); 
};
export const useGlobalContext = () => useContext(AppContext);
