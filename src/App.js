import './App.css';
import Header from './pages/Share/Header/Header';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home/Home';


function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Header></Header>
      
      <Routes>
      <Route path="/" element={<Home />} />
        
      </Routes>

    </div>

  );
}

export default App;