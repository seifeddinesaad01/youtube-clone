import logo from "./logo.svg";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  VideoDetail,
  Feed,
  ChannelDetail,
  SearchFeed,
} from "./components";

console.log(Navbar, "dgbsdbg");
console.log(Box, "box");
const App = () => {
  return (
    <Box sx={{ background: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/Search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
};

export default App;
