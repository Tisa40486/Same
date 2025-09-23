import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup.tsx'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default App