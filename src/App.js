import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Poem from "./pages/Poem";
import Shayari from "./pages/Shayari";
import Story from "./pages/Story";
import Joke from "./pages/Joke";
import Letter from "./pages/Letter";
import Video from "./pages/Video";
import Anniversary from "./pages/Anniversary";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/poem" element={<Poem />} />
        <Route path="/shayari" element={<Shayari />} />
        <Route path="/story" element={<Story />} />
        <Route path="/joke" element={<Joke />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/video" element={<Video />} />
        <Route path="/anniversary" element={<Anniversary />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;