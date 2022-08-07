import React from 'react'
import { Tooltip, Tag, List, Button, PopConfirm, Switch } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

const TodoItem = ({ todo, onTodoRemoval, onTodoToggle }) => {
  return (
    <List.Item
      actions={[
        <Tooltip
          title={todo.completed ? 'Mark as uncomplted' : 'Mark as Completed'}
        >
          <Switch 
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onTodoToggle(todo)}
            defaultChecked={todo.completed}
          />
        </Tooltip>,
        <PopConfirm
          title={'Are you sure want to delete? '}
          onConfirm={() => {
            onTodoRemoval(todo);
          }}
          className="list-item"
          key={todo.id}
        >
          <Button className='remove-todo-button' type="primary" danger>
            x
          </Button>
        </PopConfirm>
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