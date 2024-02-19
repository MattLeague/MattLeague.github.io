const bonuses = [];
let openingBonuses = false;

function addBonus() {
    if (!openingBonuses) {
        const name = prompt('Enter the name of the bonus:');
        const value = parseFloat(prompt('Enter the value of the bonus:'));
        const bonus = {
            name: name,
            value: value,
            winnings: 0
        };
        bonuses.push(bonus);
        displayBonuses();
    } else {
        alert('Cannot add bonus while opening bonuses.');
    }
}

function startOpeningBonuses() {
    openingBonuses = true;
    alert('You have started opening bonuses.');
    displayBonuses();
}

function updateWinningsForBonus(index) {
    const winnings = parseFloat(prompt(`Enter the winnings for ${bonuses[index].name}:`));
    bonuses[index].winnings = winnings;
    displayBonuses();
}

function displayBonuses() {
    const bonusList = document.getElementById('bonusList');
    bonusList.innerHTML = '';
    bonuses.forEach((bonus, index) => {
        const row = bonusList.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${bonus.name}</td>
            <td>${bonus.value}</td>
            <td>${bonus.winnings}</td>
            <td>${openingBonuses && bonus.winnings === 0 ? '<button onclick="updateWinningsForBonus(' + index + ')">Update Winnings</button>' : ''}</td>
        `;
    });
}
