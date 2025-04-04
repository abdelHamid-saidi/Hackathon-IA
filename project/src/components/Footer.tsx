import React from 'react';
import { Twitter as TwitterLogo, Facebook as FacebookLogo, Instagram as InstagramLogo } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <a className="text-[#638872] text-base font-normal leading-normal min-w-40" href="#">Conditions d'utilisation</a>
            <a className="text-[#638872] text-base font-normal leading-normal min-w-40" href="#">Politique de confidentialité</a>
            <a className="text-[#638872] text-base font-normal leading-normal min-w-40" href="#">Nous contacter</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#"><TwitterLogo className="text-[#638872]" size={24} /></a>
            <a href="#"><FacebookLogo className="text-[#638872]" size={24} /></a>
            <a href="#"><InstagramLogo className="text-[#638872]" size={24} /></a>
          </div>
          <p className="text-[#638872] text-base font-normal leading-normal">
            © 2024 Eco-Challenge. Tous droits réservés.
          </p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;