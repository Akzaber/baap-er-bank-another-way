document.getElementById('btn-withdraw').addEventListener('click', function(){
  
  const withdrawAmount = getInputField('withdraw-field');
  const previousWithdrawAmount = amountElement('withdraw-amount');

  const totalWithdrawAmount = previousWithdrawAmount + withdrawAmount;

  setElementValue('withdraw-amount', totalWithdrawAmount);

  const previousBalance = amountElement('balance-amount');

  const newBalanceAfterWithdraw = previousBalance - withdrawAmount;

  setElementValue('balance-amount', newBalanceAfterWithdraw);
})