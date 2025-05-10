
import './App.css'
import LoginPage from './signUp/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './signUp/SignUp';


function App() {

  return (
    <>
    <BrowserRouter>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<LoginPage/>} /> 
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
       

    </BrowserRouter>
    
    </>
  )
}

export default App
