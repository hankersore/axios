import './App.css'
import UserCard from './components/UserCard'
import ToDo from './components/ToDo'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='details/:userId' element={<Details/>}/>
    </Routes>
    </>
  )
}

export default App
