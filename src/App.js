import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectProduct from './components/SelectProduct';
import Payment from './components/Payment'
function App() {


  return (
   
   
    <Router>
    <div>
      
      <Routes>
      <Route path="*" element={<SelectProduct />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>)
    
}

export default App;