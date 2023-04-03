# Prompt 1
## Input
Please write a basic browser based game using JavaScript.

## Output
Here's a simple browser-based game using JavaScript, HTML, and CSS. It's a basic clicker game where you have to click the button to increase your score. To create the game, follow these steps:

1. Create an HTML file (index.html) and paste the following code into it:

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
    </div>
    <script src="script.js"></script>
</body>
</html>
```

1. Create a CSS file (style.css) and paste the following code into it:

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
```

1. Create a JavaScript file (script.js) and paste the following code into it:

```javascript
const clickBtn = document.getElementById('clickBtn');
const scoreElement = document.getElementById('score');
let score = 0;

clickBtn.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;
});
```

1. Open the index.html file in your web browser, and you will see the simple clicker game. Click the button to increase your score.