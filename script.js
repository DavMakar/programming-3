
var matrix = [
];
var sanitArr = [];
var predArr = [];
var grassArr = [];
var grassEater = [];
var virusArr = [];
var side = 20;
var m = 30;
var n = 30;
var weather = 1;
var textweather = document.getElementById("exanak");
var iradarcutyun = document.getElementById("b1");

setInterval(function () {
    weather++; if (weather > 4) {
        weather = 1;
    } console.log(weather);
}, 2000);

function myfunction() {

    if (weather == 2)
        textweather.innerHTML = "Amar";
    else if (weather == 3) {
        textweather.innerHTML = "Ashun";
    }
    else if (weather == 4) {
        textweather.innerHTML = "Dzmer";
    }
    else {
        textweather.innerHTML = "Garun";
    }
}


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
            myfunction();
            if (matrix[y][x] == 1) {
                fill(109, 241, 9);
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

            if (weather == 4) {
                myfunction();
                if (matrix[y][x] == 1) {
                    fill("white");
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
            if (weather == 3) {

                myfunction();
                if (matrix[y][x] == 1) {
                    fill(155, 119, 3);
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
            if (weather == 2) {
                myfunction();
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
}

function mouseClicked() {
    if ( mouseY <= matrix[0].length * side  && mouseX <= matrix.length * side && mouseX >0 && mouseY >0  ){

    
    var moX = console.log(mouseX);
    var moY = console.log(mouseY);
    }
}