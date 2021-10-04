function drawGraph() {
    canvas = document.getElementById("canvas")
    context = canvas.getContext("2d")
    width=canvas.width
    amplitudeFirstWave=100
    amplitudeSecondWave=120
    freqency=3
    increment = 0.03
    waveLength = 0.03
    yaxis = canvas.height/2
    var firstWaveStartPosition=50
    var secondWaveStartPosition=100
    interval = setInterval(function(){
        drawSine(firstWaveStartPosition)
        drawSecondWave(secondWaveStartPosition)
        firstWaveStartPosition++
        secondWaveStartPosition++
    },10)
}


function calcSineY(x,amplitudeFirstWave) {
    return (amplitudeFirstWave - amplitudeFirstWave * Math.sin( x*2 * Math.PI * (freqency/width)))
}

function calcCosY(x,amplitudeSecondWave) {
    return (amplitudeSecondWave - amplitudeSecondWave * Math.cos( x * 2 * Math.PI * (freqency/width)))
}
let iteration = 2
let iteration_interval = setInterval(function (){
    iteration+=2
},500)
function drawSine(x){
    if(iteration>100){
        clearInterval(interval);
        clearInterval(iteration_interval)
    }
    if(x >= canvas.width){
        context.clearRect(0, 0, canvas.width, canvas.height);
        showGrid(iteration)
        context.beginPath()
        context.strokeStyle = "#00BFFF";
        for(var i=55;i<=x;i++){
            context.lineTo(i,yaxis+Math.sin(i*waveLength+increment)*amplitudeFirstWave)
        }
        context.stroke()
        increment+=0.03
    } else {
        context.beginPath()
        context.strokeStyle = "#00BFFF"
        for(var i=0;i<x;i++){
            var y = calcSineY(i, amplitudeFirstWave)+80
            context.lineTo(i + 55, y)
        }
        context.stroke()
    }
}

function drawSecondWave(x){
    if(x >= canvas.width){
        context.beginPath()
        context.strokeStyle = "#00BFFF"
        for(var i=55;i<=x;i++){
            context.lineTo(i,yaxis+Math.cos(i*waveLength+increment)*amplitudeSecondWave)
        }
        context.stroke();
        increment+=0.03
    } else {
        context.beginPath()
        context.strokeStyle = "#00BFFF"
        for(var i=0;i<x;i++){
            var y = calcCosY(i, amplitudeSecondWave)+80
            context.lineTo(i + 55, y)
        }
        context.stroke()
    }
}

