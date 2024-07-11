import { GoQuestion } from "react-icons/go";
import { Link } from "react-router-dom";

const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link to="/about">
        <GoQuestion size={35} />
      </Link>
    </div>
  );
};

export default AboutIconLink;
