const convertButton = document.getElementById("convert-button")
const resetButton = document.getElementById("reset-button")
const inputEl = document.getElementById("input-el")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

function showAlert() {
    alert ("Error: please fill in a number");
  }

convertButton.addEventListener("click", function(){
    if (inputEl.value === "") {
         showAlert()
    }
    
    else {
    lengthOutput.innerHTML = `
        ${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | 
        ${(inputEl.value * 3.281).toFixed(3)} feet =  ${inputEl.value} meters
    `
    
    volumeOutput.innerHTML = `
    ${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons | 
    ${(inputEl.value * 0.264).toFixed(3)} gallons =  ${inputEl.value} liters
    `
    
    massOutput.innerHTML = `
    ${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds |
    ${(inputEl.value * 2.204).toFixed(3)} pounds =  ${inputEl.value} kilos
    `
    }
})
resetButton.addEventListener("click", function(){
    inputEl.value = ""
    lengthOutput.innerHTML = "0 meters = 0 feet | 0 feet = 0 meters"
    volumeOutput.innerHTML = "0 liters = 0 gallons | 0 gallons = 0 liters"
    massOutput.innerHTML = "0 kilos = 0 pounds | 0 pounds = 0 kilos"
    
})
