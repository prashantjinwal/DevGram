import DehazeIcon from '@mui/icons-material/Dehaze';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarItems } from '../../assets/Items';

export const SideBar = ({ extended, setExtended }) => {
  const location = useLocation();
  const [selectedPath, setSelectedPath] = useState(location.pathname);

  const handleExtend = () => {
    setExtended((prev) => !prev);
  };

  const handleSelect = (path) => {
    setSelectedPath(path);
  };

  return (
    <>
      {/* Sidebar for desktop & tablet */}
      <div
        className={`hidden md:flex fixed top-0 left-0 h-screen flex-col bg-black border-r border-white z-50 transition-all duration-300 ${
          extended ? 'w-[20%]' : 'w-[6%]'
        }`}
      >
        <div className={`flex ${extended ? "justify-between" : "justify-center"} px-4 pt-5`}>
          {extended && <h3 className="fonttt text-3xl text-white font-semibold">Dev.Gram</h3>}
          <button onClick={handleExtend} className="text-white">
            <DehazeIcon fontSize="large" />
          </button>
        </div>

        <ul className="flex flex-col gap-5 items-start text-left w-full px-5 pt-12">
          {sidebarItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="w-full"
              onClick={() => handleSelect(item.path)}
            >
              <li
                className={`text-white w-full text-xl py-3 px-4 cursor-pointer transition duration-300 ease-in-out rounded-xl flex items-center gap-2 ${
                  selectedPath === item.path
                    ? 'bg-white/10 backdrop-blur-md font-semibold'
                    : 'hover:bg-white/10 hover:backdrop-blur-md hover:font-semibold'
                }`}
              >
                {item.icon} {extended && item.label}
              </li>
            </Link>
          ))}
          {extended && (
            <li className="text-black bg-white hover:bg-amber-50 w-full text-xl font-semibold py-3 px-2 mt-5 cursor-pointer rounded-2xl text-center">
              Post
            </li>
          )}
        </ul>
      </div>

      {/* Mobile navbar*/}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-white flex justify-around py-4 z-50">
        {sidebarItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`text-white flex flex-col items-center text-sm w-full ${
              selectedPath === item.path
                ? 'bg-white/10 backdrop-blur-md font-semibold rounded-full'
                : ''
            }`}
            onClick={() => handleSelect(item.path)}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </>
  );
};
