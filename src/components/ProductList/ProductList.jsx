/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import ProductItems from "../ProductItmes/ProductItems"
const ProductList = () => {
const [products,setProducts] = useState([]) 

useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then((res)=>res.json())
  .then((data)=>{                                                       
    // console.log(data)
    setProducts(data)
  })
},[])

let items = products.map((e,index)=>{
  return(
      <ProductItems
      key={index}
      title={e.title}
      image={e.image}
      price={e.price}
      id={e.id}
      />
  )
})


  return (
    <div className="container text-center my-5">
      <div className="my-5">
      <h1 className=" fw-bolder text-center">Latest Product</h1>
      <hr />
      </div>
      <div className="row">
        {items}
      </div>
    </div>
  )
}

export default ProductList