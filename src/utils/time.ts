export const numberWithZero = (number: number) => {
  const numberString = number.toString();
  // <Remark>
  // Do not forget about readability. Use curly braces
  if (numberString.length >= 2) {
    return numberString;
  }

  return '0'.repeat(2 - numberString.length) + numberString;
};
