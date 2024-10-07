let canvas;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0, 0);
    canvas.style("z-index", -2 );
    angleMode(DEGREES);
    
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(155);
}

function draw(){
    background(0);
    rotateX(45);
    noFill();

    

    for (var i = 0; i < 50; i++) {
        var r = map(sin(frameCount / 6), -1, 1, 100, 200);
        var g = map (i, 0, 50, 100, 200);
        var b = map(cos(frameCount), -1, 1, 200, 100);

        stroke(r, g, b);
        rotate(2)
        beginShape()
         for (var j = 0; j < 360; j += 60) {
            var rad = i * 3;
            var x = rad * cos(j);
            var y = rad * sin(j);
            var z = sin (frameCount *2 + i * 5) * 50;

            vertex(x, y, z);
         }
         endShape(CLOSE);

         beginShape()
         for (var j = 0; j < 360; j += 60) {
            var rad = i * 3;
            var x = rad * cos(j + 180) + 400;
            var y = rad * sin(j) + 200;
            var z = sin (frameCount * 4 + i * 5) * 50 + 200;

            vertex(x, y, z);
         }
         endShape(CLOSE);

         beginShape()
         for (var j = 0; j < 360; j += 60) {
            var rad = i * 3;
            var x = rad * cos(j - 580) - 400;
            var y = rad * sin(j - 250) - 600;
            var z = sin (frameCount * 4 + i * 5) * 50 + 200;

            vertex(x, y, z);
         }
         endShape(CLOSE);
    }
}
