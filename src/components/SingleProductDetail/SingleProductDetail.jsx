import { useEffect, useState } from "react"
import { useParams,NavLink } from "react-router-dom"
import styles from './SingleProductDetail.module.css'
import { useDispatch} from "react-redux"
import { increment } from "../AddCart/counterSlice"

const SingleProductDetail = ()=>{
const dispatch = useDispatch()   

const {id} = useParams()    
// console.log(id)  
const [details,setDetails] = useState([])
useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        // console.log(data)
        setDetails(data)
    })
},[id])


const addToCartHandler=()=>{
    dispatch(increment())
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
                        Rating{details.rating && details.rating.rate}
                        <i className="bi bi-star-fill"></i>
                    </p>
                    <h1 className="display-6 fw-bold my-4">${details.price}</h1>
                    <p>{details.description}</p>
                    <button onClick={addToCartHandler} className="btn btn-outline-dark my-2 py-2 px-4">Add to Cart</button>
                    <NavLink to="/cart" className="btn btn-dark mx-2 px-3 py-2">Go to Cart</NavLink>
                </div>
            </div>
    )
}
export default SingleProductDetail;