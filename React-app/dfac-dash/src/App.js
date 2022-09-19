import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './page/footer.jsx';
import Home from './page/home.jsx'
import Header from './component/header.jsx';
import Branch from './page/branch.jsx';
import Base from './page/base.jsx';
import Dfac from './page/dfac.jsx';
import Cart from './page/cart.jsx';
import { BranchContext } from "./page/BranchContext";
import OrderComplete from './page/orderComplete.jsx';

//#01579b

function App() {
  const [cart, setCart] = useState([])
  const getterSetters ={
    cart,
    setCart
  }

  return (
    <>
    <BranchContext.Provider value={getterSetters}>
    <Header />
      <Routes style={{
      }}>
        <Route path="/" element={<Home />} />
        <Route path="/branch/:branchId" element={<Branch />} />
        <Route path="/base/:baseId" element={<Base />} />
        <Route path="/dfac/:locationId/:dfacID" element={<Dfac/>}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/order_complete' element={<OrderComplete />} />
        {/* <Route path="/dfac/menu" element={<Dfac />} /> */}
      </Routes>
      {/* <Footer/> */}
      </BranchContext.Provider>
    </>
  );
}

export default App;

// function App() {
//   const [detailsData, setDetailsData] = useState([])
//   const value = { detailsData, setDetailsData }
//   return (
//     <div className='router-wrap'>
//       <Router>
//         <MovieContext.Provider value={value}>
//           <Routes>
//             <Route path='/' element={<SearchBar />}></Route>
//             <Route path='/movies/:movieId' element={<SearchDetails data={detailsData} />}></Route>
//           </Routes>
//         </MovieContext.Provider>
//       </Router>
//     </div>
//   );
// }