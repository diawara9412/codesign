
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Accueil from './Page/Accueil';
import EditClient from './Page/EditClient';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




function App() {

  return (
    <div>
    
    <Router>
     
      <Routes>
        <Route path="/"  element={<Accueil/>}></Route>
        <Route path="/EditClient/:id"  element={<EditClient />}></Route>
       
        

        {/* <Route path="/Detail/:id"  element={<Detail />}></Route>
        
        <Route path="/Add"  element={<Add />}></Route>
        <Route path="/Edit/:id"  element={<Edit />}></Route>
        <Route path="/Listauto"  element={<Listauto />}></Route>
        <Route path="/Addauto"  element={<Addauto />}></Route> */}
        

      </Routes>
      
    </Router>
    <ToastContainer />
    </div>


  );
}

export default App;
