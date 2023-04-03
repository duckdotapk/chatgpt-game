const clickBtn = document.getElementById('clickBtn');
const scoreElement = document.getElementById('score');
let score = 0;

clickBtn.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;
});
