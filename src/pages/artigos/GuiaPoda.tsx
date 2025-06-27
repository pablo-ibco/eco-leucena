import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GuiaPoda: React.FC = () => {
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
            Guia de Poda da Leucena (Leucaena leucocephala)
          </h1>
          <div className="w-20 h-1 bg-green-600 mb-6"></div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none text-gray-700">
            
            <div className="text-lg leading-relaxed mb-8">
              <p>
                A poda da leucena é essencial para controlar o crescimento, aumentar a produção de folhas e 
                adaptar a planta para diferentes usos (forragem, cerca viva, sombra ou adubo verde). 
                Existem quatro tipos principais:
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">1. Poda de Formação</h3>
                <p className="text-blue-700">
                  Feita entre 2 e 4 meses após o plantio para definir a estrutura da planta.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-800">2. Poda de Condução</h3>
                <p className="text-green-700">
                  Direciona o formato da leucena conforme o uso desejado.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold mb-3 text-yellow-800">3. Poda de Produção (Forragem)</h3>
                <p className="text-yellow-700">
                  Feita a cada 30 a 60 dias, cortando a planta entre 30 e 50 cm do solo, estimulando o rebroto.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold mb-3 text-purple-800">4. Poda de Manutenção</h3>
                <p className="text-purple-700">
                  Remove galhos secos ou doentes e pode ser feita a qualquer momento.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Dicas Importantes</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>As ferramentas devem estar limpas e afiadas.</li>
                <li>Evite podas em períodos de seca ou chuvas intensas.</li>
                <li>Podas regulares mantêm a planta produtiva, saudável e fácil de manejar.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaPoda; 