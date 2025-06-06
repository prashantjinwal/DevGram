
import './App.css'
import LoginPage from './signUp/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './PageHandler/Dashboard_t.jsx';
import SignUp from './signUp/SignUp';






function App() {

  return (
    <>
    <BrowserRouter>
      {/* dashboard/* */}
      <Routes>
        <Route path="/" element={<LoginPage to="/login" replace />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage/>} /> 
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      {/* <SideBar/>
      <Home/> */}
      
      
      
      

    </BrowserRouter>
    
    
    </>
  )
}

export default App
