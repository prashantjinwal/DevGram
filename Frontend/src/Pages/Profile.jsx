import { useState } from "react";
import { Profile_H } from "../components/Profile/Profile_H";
import { ProjectBar } from "../components/Profile/ProjectBar";
import ResponsiveButton from "../components/buttons/ReusebleButton";

export const Profile = () =>{
    const [logged, setlogged] = useState(false)
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
        <div className="flex items-center justify-center h-screen">
            <div className="flex gap-4 w-[50%]">
                <ResponsiveButton
                  label="Login"
                  onClick={() => console.log("Edit Profile")}
                  bgColor="bg-white"
                  textColor="text-black"
                />

                <ResponsiveButton
                  label="Sign up"
                  onClick={() => console.log("Share Profile")}
                  bgColor="bg-transparent"
                  textColor="text-white"
                  border="border-2 border-amber-50"
                />
            </div>
        </div>



            }
        
        </>
    );
}