import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MapView from './pages/MapView';
import Management from './pages/Management';
import Reforestation from './pages/Reforestation';
import Resources from './pages/Resources';
import Game from './pages/Game';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mapa" element={<MapView />} />
          <Route path="manejo" element={<Management />} />
          <Route path="reflorestamento" element={<Reforestation />} />
          <Route path="recursos" element={<Resources />} />
          <Route path="jogo" element={<Game />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;