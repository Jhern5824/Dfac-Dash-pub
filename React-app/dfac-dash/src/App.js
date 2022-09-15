import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './page/home.jsx'
import Header from './component/header.jsx';
import Branch from './page/branch.jsx';
import Base from './page/base.jsx';
import Dfac from './page/dfac.jsx';
//import { BranchContext } from "./BranchContext";
//#01579b



function App() {
  return (
    
    //<BranchContext.Provider value={passContext}>
      <Routes style={{
      }}>
        <Route path="/" element={<Home />} />
        <Route path="/branch/:branchId" element={<Branch />} />
        <Route path="/base/:baseId" element={<Base />} />
        <Route path="/dfac/:locationId/:dfacID" element={<Dfac/>}/>
        {/* <Route path="/dfac/menu" element={<Dfac />} /> */}
      </Routes>

       //</BranchContext.Provider>
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