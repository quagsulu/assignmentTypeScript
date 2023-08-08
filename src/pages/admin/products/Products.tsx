import React from 'react'
import Product from '../../../types/Product'
import { Link } from 'react-router-dom';
import '../../../layouts/admin.css'
interface Iprops{
  removeProduct:(id:number|string)=> void,
  products:Product[];
}
const Products = (props:Iprops) => {
  const onHandleRemove =(id:number|string):any =>{
    props.removeProduct(id);
  }
  return (
    
    <div>
      <Link to={"/admin/product/add"}>
        <button className='btn-add'>Add New Product</button>
      </Link>
      <h3>Product List</h3>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>price</td>
            <td>description</td>
            <td>image</td>
            <td>categories</td>
          </tr>
        </thead>
    <tbody>
      {props.products.map((product,index) =>{
        return (
          <tr key={index+1}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.description}</td>
          <td><img src={'../../../.'+product.image} alt="" /> <br />{product.image}</td>
          <td>{product.categories}</td>
          <td>
              <button className='btn-remove' onClick={()=>{ onHandleRemove(Number(product.id))}}>remove</button> <br />
            <Link to={`/admin/product/update/${product.id}`}>
             <button className='btn-update'>Update</button>
            </Link>
          </td>
        </tr>
        )
       })}

    </tbody>
      </table></div>
  )
}

export default Products