function changeColor() {
    var colors = ['blue', 'green', 'red', 'yellow', 'purple', 'orange'];
    var button = document.getElementById('colorButton');
    var currentColor = button.style.backgroundColor;
    var newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    button.style.backgroundColor = newColor;
}
