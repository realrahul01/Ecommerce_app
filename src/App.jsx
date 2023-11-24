import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './components/Header/Header';
import {Routes,Route} from 'react-router-dom'
import Product from './pages/Product';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import ThemeProvider from './contexts/ThemeContext';
import Cart from './pages/Cart';
import Login from './pages/Login';
import AuthProvider from './contexts/AuthContext';
import Footer from './components/Footer/Footer';
import SuccessMessage from './components/ContactDetails/SuccessMessage';


function App() {
  return (
    <>
    <AuthProvider>
    <ThemeProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/product'>
          <Route index element={<Product/>}/>
          <Route path=":id" element={<ProductDetails/>}/>
        </Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/success-message" element={<SuccessMessage />} />
      </Routes>
      <Footer/>
    </ThemeProvider>
    </AuthProvider>
    </>
  )
}
export default App
