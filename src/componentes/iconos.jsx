// components/Icon.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse,
  faUser,
  faEnvelope,
  faArrowUpRightFromSquare,
  // Iconos sólidos (free-solid-svg-icons)
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faHtml5,
  faCss,
  faSass,
  faJs,  
  faReact,
  faNode,
} from '@fortawesome/free-brands-svg-icons';

const icons = {
  home: faHouse,
  user: faUser,
  email: faEnvelope,
  linkedin: faLinkedin, // ¡Ahora funciona!
  html5: faHtml5,
  css: faCss,
  sass: faSass,
  js:faJs,
  react:faReact,
  node: faNode,
  link:faArrowUpRightFromSquare
};

export default function Icon({ name, ...props }) {
  return <FontAwesomeIcon icon={icons[name]} {...props} />;
}