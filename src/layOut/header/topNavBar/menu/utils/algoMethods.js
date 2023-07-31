export const makeFirstLetterCapital = (String) => {
  const term = String.toLowerCase().trim();
  return term.charAt(0).toUpperCase() + term.slice(1);
};
