import React, { useState } from 'react'
import { Tooltip, Tag, List, Button, PopConfirm, Switch } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

const TodoItem = ({ todo, onTodoRemoval, onTodoToggle }) => {
  return (
    <List.Item
      actions={[

      ]}
    >
      <div className='todo-item'>
        <Tag color={todo.completed ? 'cyan' : 'red'} className="todo-tag">
          {todo.title}
        </Tag>
      </div> 
    </List.Item>
  )
}

export default TodoItem