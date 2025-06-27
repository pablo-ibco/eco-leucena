import React, { useState } from 'react';
import { Calculator, Leaf, Info } from 'lucide-react';

// Sample native species data
const nativeSpecies = [
  { id: 1, name: 'Ipê-amarelo', scientific: 'Handroanthus albus', density: 25, soil: 'Diversos tipos', climate: 'Tropical e subtropical' },
  { id: 2, name: 'Jatobá', scientific: 'Hymenaea courbaril', density: 20, soil: 'Argiloso a arenoso', climate: 'Tropical' },
  { id: 3, name: 'Aroeira', scientific: 'Schinus terebinthifolia', density: 30, soil: 'Arenoso a argiloso', climate: 'Tropical e subtropical' },
  { id: 4, name: 'Angico', scientific: 'Anadenanthera colubrina', density: 22, soil: 'Diversos tipos', climate: 'Tropical' },
  { id: 5, name: 'Pau-brasil', scientific: 'Paubrasilia echinata', density: 18, soil: 'Bem drenados', climate: 'Tropical' },
  { id: 6, name: 'Cedro', scientific: 'Cedrela fissilis', density: 20, soil: 'Fértil e drenado', climate: 'Tropical e subtropical' },
];

interface CalculationResult {
  totalPlants: number;
  speciesDistribution: Array<{
    id: number;
    name: string;
    quantity: number;
  }>;
  leucenaRemoval: number;
  timeEstimate: string;
}

