import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MapView from './pages/MapView';
import Management from './pages/Management';
import Reforestation from './pages/Reforestation';
import Resources from './pages/Resources';
import Game from './pages/Game';
import Team from './pages/Team';
import SoilAnalyzer from './pages/SoilAnalyzer';
import NotFound from './pages/NotFound';

// Article imports
import CaracteristicasBeneficios from './pages/artigos/CaracteristicasBeneficios';
import HistoriaDistribuicao from './pages/artigos/HistoriaDistribuicao';
import AmigaOuInvasora from './pages/artigos/AmigaOuInvasora';
import GuiaPoda from './pages/artigos/GuiaPoda';
import ProducaoRacaoAnimal from './pages/artigos/ProducaoRacaoAnimal';
import CompostagemAduboOrganico from './pages/artigos/CompostagemAduboOrganico';
import EspeciesNativasReflorestamento from './pages/artigos/EspeciesNativasReflorestamento';
import SistemasAgroflorestais from './pages/artigos/SistemasAgroflorestais';
import BiodiversidadeControleEcologico from './pages/artigos/BiodiversidadeControleEcologico';

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
          <Route path="equipe" element={<Team />} />
          <Route path="analise-solo" element={<SoilAnalyzer />} />
          
          {/* Article routes */}
          <Route path="artigos/caracteristicas-beneficios" element={<CaracteristicasBeneficios />} />
          <Route path="artigos/historia-distribuicao" element={<HistoriaDistribuicao />} />
          <Route path="artigos/amiga-ou-invasora" element={<AmigaOuInvasora />} />
          <Route path="artigos/guia-poda" element={<GuiaPoda />} />
          <Route path="artigos/producao-racao-animal" element={<ProducaoRacaoAnimal />} />
          <Route path="artigos/compostagem-adubo-organico" element={<CompostagemAduboOrganico />} />
          <Route path="artigos/especies-nativas-reflorestamento" element={<EspeciesNativasReflorestamento />} />
          <Route path="artigos/sistemas-agroflorestais" element={<SistemasAgroflorestais />} />
          <Route path="artigos/biodiversidade-controle-ecologico" element={<BiodiversidadeControleEcologico />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;