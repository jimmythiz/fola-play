import NavBar from "../NavBar/NavBar";
import {
  albumsData as albumlist,
  songsData as songlist,
} from "../../assets/assets";
import AlbumItem from "../AlbumItem/AlbumItem";
import SongItem from "../SongItem/SongItem";
import { useSearch } from "../../Components/SearchContext";

import { useEffect, useState } from "react";

const HomeDisplay = () => {
  const [albumstate, setAlbumstate] = useState([]);
  const [songstate, setsongstate] = useState([]);
  const { debouncedSearchValue, isSearching } = useSearch();

  useEffect(() => {
    setAlbumstate(albumlist);
    setsongstate(songlist);
  }, []);

  const filteredAlbums = albumstate.filter((item) =>
    item.name.toLowerCase().includes(debouncedSearchValue.toLowerCase())
  );

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
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        {filteredAlbums.length > 0 ? (
          <div className="flex overflow-auto">
            {filteredAlbums.map((item, index) => (
              <AlbumItem
                key={index}
                name={item.name}
                image={item.image}
                desc={item.desc}
                id={item.id}
              />
            ))}
          </div>
        ) : (
          <p className="text-white text-sm italic">No albums found.</p>
        )}
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        {filteredSongs.length > 0 ? (
    <div className="flex overflow-auto">
      {filteredSongs.map((item, index) => (
        <SongItem
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

export default HomeDisplay;
