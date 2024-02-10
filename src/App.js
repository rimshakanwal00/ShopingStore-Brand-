import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import ShopContextProvider from "./Components/Context";

function App() {
 
  return (
    <div>
    <ShopContextProvider>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/Cart" element={<Cart/>}/> 
      </Routes>
    </Router>
    </ShopContextProvider>    
    </div>
  );
}

export default App;