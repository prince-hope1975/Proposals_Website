import React, { useContext, useState } from "react";

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
const [state, setState] = useState(null);
return (
<AppContext.Provider
value={{
    
state,
setState, 
}} 
> 
{children}
</AppContext.Provider> 
 ); 
};
export const useGlobalContext = () => useContext(AppContext);
