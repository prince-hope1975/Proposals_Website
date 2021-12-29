import React, { useContext, useState } from "react";

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
const [propsObj, setPropsObj] = useState(null);
return (
<AppContext.Provider
value={{
propsObj,
setPropsObj,
}} 
> 
{children}
</AppContext.Provider> 
 ); 
};
export const useGlobalContext = () => useContext(AppContext);
