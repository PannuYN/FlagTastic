import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-10 bg-white shadow-lg rounded-lg mb-8">
          <h1 className="text-3xl font-bold text-gray-800">{t('landing.welcomeBack')}</h1>
          <p className="mt-4 text-gray-600">{t('landing.carCare')}</p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">{t('login')}</button>
        </section>

        {/* About Us Section */}
        <section className="py-8 bg-white shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">{t('aboutUs')}</h2>
          <p className="text-gray-600 px-4">{t('aboutUsContent')}</p>
        </section>

        {/* Services Section */}
        <section className="py-8 bg-white shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">{t('services')}</h2>
          <p className="text-gray-600 px-4">{t('servicesContent')}</p>
        </section>

        {/* Contact Section */}
        <section className="py-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">{t('contact')}</h2>
          <p className="text-gray-600 px-4">{t('contactContent')}</p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
