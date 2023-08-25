import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styles from './SingleProductDetail.module.css'
import { useDispatch} from "react-redux"
import { addCart} from "../AddCart/counterSlice"
import { AuthContext } from "../../contexts/AuthContext"
import { ThemeContext } from "../../contexts/ThemeContext"

const SingleProductDetail = ()=>{
const {isUserLogin} = useContext(AuthContext)  
const {isDark} = useContext(ThemeContext)  
const dispatch = useDispatch()
const navigate = useNavigate()   
const [details,setDetails] = useState({})
const {id} = useParams()    

const clickhandler = ()=>{
    isUserLogin ? navigate('/cart') : alert('You must login before going into cart')  //condition if the user is login only then they will allow to see cart page
}

// console.log(id)  
useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        // console.log(data)
        setDetails(data)
    })
},[id])

// console.log(details)
details.quantity = 1
// console.log(details)

const addToCartHandler=()=>{
    dispatch(addCart(details))
    // console.log(addCart(details))
}


    return(
        
            <div className={styles.container}>
                <div>
                    <img src={details.image} height="400px" width="400px"/>
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase">{details.category}</h4>
                    <h1 className="display-5">{details.title}</h1>
                    <p className="lead fw-bolder"> 
                        Rating {details.rating && details.rating.rate}
                        <i className="bi bi-star-fill"></i>
                    </p>
                    <h1 className="display-6 fw-bold my-4">${details.price}</h1>
                    <p>{details.description}</p>
                    <button onClick={addToCartHandler} className={isDark ? "btn btn-primary my-2 py-2 px-4" : "btn btn-outline-dark my-2 py-2 px-4" } >Add to Cart</button>
                    <button onClick={clickhandler} className="btn btn-dark mx-2 px-3 py-2">Go to Cart</button>                    
                </div>
            </div>
    )
}
export default SingleProductDetail;