import React from 'react'
import Product from '../types/Product'
import { useParams } from 'react-router-dom';
import './productDetail.css'
interface Iprops{
    products: Product[];
}
const ProductDetailPage = (props:Iprops) => {
    const {id} = useParams()
    const currentProduct = props.products.find(p => p.id === Number(id)) 
  return (
    <div>
        <h2 className='prd_title_detail'>Product Detail </h2>
        <div className="container_prd_detail">
            <div className="imgDetail">
            <img src={'../.'+currentProduct?.image} alt="" />
      

            </div>
            <div className="detail">
                <div className="group">
                    <p>Product name : <span>{currentProduct?.name}</span></p>
                </div>
                <div className="group">
                    <p>Product description : <span>{currentProduct?.description}</span></p>
                </div>
                <div className="group">
                    <p>Product price : <span>{currentProduct?.price}</span></p>
                </div>
                <div className="group">
                    <p>Product categories : <span>{currentProduct?.categories}</span></p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProductDetailPage