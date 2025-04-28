import { Link, useNavigate } from "react-router-dom";
import goback_icon from "../../assets/left_arrow.png";
import goforward_icon from "../../assets/right_arrow.png";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
    <div className="flex w-full justify-between items-center font-semibold px-4">
        <div className="flex items-center gap-2">
            <img onClick={()=> navigate(-1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={goback_icon} alt="goback_icon" />
            <img onClick={()=> navigate(1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={goforward_icon} alt="goforward_icon" />
        </div>
        <div className="flex items-center gap-4">
            <Link to={"/explorepremium"} className="bg-white text-black text-[15px] rounded-2xl hidden md:block px-4 py-1 cursor-pointer">Explore Premium</Link>
            <Link to={"/install"} className="bg-black px-3 py-1 rounded-2xl text-[15px] cursor-pointer">Install App</Link>
            <p className="bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">F</p>
        </div>    
    </div>
    <div className="flex items-center gap-2 mt-4 px-4">
        <Link to={"/"} className={location.pathname === "/" || "" ? 'bg-white text-black px-4 py-1 rounded-2xl cursor-pointer' : 'bg-black text-white px-4 py-1 rounded-2xl cursor-pointer' }>All</Link>
        <Link to={"/songs"} className={location.pathname === "/songs" || "" ? 'bg-white text-black px-4 py-1 rounded-2xl cursor-pointer' : 'bg-black text-white px-4 py-1 rounded-2xl cursor-pointer' }>Music</Link>
        <Link to={"/podcasts"} className={location.pathname === "/podcasts" || "" ? 'bg-white text-black px-4 py-1 rounded-2xl cursor-pointer' : 'bg-black text-white px-4 py-1 rounded-2xl cursor-pointer' }>Podcasts</Link>
    </div>
    <div className="mt-5 lg:hidden">
      <SearchBar/>
    </div>
    </>
  );
};

export default NavBar;
