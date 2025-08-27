import PropTypes from "prop-types";

function HealthTips({ healthTips }) {
  return (
    <div className="tips">
      <ul>
        {healthTips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

HealthTips.propTypes = {
  healthTips: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HealthTips;
