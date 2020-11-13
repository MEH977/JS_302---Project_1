document.querySelector('#subButton').onclick = function(){
  var bill = Number(document.getElementById('billTotal').value);
  var tip = document.getElementById('tipAmount').value;
  var tipValue = bill * (tip/100)
  var finalBill = bill + tipValue
var totalBill = document.querySelector('#totalBill')
var tipAmount = document.querySelector('#tipTotal')
var totalBillWithTip = document.querySelector('#grandTotal')

totalBill.value = bill.toFixed(2);
tipAmount.value = tipValue.toFixed(2);
totalBillWithTip.value = finalBill.toFixed(2);

//Show Results

document.getElementById('results').style.display='block'
}
