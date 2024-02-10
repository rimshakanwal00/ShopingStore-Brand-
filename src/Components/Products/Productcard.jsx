import Card from "./Card";
import Data from "./Data";
import Filter from "./Filter";

const ProductCard=()=>{
    return(
      <div className="mt-5 max-w-100  h-screen mb-6">
      <h1 className="text-center pt-10 font-extrabold text-[2rem] ">Shop Store Name</h1>
      <Filter/>
      <div className="grid lg:grid-cols-3 pt-10 gap-8">
      {Data.map((pro, index) => (
    <Card Image={pro.img} Name={pro.ProductName} Price={pro.price} key={index} id={pro.id}  />
        ))}
       
      </div>
      </div>
    )
}
export default ProductCard;