import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { NavLink } from '../components/NavLink';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-green-300" />
          <span className="text-xl font-bold">EcoLeucena</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/">Início</NavLink>
          <NavLink to="/mapa">Mapa</NavLink>
          <NavLink to="/manejo">Manejo</NavLink>
          <NavLink to="/reflorestamento">Reflorestamento</NavLink>
          <NavLink to="/recursos">Recursos</NavLink>
          <NavLink to="/jogo">Eco Game</NavLink>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-800 shadow-inner">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <NavLink to="/" onClick={toggleMenu}>Início</NavLink>
            <NavLink to="/mapa" onClick={toggleMenu}>Mapa</NavLink>
            <NavLink to="/manejo" onClick={toggleMenu}>Manejo</NavLink>
            <NavLink to="/reflorestamento" onClick={toggleMenu}>Reflorestamento</NavLink>
            <NavLink to="/recursos" onClick={toggleMenu}>Recursos</NavLink>
            <NavLink to="/jogo" onClick={toggleMenu}>Eco Game</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;