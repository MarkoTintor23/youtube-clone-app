import VIDEOS from "./../videos.json";

const getAllVideos = () => {
  return VIDEOS.map((video) => {
    return (
      <a href={video.url} rel="noreferrer" target="_blank">
        <img alt="cover" src={video.cover} />
        <h3>{video.title}</h3>
      </a>
    );
  });
};
export default getAllVideos;
