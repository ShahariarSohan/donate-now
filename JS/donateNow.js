//donate now button 
function handleDonate(data) {
    const donationAmount = parseFloat(data.previousElementSibling.children[0].value)
    data.previousElementSibling.children[0].value = "";
    if (donationAmount <= 0 || typeof donationAmount === "string" || isNaN(donationAmount) === true) {
        return my_modal_1.showModal()
    }
    else {
        const balance = document.getElementById("donation-balance")
        const donationBalance = parseFloat(balance.innerText);
        if (donationAmount > donationBalance) {
            return my_modal_2.showModal();
        }
        else {
            const donated = data.parentElement.children[0].children[1].children[0];
            const donatedAmount = parseFloat(donated.innerText)
            const totalDonation = donationAmount + donatedAmount;
            donated.innerText = totalDonation;
            const presentBalance = donationBalance - donationAmount;
            balance.innerText = presentBalance;
            return my_modal_3.showModal();
        }
    }

}
// blog button features
function handleDonation(data) {
    displayHide("donation-container")
    data.style.backgroundColor = "#B4F461"
    document.getElementById("history-button").style.backgroundColor = "";
}

