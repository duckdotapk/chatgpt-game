# Prompt 5
## Input
You are not able to provide images, please do not reference images.

In the case of the Cookie image, please try your best to create a cookie using only HTML elements and CSS.

## Output
Apologies for the confusion. Let's create a simple cookie using HTML elements and CSS instead of an image. Follow these changes to update your game:

1. Update the HTML file (index.html) by replacing the img element with a div element:

```html
...
<h2 class="score">Cookies: <span id="score">0</span></h2>
<div id="clickBtn" class="click-btn"></div>
...
```

1. Update the CSS file (style.css) to create a simple cookie using the div element:

```css
...
.click-btn {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: #DAA520;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.3);
}

.click-btn:before {
    content: "";
    display: block;
    width: 80px;
    height: 80px;
    background-color: #CD853F;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 10px;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.3);
}
...
```

Now, the game will have a simple cookie created using HTML elements and CSS instead of an image. Open the index.html file in your web browser to see the updated game with the cookie-themed clicking mechanism.