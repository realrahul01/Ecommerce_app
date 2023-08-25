import { useDispatch, useSelector } from "react-redux";
import styles from './AddCart.module.css'
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from "./counterSlice";
import { ThemeContext } from "../../contexts/ThemeContext";

const AddCart =()=>{
const {isUserLogin} = useContext(AuthContext) 
const {isDark} = useContext(ThemeContext)
const dispatch = useDispatch() 
const cartProduct = useSelector((state)=>state.counter.carts)  // this giving an array of object //shall i put this inside useEffect
// console.log(cartProduct)


const totalPrice = cartProduct.reduce((total,item)=>{
    return total + item.price * item.quantity
},0)

const totalitem = cartProduct.reduce((total,item)=>{
    return total + item.quantity
},0)

const decrementHandler = (item,quantityId) => {  // here the value of item is equvalent to e.id which i pass in in increment and decrement function 
    if(quantityId <= 1){
        dispatch(removeItem(item))
    }else{
        const val = decreaseItemQuantity(item)
        dispatch(val)
        console.log(val)
    }
};

const incrementHandler = (item) => {
    const val = increaseItemQuantity(item)
    dispatch(val)
    console.log(val)
};





let items = cartProduct.map((e,index)=>{
    return(
        <div key={index} className="container text-center col-md-4 my-4">
            <div>
                <img src={e.image} width="200px" height="200px"/>
            </div>
            <h5 className="my-2">
                {e.title}
            <div>
                {e.quantity} X ${e.price} = ${e.quantity * e.price}
            </div>
            <div className={styles.btn_style}>
                <button className={styles.btn1} onClick={()=>decrementHandler(e.id,e.quantity)}> {isDark ? <i className="bi bi-dash text-white"></i> : <i className="bi bi-dash"></i>}  </button>  {/* need to call this arrow function else it will call every time it render it will immediately call this function */}
                <button className={styles.btn2} onClick={()=>incrementHandler(e.id)}> {isDark ? <i className="bi bi-plus text-white"></i> : <i className="bi bi-plus"></i>} </button>  
            </div>
            </h5>
        </div>
    )
})

    return(
        <div className="row">
        {isUserLogin && (   
            <>
            <div className={styles.details}>
                <h5>Total items - {totalitem}</h5>
                <h5>Total price - ${totalPrice}</h5>
            </div>
            <h1 className="text-center my-2">Cart Product</h1>
            <hr />
                {items}     
            </>
        )}
        {!isUserLogin && (
            <Navigate to="/login"/>   //if user is not login not able to excess the login page with url also and if they do they will redirect into login page
        )}
        </div>
    )
}
export default AddCart;