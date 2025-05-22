import  Profile_pic  from "/ProfilePIC.jpg"

export const Profile_H = () =>{
    return(
        <div className="flex flex-row p-4">

            <div className="flex justify-center flex-col flex-1/3">
            <div className="w-50 h-50  overflow-hidden "> 
                <img className="rounded-full w-full h-full object-cover" src={Profile_pic} alt="Profile" />
            </div>
            <p>👋 Hi there! I'm Prashant, A passionate FullStack Web developer 🚀 Let's build something amazing together!</p>
            </div>

            <div className="flex justify-center">
                <p className="text-white">foelelke</p>
            </div>

        </div>
    );
}