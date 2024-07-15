document.addEventListener('DOMContentLoaded', function() {
    const dynamicText = document.getElementById('dynamic-text');
    const text = "Hey There";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            dynamicText.innerText += text.charAt(index);