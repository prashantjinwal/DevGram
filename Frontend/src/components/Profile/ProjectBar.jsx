import PersonPinIcon from '@mui/icons-material/PersonPin';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import FoundationIcon from '@mui/icons-material/Foundation';

export const ProjectBar = () => {
    return (
        <div className="w-full mt-5 border-b-2 border-gray-500   flex justify-between p-4">
            <button className="hidden md:block text-blue-800 font-semibold md:text-2xl  text-2xl ">&lt; <FoundationIcon fontSize='large' sx={{ color: 'white' }} /> /&gt;</button>
            <button className="md:hidden text-blue-800 font-semibold md:text-2xl  text-2xl ">&lt; <FoundationIcon fontSize='medium' sx={{ color: 'white' }} /> /&gt;</button>

            <button className="hidden md:block text-white font-semibold md:text-2xl  text-sm"><AutoAwesomeMotionIcon fontSize='large' /></button>
            <button className="md:hidden text-white font-semibold md:text-2xl  text-sm"><AutoAwesomeMotionIcon fontSize='medium' /></button>

            <button className="hidden md:block text-white font-semibold md:text-2xl  text-sm" ><PersonPinIcon fontSize='large' /></button>
            <button className="md:hidden text-white font-semibold md:text-2xl  text-sm" ><PersonPinIcon fontSize='medium' /></button>
            
        
        </div>
    );
}