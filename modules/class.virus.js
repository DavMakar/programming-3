const Base = require("./class.base");

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

       /* var found = [];

        for (var i = 0; i < this.directions.length; ++i) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }*/
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

            for (var i in grassEater) {
                if (x == grassEater[i].x && y == grassEater[i].y) {
                    grassEater.splice(i, 1);
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

                    if (grassArr.length <= grassEater.length) {
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
                    else if (grassEater.length < grassArr.length) {
                        if (grassEater.length <= predArr.length) {
                            var newGrass = new GrassEater(this.x, this.y);
                            grassEater.push(newGrass);
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