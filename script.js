"use strict";

/*---For Login Area------*/
// Selection
const loginArea = document.getElementById("login-area");
const transactionArea = document.getElementById("transaction-area");
const loginBtn = document.getElementById("login-btn");

// Event Handeler
loginBtn.addEventListener("click", function () {
  loginArea.style.display = "none";
  transactionArea.style.display = "block";
});

/*----For Transation Area------*/
const balanceAmount = document.getElementById("balance-amount");
const depositAmount = document.getElementById("deposit-amount");
const withdrawAmount = document.getElementById("withdraw-amount");
const depositInput = document.getElementById("deposit-input");
const withdrawInput = document.getElementById("withdraw-input");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const totalBalanceNumber = Number(balanceAmount.innerText);

// Event Handeler for Deposit
depositBtn.addEventListener("click", function () {
  const curretnDepositNumber = Number(depositAmount.innerText);
  const newDepositNumber = Number(depositInput.value);
  const totalDeposit = curretnDepositNumber + newDepositNumber;
  depositAmount.innerText = totalDeposit;
  depositInput.value = "";

  const totalBalance = totalBalanceNumber + newDepositNumber;
  balanceAmount.innerText = totalBalance;
});

// Event Handeler for Withdraw
withdrawBtn.addEventListener("click", function () {
  const curretnWithdrawNumber = Number(withdrawAmount.innerText);
  const newWithdrawNumber = Number(withdrawInput.value);
  const totalWithdraw = curretnWithdrawNumber + newWithdrawNumber;
  withdrawAmount.innerText = totalWithdraw;
  withdrawInput.value = "";

  const totalBalance = totalBalanceNumber - newWithdrawNumber;
  balanceAmount.innerText = totalBalance;
});
