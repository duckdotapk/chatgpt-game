# Prompt 1
## Input
Can you please add an optional upgrade that you can spend points on to auto generate a point every second?

## Output
Certainly! Let's add an upgrade button that you can spend points on to auto-generate a point every second. We'll modify the HTML, CSS, and JavaScript files accordingly.

1. Update the HTML file (index.html) by adding the upgrade button and cost display:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Clicker Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="game-container">
        <h1 class="score">Score: <span id="score">0</span></h1>
        <button id="clickBtn" class="click-btn">Click me!</button>
        <div class="upgrade-container">
            <h2>Auto-clicker upgrade</h2>
            <p>Cost: <span id="upgradeCost">10</span> points</p>
            <button id="upgradeBtn" class="click-btn">Buy upgrade</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

1. Update the CSS file (style.css) to style the upgrade container:

```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

.game-container {
    text-align: center;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.score {
    margin-bottom: 20px;
}

.click-btn {
    font-size: 18px;
    padding: 10px 20px;
    background-color: #4caf50;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.click-btn:hover {
    background-color: #45a049;
}

.upgrade-container {
    margin-top: 20px;
}
```

1. Update the JavaScript file (script.js) to add the upgrade functionality:

```javascript
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
```

Now, you can buy the auto-clicker upgrade for 10 points by clicking the "Buy upgrade" button. The cost of the upgrade will double each time you purchase it. Once purchased, the upgrade will automatically generate a point every second. Open the index.html file in your web browser to see the updated clicker game with the auto-clicker upgrade.