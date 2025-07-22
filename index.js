const billInput = document.getElementById("bill")
const tipInput = document.getElementById('tip')
const doSumOf = document.getElementById("calculate")
const totalSpan = document.getElementById("total")

function calculateTotal(){
   const billVal = billInput.value
   const tipVal = tipInput.value
   const totalVal = billVal*(1+tipVal/100)
   totalSpan.innerText = totalVal.toFixed(2)

}
doSumOf.addEventListener("click" ,calculateTotal )
document.getElementById('bill').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('tip').focus();
    }
});