import {Button, Container,Nav,Navbar} from 'react-bootstrap';
import {NavLink, useNavigate} from 'react-router-dom';
import styles from './Header.module.css'
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
  const counter = useSelector((state)=>state.counter.carts)
  // console.log(counter)
  const{isDark,changeThemeHandler} = useContext(ThemeContext)
  // console.log(isDark)

const navigate = useNavigate()
const {isUserLogin,LogoutHandler} = useContext(AuthContext)
// console.log(isUserLogin)

const themeChangeHandler = ()=>{
  changeThemeHandler()
}

const clickHandler=()=>{
  console.log('hello')
  LogoutHandler()
  navigate('/product')
}

  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container style={{fontWeight:600,color:'#fff'}} >
          <Navbar.Brand style={{fontStyle:"italic",fontWeight:800,color:'#fff'}} href="#home">Online-Shopping</Navbar.Brand>
          <Nav className="space-between">
            <Nav.Link>
                <NavLink className={({isActive}) => isActive? styles.activeLink : styles.NavLink_style} to="/">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
                <NavLink className={({isActive}) => isActive? styles.activeLink : styles.NavLink_style} to="/product">Product</NavLink>
            </Nav.Link>
            <Nav.Link>
                <NavLink className={({isActive}) => isActive? styles.activeLink : styles.NavLink_style} to="/about">About</NavLink>
            </Nav.Link>
            <Nav.Link>
                <NavLink className={({isActive}) => isActive? styles.activeLink : styles.NavLink_style} to="/contact">Contact</NavLink>
            </Nav.Link>
          </Nav>
            <Nav.Link>
              {!isUserLogin && (
                <>
                <NavLink to='/login'>
                  <Button className='mx-2 btn-outline-light'> <i className="bi bi-box-arrow-in-right"></i> Login</Button>
                </NavLink>
                <NavLink to="/login">
                  <Button className='mx-2 btn-outline-light'> <i className="bi bi-person-plus-fill"></i> Register</Button>
                </NavLink>
                </>
              )}
              {isUserLogin && (
                <>
                  <Button onClick={clickHandler} className='btn-outline-light'> <i className="bi bi-box-arrow-left"></i> Logout</Button>
                  <NavLink to="/cart">
                    <Button className='mx-2 btn-outline-light'> <i className="bi bi-cart3"></i> cart ({counter.length})</Button>
                  </NavLink>
                </>
              )}
              <Button onClick={themeChangeHandler}>{isDark? <i className="bi bi-moon-stars-fill"></i> : <i className="mx-2 bi bi-brightness-high-fill text-white"></i>}</Button>
            </Nav.Link>
        </Container>
      </Navbar>
  )
}

export default Header