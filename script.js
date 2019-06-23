
function setup() {
    const socket = io();
    const side = 20;
    var matrix = [];
    let weather=1;

    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let predCountElement=document.getElementById('predatorCount');
    let virusCountElement =document.getElementById('virusCount');
    let sanitarCountElement = document.getElementById('sanitarCount');
    let backgroundColorChange =document.getElementById('unic');

    var textweather = document.getElementById("exanak");
    
    var colors=['green','red','blue','yellow','orange','grey']



    

    socket.on("data", drawCreatures);

    function myfunction() {

            if (weather >= 4 && weather<8)
                textweather.innerHTML = "Ամառ";
            else if (weather >= 8 && weather <12) {
                textweather.innerHTML = "Աշուն";
            }
            else if (weather >= 12 && weather<16) {
                textweather.innerHTML = "Ձմեռ";
            }
            else if(weather<4){
                textweather.innerHTML = "Գարուն";
            }
        }

    function drawCreatures(data) {

        matrix = data.matrix;
        weather= data.weather;

        grassCountElement.innerText= data.grassCount
        grassEaterCountElement.innerHTML=data.grassEaterCount
        predCountElement.innerHTML=data.predCount
        virusCountElement.innerHTML=data.virusCount
        sanitarCountElement.innerHTML=data.sanitarCount
        
        backgroundColorChange.addEventListener('click',()=>{

            document.body.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)]
        })

        createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);

        background('#acacac');
        //console.log(weather);

   
        
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

                    fill(73, 255, 255, 255);
                    rect(x * side, y * side, side, side);
                }
              

                if (weather >= 12 && weather<16) {
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

                        fill(73, 255, 255, 255);
                        rect(x * side, y * side, side, side);
                    }
                    // else if (matrix[y][x] == 6) {
                    //     fill(5, 17, 255, 255);
                    //     rect(x * side, y * side, side, side);
                    // }
                }
                if (weather >= 8 && weather <12 ) {

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

                        fill(73, 255, 255, 255);
                        rect(x * side, y * side, side, side);
                    }
                    // else if (matrix[y][x] == 6) {
                    //     fill(5, 17, 255, 255);
                    //     rect(x * side, y * side, side, side);
                    // }
                }
                if (weather >= 4 && weather<8) {
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

                        fill(73, 255, 255, 255);
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