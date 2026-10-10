import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TodoList from './pages/TodoList'
function App() {
  return (
    <>
      <h1>This is a test</h1>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
