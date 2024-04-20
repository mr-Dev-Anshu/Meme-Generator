import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
function App() {
  return (

    <div>
      <p className="p-3 px-4 rounded-md text-white font-bold text-xl w-48 ml-[40%] m-4">Meme Generator</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>

  );
}

export default App;
