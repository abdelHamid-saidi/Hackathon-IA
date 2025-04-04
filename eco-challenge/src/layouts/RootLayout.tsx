import React from 'react';
import { Link, Outlet } from '@tanstack/react-router';
import { Leaf } from 'lucide-react';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f4f2] px-10 py-3">
          <div className="flex items-center gap-4 text-[#111814]">
            <Link to="/" className="flex items-center gap-4">
              <div className="size-4">
                <Leaf />
              </div>
              <h2 className="text-[#111814] text-lg font-bold leading-tight tracking-[-0.015em]">Eco-Challenge</h2>
            </Link>
          </div>
          <div className="flex flex-1 justify-end gap-5">
            <div className="flex items-center gap-9">
              <Link to="/" className="text-[#111814] text-sm font-medium leading-normal">Accueil</Link>
              <Link to="/defis" className="text-[#111814] text-sm font-medium leading-normal">Défis</Link>
              <Link to="/communaute" className="text-[#111814] text-sm font-medium leading-normal">Communauté</Link>
              <Link to="/a-propos" className="text-[#111814] text-sm font-medium leading-normal">À propos</Link>
              <Link to="/blog" className="text-[#111814] text-sm font-medium leading-normal">Blog</Link>
              <Link to="/evenements" className="text-[#111814] text-sm font-medium leading-normal">Événements</Link>
            </div> 
            <Link 
              to="/inscription"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f4f2] text-[#111814] text-sm font-bold leading-normal tracking-[0.015em] "
            >
              <span className="truncate">Inscription</span>
            </Link>
            <Link 
              to="/connexion"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f4f2] text-[#111814] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Se connecter</span>
            </Link>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;