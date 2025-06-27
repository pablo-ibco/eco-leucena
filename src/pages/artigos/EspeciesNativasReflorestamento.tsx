import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EspeciesNativasReflorestamento: React.FC = () => {
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
            Espécies Nativas para Reflorestamento
          </h1>
          <div className="w-20 h-1 bg-green-600 mb-6"></div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none text-gray-700">
            
            <div className="text-lg leading-relaxed mb-8">
              <p>
                Catálogo de espécies nativas recomendadas para substituir gradualmente a Leucena em 
                projetos de reflorestamento. Estas espécies são adaptadas ao clima e solo brasileiros, 
                promovendo a biodiversidade local.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Ipê-amarelo</h3>
                <p className="text-green-700 font-mono">Handroanthus albus</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Pau-brasil</h3>
                <p className="text-green-700 font-mono">Paubrasilia echinata</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Jacarandá-mimoso</h3>
                <p className="text-green-700 font-mono">Jacaranda mimosifolia</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Angico-vermelho</h3>
                <p className="text-green-700 font-mono">Anadenanthera peregrina</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Cambuci</h3>
                <p className="text-green-700 font-mono">Campomanesia phaea</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Cedro</h3>
                <p className="text-green-700 font-mono">Cedrela fissilis</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Embaúba</h3>
                <p className="text-green-700 font-mono">Cecropia pachystachya</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Jatobá</h3>
                <p className="text-green-700 font-mono">Hymenaea courbaril</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Aroeira</h3>
                <p className="text-green-700 font-mono">Myracrodruon urundeuva</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Ipê-roxo</h3>
                <p className="text-green-700 font-mono">Handroanthus impetiginosus</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EspeciesNativasReflorestamento; 