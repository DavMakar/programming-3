const Grass = require("./modules/class.grass")
const GrassEater = require("./modules/class.grassEater")
const Pred = require("./modules/class.predator")
const Virus = require("./modules/class.virus")
const Sanitar = require("./modules/class.sanitar")
const random = require("./modules/random");


//console.log(GrassEater);

matrix = [];
grassArr = [];
grassEaterArr = [];
predArr = [];
virusArr = [];
sanitArr = [];
grassHashiv = 0;
grassEaterHashiv=0;
predHashiv=0;
virusHashiv=0;
sanitarHashiv=0;

weather = 1;

//console.log(grassEaterArr)
function matrixGenerator(n, m, virusArr, sanitArr) {
    for (var y = 0; y < n; y++) {
        matrix[y] = [];

        for (var x = 0; x < m; x++) {
            matrix[y][x] = Math.round(Math.random() * 3);
        }
    }
    for (let i = 0; i < virusArr; i++) {
        let customX = Math.floor(random(n));
        let customY = Math.floor(random(m));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < sanitArr; i++) {
        let customX = Math.floor(random(n));
        let customY = Math.floor(random(m));
        matrix[customY][customX] = 5;
    }
}
matrixGenerator(30, 30, 5, 3)

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
                grassHashiv++;
            }
            else if (matrix[y][x] == 2) {

                var gre = new GrassEater(x, y);
                grassEaterArr.push(gre);
                grassEaterHashiv++;
            }
            else if (matrix[y][x] == 3) {
                var pre = new Pred(x, y);
                predArr.push(pre);
                predHashiv++;
            }
            else if (matrix[y][x] == 4) {
                var vir = new Virus(x, y);
                virusArr.push(vir);
                virusHashiv++;
            }
            else if (matrix[y][x] == 5) {
                var sani = new Sanitar(x, y);
                sanitArr.push(sani);
                sanitarHashiv++;
            }
            // else if (matrix[y][x] == 6) {
            //     var newMegaVirus = new MegaVirus(x, y);
            //     megaVirusArr.push(newMegaVirus);
            // }
        }

    }
}
creatingObjects()

function game() {

    
     weather++
    if (weather > 16) {
        weather = 1;
    }



    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mult();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }
    if (predArr[0] !== undefined) {
        for (var i in predArr) {
            predArr[i].eatPred();
        }
    }
    if (virusArr[0] !== undefined) {
        for (var i = 0; i < virusArr.length; i++) {
            virusArr[i].eatVirus();
        }
    }
    if (sanitArr[0] !== undefined) {
        for (var i = 0; i < sanitArr.length; i++) {
            sanitArr[i].eatSanitar();
        }
    }
    // for (var i = 0; i < megaVirusArr.length; i++) {
    //     megaVirusArr[i].eatMegaVirus();
    // }

    let sendData = {
        matrix: matrix,
        grassCount: grassHashiv,
        grassEaterCount: grassEaterHashiv,
        predCount: predHashiv,
        virusCount:virusHashiv,
        sanitarCount:sanitarHashiv,
        weather:weather
    }
    io.sockets.emit("data", sendData);
}

setInterval(game, 1000)

