import React from 'react'
// import Product from '../../../types/Product'
import { Button, Form, Input, InputNumber } from 'antd';
import Categoriestype from '../../../types/Categories';
// import Product from '../../../types/Product';
interface iprops{
  OnAddCategories:(categories:Categoriestype)=> void,
}
const AddCategories = (props:iprops) => {

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
  const onFinish = (values: Categoriestype) => {
    props.OnAddCategories(values)
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
    <Form.Item name={['name']} label="Product Name" rules={[{ required: true,min:6,max:255 }]}>
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

export default AddCategories