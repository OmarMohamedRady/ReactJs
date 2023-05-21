// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Api/Header";
import Home from "./Components/Api/Home";
import MusicianDetails from "./Components/Api/MusicianDetails";
import Error from "./Components/Api/Error";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<MusicianDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
