import React from 'react'
import Product from '../../../types/Product'
import { Button, Form, Input, InputNumber } from 'antd';
// import Product from '../../../types/Product';
interface iprops{
  OnAdd:(product:Product)=> void,
}
const AddProduct = (props:iprops) => {

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
  const onFinish = (values: Product) => {
    props.OnAdd(values)
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
    <Form.Item name={['name']} label="Product Name" rules={[{ required: true ,max:255,min:6 }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['price']} label="price"  rules={[{ type: 'number' ,max:1000000000,min:0}]}>
      <InputNumber />
    </Form.Item>
    <Form.Item name={['description']} label="description" rules={[{ required: true ,min:6 }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['image']} label="image" rules={[{ required: true ,max:255,min:6 }]}>
      <Input />
    </Form.Item>

    <Form.Item name={['categories']} label="categories"  rules={[{ type: 'number' ,max:100,min:1 ,required: true}]}>
      <InputNumber />
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

export default AddProduct