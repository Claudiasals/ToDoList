// CREO IL COMPONENTE PRINCIPALE

import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import TodoList from './pages/TodoList.jsx'
import Task from './pages/Task.jsx'
import Setting from './pages/Setting.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/todolist/:listId" element={<TodoList />} />
      <Route path="/task/:taskId" element={<Task />} />
      <Route path="/settings" element={<Setting />} />
    </Routes>
  )
}

// ESPORTO IL COMPONENTE
export default App;