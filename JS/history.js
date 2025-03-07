//history button features
function handleHistory(data) {
    displayHide("history-container")
    data.style.backgroundColor = "#B4F461"
    document.getElementById("donation-button").style.backgroundColor = "";
    const now = new Date();
    const historyContainer = document.getElementById("history-container")
    const div = document.createElement('div')
    div.innerHTML = `
    <p>${now}</p>
    `
    historyContainer.appendChild(div)


}