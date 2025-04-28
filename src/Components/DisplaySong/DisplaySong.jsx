import { useContext } from "react";
import { PlayerContext } from "../PlayerContext";

const DisplaySong = ({ image, name, desc, id }) => {
  const { playwithID } = useContext(PlayerContext);
  return (
    <div
      onClick={() => playwithID(id)}
      className="w-1/2 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] flex items-center gap-5"
    >
      <img src={image} alt={desc} className="rounded" />
      <div className="flex flex-col">
        <p className="font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-200 text-small">{desc}</p>
      </div>
    </div>
  );
};

export default DisplaySong;
