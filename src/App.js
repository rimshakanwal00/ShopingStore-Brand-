import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";

function App() {
 
  return (
    <div>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/Cart" element={<Cart/>}/> 
      </Routes>
    </Router>    
    </div>
  );
}

export default App;