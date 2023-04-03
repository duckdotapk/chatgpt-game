# Prompt 3
## Input
Can you please refactor the upgrade system to only use a single interval, incrementing the amount by the amount of auto clickers you have?

Please try to only include your changes to the code instead of the entire file again, thanks.

## Output
Sure! Here's the modified JavaScript code with a single interval for the auto-clicker upgrade, incrementing the score based on the number of auto-clickers you have:

Changes in script.js:

```javascript
// Add a new variable to store the number of auto-clickers
let autoClickers = 0;

// Modify the startAutoClicker function
function startAutoClicker() {
    if (autoClickers === 0) {
        setInterval(() => {
            score += autoClickers;
            scoreElement.textContent = score;
        }, 1000);
    }
    autoClickers++;
}
```

Here's what we changed:

1. Added a new variable `autoClickers` to store the number of auto-clickers.
2. Modified the `startAutoClicker` function to increment the score by the number of auto-clickers. It starts the interval only if there are no auto-clickers, and then increments the number of auto-clickers each time the function is called.