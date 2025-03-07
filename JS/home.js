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
            document.getElementById("donation-button").style.backgroundColor = "";
            const presentTime = new Date();
            const historyContainer = document.getElementById("history-container")
            const div = document.createElement('div')
            div.innerHTML = `<div class="bg-slate-50 shadow-md rounded-md p-10"'>
            <p>You have donated ${donationAmount} tk</p>
            <p class="text-sm">${presentTime}</p>
            </div>
            
            `
            historyContainer.appendChild(div)
            return my_modal_3.showModal();
        }
    }

}


