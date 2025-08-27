import { useState } from "react";

import Input from "../ui/Input";
import Button from "../ui/Button";
import Classification from "./Classification";
import { convertCentimetersToMeters } from "../../utils/helpers";

function Form() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);

  function handleInput({ target: { id, value } }) {
    if (id === "height") setHeight(value);
    else if (id === "weight") setWeight(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const heightNum = convertCentimetersToMeters(height);
    const weightNum = Number(weight);
    const result = weightNum / Math.pow(heightNum, 2);

    setBMI(Number(result.toFixed(2)));
  }

  function handleReset() {
    setHeight("");
    setWeight("");
    setBMI(null);
  }

  return (
    <section>
      <form className="form" onSubmit={(event) => handleSubmit(event)}>
        <div className="form-section">
          <Input
            label="Altura"
            id="height"
            placeholder="Metros ou centímetros"
            value={height}
            onChange={handleInput}
          />
          <Input
            label="Peso"
            id="weight"
            placeholder="Quilos"
            value={weight}
            onChange={handleInput}
          />
        </div>
        <div className="form-section">
          <Button type="submit" value="Calcular" />
          <Button type="button" value="Limpar" onClick={() => handleReset()} />
        </div>
      </form>
      {bmi && (
        <article>
          <Classification classification={bmi} />
        </article>
      )}
    </section>
  );
}

export default Form;
