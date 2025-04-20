import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './utils/i18n';

function App() {
  useEffect(() => {
    document.title = 'VietnamADV - Explore Trails. Conquer Nature.';
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Additional routes will be added here */}
      </Routes>
    </Router>
  );
}

export default App;