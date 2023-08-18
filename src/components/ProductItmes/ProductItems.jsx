import { NavLink } from "react-router-dom"

/* eslint-disable react/prop-types */ 
const ProductItems = ({title,image,price,id}) => {
  return (
    <div className="col-md-3 mb-4">
    <div className="card h-100 text-center p-3">
  <img src={image} className="card-img-top" alt="..." height="250px"/>
  <div className="card-body">
    <h5 className="card-title mb-2">{title.slice(0,11)}...</h5>
    <p className="card-text lead fw-bold">${price}</p>
    <NavLink to={`/product/${id}`} className="btn btn-outline-dark">Buy now</NavLink>
  </div>
</div>
    </div>
  )
}

export default ProductItems