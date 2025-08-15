import { useState } from "react";
import AllVideos from "../Components/AllVideos";
import SearchBar from "../Components/SearchBar";
import VIDEOS from "./../videos.json";

const Home = () => {
  const [videos, setVideos] = useState(VIDEOS);
  const [filteredVideos, setFilteredVideos] = useState(VIDEOS);

  const handleSearchVideo = (results) => {
    setFilteredVideos(results);
  };
  console.log(videos);

  return (
    <>
      <SearchBar videos={videos} onSearchVideo={handleSearchVideo} />
      <AllVideos videos={filteredVideos} />
    </>
  );
};

export default Home;
