import { useState } from "react";
import { Profile_H } from "../components/Profile/Profile_H";
import { ProjectBar } from "../components/Profile/ProjectBar";

import { Link } from "react-router";

export const Profile = () =>{
    const [logged] = useState(true)
    return(
        <>
            {
                logged ?

         (
            <>
                <Profile_H/>
                <ProjectBar/>
            </>
        ) :
       <div className="flex items-center justify-center h-screen px-4">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
    
            <Link to="/" className="w-full">
                <button className="w-full px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 text-base md:text-lg">
                    Login
                </button>
            </Link>

            <Link to="/signup" className="w-full">
                <button className="w-full px-6 py-3 bg-black text-white font-semibold rounded-xl shadow-lg hover:bg-gray-900 hover:scale-105 active:scale-95 transition-all duration-300 text-base md:text-lg">
                    Sign Up
                </button>
            </Link>

       </div>
     </div>



            }
        
        </>
    );
}