const Base = require("./base")
const random = require("./random")


module.exports = class GrassEater extends Base {
    constructor(x, y) {
        super(x, y)

        if (weather >= 12 && weather<16) {
            this.energy = 5;
        }
        else if(weather >= 4 && weather<8) {
            this.energy = 6;
        }
        else{
            this.energy=7;
        }
    }
    getNewCoordinates() {
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
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    move() {
        var emptyCells = this.chooseCell(0);
        var randomCells = random(emptyCells);

        if (emptyCells.length != 0) {
            this.energy--;

            var x = randomCells[0];
            var y = randomCells[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }

        this.die();
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;

            for (var i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    // var RNG = random(10);
                    // if (RNG >= 5) {
                    //     matrix[this.y][this.x] = 4;
                    //     virusArr.push(new Virus(this.x, this.y));
                    // }
                    break;
                }
            }
        }
    }
    eat() {
        var emptyCells = this.chooseCell(1);
        if (emptyCells.length != 0) {

            var randomCells = random(emptyCells);

            var x = randomCells[0];
            var y = randomCells[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.energy++;

            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            this.multGrEa();
        }
        else this.move();

    }
    multGrEa() {
        if (this.energy >= 8) {

            var emptyCells = this.chooseCell(0);

            if (emptyCells.length != 0) {

                var randomCells = random(emptyCells);
                grassEaterHashiv++;
                var x = randomCells[0];
                var y = randomCells[1];

                var newGrassEater = new GrassEater(x, y);
                grassEaterArr.push(newGrassEater);

                matrix[y][x] = 2;

            }
        }
    }
}          