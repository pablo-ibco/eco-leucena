import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProducaoRacaoAnimal: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to="/recursos" 
            className="flex items-center text-green-700 hover:text-green-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar aos Recursos
          </Link>
        </div>

        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Produção de Ração Animal com Leucena
          </h1>
          <div className="w-20 h-1 bg-green-600 mb-6"></div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none text-gray-700">
            
            <div className="text-lg leading-relaxed mb-8">
              <p>
                A leucena (Leucaena leucocephala) é uma planta leguminosa rica em proteína, muito utilizada 
                na alimentação de animais ruminantes, como bovinos, ovinos e caprinos. Suas folhas e ramos 
                finos são aproveitados como forragem verde, feno ou silagem, contribuindo para o ganho de 
                peso e aumento da produção de leite.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
              <h3 className="text-lg font-semibold mb-3 text-green-800">Colheita para Ração</h3>
              <p className="text-green-700">
                A colheita para ração é feita por meio de podas a cada 30 a 60 dias, cortando a planta 
                entre 30 e 50 cm do solo, o que estimula o rebroto e mantém a produtividade. A leucena 
                é especialmente útil em regiões secas ou com solos fracos, por sua resistência e alta 
                capacidade de adaptação.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
              <h3 className="text-lg font-semibold mb-3 text-yellow-800">⚠️ Atenção: Mimosina</h3>
              <p className="text-yellow-700">
                Apesar de nutritiva, contém uma substância chamada mimosina, que pode ser tóxica em 
                grandes quantidades. Por isso, recomenda-se que a leucena seja usada misturada a outras 
                forragens na dieta animal.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Vantagens</h3>
              <p className="text-blue-700">
                É uma alternativa sustentável, econômica e eficiente para a produção de ração animal.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProducaoRacaoAnimal; 