import { Profile_H } from "../components/Profile/Profile_H";
import { ProjectBar } from "../components/Profile/ProjectBar";

export const Profile = () =>{
    return(
        <div>
            {/* <h1 className="text-2xl text-amber-50">Profile</h1> */}
            <Profile_H/>
            {/* Project bar */}
            <ProjectBar/>

        
        </div>
    );
}