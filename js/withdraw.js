document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");

  const newWithDrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithDrawAmountString);

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousDepositTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousDepositTotalString);

  //calculation
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //balance calculation

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  balanceTotalElement.innerText = newBalanceTotal;
});
