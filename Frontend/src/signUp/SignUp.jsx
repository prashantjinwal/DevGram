import { TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router";

const textstyle = {
  input: {
    color: "#e9ecef",
    backgroundColor: "#202020",
    fontSize: "1rem", // responsive font
  },
  label: {
    color: "#e9ecef",
    opacity: 0.5,
    fontSize: "0.9rem",
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


const SignUp = () => {
    const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      alert('Passwords match!');
      // Proceed with your form submission logic
    }
  }
    return (
        <>
        <div className="min-h-screen flex justify-center items-center bg-black px-3 py-6">
      <div className="border border-amber-50 p-6 sm:p-10 w-full max-w-[95%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] xl:max-w-[30%] text-amber-50">
        <h2 className="fonttt flex justify-center text-3xl sm:text-4xl md:text-5xl mb-6">Dev.Gram</h2>

        <div className="flex w-full flex-col gap-4 sm:gap-5 mb-5 mt-8">
          
          <TextField
            id="outlined-name"
            label="name"
            type="name"
            sx={textstyle}
            fullWidth
          />

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
            
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
          
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
         sx={textstyle}
        
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        error={!!error}
        helperText={error}
      />
        </div>

        <p className="text-center text-xs sm:text-sm text-gray-400 py-4 sm:py-5 px-2">
          By signing up, you agree to our{" "}
          <span className="text-blue-800 font-semibold ">Terms, Privacy Policy</span> and{" "}
          <span className="text-blue-800 font-semibold ">Cookies Policy</span>.
        </p>

        <button onSubmit={handleSubmit} className="m-auto mt-3 cursor-pointer flex justify-center w-[60%] sm:w-[45%] rounded-sm py-2 bg-amber-50 text-black font-medium text-sm sm:text-base">
          Login
        </button>

        <p className="text-gray-400 pt-5 text-xs sm:text-sm text-center">
          You already have account?{" "}
          <Link to="/" className="text-blue-800 underline">
            Login In
          </Link>
        </p>
      </div>
    </div>
        </>
    );
}

export default SignUp