import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Leaf } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <Leaf className="h-20 w-20 text-green-300 mx-auto" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Página não encontrada</h1>
        <p className="text-gray-600 mb-8">
          A página que você está procurando parece ter sido removida ou não existe.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md transition-colors duration-300"
        >
          <Home className="h-5 w-5 mr-2" />
          Voltar para o início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;