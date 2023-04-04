# Prompt 4
## Input
Can you please add a funny title and theme to the game? Something more interesting than just "Score".

## Output
Sure, let's give the game a funny title and theme. We'll call it "Cookie Craver" and add a cookie image to click instead of a button. Follow the changes below to update your game:

1. Update the HTML file (index.html) with the new title and an image:

```html
...
<head>
    ...
    <title>Cookie Craver</title>
    ...
</head>
<body>
    <div class="game-container">
        <h1>Cookie Craver</h1>
        <h2 class="score">Cookies: <span id="score">0</span></h2>
        <img src="cookie.png" alt="Click me!" id="clickBtn" class="click-btn">
        ...
    </div>
    ...
</body>
</html>
```

1. Add a cookie image to your project folder and name it "cookie.png". You can use any cookie image you like or download one from the internet.

2. Update the CSS file (style.css) to style the image and the new title:

```css
...
.game-container {
    ...
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-bottom: 10px;
}

.score {
    margin-bottom: 20px;
}

.click-btn {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    cursor: pointer;
    object-fit: cover;
}
...
```

1. Update the JavaScript file (script.js) to change the event listener to use the image:

```javascript
const clickBtn = document.getElementById('clickBtn');
...
clickBtn.addEventListener('click', () => {
    ...
});
...
```

Now, the game has a funny title "Cookie Craver" and a cookie-themed clicking mechanism. Open the index.html file in your web browser to see the updated game.