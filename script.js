const codeElement = document.getElementById('code');
const codeLines = [
    '#LifeAlgorithm', 
    'while (!Success) {',
    '    tryAgain();',
    '',
    '    if (Success()) {',
    '        improve();',
    '    }', 
    '}',
    '',
    '//WannDev' 
];
const codeColors = [
    '#ffffff', 
    '#ff0000', 
    '#ffffff', 
    'white',   
    '#ff0000', 
    '#ffffff', 
    '#ff0000', 
    '#ff0000', 
    '#ffffff'  
];

let currentLineIndex = 0;
let currentLine = '';
let typingSpeed = 100;

function typeCode() {
    if (currentLine === codeLines[currentLineIndex]) {
        currentLineIndex++;
        if (currentLineIndex === codeLines.length) {
            return;
        }
        currentLine = '';
        setTimeout(typeCode, typingSpeed * 3); 
    } else {
        currentLine = codeLines[currentLineIndex].slice(0, currentLine.length + 1);
        let outputHTML = codeLines.slice(0, currentLineIndex).map((line, index) => {
            if (line === 'WannDev') {
                return `<div class="center" style="color: ${codeColors[index]};">${line}</div>`;
            }
            return `<div style="color: ${codeColors[index]};">${line}</div>`;
        }).join('');
        
        let currentStyledLine = `<span style="color: ${codeColors[currentLineIndex]};">${currentLine}</span>`;
        codeElement.innerHTML = outputHTML + currentStyledLine;
        setTimeout(typeCode, typingSpeed);
    }
}

typeCode();
