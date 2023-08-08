import React from 'react'
// import Product from '../../../types/Product'
import { Button, Form, Input } from 'antd';
import Usertype from '../../../types/user';
import { useParams } from 'react-router-dom';
// import Product from '../../../types/Product';
interface iprops{
  onUpdateUser:(users:Usertype)=> void,
  users: Usertype[]
}
const UpdateUser = (props:iprops) => {
 const {id} = useParams();
 const currentUser = props.users.find(u => u.id === id);
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
    props.onUpdateUser({...values, "id": id})
    // console.log({...values, "id": id})

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
    <Form.Item name={['name']} label="User Name" rules={[{ required: true,max:255,min:6 }]}>
      <Input  defaultValue={currentUser?.usernames}/>
    </Form.Item>
    <Form.Item name={['email']} label="Email" rules={[{ type: 'email' ,required: true ,max:255,min:6}]}>
      <Input  defaultValue={currentUser?.email} />
    </Form.Item>
    <Form.Item name={['password']} label="Password" rules={[{ required: true ,max:32,min:6}]}>
      <Input defaultValue={currentUser?.password} />
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

export default UpdateUser