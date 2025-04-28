import home_icon from "../../assets/home.png";
import stack_icon from "../../assets/stack.png";
import arrow_icon from "../../assets/arrow.png";
import plus_icon from "../../assets/plus.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const SideBar = () => {
  const navigate = useNavigate()

  return (
    <div className="w-[25%] h-full flex-col p-2 gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div onClick={()=>navigate("/")}className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={home_icon} alt="home button" />
          <p className="font-bold">Home</p>
        </div>
        
<SearchBar/>

      </div>
      <div className="bg-[#121212] rounded h-[85%]">
        <div className="flex items-center p-4 justify-between">
          <div onClick={()=>navigate("/")} className="flex items-center gap-3">
            <img className="w-8 cursor-pointer" src={stack_icon} alt="stack button" />
            <p className="font-semibold cursor-pointer">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img onClick={()=>navigate("/")} className="w-5 cursor-pointer" src={arrow_icon} alt="arrow button" />
            <img onClick={()=>navigate("/")} className="w-5 cursor-pointer" src={plus_icon} alt="plus button" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1 className="font-semibold">Create your first playlist</h1>
            <p className="font-light">It's easy, we would help you </p>
            <Link to={"/createPlaylist"} className="rounded-full bg-white text-black px-4 py-1.5 cursor-pointer text-[15px] mt-4">Create Playlist</Link>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1 className="font-semibold">Let's find some podcast to follow</h1>
            <p className="font-light">We'll keep you updated on latest episode </p>
            <Link to={"/podcasts"} className="rounded-full bg-white text-black px-4 py-1.5 cursor-pointer text-[15px] mt-4">Browse Podcasts</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
