const char = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const magicnumber = 893.1048554818476;

const wheelCanvas = document.getElementById("wheelCanvas")
const ctx = wheelCanvas.getContext("2d");

const circle = 2 * Math.PI

// const fractions = 50;
// const desirednumberarray = [1, 2, 3, 4, 5];

const constant = circle/fractions

const canvasHeight = wheelCanvas.height;
const canvasWidth = wheelCanvas.width;
const radius = canvasHeight/2 -10

var iteration = 0;
var rotation = 0

var fontsize = "10px"

if (0 <= fractions && fractions <= 24) {
    fontsize = "50px";
} else if (25 <= fractions && fractions <= 49) {
    fontsize = "35px";
} else if (50 <= fractions && fractions <= 74) {
    fontsize = "25px";
} else if (75 <= fractions && fractions <= 100) {
    fontsize = "15px";
}


for (let index = 1; index < fractions+1; index++) {
    if (index % 2 == 0) {
        fillcolor = "#ff5e5e"
        textcolor = "#fcfcfc"
    } else {
        fillcolor = "#ffdede"
        textcolor = "#212121"
    }

    ctx.fillStyle = fillcolor;
    ctx.strokeStyle = fillcolor;

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
    ctx.font = `${fontsize} Arial`;
    ctx.fillStyle = textcolor;

    ctx.fillText(index, 0, 0);
    ctx.restore(); 
}

const arrowCanvas = document.getElementById("arrowCanvas")
const context = arrowCanvas.getContext("2d");

context.beginPath();
context.moveTo(12.5, 50);
context.lineTo(0, 0); 
context.lineTo(25, 0); 
context.stroke();
context.fill();
context.closePath()

function animation () {
    wheelCanvas.classList.remove("idle");
    var value = 1.2, iterations = 0;
    var animate = setInterval(frame, 5);
    var target = false;

    if (iteration >= desirednumberarray.length) { iteration = 0; };

    var rotationnumber = 360/fractions
    var desirednumber = desirednumberarray[iteration]
    var randomnumber = (Math.random() * rotationnumber * 0.8) - rotationnumber * 0.4;
    if (randomnumber + 0.6 >= rotationnumber/2) { randomnumber -= 0.5; }
    if (randomnumber - 0.6 <= rotationnumber/2) { randomnumber += 0.5; }
    var desiredrotation = (360 + rotationnumber/2 - desirednumber*rotationnumber) + randomnumber;

    console.log(randomnumber)

    console.log(desiredrotation, rotationnumber)

    iteration++;

    var lowerlimit = desiredrotation - 0.6
    var higherlimit = desiredrotation + 0.6

    if (lowerlimit < 0) { lowerlimit += 360; } else if (lowerlimit > 360) { lowerlimit -= 360; }
    if (higherlimit > 360) { higherlimit -= 360; } else if (higherlimit < 0) { higherlimit += 360; }

    if (lowerlimit > higherlimit) { let temp = lowerlimit; lowerlimit = higherlimit; higherlimit = temp; }

    function frame() {
        currenttarget = rotation + magicnumber
        while (currenttarget > 360) { currenttarget -= 360}

        isinrange = lowerlimit <= currenttarget && currenttarget <= higherlimit

        console.log(lowerlimit, currenttarget, higherlimit)

        if (isinrange || target) {
            console.log("hit")

            value = Math.pow((iterations/8-0.4), 5) + 1.2
            iterations -= 0.005

            target = true;
        }

        rotation += value;
        
        if (rotation > 360) { rotation -= 360; }
        wheelCanvas.style.transform = "rotate(" + rotation + "deg)";

        if (value < 0) { clearInterval(animate); }  
}
}
