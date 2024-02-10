 import { useContext } from "react";
import { ShopContext } from "../Context";
 
 const Cartcom=(props)=>{
    const {cartvalue,Addtocart,Removetocart}=useContext(ShopContext);
    return(
        <div className="w-[30rem] h-40 shadow-xl shadow-slate-400 flex  rounded-lg p-4">
        <img src={props.Image} alt="" className="w-40"/>
        <div className=" text-center mx-8 my-3">
            
        <h1 className="text-xl font-bold  ">{props.Name}</h1>
        <h1 className="pt-4">Price: {props.Price}</h1>
        <div className="flex mt-4  ">
            <h1 className="border-2 border-gray-300 px-2 cursor-pointer " onClick={()=>Addtocart(props.id)}>+</h1>
            <h2 className="border-2  border-gray-300 px-2 rounded">{cartvalue[props.id]}</h2>
            <h1 className="border-2  border-gray-300 px-2 cursor-pointer" onClick={()=>Removetocart(props.id)}>-</h1>
        </div>
        </div>
        </div>
    )
}
export default Cartcom;