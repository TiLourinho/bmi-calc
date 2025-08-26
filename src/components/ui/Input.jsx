import PropTypes from "prop-types";

function Input({ id, placeholder, value, onChange }) {
  return (
    <div>
      <label htmlFor={id}>Altura</label>
      <input
        type="number"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
