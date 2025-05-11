// components/Icon.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse,
  faUser,
  faEnvelope,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faHtml5,
  faCss,
  faSass,
  faJs,  
  faReact,
  faNode,
  faGithub, // ¡Importa el ícono de GitHub!
} from '@fortawesome/free-brands-svg-icons'; // Asegúrate de que esté en esta colección

const icons = {
  home: faHouse,
  user: faUser,
  email: faEnvelope,
  linkedin: faLinkedin,
  html5: faHtml5,
  css: faCss,
  sass: faSass,
  js: faJs,
  react: faReact,
  node: faNode,
  link: faArrowUpRightFromSquare,
  github: faGithub, // Ahora sí está definido
};

export default function Icon({ name, ...props }) {
  return <FontAwesomeIcon icon={icons[name]} {...props} />;
}