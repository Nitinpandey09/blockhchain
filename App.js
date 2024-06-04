import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Coins from "./Components/Coins";
import Exchange from "./Components/Exchange";
import CoinsDetails from "./Components/CoinsDetails";
import Home from "./Components/Home";


function App() {
  return(
   <Router>
    <Header />
      <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/Coins" element={<Coins />}/>
       <Route path="/Exchange" element={<Exchange />}/>
       <Route path="/CoinsDetails" element={<CoinsDetails />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
