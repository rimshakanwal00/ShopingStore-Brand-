import  Cartcom  from "./Cartcom";
import Data from "../Products/Data";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context";
import { useContext } from "react";
 const ShoppingCarts=()=>{
  const  {cartvalue,SubTotal}=useContext(ShopContext);
  let Totalamount=SubTotal();
   return (
    <div className="h-screen">
    <h1 className="font-serif text-4xl text-center pt-8 mb-5"> Cart Items</h1>
    <div className="grid grid-flow-row justify-center gap-9">
    {Data.map((pro,index)=>{
          if(cartvalue[pro.id]!==0){
            return <Cartcom Image={pro.img} Name={pro.ProductName} Price={pro.price} key={index} id={pro.id}/>
          }
        })}
    </div>
     <h1 className="text-center mt-5 font-bold text-lg"> SubTotal: {Totalamount} </h1>   
      <div className="flex justify-center mt-4 h-28">
        <Link to="/" className="bg-blue-300  mr-2 p-4 h-14 rounded-lg hover:bg-blue-400">Continue Shopping</Link>
        <Link to="/" className= " bg-slate-100 hover:bg-blue-300  p-4 h-14 rounded-lg shadow-lg shadow-slate-400 border-2">Checkout</Link>
      </div>  
    </div>
   )
}
export default ShoppingCarts;