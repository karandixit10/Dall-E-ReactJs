import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import LocomotiveScroll from "locomotive-scroll";
import { Header } from "./components";
import { Toaster } from 'react-hot-toast';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <BrowserRouter>
      <Header />
      <main className="sm:p-8 px-8 py-8 w-full bg-[#f9fafe] dark:bg-black min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
};

export default App;
