import React from 'react';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import ExploreIcon from '@mui/icons-material/Explore';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Person2Icon from '@mui/icons-material/Person2';

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 z-50 w-full border-t border-amber-50 lg:left-1/2 lg:translate-x-[-50%] lg:w-[50%] lg:border lg:rounded-full px-5">
      <ul className="py-4 px-3 flex justify-between text-white">
        <li className="flex justify-between"><HomeFilledIcon fontSize="large" /></li>
        <li className="flex justify-between"><ExploreIcon fontSize="large" /></li>
        <li className="flex justify-between"><PostAddIcon fontSize="large" /></li>
        <li className="flex justify-between"><Person2Icon fontSize="large" /></li>
      </ul>
    </nav>

  );
};

export default NavBar;
