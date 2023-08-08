import React, { useState } from 'react';
import './admin.css'
import { Link, Outlet } from 'react-router-dom';
// import bootstrap from 'bootstrap'
const adminLayout: React.FC = () => {

  return (
<>
<div id='container'>
<header>
<h1>Admin</h1>
</header>
<div className='block'>
<div className='nav'>
    <h2>Nav</h2>
    <ul>
    <li><Link id='a' to={"/admin/product"}>Product List</Link></li>
    <li><Link id='a' to={"/admin/categories"}>Categories List</Link></li>
    <li><Link id='a' to={"/admin/user"}>User List</Link></li>
    </ul>
</div>
<div className='content'>
   <Outlet/>
</div>
</div>
</div>
</>
  );
};

export default adminLayout;