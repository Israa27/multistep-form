import './App.css';
import React, { Suspense,useEffect } from 'react';
import routes from './routes';
import { Route, Routes, useNavigate } from 'react-router-dom';


function App() {

  const navigate = useNavigate();
  useEffect(() => {
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      navigate('/')
    }
  }, []);

  return<div className="App desktop:w-1440 flex justify-center mobile:w-375">
   <Suspense >
      <Routes >
         {routes.map((name,key)=>{return(
           <Route 
           key={key}
           exact={name.exact}
           path={name.path}
           element={<name.element/>}
           
           />
           
         )})}
      </Routes>
      </Suspense>
      </div>
}

export default App;