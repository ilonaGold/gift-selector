let costEl = document.getElementById("cost-el");
let foodSelect = document.getElementById("food-select");
let transportSelect = document.getElementById("transport-select");
let addBalloonCheckbox = document.getElementById("balloon-checkbox");
 
document.getElementById("btn").addEventListener("click", calculate); 

function calculate() {
    let cost = parseInt(foodSelect.value) + parseInt(transportSelect.value) + addBalloon();
    costEl.textContent = `$${cost}`;
}
 
function addBalloon() {
    return addBalloonCheckbox.checked == true ? 1 : 0;
}

