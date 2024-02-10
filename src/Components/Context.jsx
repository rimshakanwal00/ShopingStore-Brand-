import { createContext } from "react";
import Data from "./Products/Data";
import { useState } from "react";

export const ShopContext=createContext(null);
const defaultitem=()=>{
    const cart={};
    for(let i=1; i<=Data.length;i++){
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

  const SubTotal=()=>{
    let Totalamount=0;
    for (let item in cartvalue){
      if(cartvalue[item]>0){
        let info=Data.find((pro)=>pro.id=== Number(item)) ;
         Totalamount +=info.price* cartvalue[item] 
      }

    }
    
    return Totalamount;
  }
 

 
    const contextval={cartvalue,Addtocart,Removetocart,SubTotal}
return  <ShopContext.Provider value={contextval}> {props.children}</ShopContext.Provider>
}
export default ShopContextProvider;