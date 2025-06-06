
import ResponsiveButton from "../buttons/ReusebleButton";
import  Profile_pic  from "/ProfilePIC.jpg"



export const Profile_H = () => {



  return (


    <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-8 flex-wrap bg-gray-900 rounded-lg shadow-md">
      
      <div className="flex flex-col items-center text-center max-w-xs">
        <img
          src={Profile_pic}
          alt="Profile"
          className="rounded-full w-24 h-24 md:w-40 md:h-40 object-cover border-2 border-amber-100"
        />
        <p className="text-white text-base md:text-2xl font-semibold py-3 ">
          Prashant_2005 
        </p>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          👋 Hi there! I'm Prashant, a passionate FullStack Web Developer 🚀 Let's build something amazing together!
        </p>

        <div className="flex gap-3 md:w-full w-[80%] justify-center my-1" >
          <ResponsiveButton label={"Edit Profile"} onClick={null} bgColor={"bg-white"} textColor={"text-black"} border={null}   />
          <ResponsiveButton label={"Share Profile"} onClick={null} bgColor={"bg-transparent"} textColor={"text-white"} border={"border-2 border-amber-50"}  />
        </div>

      </div>


      {/* Follower Info */}
      <div className="flex gap-8 md:gap-[5em] md:mr-[5em] justify-center items-center text-center">
        <div className="text-white text-sm md:text-2xl font-semibold flex flex-col">
          Following
          <span className="font-normal text-blue-500 cursor-pointer hover:underline">239</span>
        </div>
        <div className="text-white text-sm md:text-2xl font-semibold flex flex-col">
          Followers
          <span className="font-normal text-blue-500 cursor-pointer hover:underline">134k</span>
        </div>
        <div className="text-white text-sm md:text-2xl font-semibold flex flex-col">
          Pojects
          <span className="font-normal text-blue-500 cursor-pointer hover:underline">38</span>
        </div>
      </div>

    </div>
  );
};
