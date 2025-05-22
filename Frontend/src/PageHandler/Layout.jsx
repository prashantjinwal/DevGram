import { Outlet } from 'react-router';
import { SideBar } from '../components/Navigator/SideBar.jsx';
import { useState } from 'react';

export const Layout = () => {
  const [extended, setExtended] = useState(true);

  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <SideBar extended={extended} setExtended={setExtended} />

      <div
        className={`transition-all duration-300 h-screen overflow-y-auto p-4 md:pt-6 ${
          extended ? 'md:ml-[20%]' : 'md:ml-[6%]'
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};
