import { Route, Routes, useLocation } from "react-router-dom";
import HomeDisplay from "../HomeDisplay/HomeDisplay";
import DisplayAlbum from "../DisplayAlbum/DisplayAlbum";
import DisplaySong from "../DisplaySong/DisplaySong";
import { useEffect, useRef } from "react";
import { albumsData } from "../../assets/assets";
import Notavailable from "../Notavailable/Notavailable";
import Musics from "../Musics/Musics";
import Podcasts from "../Podcasts/Podcasts";
import ExplorePrem from "../ExplorePrem/ExplorePrem";
import InstallApp from "../InstallApp/InstallApp";
import CreatePlaylist from "../CreatePlaylist/CreatePlaylist";

const Display = () => {
    const clickref = useRef()
    const location = useLocation()
    const isAlbum = location.pathname.includes("album")
    const albumid = isAlbum ? location.pathname.slice(-1) : ""
    const bgColor = albumsData[Number(albumid)].bgColor
    useEffect(()=>{
        if(isAlbum){
            clickref.current.style.background = `linear-gradient(${bgColor},#121212)`
        } else {
            clickref.current.style.background = `#121212`
        }
    },)
    return ( 
        <div ref={clickref} className="w-[100%] m-0 pt-6 rounded bg-[121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
            <Routes>
                <Route path="/" element={<HomeDisplay/>}/>
                <Route path='/album/:id' element={<DisplayAlbum/>}/>
                <Route path='/song/:id' element={<DisplaySong/>}/>
                <Route path="*" element={<Notavailable/>}/>
                <Route path="/songs" element={<Musics/>}/>
                <Route path="/podcasts" element={<Podcasts/>}/>
                <Route path="/install" element={<InstallApp/>}/>
                <Route path="/explorepremium" element={<ExplorePrem/>}/>
                <Route path="/createPlaylist" element={<CreatePlaylist/>}/>

                
            </Routes>
        </div>
     );
}
 
export default Display;