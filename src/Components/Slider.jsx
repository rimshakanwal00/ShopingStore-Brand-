import { useState,useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const Slider=()=>{
    const slideimg=[
        "./Assets/Photo 2.jpg",
        "./Assets/Photo 3.jpg",
        "./Assets/Photo 1.jpg",
        "./Assets/Photo 4.jpg"
    ]
    
    const[arrowclick,setarrowclick]= useState(0)

    const auto = () => {
        setarrowclick((prev) => (prev === slideimg.length - 1 ? 0 : prev + 1));
      };
    
      useEffect(() => {
        const intervalId = setInterval(auto, 3000);

        return () => clearInterval(intervalId);
      }, []);

      const Rightclick=()=>{ 
        let result;
        if(arrowclick<slideimg.length-1){
            result=arrowclick+1;
            
        }
        else{
           result=0;
           
        }
        
        setarrowclick(result); 
    }
    const leftclick=()=>{ 
        let result;
        if(arrowclick===0){
            result=slideimg.length-1;
            
        }
        else{
           result=arrowclick-1;
           
        }
       
        setarrowclick(result); 
    }
    const backgr={
        backgroundImage: `url("${slideimg[arrowclick]}")`
    }
  
     return(
          
         <div style={backgr} className=" w-[82rem] h-[35rem] bg-no-repeat bg-center bg-cover ml-24 mt-5 " >
            <div className="text-blue-400 text-6xl absolute top-80 cursor-pointer" onClick={leftclick}><FaAngleLeft /></div>
            <div className="text-blue-400 text-6xl absolute top-80 right-28 cursor-pointer" onClick={Rightclick}><FaAngleRight /></div>
         </div>
       
       
     )
}
export default Slider;