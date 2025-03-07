// input value
function getValueById(id) {
    const amount = parseFloat(document.getElementById(id).value);
    document.getElementById(id).value = "";
    return amount;
}
