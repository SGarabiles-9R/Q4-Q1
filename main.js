function calculate() {
    var mass = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var bmi = mass / (height * height);
    var img = document.getElementById("meterimg");
    var resultsEl = document.getElementById("results");
    var resultText = "";
    var resultColor = "#ffffff";

    if (bmi < 18.5) {
        resultText = "You are Underweight";
        img.src = "https://i.imgur.com/cgPMCDq.png";
        resultColor = "#999999";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText = "Normal Weight";
        img.src = "https://i.imgur.com/5lGZ55V.png";
        resultColor = "#bbbbbb";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText = "You are Overweight";
        img.src = "https://i.imgur.com/L8LLirN.png";
        resultColor = "#666666";
    } else {
        resultText = "You are Obese";
        img.src = "https://i.imgur.com/IXewX9z.png";
        resultColor = "#333333";
    }

    typeText(resultsEl, resultText, resultColor);
}

// Typewriter effect
function typeText(element, text, color) {
    element.innerHTML = "";
    element.style.color = color;
    element.style.fontSize = "22px";
    element.style.fontFamily = "'Dosis', sans-serif";
    element.style.textAlign = "center";
    element.style.marginTop = "20px";
    element.style.textShadow = "2px 2px 5px rgba(255, 255, 255, 0.9), -1px -1px 2px rgba(255, 255, 255, 0.8)";
element.style.webkitTextStroke = "0.5px white";  // Adds edge definition
    let i = 0;
    let speed = 50; // Speed of typing (ms per character)

    function typeChar() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        }
    }

    typeChar();
}
