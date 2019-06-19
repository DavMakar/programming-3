
function setup() {
    const socket = io();
    const side = 20;
    var matrix = [];

    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
  
    var textweather = document.getElementById("exanak");
 


    function myfunction() {

        if (weather == 4)
            textweather.innerHTML = "Amar";
        else if (weather == 7) {
            textweather.innerHTML = "Ashun";
        }
        else if (weather == 10) {
            textweather.innerHTML = "Dzmer";
        }
        else {
            textweather.innerHTML = "Garun";
        }
    }

    socket.on("data", drawCreatures);


    function drawCreatures(data) {

        matrix = data.matrix;

        grassCountElement.innerText= data.grassCount

        createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);

        background('#acacac');

        matrix = data.matrix;

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
              

                if (data.weather == 10) {
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
                    // else if (matrix[y][x] == 6) {
                    //     fill(5, 17, 255, 255);
                    //     rect(x * side, y * side, side, side);
                    // }
                }
                if (data.weather == 7) {

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
                    // else if (matrix[y][x] == 6) {
                    //     fill(5, 17, 255, 255);
                    //     rect(x * side, y * side, side, side);
                    // }
                }
                if (data.weather == 4) {
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
                    // else if (matrix[y][x] == 6) {
                    //     fill(5, 17, 255, 255);
                    //     rect(x * side, y * side, side, side);
                    // }
                }

            }
        }
    }
}