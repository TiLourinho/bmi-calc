import { useState } from "react";
import PropTypes from "prop-types";

import Result from "./Result";
import HealthTips from "./HealthTips";
import { classifyResult } from "../../utils/helpers";

function Classification({ classification }) {
  const [tips, setTips] = useState(false);

  function handleButton() {
    setTips((currTips) => !currTips);
  }

  const { color, result, warning, healthTips } = classifyResult(classification);

  return (
    <>
      <Result
        color={color}
        classification={classification}
        result={result}
        warning={warning}
        handleButton={handleButton}
      />
      {tips && <HealthTips healthTips={healthTips} />}
    </>
  );
}

Classification.propTypes = {
  classification: PropTypes.number.isRequired,
};

export default Classification;
