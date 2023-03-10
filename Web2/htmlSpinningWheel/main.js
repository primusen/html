const char = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const wheelCanvas = document.getElementById("wheelCanvas")
const circle = 2 * Math.PI
const ctx = wheelCanvas.getContext("2d");

var fractions = 100;

var canvasHeight = wheelCanvas.height;
var canvasWidth = wheelCanvas.width;
var radius = canvasHeight/2 -1

const constant = circle/fractions

for (let index = 1; index < fractions+1; index++) {
    let hexcode = '#';
    for (let i = 0; i < 6; i++) {
        hexcode += char[Math.round(Math.random() * (char.length - 1))]
    }

    ctx.fillStyle = hexcode;
    ctx.strokeStyle = hexcode;

    let startAngle = (index-1)*constant
    let endAngle = index*constant

    let xStart = Math.cos(endAngle)*radius +canvasHeight/2
    let yStart = Math.sin(endAngle)*radius +canvasWidth/2

    let xEnd = Math.cos(startAngle)*radius +canvasHeight/2
    let yEnd = Math.sin(startAngle)*radius +canvasWidth/2

    let xText = Math.cos((endAngle+startAngle)/2)*radius +canvasHeight/2
    let yText = Math.sin((endAngle+startAngle)/2)*radius +canvasWidth/2

    ctx.beginPath();
    ctx.arc(canvasHeight/2, canvasWidth/2, radius, startAngle, endAngle);
    ctx.stroke();
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(canvasHeight/2, canvasWidth/2);
    ctx.lineTo(xStart, yStart); 
    ctx.lineTo(xEnd, yEnd); 
    ctx.stroke();
    ctx.fill();
    ctx.closePath()

    ctx.save();
    ctx.translate(xText, yText);
    ctx.rotate((endAngle+startAngle)/2 + 0.5*Math.PI);

    ctx.textAlign = "center"; 
    ctx.textBaseline = "hanging"; 
    ctx.font = "15px Arial";
    ctx.fillStyle = "#000000";

    ctx.fillText(index, 0, 0);
    ctx.restore(); 
}