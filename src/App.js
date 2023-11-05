import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Orbit } from '@uiball/loaders';
import { useState, useEffect } from 'react';
import Home from './component/home/Home';
import Landing from './component/LnadingPage/LandingPage';
import Admin from './component/admin/admin';
import Proyects from './component/admin/addproyecs';
import Contac from './component/conatc/Contac';
import About from './component/About/About';
import NavBarExample from './component/NavBar/NavBar';

import Detail from './component/Detail/Detail';
import { getProjec } from './redux/action';



function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  // Obtiene el token del LocalStorage (puedes utilizar tu lógica para obtener el token)
  const token = localStorage.getItem('token');

 

  

  useEffect(() => {
    dispatch(getProjec());
    setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate loading for 1 second
  }, []);

  return (
    <div className="App">
   
      {loading ? (
        <div
          style={{
            position: 'absolute',
            top:'150%',
            left: '50%',
            // transform: 'translate(-50%, -50%)'
          }}
        >
          <Orbit size={35} color="#231F20" />
        </div>
      ) : (
        
        <Routes>
          
          
          <Route path="/" element={<Landing />} />
          
          <Route
            path="/*"
            element={
              <>
              
                <NavBarExample />
                
               <Routes>
               <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/proyec" element={<Proyects />}/>
                <Route path="*" element={<Navigate replace to={'/'} />} />
               </Routes>

               <Contac/>
              </>
            }
          />
        </Routes>
      )}
     
    </div>
  );
}

export default App;
