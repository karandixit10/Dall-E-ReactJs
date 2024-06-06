import { Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link to="/create-post">
          <button className="bg-[#6469ff] px-4 py-2 rounded-md text-white font-inter font-medium">Create Post</button>
        </Link>
      </header>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />

      <main className="sm:p-8 px-8 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
