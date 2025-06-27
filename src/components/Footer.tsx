import React from 'react';
import { Leaf, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Leaf className="h-6 w-6 text-green-300 mr-2" />
            <span className="text-lg font-bold">EcoLeucena</span>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <p className="mb-2">Promovendo o manejo sustentável da Leucena</p>
            <p className="flex items-center justify-center md:justify-end">
              Desenvolvido com <Heart className="h-4 w-4 text-red-400 mx-1" /> para o meio ambiente
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-green-700 text-sm text-center text-green-300">
          <p>&copy; {new Date().getFullYear()} EcoLeucena - Todos os direitos reservados</p>
          <p className="mt-1">
            Um aplicativo para ajudar produtores a manejar a Leucena de forma sustentável
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;