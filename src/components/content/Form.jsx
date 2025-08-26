import { useState } from "react";

import Input from "../ui/Input";
import Button from "../ui/Button";
import convertCentimetersToMeters from "../../utils/helpers";

function Form() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);

  function handleInput({ target: { id, value } }) {
    if (id === "height") setHeight(value);
    else if (id === "weight") setWeight(value);
  }

  function handleCalc() {
    const heightNum = convertCentimetersToMeters(height);
    const weightNum = Number(weight);
    const result = weightNum / Math.pow(heightNum, 2);

    setBMI(Number(result.toFixed(2)));
  }

  function handleReset() {
    setHeight("");
    setWeight("");
    setBMI("");
  }

  return (
    <section>
      <form className="form">
        <div className="form-section">
          <Input
            id="height"
            placeholder="Metros ou centímetros"
            value={height}
            onChange={handleInput}
          />
          <Input
            id="weight"
            placeholder="Quilos"
            value={weight}
            onChange={handleInput}
          />
        </div>
        <div className="form-section">
          <Button value={"Calcular"} onClick={() => handleCalc()} />
          <Button value={"Limpar"} onClick={() => handleReset()} />
        </div>
      </form>
    </section>
  );
}

export default Form;
