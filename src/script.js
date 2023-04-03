const clickBtn = document.getElementById('clickBtn');
const upgradeBtn = document.getElementById('upgradeBtn');
const scoreElement = document.getElementById('score');
const upgradeCostElement = document.getElementById('upgradeCost');
let score = 0;
let upgradeCost = 10;

clickBtn.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;
});

upgradeBtn.addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        upgradeCost *= 2;
        scoreElement.textContent = score;
        upgradeCostElement.textContent = upgradeCost;
        startAutoClicker();
    }
});

function startAutoClicker() {
    setInterval(() => {
        score++;
        scoreElement.textContent = score;
    }, 1000);
}
