const Grass = require("./modules/class.grass")
const GrassEater = require("./modules/class.grasseater")
const Pred = require("./modules/class.predator")
const Virus = require("./modules/class.virus")
const Sanitar = require("./modules/class.sanitar")

matrix = [];
grassArr = [];
grassEaterArr = [];
predArr = [];
virusArr = [];
sanitArr = [];
grassHashiv = 0;

function matrixGenerator(virusArr, sanitArr) {
    for (var y = 0; y < n; y++) {
        matrix[y] = [];

        for (var x = 0; x < m; x++) {
            matrix[y][x] = Math.round(Math.random() * 3);
        }
    }
    for (let i = 0; i < virusArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < sanitArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}
matrixGenerator(1, 3)

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
            else if (matrix[y][x] == 6) {
                var newMegaVirus = new MegaVirus(x, y);
                megaVirusArr.push(newMegaVirus);
            }
        }

    }
}
creatingObjects()

function game() {
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
    // for (var i = 0; i < megaVirusArr.length; i++) {
    //     megaVirusArr[i].eatMegaVirus();
    // }
    let sendData = {
        matrix: matrix,
        grassCount: grassHashiv
    }
    io.sockets.emit("data",sendData);
}

setInterval(game,1000)

