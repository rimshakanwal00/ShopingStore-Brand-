import { Link } from "react-router-dom";
import { ShopContext } from "../Context";
import { useContext } from "react";

const Card=(props)=>{
     const {Addtocart}=useContext(ShopContext);

    return(
        <Link to="" className="flex flex-col items-center">
            <img src={props.Image} alt="" className="max-w-64 h-36"/>
            <div className="text-center ">
            <h1>{props.Name}</h1>
            <h1 className="mb-3">{props.Price}</h1>
            <Link  className="bg-green-700 p-1 rounded-xl  text-sm" onClick={()=>Addtocart(props.id)} >Add to Cart</Link>
            </div>
            
        </Link>
    )
}
export default Card;