function getInputField(getIdFromInputField){
  const inputField = document.getElementById(getIdFromInputField);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = '';
  return inputFieldValue;
}

function amountElement(getAmountId){
  const element = document.getElementById(getAmountId);
  const elementAmountString = element.innerText;
  const elementAmount = parseFloat(elementAmountString);
  return elementAmount;
}

function setElementValue(getAmountId, inputFieldValue){
  const element = document.getElementById(getAmountId);
  element.innerText = inputFieldValue;
}