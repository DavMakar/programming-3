const Base = require("./class.base");
const random = require("./random")
const Grass = require("./class.grass")
const GrassEater = require("./class.grasseater")
const Pred = require("./class.predator")



module.exports = class Virus extends Base {
    constructor(x, y) {
        super(x,y);

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],

        ];
        this.count = 0;
        this.kadr = 0;
    }
    getNewCoordinates() {

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],

        ];
    }
    chooseCell(character) {

        this.getNewCoordinates();
        return super.chooseCell(character);

    }
    eatVirus() {

        var emptyCells1 = this.chooseCell(3);
        var emptyCells2 = this.chooseCell(2);

        if (emptyCells1.length != 0) {

            var randomCells = random(emptyCells1);

            var x = randomCells[0];
            var y = randomCells[1];

            matrix[y][x] = 0;

            for (var i in predArr) {
                if (x == predArr[i].x && y == predArr[i].y) {
                    predArr.splice(i, 1);
                    this.count++;
                    break;
                }

            }
            this.multVirus();
        }

        else if (emptyCells2.length != 0) {

            var randomCells = random(emptyCells2);
            var x = randomCells[0];
            var y = randomCells[1];

            matrix[y][x] = 0;

            for (var i in grassEaterArr) {
                if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    this.count++;
                    break;
                }

            }
            this.multVirus();
        }


        else {
            this.kadr++;

            this.dieVirus();
        }
    }

    dieVirus() {
        if (this.count >= 3 || this.kadr >= 6) {
            for (var i in virusArr) {
                if (this.x == virusArr[i].x && this.y == virusArr[i].y) {
                    virusArr.splice(i, 1);

                    if (grassArr.length <= grassEaterArr.length) {
                        if (grassArr.length <= predArr.length) {
                            var newGrass = new Grass(this.x, this.y);
                            grassArr.push(newGrass);
                            matrix[this.y][this.x] = 1;
                        }
                        else {
                            var newPred = new Pred(this.x, this.y);
                            predArr.push(newPred);
                            matrix[this.y][this.x] = 3;
                        }
                    }
                    else if (grassEaterArr.length < grassArr.length) {
                        if (grassEaterArr.length <= predArr.length) {
                            grassEaterArr.push(new GrassEater(this.x, this.y))
                            matrix[this.y][this.x] = 2;
                        }
                        else {
                            var newPred = new Pred(this.x, this.y);
                            predArr.push(newPred);
                            matrix[this.y][this.x] = 3;
                        }
                    }
                    else {
                        var newPred = new Pred(this.x, this.y);
                        predArr.push(newPred);
                        matrix[this.y][this.x] = 3;
                    }
                    

                    break;
                }
            }

        }
    }
    multVirus() {

        if (this.kadr >= 3 && this.count <= 3) {

            var emptyCells = this.chooseCell(0);

            if (emptyCells.length != 0) {

                var rand = random(emptyCells);
                var x = rand[0];
                var y = rand[1];

                var newVir = new Virus(x, y);
                virusArr.push(newVir);

                matrix[y][x] = 4;

            }
        }
    }
}