import React from 'react'
import { Button, Form, Input, InputNumber } from 'antd';
import { useParams } from 'react-router-dom';
import Categoriestype from '../../../types/Categories';

interface Iprops{
  onUpdateCategories:(categories:Categoriestype)=> void,
  categories:Categoriestype[];
}
const UpdateCategories = (props:Iprops) => {
  const {id} = useParams();
  const currentCategory = props.categories.find(c => c.id === Number(id));
  // console.log(currentCategory?.name)
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
    props.onUpdateCategories({...values,"id":id})
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
    <Form.Item name={['name']}  label="categories Name" rules={[{ required: true ,max:255,min:6}]}>
      <Input defaultValue={currentCategory?.name} />
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


export default UpdateCategories