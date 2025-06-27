import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompostagemAduboOrganico: React.FC = () => {
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
            Compostagem e Produção de Adubo Orgânico
          </h1>
          <div className="w-20 h-1 bg-green-600 mb-6"></div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none text-gray-700">
            
            <div className="text-lg leading-relaxed mb-8">
              <p>
                A leucena (Leucaena leucocephala) é uma planta rica em nitrogênio e muito eficiente na 
                compostagem e na produção de adubo orgânico. Suas folhas, galhos finos e restos de poda 
                são usados como matéria verde no processo, acelerando a decomposição e enriquecendo o composto.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
              <h3 className="text-lg font-semibold mb-3 text-green-800">Processo de Compostagem</h3>
              <p className="text-green-700 mb-4">
                Na compostagem, a leucena ajuda a equilibrar a relação carbono/nitrogênio (C/N), essencial 
                para a formação de um adubo de qualidade. O material deve ser picado e misturado com 
                resíduos secos, como palha ou folhas mortas.
              </p>
              <p className="text-green-700">
                O composto pode ficar pronto em cerca de 45 a 90 dias, com revolvimento regular.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Adubo Verde</h3>
              <p className="text-blue-700">
                Além disso, a leucena também pode ser usada como adubo verde, sendo plantada e incorporada 
                ao solo ainda jovem, melhorando a fertilidade, a estrutura do solo e estimulando a vida microbiana.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-semibold mb-3 text-yellow-800">Benefícios Sustentáveis</h3>
              <p className="text-yellow-700">
                Esse uso sustentável da leucena reduz o desperdício, recupera o solo e substitui fertilizantes químicos.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CompostagemAduboOrganico; 