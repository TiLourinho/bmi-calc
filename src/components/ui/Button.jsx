import PropTypes from "prop-types";

function Button({ type, value, onClick }) {
  return (
    <button type={type} onClick={onClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
