import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext()

const PlayerContextProvider = (props) =>{
    const audioref = useRef()
    const seekBg = useRef()
    const seekbar = useRef()
    const [track, setrack] = useState(songsData[0])
    const [playerStatus, setPlayerStatus] = useState(false)
    const [time,setTime] = useState({
        currentTime:{
            second:0,
            minute: 0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })
    const play =()=>{
        if (audioref.current) {
        audioref.current.play();
        setPlayerStatus(true)
    }}
    const pause =()=>{
        audioref.current.pause();
        setPlayerStatus(false)
    }
    const playwithID = async (id)=>{
        await setrack(songsData[id])
        await audioref.current.play()
        setPlayerStatus(true)
    }
    const previous = async ()=>{
        if (track.id>0){
            await setrack(songsData[track.id - 1])
            await audioref.current.play()
            setPlayerStatus(true)
        }
    }
    const next = async ()=>{
        if (track.id<songsData.length - 1){
            await setrack(songsData[track.id +  1])
            await audioref.current.play()
            setPlayerStatus(true)
        }
    }
    const seeksong = async (e) =>{
        audioref.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioref.current.duration)
    }
    useEffect(()=>{
        setTimeout(() => {
            audioref.current.ontimeupdate = () =>{
                
        seekbar.current.style.width = (Math.floor(audioref.current.currentTime/audioref.current.duration*100)) + "%"
                setTime({currentTime:{
                    second: Math.floor(audioref.current.currentTime%60),
                    minute: Math.floor(audioref.current.currentTime/60)
                },
                totalTime:{
                    second:Math.floor(audioref.current.duration%60),
                    minute:Math.floor(audioref.current.duration/60)
                }
            }
                )
            }
        }, 1000);
    },[audioref])

    const contextValue = {
        audioref,
        seekBg,
        seekbar,
        track, setrack,
        playerStatus,setPlayerStatus,
        time,setTime,
        play,
        pause,
        playwithID,
        next, previous,
        seeksong
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;
