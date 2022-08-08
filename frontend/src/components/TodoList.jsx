import React, { useEffect, useState, useCallback } from 'react'
import { Tabs, Layout, Row, Col, Input, message } from 'antd'
import '../assets/css/TodoList.css'
import TodoTab from './TodoTab'
import TodoForm from './TodoForm'
import { createTodo, deleteTodo, loadTodos, updateTodo } from '../services/todoService'

const { TabPane } = Tabs;
const { Content } = Layout;

const TodoList = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [todos, setTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState();

  const handleFormSubmit = (todo) => {
    console.log(todo)
    createTodo(todo).then(onRefresh())
    message.success('Todo added!')
  }

  const handleRemoveTodo = (todo) => {
    deleteTodo(todo.id).then(onRefresh())
    message.warn('Todo removed!')
  }

  const handleToggleTodoStatus = (todo) => {
    todo.completed = !todo.completed;
    updateTodo(todo).then(onRefresh());
    message.info('Todo status updated!')
  }
  
  return (
    <div>TodoList</div>
  )
}

export default TodoList