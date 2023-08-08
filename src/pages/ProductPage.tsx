import React from 'react'
import '../layouts/1.css'
import '../layouts/2.css'
import '../layouts/3.css'
import '../layouts/7.css'
import Product from '../types/Product'
import { Link } from 'react-router-dom'

interface iprops {
  products: Product[];
}
const ProductPage = (props:iprops) => {

  return (
    <div>
            <main className="w-100 d-f f-d al-c">

<h1 className="title_product_new">Sản phẩm mới nhất</h1>
<div className="contain-product w-100 d-f">

{props.products.map((product) => {
return (
  <>
  <div className="product d-f f-d al-c">
    <div className="product-img w-100 ">
      <a href="#">
        <img src={product.image}alt="" />
      </a>
      <div className="product-icon-cart-heart  d-f jf-c">
        <a href="#" className="product_icon product-heart d-f jf-c al-c">
          <i className="fa-solid fa-heart product_heart "></i>
        </a>
        <a href="#" className="product_icon d-f jf-c al-c">
          <i className="fa-solid fa-cart-shopping product_cart "></i>
        </a>
      </div>
    </div>
    <div className="contain-name-price-product">
      <div className="product_name"><span>{product?.name}</span></div>
      <div className="product_price">Giá : <span>{product?.price} $</span></div>
    </div>
    <div className='detail'>
   <Link to={`/detail/${product.id}`}>
   
      <button className='btn-detail'>Xem thêm</button>
   </Link>
      </div> 
  </div>

  </>
)
})}



  
  
</div>

</main>
    </div>
  )
}

export default ProductPage