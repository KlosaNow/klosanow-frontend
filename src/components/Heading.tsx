import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi"

const Heading = (props) => {
  const { pageName } = props;

  return (
    <header className="section-heading">
      <Link to="/">
        <HiArrowLeft />
      </Link>
      <h2 className="heading2">{pageName}</h2>
    </header>
  );
};

export default Heading;
