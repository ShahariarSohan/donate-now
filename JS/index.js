function handleDonate(data) {
    const donationAmount = parseFloat(data.previousElementSibling.children[0].value)
    data.previousElementSibling.children[0].value = "";
    if (donationAmount <= 0 || typeof donationAmount === "string" || isNaN(donationAmount) === true) {
        return alert("Give valid amount")
    }
    else {
        const donated = data.parentElement.children[0].children[1].children[0];
        const donatedAmount = parseFloat(donated.innerText)
        const totalDonation = donationAmount + donatedAmount;
        donated.innerText = totalDonation;

    }
}

