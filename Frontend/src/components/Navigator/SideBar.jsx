import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Groups3Icon from '@mui/icons-material/Groups3';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Person2Icon from '@mui/icons-material/Person2';

export const SideBar = () => {
    return(
        <>
      <div className="bg-black  border-r-1 border-white  h-screen w-[20%]">
        {/* <h3 className="fonttt text-4xl pt-5 px-8 text-white font-semibold ">Dev.Gram</h3> */}/
        
        <ul className="flex flex-col gap-5 items-start text-left w-full px-5 pt-12">
            <li className="text-white w-full text-xl py-3 px-4 cursor-pointer transition duration-300 ease-in-out hover:bg-white/10 hover:backdrop-blur-md rounded-xl flex items-center gap-2">
             <HomeFilledIcon fontSize="medium" /> Home
            </li>

            <li className="text-white w-full text-xl py-3 px-4 cursor-pointer transition duration-300 ease-in-out hover:bg-white/10 hover:backdrop-blur-md rounded-xl flex items-center gap-2">
             <ExploreIcon fontSize="medium" /> Explore
            </li>

            <li className="text-white w-full text-xl py-3 px-4 cursor-pointer transition duration-300 ease-in-out hover:bg-white/10 hover:backdrop-blur-md rounded-xl flex items-center gap-2">
             <NotificationsNoneIcon fontSize='medium' /> Notifications
            </li>

            <li className="text-white w-full text-xl py-3 px-4 cursor-pointer transition duration-300 ease-in-out hover:bg-white/10 hover:backdrop-blur-md rounded-xl flex items-center gap-2">
             <Groups3Icon fontSize='medium' /> Communities
            </li>

            <li className="text-white w-full text-xl py-3 px-4 cursor-pointer transition duration-300 ease-in-out hover:bg-white/10 hover:backdrop-blur-md rounded-xl flex items-center gap-2">
              <Person2Icon fontSize='medium' /> Profile
            </li>

            <li className="text-black bg-white hover:bg-amber-50 w-full text-xl font-semibold py-3 px-2 mt-5  cursor-pointer rounded-2xl text-center ">Post</li>
        </ul>
        
      </div>

        
        </>
    );

}