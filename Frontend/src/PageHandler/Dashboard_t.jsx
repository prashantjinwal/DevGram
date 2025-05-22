// App.jsx
import {  Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Layout} from './Layout'
import {Explore} from '../Pages/Explore'
import {Notifications} from '../Pages/Notifications'
import {Communities} from '../Pages/Communities'
import {Profile} from '../Pages/Profile'

function Dashboard() {
  return (
  
      <Routes>
        {/* Layout Route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          {/* Add other routes here */}
          <Route path="Home" element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Explore" element={<Explore />} />
          <Route path="Notifications" element={<Notifications />} />
          <Route path="Communities" element={<Communities />} />

        </Route>
      </Routes> 
      
     

  );
}

export default Dashboard;
