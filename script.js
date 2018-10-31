
var matrix = [
];
var sanitArr = [];
var predArr = [];
var grassArr = [];
var grassEater = [];
var virusArr = [];
var side = 20;
var m = 40;
var n = 40;


function setup() {
    frameRate(13);

    background('#acacac');
    for (var y = 0; y < n; y++) {
        matrix[y] = [];

        for (var x = 0; x < m; x++) {
            matrix[y][x] = Math.round(Math.random() * 3);
        }
    }

    matrix[Math.floor(random(m))][Math.floor(random(n))] = 4;
    matrix[Math.floor(random(m))][Math.floor(random(n))] = 5;
    matrix[Math.floor(random(m))][Math.floor(random(n))] = 5;
    matrix[Math.floor(random(m))][Math.floor(random(n))] = 5;

    createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gre = new GrassEater(x, y);
                grassEater.push(gre);
            }
            else if (matrix[y][x] == 3) {
                var pre = new Pred(x, y);
                predArr.push(pre);
            }
            else if (matrix[y][x] == 4) {
                var vir = new Virus(x, y);
                virusArr.push(vir);
            }
            else if (matrix[y][x] == 5) {
                var sani = new Sanitar(x, y);
                sanitArr.push(sani);
            }
        }

    }
}
function draw() {

    drawMatrix();

    for (var i in grassArr) {
        grassArr[i].mult();
    }
    for (var i in grassEater) {
        grassEater[i].eat();
    }

    for (var i in predArr) {
        predArr[i].eatPred();
    }

    for (var i = 0; i < virusArr.length; i++) {
        virusArr[i].eatVirus();
    }
    for (var i = 0; i < sanitArr.length; i++) {
        sanitArr[i].eatSanitar();
    }

}



function drawMatrix() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {

                fill(0, 0, 0, 255);

                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {

                fill(73, 255, 131, 255);
                rect(x * side, y * side, side, side);
            }
        }
    }

}