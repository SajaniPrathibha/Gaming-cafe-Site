import { Routes, Route } from 'react-router-dom';
import CafeInfo from './Pages/CafeInfo'; 
import LandingPage from './Pages/LandingPage';
import ApplicationPage from './Pages/ApplicationPage';
import AuthForm from './Pages/AuthForm';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/cafeInfo" element={<CafeInfo/>} />
        <Route path="/application" element={<ApplicationPage/>} />
        <Route path="/authForm" element={<AuthForm/>} />

      </Routes>
    </div>
  );
}

export default App;
