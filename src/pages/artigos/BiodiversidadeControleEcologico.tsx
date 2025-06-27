import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BiodiversidadeControleEcologico: React.FC = () => {
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
            Biodiversidade e Controle Ecológico
          </h1>
          <div className="w-20 h-1 bg-green-600 mb-6"></div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none text-gray-700">
            
            <div className="text-lg leading-relaxed mb-8">
              <p>
                A leucena se espalha rápido, forma moitas fechadas e impede que outras plantas cresçam. 
                Isso prejudica o solo e diminui a biodiversidade da área.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
              <h3 className="text-lg font-semibold mb-3 text-red-800">Problemas da Invasão</h3>
              <ul className="list-disc pl-6 space-y-2 text-red-700">
                <li>Espalhamento rápido</li>
                <li>Formação de moitas fechadas</li>
                <li>Impede crescimento de outras plantas</li>
                <li>Prejudica o solo</li>
                <li>Diminui a biodiversidade</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
              <h3 className="text-lg font-semibold mb-3 text-green-800">Estratégias de Controle</h3>
              <ul className="list-disc pl-6 space-y-2 text-green-700">
                <li>Cortar a planta de forma repetida, sem deixar os brotos crescerem</li>
                <li>Mudas pequenas devem ser arrancadas com a raiz</li>
                <li>Replantar espécies nativas no lugar da leucena</li>
                <li>Usar adubo orgânico e compostagem</li>
                <li>Monitoramento constante</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Objetivo Final</h3>
              <p className="text-blue-700">
                O monitoramento constante evita que a leucena volte a dominar a área e garante o 
                equilíbrio ecológico, ajudando a natureza a se recuperar.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodiversidadeControleEcologico; 