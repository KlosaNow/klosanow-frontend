import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

interface PageName {
  pageName: string;
  link: string;
}

const Heading = (props:PageName) => {
  const { pageName, link } = props;

  return (
    <header className="section-heading">
      <Link to={link}>
        <HiArrowLeft />
      </Link>
      <h2 className="heading2">{pageName}</h2>
    </header>
  );
};

export default Heading;
