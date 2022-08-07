import React from 'react'
import { Form, Row, Col, Buttom, Input } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

const TodoForm = ({onFormSubmit}) => {
  const [form] = Form.useForm();
  const onFinish = () => {
    onFormSubmit({
      title: form.getFieldValue('title'),
      completed: false
    })
    console.log(form.getFieldValue('title'))
    form.resetFields();
  }
  renderEmpty(
    <Form>
      
    </Form>
  )
}

export default TodoForm