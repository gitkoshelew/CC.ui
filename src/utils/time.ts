export const numberWithZero = (number: number) => {
  const numberString = number.toString();
  if (numberString.length >= 2) {
    return numberString;
  }
  return '0'.repeat(2 - numberString.length) + numberString;
};
