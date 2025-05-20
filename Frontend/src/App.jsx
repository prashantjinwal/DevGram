
import './App.css'
import LoginPage from './signUp/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './signUp/SignUp';
import { SideBar } from './components/Navigator/SideBar';


function App() {

  return (
    <>
    <BrowserRouter>
      
      <Routes>
        <Route path="/dashboard" element={<SideBar/>} />
        <Route path="/" element={<LoginPage/>} /> 
        <Route path="/signup" element={<SignUp/>} />
      </Routes>

    </BrowserRouter>
    
    
    </>
  )
}

export default App
