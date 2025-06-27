import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-white hover:text-green-200 transition-colors duration-200 font-medium"
    >
      {children}
    </Link>
  );
};