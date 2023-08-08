import React from 'react'
// import Product from '../../../types/Product'
import { Button, Form, Input } from 'antd';
import Usertype from '../../../types/user';
// import Product from '../../../types/Product';
interface iprops{
  OnAddUser:(users:Usertype)=> void,

}
const AddUser = (props:iprops) => {

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
    props.OnAddUser(values)
    // console.log(values)

  };
  return (
    <div> 
       <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item name={['name']} label="User Name" rules={[{ required: true ,max:255,min:6}]}>
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

export default AddUser