import PropTypes from "prop-types";

import Button from "../ui/Button";

function Result({ color, classification, result, warning, handleButton }) {
  return (
    <>
      <div className="classification" style={{ backgroundColor: color }}>
        <div>
          <span>{classification}</span>
        </div>
        <div>
          <p>{result}</p>
          <p>{warning}</p>
        </div>
      </div>
      <div>
        <Button type="button" value="Dicas de Saúde" onClick={handleButton} />
      </div>
    </>
  );
}

Result.propTypes = {
  color: PropTypes.string,
  classification: PropTypes.number,
  result: PropTypes.string,
  warning: PropTypes.string,
  handleButton: PropTypes.func,
}.isRequired;

export default Result;
