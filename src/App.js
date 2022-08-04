import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'
import SingleProduct from './pages/SingleProduct'

function App() {
  return <BrowserRouter>
   
     <Routes>
     <Route path='/' element={<SharedLayout/>} >
     <Route path='/' element={<Home/>} />
     <Route path='about' element={<About/>} />
     <Route path='products' element={<Products/>} />
     <Route path='products/:productId' element={<SingleProduct/>}/>   
 </Route>
    
     <Route path='*' element={<Error/>} />

     </Routes>
  
  </BrowserRouter>;
}

export default App;
