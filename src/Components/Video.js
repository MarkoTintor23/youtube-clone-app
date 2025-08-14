import { useParams } from "react-router-dom";
import VIDEOS from "./../videos.json";

const Video = () => {
  const { id } = useParams();
  let videoFound = null;

  VIDEOS.forEach((video) => {
    if (video.id == id) {
      videoFound = video;
    }
  });

  if (videoFound === null) {
    return <h1>this video does not exist</h1>;
  }

  return (
    <>
      <h3>{videoFound.title}</h3>
      <h4>{videoFound.url}</h4>
      <iframe src={videoFound.url}></iframe>
    </>
  );
};

export default Video;
