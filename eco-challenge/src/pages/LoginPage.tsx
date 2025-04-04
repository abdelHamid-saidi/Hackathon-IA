import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-sm">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#111814]">Connexion</h2>
          <p className="mt-2 text-[#638872]">
            Bienvenue sur Eco-Challenge
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#111814]">
                Adresse email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-xl border border-[#f0f4f2] px-4 py-2 focus:border-[#14b858] focus:outline-none focus:ring-1 focus:ring-[#14b858]"
                placeholder="vous@exemple.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#111814]">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-xl border border-[#f0f4f2] px-4 py-2 focus:border-[#14b858] focus:outline-none focus:ring-1 focus:ring-[#14b858]"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#14b858] text-white rounded-xl py-2 font-semibold hover:bg-[#14b858]/90 transition-colors"
            >
              Se connecter
            </button>
          </div>

          <div className="text-center text-sm">
            <span className="text-[#638872]">Pas encore inscrit ? </span>
            <Link
              to="/inscription"
              className="font-medium text-[#14b858] hover:text-[#14b858]/90"
            >
              Créer un compte
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;