/* global document */

const checkComplete = () => {
  const checkBox = document.getElementById('myCheck');
  const displayText = document.getElementById('text');
  const nonDisplayText = document.getElementById('textPend');
  if (checkBox.checked === true) {
    displayText.style.display = 'block';
    nonDisplayText.style.display = 'none';
  } else {
    displayText.style.display = 'none';
    nonDisplayText.style.display = 'block';
  }
};
