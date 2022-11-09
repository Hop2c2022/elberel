import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home, Post, BlogPost } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/blogpost" element={<BlogPost />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
