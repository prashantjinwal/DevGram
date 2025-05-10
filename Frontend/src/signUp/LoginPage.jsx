import { TextField } from "@mui/material";
import { Link } from "react-router";

const textstyle = {
  input: {
    color: "#e9ecef",
    backgroundColor: "#202020",
  },
  label: {
    color: "#e9ecef",
    opacity: 0.5,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e9ecef",
    },
    "&:hover fieldset": {
      borderColor: "#e9ecef",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#e9ecef",
    },
  },
};

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black px-3">
      <div className="border border-amber-50 p-10 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] xl:max-w-[30%] text-amber-50">
        <h2 className="fonttt flex justify-center text-5xl">Dev.Gram</h2>
        <div className="flex w-full flex-col gap-5 mb-5 mt-[4em]">
          <TextField
            id="outlined-email"
            label="Email"
            type="email"
            sx={textstyle}
            fullWidth
          />
          <TextField
            id="outlined-password"
            label="Password"
            type="password"
            sx={textstyle}
            fullWidth
          />
        </div>
        <p className="text-center text-xs text-gray-400 py-5 px-2">
          By signing up, you agree to our{" "}
          <span className="text-blue-800">Terms, Privacy Policy</span> and{" "}
          <span className="text-blue-800">Cookies Policy</span>.
        </p>
        <button className="m-auto mt-3 flex justify-center w-[45%] rounded-sm py-2 bg-amber-50 text-black font-medium">
          Login
        </button>
        <p className="text-gray-400 p-5 text-center">
          Don't have account?{" "}
          <a className="text-blue-800" href="http://">
           <Link to="/signup" >Sign Up</Link> 
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
