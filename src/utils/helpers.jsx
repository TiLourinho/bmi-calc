export default function convertCentimetersToMeters(number) {
  if (!number.includes(".")) number /= 100;

  return number;
}
