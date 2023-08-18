import { useDispatch, useSelector } from "react-redux";
import { increment } from "./counterSlice";
import {useEffect,useState} from 'react'

const AddCart =()=>{
const [cart,setCart] = useState([])
const incrementHandler = ()=> dispatch(increment())
const counter = useSelector((state=>state.counter.value)) 
const dispatch = useDispatch()
    
useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${counter}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        setCart(data)
    })
},[counter])


    return(
        <>
            <button onClick={incrementHandler}>add</button>
            {counter}
        </>
    )
}
export default AddCart;