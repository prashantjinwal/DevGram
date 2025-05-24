export const ProjectBar = () => {
    return (
        <div className="w-full mt-5 border-b-2 border-gray-500   flex justify-between p-4">
            <button className=" font-semibold md:text-2xl text-sm bg-clip-text bg-gradient-to-r from-amber-200 to-indigo-800 text-transparent  ">Pojects</button>
            <button className="text-white font-semibold md:text-2xl  text-sm">Contributions</button>
            <button className="text-white font-semibold md:text-2xl  text-sm" >Tagged post</button>
            
        
        </div>
    );
}