import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { albumsData, songsData } from "../../assets/assets";
import spotify_logo from "../../assets/spotify_logo.png"
import clock_icon from "../../assets/clock_icon.png"
import { useContext } from "react";
import { PlayerContext } from "../PlayerContext";

const DisplayAlbum = () => {
    const {id} = useParams()
    const albumData = albumsData[id]
    const {playwithID} = useContext(PlayerContext)
    return ( 
        <>
        <NavBar/>
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end ml-6">
            <img src={albumData.image} alt={albumData.desc} className="w-48 rounded"/>
            <div className="flex flex-col">
                <p>Playlist</p>
                <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className="mt-1">
                    <img src={spotify_logo} alt="" className="inline-block w-5 pr-2"/>
                    <b className="mr-2">Spotify</b>
                    • <b>224,243</b> likes 
                    • <b>50 Songs  </b>
                    <br /> <b>3 hours 30 minutes</b>
                </p>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                <p><b className="mr-4">#</b>Title</p>
                <p>Album</p>
                <p className="hidden md:block">Upload Date</p>
                <img src={clock_icon} alt="" className="m-auto w-4 hidden md:block"/>
        </div>
        <hr />
        {songsData.map((item,index)=>(
                <div onClick={()=>playwithID(item.id)} className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer" key={index}>
                    <p className="text-white">
                        <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
                        <img src={item.image} alt=""  className="hidden lg:inline-block w-10 mr-5" />
                        <span>{item.name}</span>
                    </p>
                    <p className="text-[15px] ">{albumData.name}</p>
                    <p className="text-[15px] hidden md:block">5 days ago</p>
                    <p className="text-[15px] text-center hidden md:block">{item.duration}</p>
                </div>
        ))}
        </>
        
     );
}
 
export default DisplayAlbum;