import React from 'react'
import Categoriestype from '../../../types/Categories';
import '../../../layouts/admin.css'

import { Link } from 'react-router-dom';
// import Product from '../../../types/Product'
interface Iprops{
  removeCategories:(id:number|string)=> void,
  categories:Categoriestype[];
}
const Categories = (props:Iprops) => {
  const onHandleRemove =(id:number|string):any =>{
    props.removeCategories(id);
  }
  return (
    <div>
            <Link to={"/admin/categories/add"}>
        <button className='btn-add'>Add New Categories</button>
      </Link>
      <h3>Product List</h3>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
          </tr>
        </thead>
    <tbody>
      {props.categories.map((categories,index) =>{
        return (
          <tr key={index+1}>
            <td>{categories.id}</td>
          <td>{categories.name}</td>
          <td>
            <button className='btn-remove' onClick={()=>{ onHandleRemove(Number(categories.id)) }}>remove</button>
           <Link to={`/admin/categories/update/${categories.id}`}>
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


export default Categories