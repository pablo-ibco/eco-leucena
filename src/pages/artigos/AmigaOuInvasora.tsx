import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AmigaOuInvasora: React.FC = () => {
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
            Leucena: Amiga ou Vilã?
          </h1>
          <div className="w-20 h-1 bg-green-600 mb-6"></div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none text-gray-700">
            
            <div className="text-lg leading-relaxed">
              <p className="mb-6">
                A leucena é uma planta leguminosa originária da América Central, muito usada no Brasil por seus 
                benefícios na agricultura e pecuária. Ela melhora o solo, serve como forragem rica em proteína, 
                controla a erosão e cresce bem em regiões secas.
              </p>
              
              <p className="mb-6">
                Porém, também pode se comportar como invasora, espalhando-se rapidamente e prejudicando plantas nativas. 
                Por isso, a leucena pode ser uma aliada quando bem controlada, mas um problema ambiental quando 
                usada sem manejo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-800">✅ Benefícios (Amiga)</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Melhora a qualidade do solo</li>
                  <li>Forragem rica em proteína</li>
                  <li>Controle de erosão</li>
                  <li>Resistência à seca</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold mb-3 text-red-800">⚠️ Riscos (Vilã)</h3>
                <ul className="list-disc pl-4 space-y-1 text-red-700">
                  <li>Comportamento invasor</li>
                  <li>Espalhamento rápido</li>
                  <li>Prejuízo a plantas nativas</li>
                  <li>Necessita manejo adequado</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AmigaOuInvasora; 