const Reforestation: React.FC = () => {
  const [area, setArea] = useState<number>(1);
  const [leucenaPercentage, setLeucenaPercentage] = useState<number>(70);
  const [soilType, setSoilType] = useState<string>('mixed');
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [showSpeciesInfo, setShowSpeciesInfo] = useState<number | null>(null);

  const calculateReforestation = () => {
    // Basic calculation: 1600 plants per hectare is a common density
    const baseDensity = 1600;
    const totalPlants = Math.ceil(area * baseDensity);
    
    // Calculate how much Leucena to remove (based on percentage)
    const leucenaRemoval = Math.ceil((leucenaPercentage / 100) * area * 1000);
    
    // Calculate species distribution based on soil type
    let speciesWeights: { [key: number]: number } = {};
    
    if (soilType === 'sandy') {
      speciesWeights = { 1: 0.15, 2: 0.1, 3: 0.3, 4: 0.15, 5: 0.2, 6: 0.1 };
    } else if (soilType === 'clay') {
      speciesWeights = { 1: 0.2, 2: 0.25, 3: 0.15, 4: 0.2, 5: 0.1, 6: 0.1 };
    } else { // mixed
      speciesWeights = { 1: 0.2, 2: 0.15, 3: 0.2, 4: 0.15, 5: 0.15, 6: 0.15 };
    }
    
    const speciesDistribution = nativeSpecies.map(species => ({
      id: species.id,
      name: species.name,
      quantity: Math.ceil(totalPlants * speciesWeights[species.id])
    }));
    
    // Estimate time based on area and Leucena percentage
    let timeEstimate = '';
    if (area < 2) {
      timeEstimate = '6-12 meses';
    } else if (area < 5) {
      timeEstimate = '1-2 anos';
    } else {
      timeEstimate = '2-3 anos';
    }
    
    // Adjust time based on Leucena percentage
    if (leucenaPercentage > 80) {
      timeEstimate += ' (período maior devido à alta concentração de Leucena)';
    }
    
    setResults({
      totalPlants,
      speciesDistribution,
      leucenaRemoval,
      timeEstimate
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Calculadora de Reflorestamento</h1>
        <p className="text-gray-600 mb-8">
          Calcule a quantidade de mudas e espécies nativas necessárias para recuperar áreas com Leucena
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <Calculator className="h-6 w-6 text-green-700 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Dados da Área</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tamanho da Área (hectares)
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={area}
                    onChange={(e) => setArea(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Percentual de Cobertura de Leucena (%)
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={leucenaPercentage}
                    onChange={(e) => setLeucenaPercentage(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                  <div className="text-center font-medium text-green-700 mt-2">
                    {leucenaPercentage}%
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Solo Predominante
                  </label>
                  <select
                    value={soilType}
                    onChange={(e) => setSoilType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="sandy">Arenoso</option>
                    <option value="clay">Argiloso</option>
                    <option value="mixed">Misto</option>
                  </select>
                </div>
                
                <button
                  onClick={calculateReforestation}
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  <Leaf className="h-5 w-5 mr-2" />
                  Calcular Reflorestamento
                </button>
              </div>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="md:col-span-2">
            {results ? (
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Resultados do Cálculo</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-md border border-green-100">
                    <h3 className="font-medium text-green-800 mb-2">Total de Mudas Necessárias</h3>
                    <p className="text-3xl font-bold text-green-700">{results.totalPlants}</p>
                    <p className="text-sm text-gray-600 mt-1">Para {area} hectare(s)</p>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-md border border-amber-100">
                    <h3 className="font-medium text-amber-800 mb-2">Leucena a Remover</h3>
                    <p className="text-3xl font-bold text-amber-700">{results.leucenaRemoval} kg</p>
                    <p className="text-sm text-gray-600 mt-1">Biomassa estimada</p>
                  </div>
                </div>
                
                <h3 className="font-semibold text-green-800 mb-3">Distribuição de Espécies Recomendada</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {results.speciesDistribution.map(species => (
                      <div key={species.id} className="flex items-center justify-between bg-white p-3 rounded border border-gray-100">
                        <div>
                          <span className="block font-medium">{species.name}</span>
                          <span className="block text-sm text-gray-600">{species.quantity} mudas</span>
                        </div>
                        <button
                          onClick={() => setShowSpeciesInfo(species.id)}
                          className="text-green-700 hover:text-green-800"
                          aria-label={`Informações sobre ${species.name}`}
                        >
                          <Info className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                  <h3 className="font-medium text-blue-800 mb-2">Tempo Estimado para Recuperação</h3>
                  <p className="text-lg font-semibold text-blue-700">{results.timeEstimate}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Considerando manejo adequado e condições climáticas favoráveis
                  </p>
                </div>
                
                {showSpeciesInfo !== null && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
                    {nativeSpecies.filter(s => s.id === showSpeciesInfo).map(species => (
                      <div key={species.id} className="relative">
                        <button
                          onClick={() => setShowSpeciesInfo(null)}
                          className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
                          aria-label="Fechar informações"
                        >
                          ✕
                        </button>
                        <h3 className="font-semibold text-green-800 mb-2">{species.name}</h3>
                        <p className="text-gray-600 italic mb-3">{species.scientific}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="mb-1"><span className="font-medium">Densidade ideal:</span> {species.density} plantas/100m²</p>
                            <p><span className="font-medium">Tipo de solo:</span> {species.soil}</p>
                          </div>
                          <div>
                            <p className="mb-1"><span className="font-medium">Clima:</span> {species.climate}</p>
                            <p><span className="font-medium">Benefícios:</span> Recuperação de solo, abrigo para fauna</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 h-full flex flex-col justify-center items-center text-center">
                <Leaf className="h-16 w-16 text-green-200 mb-4" />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Calcule o Reflorestamento</h2>
                <p className="text-gray-600 max-w-md">
                  Insira os dados da sua área para receber recomendações personalizadas sobre o número de mudas
                  e as espécies mais adequadas para substituir a Leucena.
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Tips Section */}
        <div className="mt-8 bg-green-50 rounded-lg p-6 border border-green-200">
          <h2 className="text-xl font-semibold mb-4 text-green-800">Dicas para o Reflorestamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-green-700 mb-2">Preparação do Solo</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 border border-green-300 flex items-center justify-center text-green-700 font-bold text-xs mt-0.5 mr-2">
                    1
                  </div>
                  <span>
                    Remova gradualmente a Leucena, mantendo algumas árvores para proteção inicial do solo.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 border border-green-300 flex items-center justify-center text-green-700 font-bold text-xs mt-0.5 mr-2">
                    2
                  </div>
                  <span>
                    Utilize a biomassa da Leucena como cobertura morta ou composto para enriquecer o solo.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 border border-green-300 flex items-center justify-center text-green-700 font-bold text-xs mt-0.5 mr-2">
                    3
                  </div>
                  <span>
                    Faça análise do solo para identificar possíveis deficiências nutricionais.
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-green-700 mb-2">Plantio e Manutenção</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 border border-green-300 flex items-center justify-center text-green-700 font-bold text-xs mt-0.5 mr-2">
                    1
                  </div>
                  <span>
                    Plante em períodos chuvosos para aumentar a taxa de sobrevivência das mudas.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 border border-green-300 flex items-center justify-center text-green-700 font-bold text-xs mt-0.5 mr-2">
                    2
                  </div>
                  <span>
                    Utilize espaçamento adequado entre as mudas (geralmente 3x2m ou 3x3m).
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 border border-green-300 flex items-center justify-center text-green-700 font-bold text-xs mt-0.5 mr-2">
                    3
                  </div>
                  <span>
                    Monitore regularmente e controle o surgimento de novas plantas de Leucena.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reforestation;