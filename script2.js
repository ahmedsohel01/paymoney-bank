"use strict";

// Login Area
const loginBtn = document.getElementById("login-btn");
const loginArea = document.getElementById("login-area");
const transactionArea = document.getElementById("transaction-area");
loginBtn.addEventListener("click", function () {
  loginArea.style.display = "none";
  transactionArea.style.display = "block";
});
// Taransaction Area
const depositebtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

// Deposite Event
depositebtn.addEventListener("click", function () {
  // get input and added
  const depositAmount = document.getElementById("deposit-input");
  const depositAmountNUmber = Number(depositAmount.value);
  //     const currentDeposit = document.getElementById("deposit-amount");
  //     const currentDepositNumber = Number(currentDeposit.innerText);
  //     const totalDeposit = depositAmountNUmber + currentDepositNumber;
  //   currentDeposit.innerText = totalDeposit;
  addedToSpan("deposit-amount", depositAmountNUmber);
  addedToSpan("balance-amount", depositAmountNUmber);

  depositAmount.value = "";

  //   input added in total
  //   const currentBalance = document.getElementById("balance-amount");
  //   const currentBalanceNumber = Number(currentBalance.innerText);
  //   const totalBalance = currentBalanceNumber + depositAmountNUmber;
  //   currentBalance.innerText = totalBalance;
});

// Added to Span Function
function addedToSpan(id, amount) {
  const currentAmount = document.getElementById(id);
  const currentAmountNumber = Number(currentAmount.innerText);
  const totalAmount = amount + currentAmountNumber;
  currentAmount.innerText = totalAmount;
}

// withdraw Event
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdraw-input");
  const withdrawAmountNumber = Number(withdrawAmount.value);

  addedToSpan("withdraw-amount", withdrawAmountNumber);
  addedToSpan("balance-amount", -1 * withdrawAmountNumber);

  withdrawAmount.value = "";
});
