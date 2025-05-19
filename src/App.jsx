import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Figure1 from './components/Figure1';
import Figure2 from './components/Figure2';
import Figure3 from './components/Figure3';
import Figure4 from './components/Figure4';
import FigureDetail from './components/FigureDetail'; // A dynamic component to show details based on ID

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/figure1" element={<Figure1 />} />
        <Route path="/figure2" element={<Figure2 />} />
        <Route path="/figure3" element={<Figure3 />} />
        <Route path="/figure4" element={<Figure4 />} />
        <Route path="/image/:id" element={<FigureDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
