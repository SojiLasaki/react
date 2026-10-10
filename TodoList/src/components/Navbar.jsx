import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/todoList">Todo List</Link>
        </nav>
    )
}

export default Navbar