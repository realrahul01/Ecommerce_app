/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import ProductItems from "../ProductItmes/ProductItems"
import styles from './Product.module.css'
import Loader from './../Loader/Loader'

const ProductList = () => {
const [products,setProducts] = useState([]) 
const [search,setSearch] = useState('')
const [isLoader,setisLoader] = useState(false)

useEffect(()=>{
  setisLoader(true)
  fetch('https://fakestoreapi.com/products')
  .then((res)=>res.json())
  .then((data)=>{                                                       
    // console.log(data)
    setProducts(data)
    setisLoader(false)
  })
},[])

let items = products.filter((e)=>{
  return e.category.includes(search)
}).map((e,index)=>{
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
    <div className={styles.produtsVal}>
    <div className="container text-center my-5">
      <div className="my-5">
      <h1 className="fw-bolder text-center">Latest Product</h1>
      <hr />
      <div>
        <h3>search item</h3>
        <input type="text" className={styles.searchList} value={search} placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}/>
      </div>
      </div>
      {isLoader && (
        <Loader/>
      )}
      {!isLoader &&(
        <div className="row">
          {items}
        </div>
      )}
    </div>
    </div>
  )
}

export default ProductList