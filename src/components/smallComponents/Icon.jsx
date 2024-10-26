import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, ...props }) => {
  return <FontAwesomeIcon icon={icon} {...props} />;
};

export default Icon;
