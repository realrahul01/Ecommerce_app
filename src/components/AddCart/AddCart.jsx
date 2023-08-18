import { useDispatch, useSelector } from "react-redux";
import { increment } from "./counterSlice";
import { useParams } from "react-router-dom";

const AddCart =()=>{
const incrementHandler = ()=> dispatch(increment())
const counter = useSelector((state=>state.counter.value)) 
const dispatch = useDispatch()
const {id} = useParams()
console.log(id)
    



    return(
        <>
            <button onClick={incrementHandler}>add</button>
            {counter}
        </>
    )
}
export default AddCart;