
import React, { createContext, ReactNode, useState } from 'react';

type vegContextType = {
    veg: boolean,
    setveg: React.Dispatch<React.SetStateAction<boolean>>;
}

const myVegContext: vegContextType = {
    veg:false,
    setveg: ()=>{},
};

export const useVeg = createContext<vegContextType>(myVegContext);



export const VegSwitchContextProvider = ({children}:{children:ReactNode}) => {
    const[veg,setveg] = useState<boolean>(false);

  return (
   <useVeg.Provider value={{veg,setveg}}>
    {children}
   </useVeg.Provider>
  );
};

