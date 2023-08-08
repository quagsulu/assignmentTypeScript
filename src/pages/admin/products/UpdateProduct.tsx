import React from 'react'
import Product from '../../../types/Product'
import { Button, Form, Input, InputNumber } from 'antd';
import { useParams } from 'react-router-dom';

interface Iprops{
  onUpdate:(product:Product)=> void,
  products:Product[];
}
const UpdateProduct = (props:Iprops) => {
  const {id} = useParams();
  const currentProduct = props.products.find(product => product.id === Number(id));
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
    props.onUpdate({...values,"id":id})
    // console.log({...values,"id":id});

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
    <Form.Item name={['name']} label="Product Name" rules={[{ required: true ,max:255,min:6}]}>
      <Input defaultValue={currentProduct?.name} />
    </Form.Item>
    <Form.Item name={['price']} label="price" valuePropName='aaaaa'  rules={[{ type: 'number' ,required:true,max:10000000000,min:6}]}>
      <InputNumber defaultValue={currentProduct?.price} />
    </Form.Item>

    <Form.Item name={['description']} label="description"  rules={[{ required: true ,max:255,min:6}]}>
      <Input defaultValue={currentProduct?.description}/>
    </Form.Item>
    <Form.Item name={['image']} label="image"  rules={[{ required: true ,max: 255,min: 6}]}> 
      <Input defaultValue={currentProduct?.image} />
    </Form.Item>
    <Form.Item name={['categories']} label="categories"  rules={[{required: true , type: 'number' ,max:100,min:1 }]}>
      <InputNumber defaultValue={currentProduct?.categories}/>
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

export default UpdateProduct