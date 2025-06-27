import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const HistoriaDistribuicao: React.FC = () => {
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
            História e Distribuição da Leucena no Brasil
          </h1>
          <div className="w-20 h-1 bg-green-600 mb-6"></div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none text-gray-700">
            
            <div className="text-lg leading-relaxed">
              <p className="mb-6">
                A leucena foi trazida para o Brasil por volta da década de 1940, vinda da América Central, 
                principalmente do México. Começou a ser usada em pesquisas agrícolas e, nos anos 1970 e 1980, 
                se espalhou como forragem para animais e planta útil em solos pobres.
              </p>
              
              <p className="mb-6">
                Hoje, é encontrada em várias regiões do Brasil, especialmente no Nordeste, Sudeste e Centro-Oeste, 
                sendo usada para:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
                <li>Alimentação animal</li>
                <li>Recuperação de solos</li>
                <li>Controle de erosão</li>
                <li>Sombreamento em lavouras</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoriaDistribuicao; 