
document.getElementById('btn-diposit').addEventListener('click', function(){
  const newDepositAmount = getInputField('input-amount');
  const previousAmount = amountElement('deposit-amount');
  
  const totalAmountIs = previousAmount + newDepositAmount;
  
  setElementValue('deposit-amount', totalAmountIs);

  const previousBalance = amountElement('balance-amount');

  const newBalanceAmount = previousBalance + newDepositAmount;

  setElementValue('balance-amount', newBalanceAmount);

})