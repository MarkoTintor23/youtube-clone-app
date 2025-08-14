import { useParams } from "react-router-dom";

const Video = () => {
  const { id } = useParams();
  console.log(id);
  return <p></p>;
};

export default Video;
