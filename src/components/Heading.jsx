import PropTypes from "prop-types";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center mt-8 lg:mt-10 space-y-3.5">
      <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
      <p className="text-base md:text-lg lg:text-xl font-light ">{subtitle}</p>
    </div>
  );
};

// define the propTypes
Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Heading;
