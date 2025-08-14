import { BrowserRouter, Route, Routes } from "react-router-dom";
import Video from "./Components/Video";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
        </Routes>
      </BrowserRouter>
      {/* <AllVideos></AllVideos> */}
    </>
  );
};

export default App;
