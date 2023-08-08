import React from 'react'
import Product from '../../../types/Product'
import  { Usertypeadmin } from '../../../types/user';
import { Link } from 'react-router-dom';
import '../../../layouts/admin.css'

interface Iprops{
  removeUser:(id:number|string)=> void,
  // users:Usertype[];
  usersadmin:Usertypeadmin[];
}
const User = (props:Iprops) => {
  const onHandleRemove =(id:number|string):any =>{
    props.removeUser(id);
  }
  return (
    <div>
            <Link to={"/admin/user/add"}>
        <button className='btn-add'>Add New User</button>
      </Link>
      <h3>Product List</h3>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>username</td>
            <td>email</td>
            <td>password</td>
            <td>Role</td>
          </tr>
        </thead>
    <tbody>
      {props.usersadmin.map((user,index) =>{
        return (
          <tr key={index+1}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>{user.roleId}</td>

          <td><img src="{product.image}" alt="" /></td>
          <td>
            <button className='btn-remove' onClick={()=>{ onHandleRemove(Number(user.id)) }}>remove</button>
            <Link to={`/admin/user/update/${user.id}`}>
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

export default User