import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Groups3Icon from '@mui/icons-material/Groups3';
import Person2Icon from '@mui/icons-material/Person2';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useState } from 'react';

export const SideBar = () => {
  const [extended, setExtended] = useState(true);

  const handleExtend = () => {
    setExtended((prev) => !prev);
  };

  const sidebarItems = [
    { icon: <HomeFilledIcon fontSize="medium" />, label: 'Home' },
    { icon: <ExploreIcon fontSize="medium" />, label: 'Explore' },
    { icon: <NotificationsNoneIcon fontSize="medium" />, label: 'Notifications' },
    { icon: <Groups3Icon fontSize="medium" />, label: 'Communities' },
    { icon: <Person2Icon fontSize="medium" />, label: 'Profile' },
  ];

  return (
    <>
      {/* Sidebar for desktop & tablet */}
      <div
        className={`hidden md:flex flex-col bg-black border-r border-white h-screen transition-all duration-300 ${
          extended ? 'w-[20%]' : 'w-[6%]'
        }`}
      >
        <div className={`flex ${extended ? "justify-between" : "justify-center" } px-4  pt-5`}>
          {extended && <h3 className="fonttt text-3xl text-white font-semibold">Dev.Gram</h3>}
          <button onClick={handleExtend} className="text-white ">
            <DehazeIcon  fontSize="large" />
          </button>
        </div>

        <ul className="flex flex-col gap-5 items-start text-left w-full px-5 pt-12">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className={` ${extended || "flex justify-center"} text-white w-full text-xl py-3 px-4 cursor-pointer transition duration-300 ease-in-out hover:bg-white/10 hover:backdrop-blur-md hover:font-semibold rounded-xl flex items-center gap-2`}
            >
              {item.icon} {extended && item.label}
            </li>
          ))}

          {extended && (
            <li className="text-black bg-white hover:bg-amber-50 w-full text-xl font-semibold py-3 px-2 mt-5 cursor-pointer rounded-2xl text-center ">
              Post
            </li>
          )}
        </ul>
      </div>

      {/* Bottom navigation bar for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-white flex justify-around py-2 z-50">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            className="text-white flex flex-col items-center text-sm"
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};
