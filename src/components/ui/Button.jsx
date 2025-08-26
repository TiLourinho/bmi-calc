import PropTypes from "prop-types";

function Button({ value, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default Button;
