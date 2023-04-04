# Prompt 6
## Input
Good work. Can you now add a second and third upgrade? Maybe also a generic system for defining upgrades.

## Output
Sure, let's create a generic system for defining upgrades and add two more upgrades to the game. We'll create a new class to define upgrades and update the JavaScript, HTML, and CSS files accordingly.

    Update the HTML file (index.html) by adding placeholders for the new upgrades:

```html
...
<div class="upgrades-container">
    <div id="upgrade1" class="upgrade"></div>
    <div id="upgrade2" class="upgrade"></div>
    <div id="upgrade3" class="upgrade"></div>
</div>
...
```

1. Update the CSS file (style.css) to style the upgrades container and upgrades:

```css
...
.upgrades-container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.upgrade {
    width: 120px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    background-color: #f9f9f9;
    cursor: pointer;
}

.upgrade:hover {
    background-color: #f0f0f0;
}
...
```

1. Update the JavaScript file (script.js) by creating a new class Upgrade and modifying the existing code:

```javascript
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
```

In this code, we created a new `Upgrade` class to represent a generic upgrade. We then created three upgrade instances in the `upgrades` array, specifying their names, costs, and effects. The `forEach` loop at the end sets up the display and event listeners for each upgrade.

The `startAutoClicker` function has been modified to apply the effect of each upgrade the number of times it has been purchased.

Now, open the index.html file in your web browser to see the updated game with a generic system for defining upgrades and two more upgrades, "Cookie doubler" and "Mega-clicker".