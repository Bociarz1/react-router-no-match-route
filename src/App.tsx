import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/about" element={<About />}/>
        {/* No match ROUTE page */}
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </>
  );
}

export default App;
