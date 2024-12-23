import React, { createContext, useState, useContext } from 'react';
import HomePage from './HomePage';
import '../styles/MainStyles.css';


export const ThemeContext = createContext();
export const LanguageContext = createContext();


const translations = {
  en: {
    welcome: "Welcome to Our Application",
    selectLanguage: "Select Language",
    toggleTheme: "Toggle Theme",
    description: "This is a multilingual React application with theme switching."
  },
  fr: {
    welcome: "Bienvenue dans Notre Application",
    selectLanguage: "Choisir la Langue",
    toggleTheme: "Changer le Thème",
    description: "C'est une application React multilingue avec changement de thème."
  },
  es: {
    welcome: "Bienvenido a Nuestra Aplicación",
    selectLanguage: "Seleccionar Idioma",
    toggleTheme: "Cambiar Tema",
    description: "Esta es una aplicación React multilingüe con cambio de tema."
  }
};

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
        <div className={`app ${theme}`}>
          <nav className="navbar">
            <button 
              onClick={toggleTheme}
              className="theme-toggle"
            >
              {translations[language].toggleTheme}
            </button>
            
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="language-select"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </nav>

         
          <HomePage />
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Portfolio;