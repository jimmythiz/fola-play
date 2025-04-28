import shuffle_icon from "../../assets/shuffle.png"
import previous_icon from "../../assets/prev.png"
import play_icon from "../../assets/play.png"
import pause_icon from "../../assets/pause.png"
import next_icon from "../../assets/next.png"
import repeat_icon from "../../assets/loop.png"

import assets_mic_icon from "../../assets/mic.png"
import assets_play_icon from "../../assets/plays.png"
import assets_queue_icon from "../../assets/queue.png"
import assets_speaker_icon from "../../assets/speaker.png"
import assets_volume_icon from "../../assets/volume.png"
import assets_mini_player_icon from "../../assets/mini-player.png"
import assets_zoom_icon from "../../assets/zoom.png"

import { useContext } from "react"
import { PlayerContext } from "../PlayerContext"

const Player = () => {
    const {seekBg, seekbar,play,pause,playerStatus,track,time, next, previous, seeksong} = useContext(PlayerContext)
    return ( 
        <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
            <div className="hidden lg:flex items-center gap-4">
                <img className="w-12" src={track.image} alt={track.desc} />
                <div className="flex flex-col">
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0,20)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    <img className="w-4 cursor-pointer" src={shuffle_icon} alt="shuffle" />
                    <img onClick={previous} className="w-4 cursor-pointer" src={previous_icon} alt="previous" />
                    {playerStatus ?<img onClick={pause} className="w-4 cursor-pointer" src={pause_icon} alt="pause" /> :
                     <img onClick={play} className="w-4 cursor-pointer" src={play_icon} alt="play" /> 
                    }
                    <img onClick={next} className="w-4 cursor-pointer" src={next_icon} alt="next" />
                    <img className="w-4 cursor-pointer" src={repeat_icon} alt="repeat" />
                </div>
                <div className="flex items-center gap-5">
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seeksong} className="bg-gray-300 cursor-pointer rounded-full w-[60vw] max-w-[500px]">
                        <hr ref={seekbar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75">
                <img className="w-4" src={assets_play_icon} alt="play_icon" />
                <img className="w-4" src={assets_mic_icon} alt="mic_icon" />
                <img className="w-4" src={assets_queue_icon} alt="queue_icon" />
                <img className="w-4" src={assets_speaker_icon} alt="speaker_icon" />
                <img className="w-4" src={assets_volume_icon} alt="volume_icon" />
                <div className="w-20 bg-slate-50 h-1 rounded"></div>
                <img className="w-4" src={assets_mini_player_icon} alt="mini_player_icon" />
                <img className="w-4" src={assets_zoom_icon} alt="zoom_icon" />
            </div>
        </div>
     );
}
 
export default Player;