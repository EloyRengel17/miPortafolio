import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones
const resources = {
  en: {
    translation: {
      header: {
        title: "Eloy A. Rengel",
        subtitle: "Full-Stack Developer",
        education: "Computer Engineering Student",
        projects: "+7 projects developed (web, APIs and DBs)",
        nav:{
        navIni:"Home",
        navsobre:"About Me",
        navProyectos:"Projects",
        navcontacto:"Contact",
        }
      }
    }
  },
  es: {
    translation: {
      header: {
        title: "Eloy A. Rengel",
        subtitle: "Desarrollador Full-Stack Junior",
        education: "Estudiante de Ingeniería en Informática",
        projects: "+7 proyectos desarrollados (web, APIs y DBs)",
        nav:{
        navIni:"Inicio",
        navsobre:"Sobre mi",
        navProyectos:"Proyectos",
        navcontacto:"Contactos",
        }
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // Idioma por defecto
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;