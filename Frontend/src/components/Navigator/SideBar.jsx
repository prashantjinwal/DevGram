import DehazeIcon from '@mui/icons-material/Dehaze';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // we'll use useLocation for initial active link
import { sidebarItems } from '../../assets/Items';

export const SideBar = () => {
  const [extended, setExtended] = useState(true);
  
  // Track selected path for highlighting
  const location = useLocation();
  const [selectedPath, setSelectedPath] = useState(location.pathname);

  const handleExtend = () => {
    setExtended((prev) => !prev);
  };

  // When user clicks a sidebar item, update selectedPath
  const handleSelect = (path) => {
    setSelectedPath(path);
  };

  return (
    <>
      {/* Sidebar for desktop & tablet */}
      <div
        className={`hidden md:flex flex-col bg-black border-r border-white h-screen transition-all duration-300 ${
          extended ? 'w-[20%]' : 'w-[6%]'
        }`}
      >
        <div className={`flex ${extended ? "justify-between" : "justify-center"} px-4 pt-5`}>
          {extended && <h3 className="fonttt text-3xl text-white font-semibold">Dev.Gram</h3>}
          <button onClick={handleExtend} className="text-white ">
            <DehazeIcon fontSize="large" />
          </button>
        </div>

        <ul className="flex flex-col gap-5 items-start text-left w-full px-5 pt-12">
          {sidebarItems.map((item, index) => (
            <Link 
              to={item.path} 
              key={index} 
              className="w-full"
              onClick={() => handleSelect(item.path)} // update selected on click
            >
              <li
                className={`${
                  extended || "flex justify-center"
                } text-white w-full text-xl py-3 px-4 cursor-pointer transition duration-300 ease-in-out rounded-xl flex items-center gap-2
                ${
                  selectedPath === item.path
                    ? 'bg-white/10 backdrop-blur-md font-semibold' // selected styles similar to your hover effect
                    : 'hover:bg-white/10 hover:backdrop-blur-md hover:font-semibold'
                }`}
              >
                {item.icon} {extended && item.label}
              </li>
            </Link>
          ))}

          {extended && (
            <li className="text-black bg-white hover:bg-amber-50 w-full text-xl font-semibold py-3 px-2 mt-5 cursor-pointer rounded-2xl text-center ">
              Post
            </li>
          )}
        </ul>
      </div>

      {/* Bottom navigation bar for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-white flex justify-around py-4 z-50">
        {sidebarItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`text-white flex flex-col items-center text-sm w-full
              ${
                selectedPath === item.path
                  ? 'bg-white/10 backdrop-blur-md font-semibold rounded-full'
                  : ''
              }
            `}
            onClick={() => handleSelect(item.path)}
          >
            {item.icon}
            {/* <span className="text-xs">{item.label}</span> */}
          </Link>
        ))}
      </div>
    </>
  );
};
