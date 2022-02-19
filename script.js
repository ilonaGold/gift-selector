let costEl = document.getElementById("cost-el");
let foodSelect = document.getElementById("food-select");
let transportSelect = document.getElementById("transport-select");
let addBalloonCheckbox = document.getElementById("balloon-checkbox");
let error = document.getElementById("error");
let checkbox = document.getElementById("balloon-checkbox");
 
document.getElementById("btn").addEventListener("click", calculate); 

function calculate() {
    if (foodSelect.value === "" || transportSelect.value === "") {
        error.style.display = "block";
        error.textContent = "💘 Please make your choice! 💘";
    } else {
    let cost = parseInt(foodSelect.value) + parseInt(transportSelect.value) + addBalloon();
    costEl.textContent = `$${cost}`;
    error.style.display = "none";
    }
}
 
function addBalloon() {
    return addBalloonCheckbox.checked == true ? 1 : 0;
}

