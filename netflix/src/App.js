import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { Home } from "./pages";
import { SignPage } from "./pages/SignPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/signPage" element={<SignPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
