import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import PropTypes from 'prop-types';

interface PageName {
  pageName: string;
}

const Heading = (props:PageName) => {
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

Heading.propTypes = {
  pageName: PropTypes.string.isRequired,
}

export default Heading;