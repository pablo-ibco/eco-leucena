import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SistemasAgroflorestais: React.FC = () => {
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
            Sistemas Agroflorestais (SAFs) e a Leucena
          </h1>
          <div className="w-20 h-1 bg-green-600 mb-6"></div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none text-gray-700">
            
            <div className="text-lg leading-relaxed mb-8">
              <p>
                Sistemas Agroflorestais (SAFs) são métodos de uso da terra que combinam o cultivo de 
                árvores, arbustos e plantas agrícolas no mesmo espaço, promovendo um equilíbrio entre 
                produção e conservação ambiental. Esses sistemas aumentam a biodiversidade, melhoram 
                a qualidade do solo, reduzem a erosão e tornam a agricultura mais sustentável.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
              <h3 className="text-lg font-semibold mb-3 text-green-800">Papel da Leucena nos SAFs</h3>
              <p className="text-green-700">
                A leucena (Leucaena leucocephala) é uma árvore leguminosa muito usada em SAFs por sua 
                capacidade de fixar nitrogênio no solo, melhorar a fertilidade natural, fornecer forragem 
                para animais e ajudar na recuperação de áreas degradadas. Ela também ajuda a controlar 
                a erosão e serve de sombra para outras culturas, aumentando a produtividade do sistema.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Benefícios dos SAFs</h3>
              <p className="text-blue-700">
                Assim, os SAFs com leucena são uma alternativa eficiente para aumentar a produção 
                agrícola de forma sustentável e preservar o meio ambiente.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SistemasAgroflorestais; 