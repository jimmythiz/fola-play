import { useContext } from "react";
import { PlayerContext } from "../PlayerContext";

const SongItem = ({image,name,desc,id}) => {
    const {playwithID} = useContext(PlayerContext)
    return ( 
        <div onClick={()=> playwithID(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img src={image} alt={desc} className="rounded" />
            <p className="font-bold mt-2 mb-1">{name}</p>
            <p className="text-slate-200 text-small">{desc}</p>
        </div>
     );
}
 
export default SongItem;