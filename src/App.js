import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SelectProduct from './components/SelectProduct';
function App() {


  return (
   
   
    <Router>
      <Fragment>
      <SelectProduct/>
        {/* <Routes>
        <Route path="/"  element={<Product/>} />
               <Route path="/carts"  element={<Cart/>} />
        </Routes> */}
      </Fragment>
    </Router>)
    
}

export default App;