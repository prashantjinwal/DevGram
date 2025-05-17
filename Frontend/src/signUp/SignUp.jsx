/* eslint-disable no-unused-vars */
import { TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../axios/axios";// Axios instance
import { SButton } from "../components/buttons/Submit";
import { textstyle } from "./style";
import { motion } from "framer-motion";




const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); // if needed
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      const res = await api.post("/auth/register", {
        email,
        password,
        name, // optional — backend must handle it
      });

      // Save token or user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redirect to dashboard or home
      navigate("/");
    } catch (err) {
      const message =
        err.response?.data?.message || "Signup failed. Try again.";
      setError(message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black px-3 py-6">
      <motion.div
        className="border border-amber-50 p-6 sm:p-10 w-full max-w-[95%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] xl:max-w-[30%] text-amber-50"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          rotateX: 7,
          rotateY: -7,
          scale: 1.02,
          transition: { type: "spring", stiffness: 200, damping: 10 }
        }}
      >
        <h2 className="fonttt flex justify-center text-3xl sm:text-4xl md:text-5xl mb-6">Dev.Gram</h2>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-4 sm:gap-5 mb-5 mt-8"
        >
          {/* Form fields remain unchanged */}
          <TextField
            id="outlined-name"
            label="Name"
            type="text"
            sx={textstyle}
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-email"
            label="Email"
            type="email"
            sx={textstyle}
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <SButton text="Sign Up" />
        </form>

        <p className="text-gray-400 pt-5 text-xs sm:text-sm text-center">
          You already have an account?{" "}
          <Link to="/" className="text-blue-800 underline">
            Log In
          </Link>
        </p>
      </motion.div>
</div>

  );
};

export default SignUp;
