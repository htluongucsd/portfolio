const div = document.querySelector(".landingtext");
const text = "Welcome, I am Hao Luong. I am a Product Design and UX Design student at UCSD. I aspire to create empathetic designs that are appealing, inclusive, and intuitive to use.";

function textTypingEffect(element, text, i = 0) {
    if (i === 0) {
        element.textContent = "";
    }
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i+1), 30);
}   

textTypingEffect(div, text);
