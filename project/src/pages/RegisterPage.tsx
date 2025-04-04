import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-sm">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#111814]">Inscription</h2>
          <p className="mt-2 text-[#638872]">
            Rejoignez la communauté Eco-Challenge
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[#111814]">
                  Prénom
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border border-[#f0f4f2] px-4 py-2 focus:border-[#14b858] focus:outline-none focus:ring-1 focus:ring-[#14b858]"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-[#111814]">
                  Nom
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border border-[#f0f4f2] px-4 py-2 focus:border-[#14b858] focus:outline-none focus:ring-1 focus:ring-[#14b858]"
                />
              </div>
            </div>
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
                value={formData.email}
                onChange={handleChange}
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
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-xl border border-[#f0f4f2] px-4 py-2 focus:border-[#14b858] focus:outline-none focus:ring-1 focus:ring-[#14b858]"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#111814]">
                Confirmer le mot de passe
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full rounded-xl border border-[#f0f4f2] px-4 py-2 focus:border-[#14b858] focus:outline-none focus:ring-1 focus:ring-[#14b858]"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                required
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="h-4 w-4 rounded border-[#f0f4f2] text-[#14b858] focus:ring-[#14b858]"
              />
              <label htmlFor="acceptTerms" className="ml-2 block text-sm text-[#638872]">
                J'accepte les{' '}
                <a href="#" className="text-[#14b858] hover:text-[#14b858]/90">
                  Conditions Générales d'Utilisation
                </a>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#14b858] text-white rounded-xl py-2 font-semibold hover:bg-[#14b858]/90 transition-colors"
            >
              S'inscrire
            </button>
          </div>

          <div className="text-center text-sm">
            <span className="text-[#638872]">Déjà inscrit ? </span>
            <Link
              to="/connexion"
              className="font-medium text-[#14b858] hover:text-[#14b858]/90"
            >
              Se connecter
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;