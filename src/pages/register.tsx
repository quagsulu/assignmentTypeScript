import React from 'react'
// import Product from '../../../types/Product'
import { Button, Form, Input } from 'antd';
// import  from '../types/user';
// import Usertype from '../../../types/user';
// import Product from '../../../types/Product';
import './dangky.css'
import { Usertype } from '../types/user';
interface iprops{
  OnAddUser:(users:Usertype)=> void,
  users: Usertype[];

}
const Dangky = (props:iprops) => {
  const users = props.users.map(user => user);
  // console.log(users)
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  const onFinish = (values: Usertype) => {
    let errror= false
    // console.log(values.name)
    users.map((user)=> {
      // console.log(user.name)
      if(user.name === values.name ){
        errror = true;
        return alert('username đã tồn tại r');

      }
     else if(user.email == values.email){
        errror = true;
        return alert('email đã tồn tại r');


      }else{
        
      }
    })
    console.log(errror);
    // console.log(values)
    if(errror==false){
      
      props.OnAddUser(values)
      return alert('dang ky thanh cong');
    }
  };
  return (
    <div className='from_dang_ky'> 
    <h2>Đăng Ký </h2>
       <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item name={['name']} label="User Name" rules={[{ required: true ,max:255,min:6 ,whitespace: true}]}>
      <Input />
    </Form.Item>
    <Form.Item name={['email']} label="Email" rules={[{ type: 'email' ,required: true ,max:255,min:6}]}>
      <Input />
    </Form.Item>
    <Form.Item name={['password']} label="Password" rules={[{ required: true,max:32,min:6 }]}>
      <Input />
    </Form.Item>
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
  )
}

export default Dangky