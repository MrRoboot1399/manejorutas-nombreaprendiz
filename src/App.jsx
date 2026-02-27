import Navbar from './Navbar'
import Dashboard from './Dashboard'
import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Portafolio from './Portafolio'
import Soporte from './Soporte'
import Servicios from './Servicios'
import ProyectoDetalle from './ProyectoDetalle'
function App() {

  return (
    
      <div>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Dashboard></Dashboard>}> </Route>
             <Route path="/dash" element={<Dashboard></Dashboard>}></Route>
            <Route path="/servi" element={<Servicios></Servicios>}></Route>
            <Route path="/port/:id" element={<Portafolio></Portafolio>}></Route>
            <Route path="/sopor/:name" element={<Soporte></Soporte>}></Route>
            <Route path="/proyecto/:codigo" element={<ProyectoDetalle></ProyectoDetalle>}></Route>
          </Routes>
        </BrowserRouter>  
      </div>
       
     
  )
}

export default App
