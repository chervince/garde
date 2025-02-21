'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  // Ajoutez ce hook pour appliquer le style de défilement fluide
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    startDate: '',
    endDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dans une version production, on ajouterait ici l&apos;envoi du formulaire
    console.log('Form submitted:', formData);
    alert('Merci de votre message. Nous vous contacterons bientôt !');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/background_image-1.jpg')"
          }}
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Garde Auto Tontouta
          </h1>
          <p className="text-xl md:text-2xl text-center mb-4">
            À votre service depuis plus de 15 ans !
          </p>
          <p className="text-lg md:text-xl text-center mb-8">
            La sécurité de votre véhicule n&apos;est pas un LUXE !
          </p>
          <a
            href="#reservation"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Réserver maintenant
          </a>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi nous choisir ?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Parking Sécurisé</h3>
            <ul className="space-y-2">
              <li>✓ Entièrement clôturé</li>
              <li>✓ Équipé de caméras de surveillance</li>
              <li>✓ Semi-couvert</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold mb-2">Service Premium</h3>
            <ul className="space-y-2">
              <li>✓ À 5 minutes de l&apos;aéroport</li>
              <li>✓ Prise en charge clé en mains</li>
              <li>✓ Restitution en mains propres</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-xl font-semibold mb-2">Tarifs Avantageux</h3>
            <ul className="space-y-2">
              <li>✓ Tarifs dégressifs</li>
              <li>✓ Formules adaptées</li>
              <li>✓ Prix compétitifs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="py-16 px-4 bg-gray-50" id="reservation">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Tarifs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">7 jours</h3>
              <p className="text-4xl font-bold mb-4">8 500 F</p>
              <p className="text-gray-600 mb-4">Forfait semaine</p>
              <ul className="text-left mb-8">
                <li className="mb-2">✓ Parking sécurisé</li>
                <li className="mb-2">✓ Prise en charge clé en main</li>
                <li className="mb-2">✓ Service navette inclus</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500">
              <h3 className="text-xl font-semibold mb-4">14 jours</h3>
              <p className="text-4xl font-bold mb-4">14 600 F</p>
              <p className="text-gray-600 mb-4">Forfait deux semaines</p>
              <ul className="text-left mb-8">
                <li className="mb-2">✓ Parking sécurisé</li>
                <li className="mb-2">✓ Prise en charge clé en main</li>
                <li className="mb-2">✓ Service navette inclus</li>
                <li className="mb-2">✓ Tarif préférentiel</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">21 jours</h3>
              <p className="text-4xl font-bold mb-4">20 000 F</p>
              <p className="text-gray-600 mb-4">Forfait trois semaines</p>
              <ul className="text-left mb-8">
                <li className="mb-2">✓ Parking sécurisé</li>
                <li className="mb-2">✓ Prise en charge clé en main</li>
                <li className="mb-2">✓ Service navette inclus</li>
                <li className="mb-2">✓ Tarif préférentiel</li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-600">
            Contactez-nous pour des durées personnalisées et tarifs dégressifs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-semibold mb-8">Formulaire de Contact</h3>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Date de début</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Date de fin</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-8">Notre Emplacement</h3>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📍</div>
              <p className="text-lg mb-4">Situé à seulement 5 minutes de l&apos;aéroport de La Tontouta</p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  <a href="tel:75.36.37" className="text-blue-600 hover:text-blue-800">75.36.37</a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">✉️</span>
                  <a href="mailto:ga.tontouta@gmail.com" className="text-blue-600 hover:text-blue-800">ga.tontouta@gmail.com</a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">⏰</span>
                  Ouvert 7j/7, 24h/24
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2023 Garde Auto Tontouta - À votre service depuis plus de 15 ans</p>
        </div>
      </footer>
    </main>
  );
}