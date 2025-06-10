import { useState, useEffect } from "react";
import Icon from './iconos';
import imagen from '../assets/miFoto.jpg';
import { useTranslation } from 'react-i18next';
import '../App.css';

function Header() {
    const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  function irlink(link) {
    window.open(link, "_blank");
  }

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1000);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };
  return (
    <header>
      {/* div para ubicar los botones y cambiar de idioma
      <div className="language-switcher">
        <button 
          onClick={() => changeLanguage('es')} 
          className={i18n.language === 'es' ? 'active' : ''}
        >
          ES
        </button>
        <button 
          onClick={() => changeLanguage('en')}
          className={i18n.language === 'en' ? 'active' : ''}
        >
          EN
        </button>
      </div>
      */}
      {isMobile && (
        <div className="imagen-arriba">
          <img src={imagen} alt="Eloy Rengel" className="imagenResponsive" />
        </div>
      )}

      <h1>{t('header.title')}</h1>
      <h3>{t('header.subtitle')}</h3>
      <p>{t('header.education')}</p>
      <p>{t('header.projects')}</p>

      <div className="iconos-container">
        <Icon name="email" className="iconos" onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=eloypanita@gmail.com")} />
        <Icon name="linkedin" className="iconos" onClick={() => irlink("https://www.linkedin.com/in/eloy-rengel/")} />
        <Icon name="github" className="iconos" onClick={() => irlink("https://github.com/EloyRengel17")} />
      </div>

      {/* Versión desktop (abajo) - SIN className */}
      {!isMobile && (
        <div className="imagen-abajo">
          <img src={imagen} alt="Eloy Rengel" className="imagendesktop" />
        </div>
      )}
    </header>
  );
}

export default Header;