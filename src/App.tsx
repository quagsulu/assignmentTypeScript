import { useEffect, useState } from 'react'
import './App.css'
import { HomePage, register, login, ProductPage, AddProduct, UpdateProduct, Products, UpdateCategories, AddUser, UpdateUser, Dashbroad, AddCategories, User, Categories } from './pages/index'
import { Route, Routes } from 'react-router-dom';
import Product from './types/Product';
import Categoriestype from './types/Categories';
// import Usertype from './types/user';
import { Usertype,Usertypeadmin } from './types/user';
import AdminLayout from './layouts/adminLayout';
import WebLayout from './layouts/webLayout';
import ProductDetailPage from './pages/ProductDetailPage';
import Dangky from './pages/register';
function App() {
  const [products, setproducts] = useState<Product[]>([]);
  const [categories, setcategories] = useState<Categoriestype[]>([]);
  const [users, setusers] = useState<Usertype[]>([]);
  const [usersadmin, setusersadmin] = useState<Usertypeadmin[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((Response) => Response.json())
      .then((data: Product[]) => setproducts(data))
  },[])
  useEffect(() => {
    fetch(`http://localhost:3000/categories`)
      .then((Response) => Response.json())
      .then((data: Categoriestype[]) => setcategories(data))
  },[])
  useEffect(() => {
    fetch(`http://localhost:3000/users`)
      .then((Response) => Response.json())
      .then((data: Usertype[]) => setusers(data))
  },[])
  useEffect(() => {
    fetch(`http://localhost:3000/users`)
      .then((Response) => Response.json())
      .then((data: Usertypeadmin[]) => setusersadmin(data))
  },[])

  const OnAdd = (product:Product) => {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    .then(()=>{
      alert(`Product Add successfully`);
    })
  }
  const OnAddCategories = (Categories:Categoriestype) => {
    fetch(`http://localhost:3000/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Categories)
    })
    .then(()=>{
      alert(`categories Add successfully`);
    })
  }
  const OnAddUser = (user:Usertype) => {
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(()=>{
      alert(`User Add successfully`);
    })
  }
  const onUpdateUser = (user:Usertype ) => {
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"    
      },
      body: JSON.stringify(user)
    })
    .then(()=>{
      alert(`Product Update successfully`);
    })
  }
  const removeUser = (id:number|string) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
    }).then(() => setusers(users.filter((item) => item.id != id)))
    .then(()=>{
      alert(`Product removed successfully`);
    })
  }
  const onUpdateCategories = (categories:Categoriestype ) => {
    fetch(`http://localhost:3000/categories/${categories.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"    
      },
      body: JSON.stringify(categories)
    })
    .then(()=>{
      alert(`Product Update successfully`);
    })
  }
  const removeCategories = (id:number|string) => {
    fetch(`http://localhost:3000/categories/${id}`, {
      method: "DELETE"
    }).then(() => setcategories(categories.filter((item) => item.id != id)))
    .then(()=>{
      alert(`Product removed successfully`);
    })
  }
  const onUpdate = (product:Product ) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"    
      },
      body: JSON.stringify(product)
    })
    .then(()=>{
      alert(`Product Update successfully`);
    })
  }
  const removeProduct = (id:number|string) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE"
    }).then(() => setproducts(products.filter((item) => item.id != id)))
    .then(()=>{
      alert(`Product removed successfully`);
    })
  }
  return (
    <>

      <Routes>
        <Route path='/' element={<WebLayout />}>
          <Route index element={<ProductPage products={products}/>}/>
          <Route path='detail/:id' element={<ProductDetailPage products={products}/>}/>
          <Route path='/product' element={<ProductPage products={products}/>}/>
          <Route path='/dangky' element={<Dangky OnAddUser={OnAddUser} users={users}/>}/>
          </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='product' >
            <Route index element={<Products products={products} removeProduct={removeProduct} />} />
            <Route path='add' element={<AddProduct OnAdd={OnAdd} />} />
            <Route path='update/:id' element={<UpdateProduct products={products} onUpdate={onUpdate} />} />
          </Route>
          <Route path='categories' >
            <Route index element={<Categories categories={categories} removeCategories={removeCategories} />} />
            <Route path='add' element={<AddCategories OnAddCategories={OnAddCategories} />} />
            <Route path='update/:id' element={<UpdateCategories categories={categories} onUpdateCategories={onUpdateCategories} />} />
          </Route>
          <Route path='user' >
            <Route index element={<User usersadmin={usersadmin} removeUser={removeUser} />} />
            <Route path='add' element={<AddUser OnAddUser={OnAddUser} />} />
            <Route path='update/:id' element={<UpdateUser users={users} onUpdateUser={onUpdateUser} />} />
          </Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
