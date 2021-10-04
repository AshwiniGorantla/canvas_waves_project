var canvas ;
var context ;
var Val_max;
var Val_min;
var sections;
var xScale;
var yScale;

function showGrid(iteration) {
    sections = 11;
    Val_max = 3;
    Val_min = -3;
    Row_max = 10;
    Row_min = 0;
    rowStepSize = 2
    var stepSize = 1;
    var columnSize = 50;
    var rowSize = 50;
    var margin = 40;
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.fillStyle = "#0099ff"

    yScale = (canvas.height - columnSize - margin) / (Val_max - Val_min)
    xScale = (canvas.width - rowSize) / sections

    context.strokeStyle="#009933"
    context.beginPath()
    //Vertical lines on the graph
    let scaleX=0+iteration
    for (i=0;i<=sections;i++) {
        var x = i * xScale
        context.font = '25px serif'
        context.fillText(scaleX, x+50,canvas.height-20,200)
        context.moveTo(x, columnSize)
        context.lineTo(x, canvas.height - margin)
        scaleX = scaleX + rowStepSize
    }
    //horizontal lines on the graph
    var count =  0;
    for (scale=Val_max;scale>=Val_min;scale = scale - stepSize) {
        var y = columnSize + (yScale * count * stepSize)
        let x= 0*rowSize
        context.fillText(scale, columnSize-20,y + 5, 140)
        context.moveTo(rowSize,y)
        context.lineTo(canvas.width,y)
        x++
        count++
    }
    context.stroke()
}
