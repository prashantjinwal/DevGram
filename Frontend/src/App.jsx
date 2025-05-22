
import './App.css'
import LoginPage from './signUp/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './PageHandler/Dashboard_t.jsx';
import SignUp from './signUp/SignUp';
// import { SideBar } from './components/Navigator/SideBar';
// import { Home } from './Pages/Home';





function App() {

  return (
    <>
    <BrowserRouter>
      {/* dashboard/* */}
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        {/* <Route path="/" element={<LoginPage/>} /> 
        <Route path="/signup" element={<SignUp/>} /> */}
      </Routes>
      {/* <SideBar/>
      <Home/> */}
      
      
      
      

    </BrowserRouter>
    
    
    </>
  )
}

export default App
