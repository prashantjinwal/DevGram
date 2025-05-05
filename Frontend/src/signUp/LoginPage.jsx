import { TextField } from "@mui/material"
const textstyle = { input: {
    color: "#e9ecef", // Text color inside input
   backgroundColor: "#202020", // Background color of input
 },
 label: {
   color: "#e9ecef",
   opacity: 0.5,
 },
 "& .MuiOutlinedInput-root": {
   "& fieldset": {
     borderColor: "#e9ecef", // Default border color
   },
   "&:hover fieldset": {
     borderColor: "#e9ecef", // Border on hover
   },
   "&.Mui-focused fieldset": {
     borderColor: "#e9ecef", // Border when focused
   },
 },}


const LoginPage = () => {
    return (
        <>
       <div className="h-screen flex   justify-center bg-black "  >
            <div className="  border border-amber-50 p-10 w-[30%]  text-amber-50">
                <h2 className="fonttt flex justify-center text-5xl">DevGram</h2>
              <div className="flex w-full flex-col gap-5 mb-5 mt-[4em] ">
                <TextField id="outlined-search"
                 label="Email"
                  type="Email" 
                  sx={textstyle}
                  />
                <TextField id="outlined-search" label="Password" type="password" sx={textstyle} />
                
                {/* 22223b */}
                
              </div>
              <p className="text-center text-xs text text-gray-400 py-5 px-2 ">By signing up, you agree to our <span className="text-blue-800 ">Terms, Privacy Policy</span> and <span className="text-blue-800 "> Cookies Policy</span>.</p>
              <button className="m-auto mt-3 flex justify-center w-[45%] rounded-sm py-2 bg-amber-50 text-black font-medium">Login</button>
              
            </div>
            
       </div>
        </>
    )
}

export default LoginPage