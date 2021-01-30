function changeCursor(category){
    document.getElementById(category + "-increase").style.cursor = "pointer";
    document.getElementById(category + "-decrease").style.cursor = "pointer";
}

function handleTickets(ticketCategory, isIncrease){
    const ticketCategoryInput = document.getElementById(ticketCategory + "-count")
    const ticketCategoryCount = parseInt(ticketCategoryInput.value)
    let ticketCategoryNewCount = ticketCategoryCount
    if (isIncrease == true){
        ticketCategoryNewCount = ticketCategoryCount + 1
    } else if(isIncrease == false && ticketCategoryCount > 0){
        ticketCategoryNewCount = ticketCategoryCount - 1
    }
    ticketCategoryInput.value = ticketCategoryNewCount

    calculateTotal()
}

function calculateTotal(){
    const economyCount = getInputValue("economy")

    const firstClassCount = getInputValue("firstClass")

    const subTotal = economyCount * 100 + firstClassCount * 150
    document.getElementById("subtotal").innerText = subTotal

    const vat = subTotal * 0.1
    document.getElementById("vat-amount").innerText = vat

    const total = subTotal + vat
    document.getElementById("total-amount").innerText = total
}

function getInputValue(ticketCategory){
    const ticketCategoryInput = document.getElementById(ticketCategory + "-count")
    const ticketCategoryCount = parseInt(ticketCategoryInput.value)

    return ticketCategoryCount;
}

function zeroValueError(){
    let economyCount = getInputValue("economy")
    let firstClassCount = getInputValue("firstClass")
    if(economyCount == 0 && firstClassCount == 0){
        alert("Error: Proper Information Required")
        document.getElementById("booking-area").style.display = "block"
        document.getElementById("booking-text").style.display = "block"
        document.getElementById("after-booking").style.display = "none"
    } else if(economyCount > 0 || firstClassCount > 0){
        document.getElementById("booking-area").style.display = "none"
        document.getElementById("booking-text").style.display = "none"
        document.getElementById("after-booking").style.display = "block"
    }
}

// Economy Seat Count
changeCursor("economy")
document.getElementById("economy-increase").addEventListener('click', function () {
    handleTickets("economy", true)
})
document.getElementById("economy-decrease").addEventListener('click', function () {
    handleTickets("economy", false)
})

// First Class Seat Count
changeCursor("firstClass")
document.getElementById("firstClass-increase").addEventListener('click', function () {
    handleTickets("firstClass", true)
})
document.getElementById("firstClass-decrease").addEventListener('click', function () {
    handleTickets("firstClass", false)
})

document.getElementById("book-now").addEventListener('click', function(){
    document.getElementById("booking-area").style.display = "none"
    document.getElementById("booking-text").style.display = "none"
    document.getElementById("after-booking").style.display = "block"
    zeroValueError()
})