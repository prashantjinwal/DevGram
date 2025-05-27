import PersonPinIcon from '@mui/icons-material/PersonPin';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import FoundationIcon from '@mui/icons-material/Foundation';

export const ProjectBar = () => {
    return (
        <div className="w-full mt-5 border-b-2 border-gray-500   flex justify-between p-4">
            <button className=" text-blue-700 font-semibold md:text-2xl  text-2xl ">&lt; <FoundationIcon fontSize='large' sx={{ color: 'white' }} /> /&gt;</button>
            <button className="text-white font-semibold md:text-2xl  text-sm"><AutoAwesomeMotionIcon fontSize='large' /></button>
            <button className="text-white font-semibold md:text-2xl  text-sm" ><PersonPinIcon fontSize='large' /></button>
            
        
        </div>
    );
}