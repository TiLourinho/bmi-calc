import classificationInfo from "../assets/data/classification";

export function convertCentimetersToMeters(number) {
  if (!number.includes(".")) number /= 100;

  return number;
}

export function classifyResult(index) {
  if (index < 18.5) return classificationInfo[0];
  if (index < 25.0) return classificationInfo[1];
  if (index < 30.0) return classificationInfo[2];
  if (index < 35.0) return classificationInfo[3];
  if (index < 40.0) return classificationInfo[4];

  return classificationInfo[5];
}
