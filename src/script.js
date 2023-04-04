const clickBtn = document.getElementById('clickBtn');
// const upgradeBtn = document.getElementById('upgradeBtn');
const scoreElement = document.getElementById('score');
const upgradeCostElement = document.getElementById('upgradeCost');
let score = 0;
let upgradeCost = 10;

clickBtn.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;
});

// upgradeBtn.addEventListener('click', () => {
//     if (score >= upgradeCost) {
//         score -= upgradeCost;
//         upgradeCost *= 2;
//         scoreElement.textContent = score;
//         upgradeCostElement.textContent = upgradeCost;
//         startAutoClicker();
//     }
// });

// Add a new variable to store the number of auto-clickers
let autoClickers = 0;

class Upgrade {
    constructor(id, name, cost, effect) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.effect = effect;
        this.amount = 0;
    }

    canAfford() {
        return score >= this.cost;
    }

    buy() {
		if (this.canAfford()) {
            score -= this.cost;
            this.amount++;
            this.cost = Math.round(this.cost * 1.5);
            this.updateDisplay();
        }
    }

    updateDisplay() {
        const upgradeElement = document.getElementById(this.id);
        upgradeElement.innerHTML = `
            <h3>${this.name}</h3>
            <p>Amount: ${this.amount}</p>
            <p>Cost: ${this.cost} points</p>
        `;
        upgradeElement.addEventListener('click', () => this.buy());
    }
}

const upgrades = [
    new Upgrade('upgrade1', 'Auto-clicker', 10, () => score++),
    new Upgrade('upgrade2', 'Cookie doubler', 50, () => score *= 2),
    new Upgrade('upgrade3', 'Mega-clicker', 100, () => score += 10),
];

upgrades.forEach(upgrade => upgrade.updateDisplay());

function startAutoClicker() {
    setInterval(() => {
        upgrades.forEach(upgrade => {
            for (let i = 0; i < upgrade.amount; i++) {
                upgrade.effect();
            }
        });
        scoreElement.textContent = score;
    }, 1000);
}

startAutoClicker();