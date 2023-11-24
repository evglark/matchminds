const regexp = {
  email:
    /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/,
  formatPhoneNumber: /\s|\(|\)|-/g,
  onlyDigits: /^\d+$/,
  salaryMask: /^[0-9,]+$/,
  onlyEnglishLetters: /^[a-zA-Z\s]*$/,
};

export default regexp;
