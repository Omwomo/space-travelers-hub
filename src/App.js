import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './compnents/Navigation';
import Rockets from './compnents/Rockets';
import Missions from './compnents/Missions';
import MyProfile from './compnents/MyProfile';

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <div className="App">
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/my-profile" element={<MyProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
