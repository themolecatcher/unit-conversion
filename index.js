const convertButton = document.getElementById("convert-button")
const resetButton = document.getElementById("reset-button")
let inputEl = document.getElementById("input-el")
let lengthOutput = document.getElementById("length-output")
let volumeOutput = document.getElementById("volume-output")
let massOutput = document.getElementById("mass-output")

/*the code below uses very long sentences, I feel like there has to be a way to make it shorter.
I tried creating a variable "let feet = inputEl.value * 3.281" and add that in the template string but it didn't work.

*/


convertButton.addEventListener("click", function(){
    lengthOutput.innerHTML = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet 
    | 
    ${(inputEl.value * 3.281).toFixed(3)} feet =  ${inputEl.value} meters`
    
    volumeOutput.innerHTML = `${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons 
    | 
    ${(inputEl.value * 0.264).toFixed(3)} gallons =  ${inputEl.value} liters`
    
    massOutput.innerHTML = `${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${(inputEl.value * 2.204).toFixed(3)} pounds =  ${inputEl.value} kilos`
    
})

resetButton.addEventListener("click", function(){
    inputEl.value = ""
    lengthOutput.innerHTML = "0 meters = 0 feet | 0 feet = 0 meters"
    volumeOutput.innerHTML = "0 liters = 0 gallons | 0 gallons = 0 liters"
    massOutput.innerHTML = "0 kilos = 0 pounds | 0 pounds = 0 kilos"
    
})
