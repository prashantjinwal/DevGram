import { Outlet } from 'react-router'
import {SideBar} from '../components/Navigator/SideBar.jsx'
export const Layout =()=>{
    return(


    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1 bg-zinc-900 text-white p-4 overflow-y-auto">
        <Outlet />
      </div>
    </div>


    )
}