document.getElementById("economy-increase").addEventListener('click', function () {
    handleSeatChange(true)
})
document.getElementById("economy-decrease").addEventListener('click', function () {
    handleSeatChange(false);
})
function handleSeatChange(isIncrease) {
    const economyInput = document.getElementById("economy-quantity")
    const economyCount = parseInt(economyInput.value)
    // const economyNewCount = economyCount - 1
    let economyNewCount = economyCount
    if (isIncrease == true) {
        economyNewCount = economyCount + 1
    } else if (isIncrease == false && economyCount > 0) {
        economyNewCount = economyCount - 1
    }
    economyInput.value = economyNewCount
}
// document.getElementById("economy-increase").addEventListener('click', function(){
//     const economyInput = document.getElementById("economy-quantity")
//     const economyCount = parseInt(economyInput.value)
//     const economyNewCount = economyCount + 1;
//     economyInput.value = economyNewCount   
// })
// document.getElementById("economy-decrease").addEventListener('click', function(){
//     const economyInput = document.getElementById("economy-quantity")
//     const economyCount = parseInt(economyInput.value)
//     const economyNewCount = economyCount - 1
//     economyInput.value = economyNewCount
// })