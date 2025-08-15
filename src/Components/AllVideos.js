const getAllVideos = ({ videos }) => {
  return videos.map((video) => {
    return (
      <a href={video.url} key={video.id} rel="noreferrer" target="_blank">
        <img alt="cover" src={video.cover} />
        <h3>{video.title}</h3>
      </a>
    );
  });
};
export default getAllVideos;
