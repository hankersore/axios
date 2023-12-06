import './App.css'
import UserCard from './components/UserCard'
import ToDo from './components/ToDo'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import  {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const clientQuery = new QueryClient();
  return (
    <>
    <QueryClientProvider client={clientQuery}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='details/:userId' element={<Details/>}/>
    </Routes>
    <ReactQueryDevtools/>
    </QueryClientProvider>
    </>
  )
}

export default App
