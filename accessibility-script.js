function updateStyle() {
            const textBox = document.getElementById('textBox');
            const bgColor = document.getElementById('bgColor').value;
            const textColor = document.getElementById('textColor').value;
            const fontSize = document.getElementById('fontSize').value;

            textBox.style.backgroundColor = bgColor;
            textBox.style.color = textColor;
            textBox.style.fontSize = fontSize + 'px';
}


var mode = "light";
function switchMode(){
    const interactiveSection = document.getElementById("interactiveSection");
    if (mode === "light"){
        mode = "dark";
        interactiveSection.style.backgroundColor = "black";
        interactiveSection.style.color = "white";
    }
    else{
        mode = "light"; 
        interactiveSection.style.backgroundColor = "white";
        interactiveSection.style.color = "black";
    }
}
