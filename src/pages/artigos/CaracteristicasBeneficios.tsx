import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaracteristicasBeneficios: React.FC = () => {
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
            Leucena (Leucaena leucocephala) – Características e Benefícios
          </h1>
          <div className="w-20 h-1 bg-green-600 mb-6"></div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none text-gray-700">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Características</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Planta leguminosa arbustiva ou arbórea.</li>
                <li>Crescimento rápido e resistente à seca.</li>
                <li>Folhas pequenas e flores brancas.</li>
                <li>Produz muita biomassa (matéria verde).</li>
                <li>Fixa nitrogênio no solo, melhorando a fertilidade.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Benefícios</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Forragem rica em proteína para alimentação de animais.</li>
                <li>Adubo verde, usado para recuperar solos pobres.</li>
                <li>Controle da erosão com suas raízes profundas.</li>
                <li>Serve como sombra, cerca viva e lenha.</li>
                <li>Ajuda em sistemas sustentáveis e agroflorestais.</li>
              </ul>
            </section>

            <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold mb-2 text-yellow-800">Observação Importante</h3>
              <p className="text-yellow-700">
                Seu uso deve ser equilibrado, pois em excesso pode ser tóxica para alguns animais.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CaracteristicasBeneficios; 