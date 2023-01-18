/**
 * 1. Query selectors
 */
const salaryForm = document.querySelector(".salary-form");
const salaryInput = document.querySelector(".salary-input");
const salaryInputError = document.querySelector(".salary-input-error");
const salaryInputSubmit = document.querySelector(".salary-submit");
const taxAmount = document.querySelector(".tax-amount");
const taxPercentage = document.querySelector(".tax-percentage");

const calculateAmount = (amount) => {};

salaryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("SUBMITTED");
  console.log(salaryInput.value);
});
