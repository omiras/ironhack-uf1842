// ¿En tu páis de origen es normal dejar propina?

//Get all elements from DOM
const billAmount = document.getElementById("bill-amount");
const percentageTip = document.getElementById("percentage-tip");
const calculateBtn = document.getElementById("calculate");
const tipAmount = document.getElementById("tip-amount");
const totalBill = document.getElementById("total");

const calculateTotalBill = (bill, percentage) => {
    let tip = (parseFloat(bill) * parseFloat(percentage) / 100).toFixed(2);
    let totalBill = (parseFloat(tip) + parseFloat(bill)).toFixed(2);

    return [tip, totalBill];
}

const updateCalculator = (bill, percentage) => {
    let tip = calculateTotalBill(bill, percentage)[0];
    let totalAmountBill = calculateTotalBill(bill, percentage)[1];
    tipAmount.value = tip;
    totalBill.value = totalAmountBill;
    console.log(calculateTotalBill(billAmount.value, percentageTip.value))
}

calculateBtn.addEventListener("click", () => updateCalculator(billAmount.value, percentageTip.value));