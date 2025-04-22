import React from 'react';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import ExploreIcon from '@mui/icons-material/Explore';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Person2Icon from '@mui/icons-material/Person2';

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 w-full z-50 border-t-1 border-amber-50">
         <ul className="py-4 px-3 flex justify-between text-white">
                <ol className="flex justify-between"><HomeFilledIcon/></ol>
                <ol className="flex justify-between"><ExploreIcon/></ol>
                <ol className="flex justify-between"><PostAddIcon/></ol>
                <ol className="flex justify-between"><Person2Icon/></ol>
         </ul>
    </nav>
  );
};

export default NavBar;
