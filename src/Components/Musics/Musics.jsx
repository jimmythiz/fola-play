import NavBar from "../NavBar/NavBar";
import {
    songsData as songlist,
} from "../../assets/assets";
import DisplaySong from "../DisplaySong/DisplaySong";
import { useSearch } from "../../Components/SearchContext";

import { useEffect, useState } from "react";


const Musics = () => {
    
  const [songstate, setsongstate] = useState([]);
  const { debouncedSearchValue, isSearching } = useSearch();
    useEffect(() => {
      setsongstate(songlist);
    }, []);

    const filteredSongs = songstate.filter((item) =>
        item.name.toLowerCase().includes(debouncedSearchValue.toLowerCase())
      );
    
  
  return (
    <>
      <NavBar />
      {isSearching && (
        <div className="flex items-center justify-center my-4">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
          <span className="ml-2 text-sm text-white">Searching...</span>
        </div>
      )}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        {filteredSongs.length > 0 ? (
          <div className="flex overflow-auto flex-col  w-full">
            {filteredSongs.map((item, index) => (
              <DisplaySong
                key={index}
                name={item.name}
                image={item.image}
                desc={item.desc}
                id={item.id}
              />
            ))}
          </div>
        ) : (
          <p className="text-white text-sm italic">No songs found.</p>
        )}
      </div>
    </>
  );
};

export default Musics;
