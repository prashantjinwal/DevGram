export const SideBar = () => {
    return(
        <>
      <div className="bg-black  border-r-1 border-white  h-screen w-[20%]">
        <h3 className="fonttt text-4xl pt-5 px-8 text-white font-semibold ">Dev.Gram</h3>
        <ul className="flex flex-col gap-5 items-start text-left w-full px-8 pt-12">
            <li className="bg-amber-300 w-full text-xl font-semibold py-2 px-2 cursor-pointer">Home</li>
            <li className="bg-amber-300 w-full text-xl font-semibold py-2 px-2 cursor-pointer">Explore</li>
            <li className="bg-amber-300 w-full text-xl font-semibold py-2 px-2 cursor-pointer">Notifications</li>
            <li className="bg-amber-300 w-full text-xl font-semibold py-2 px-2 cursor-pointer">Communities</li>
            <li className="bg-amber-300 w-full text-xl font-semibold py-2 px-2 cursor-pointer">Profile</li>
            <li className="bg-amber-300 w-full text-xl font-semibold py-2 px-2 mt-5 cursor-pointer rounded-2xl text-center ">Post</li>
        </ul>
        
      </div>

        
        </>
    );

}