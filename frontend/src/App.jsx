import { Routes, Route } from 'react-router-dom';
import CafeInfo from './Pages/CafeInfo'; 
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/cafeInfo" element={<CafeInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
