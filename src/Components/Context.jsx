import { createContext } from "react";
import Data from "./Products/Data";
import { useState } from "react";

export const ShopContext=createContext(null);
const defaultitem=()=>{
    const cart={};
    for(let i=1; i<Data.length;i++){
        cart[i]=0;
    }
    return cart;
}

const ShopContextProvider=(props)=>{
  const [cartvalue, setcartvalue]=useState(defaultitem());

    function Addtocart(itemid){
       setcartvalue((prev)=>(
        {...prev,[itemid]: prev[itemid]+1}
        )
        )
    }
    function Removetocart(itemid){
      setcartvalue((prev)=>(
       {...prev,[itemid]: prev[itemid]-1}
       )
       )
   }
 
    const contextval={cartvalue,Addtocart,Removetocart}
return  <ShopContext.Provider value={contextval}> {props.children}</ShopContext.Provider>
}
export default ShopContextProvider;