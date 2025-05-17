import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../axios/axios";// your axios instance
import { SButton } from "../components/buttons/submit";

const textstyle = {
  input: {
    color: "#e9ecef",
    backgroundColor: "#202020",
    fontSize: "1rem",
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

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      // Assuming backend sends { token, user }
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/dashboard"); // redirect after successful login
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Login failed");
      } else {
        setError("Network error");
      }
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black px-3 py-6">
      <div className="border border-amber-50 p-6 sm:p-10 w-full max-w-[95%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] xl:max-w-[30%] text-amber-50">
        <h2 className="fonttt flex justify-center text-3xl sm:text-4xl md:text-5xl mb-6">Dev.Gram</h2>

        <form onSubmit={handleLogin} className="flex w-full flex-col gap-4 sm:gap-5 mb-5 mt-8">
          <TextField
            id="outlined-email"
            label="Email"
            type="email"
            sx={textstyle}
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {/* submit button */}
          <SButton text="Login" />

        </form>

        <p className="text-center text-xs sm:text-sm text-gray-400 py-3 sm:py-5 px-2">
          By signing up, you agree to our{" "}
          <span className="text-blue-800 font-semibold">Terms, Privacy Policy</span> and{" "}
          <span className="text-blue-800 font-semibold">Cookies Policy</span>.
        </p>

        <p className="text-gray-400 pt-5 text-xs sm:text-sm text-center">
          You don't have an account?{" "}
          <Link to="/signup" className="text-blue-800 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
