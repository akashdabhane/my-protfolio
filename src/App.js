import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Narbar from './components/Narbar';
import HomePage from './components/HomePage';
import About from './components/About';
import Work from './components/Work';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Narbar />
        <Routes>
          <Route exact
            path="/"
            element={<HomePage />} />
          <Route exact
            path="/about"
            element={<About />} />
          <Route exact
            path="/work"
            element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
