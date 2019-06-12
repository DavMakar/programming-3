const Base = require("./class.base")

module.exports = class GrassEater extends Base {
    constructor(x, y) {
        super(x, y)
        this.gender = Math.round(Math.random() * 1);
        if (weather == 4) {
            this.energy = 5;
        }
        else {
            this.energy = 6;
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
        this.energy--;

        if (emptyCells.length != 0) {
            var randomCells = random(emptyCells);

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

            for (var i in grassEater) {
                if (this.x == grassEater[i].x && this.y == grassEater[i].y) {
                    grassEater.splice(i, 1);
                    var RNG = random(0, 10);
                    if (RNG >= 5) {
                        matrix[this.y][this.x] = 4;
                        virusArr.push(new Virus(this.x, this.y));
                    }
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

                var x = randomCells[0];
                var y = randomCells[1];

                var newGrassEater = new GrassEater(x, y);
                grassEater.push(newGrassEater);

                matrix[y][x] = 2;
                if (weather == 4) {
                    this.energy = 5;
                } else {
                    this.energy = 6;
                }

            }
        }
    }
}           /* else if (this.gender == 1) {
                var emptyCells = this.chooseCell(0);

                if (emptyCells.length != 0) {

                    var randomCells = random(emptyCells);

                    var x = randomCells[0];
                    var y = randomCells[1];

                    var newGrassEaterVorc = new GrassEater(x, y);
                    grassEaterVorc.push(newGrassEaterVorc);

                    matrix[y][x] = 2;
                    if (weather == 4) {
                        this.energy = 5;
                    } else {
                        this.energy = 6;
                    }

                }
            }

        }   
    }
}
class GrassEaterEg extends GrassEater {
    constructor(x, y) {
    super(x, y)
    }
*/
