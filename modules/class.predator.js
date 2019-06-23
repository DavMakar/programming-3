const Base = require('./class.base')
const random = require("./random")
const Virus = require("./class.virus")
const GrassEater= require("./class.grassEater")

console.log(GrassEater);

module.exports = class Pred extends Base {
    constructor(x, y) {
        super(x, y)
        this.energy = 3;
    }
    getNewCoordinates() {
        if (weather >= 12 && weather < 16) {
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1],
                [this.x - 1, this.y - 2],
                [this.x, this.y - 2],
                [this.x + 2, this.y - 1],
                [this.x - 2, this.y],
                [this.x + 2, this.y],
                [this.x - 2, this.y + 1],
                [this.x, this.y + 2],
                [this.x + 1, this.y + 2]
                

            ];
        }
        else {
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1]
            ];
        }

    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    movePred() {

        var emptyCells = this.chooseCell(0);
        if (weather >= 12 && weather < 16) {
            this.energy -=7;
        } else {

            this.energy -= 8;
        }

        if (emptyCells.length != 0) {

            var randomCells = random(emptyCells);
            var x = randomCells[0];
            var y = randomCells[1];



            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }
        this.diePred();

    }
    eatPred() {
        var emptyCells = this.chooseCell(2);
        if (emptyCells.length != 0) {


            var randomCells = random(emptyCells);
            var x = randomCells[0];
            var y = randomCells[1];



            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;

            for (var i in grassEaterArr) {
                this.energy++;
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.multPred();
        }
        else this.movePred();

    }
    diePred() {


        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;

            for (var i in predArr) {
                if (this.x == predArr[i].x && this.y == predArr[i].y) {
                    predArr.splice(i, 1);
                    var RNG = random(0, 10);
                    if (RNG >= 7.5) {
                        matrix[this.y][this.x] = 4;
                        virusArr.push(new Virus(this.x, this.y));
                    }
                    break;
                }
            }


        }
    }
    multPred() {
        if ((weather >= 12 && weather<16) && this.energy >= 30) {
            var emptyCells = this.chooseCell(0);

            if (emptyCells.length != 0) {
                predHashiv++;
                var randomCells = random(emptyCells);
                var x = randomCells[0];
                var y = randomCells[1];

                var newPred = new Pred(x, y);
                predArr.push(newPred);

                matrix[y][x] = 3;
                this.energy = 3;
            }
        }
        else if(this.energy>=28) {
            var emptyCells = this.chooseCell(0);

            if (emptyCells.length != 0) {

                var randomCells = random(emptyCells);
                var x = randomCells[0];
                var y = randomCells[1];
                predHashiv++

                var newPred = new Pred(x, y);
                predArr.push(newPred);

                matrix[y][x] = 3;
                this.energy = 3;
            }
        }

    }

}
