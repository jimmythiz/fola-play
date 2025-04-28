import SideBar from "./Components/SideBar/SideBar";
import Player from "./Components/Player/Player";
import "./App.css";
import Display from "./Components/Display/Display";
import { useContext } from "react";
import { PlayerContext } from "./Components/PlayerContext";

function App() {
  const { audioref, track } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black flex flex-col">
      <div className="h-[90%] flex">
        <SideBar />
        <Display />
      </div>
      <div className="h-[10%] pt-5">
        <Player />
      </div>
      <audio ref={audioref} src={track.file} preload="auto"></audio>
    </div>
  );
}

export default App;
