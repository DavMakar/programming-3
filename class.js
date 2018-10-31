class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.max = 3;
        this.multiply = Math.round(Math.random(0, 4));
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
    chooseCell() {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 0) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    mult() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var randomCells = random(emptyCells);
        if (emptyCells.length != 0 && this.multiply >= 3) {


            var x = randomCells[0];
            var y = randomCells[1];

            var newGrass = new Grass(x, y);
            grassArr.push(newGrass);

            matrix[y][x] = 1;
        }
    }
}


class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 6;

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

        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

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
                this.energy = 6;
            }
        }
    }
}


class Pred {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.MAX_ENERGY = 40;
        this.MIN_ENERGY = 0;
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

        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }

    movePred() {

        var emptyCells = this.chooseCell(0);
        this.energy -= 4;
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

            for (var i in grassEater) {
                this.energy++;
                if (this.x == grassEater[i].x && this.y == grassEater[i].y) {
                    grassEater.splice(i, 1);
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
        if (this.energy >= 35) {


            var emptyCells = this.chooseCell(0);

            if (emptyCells.length != 0) {

                var randomCells = random(emptyCells);
                var x = randomCells[0];
                var y = randomCells[1];

                var newPred = new Pred(x, y);
                predArr.push(newPred);

                matrix[y][x] = 3;
                this.energy = 3;
            }
        }

    }
}
class Virus {
    constructor(x, y) {
        this.x = x;
        this.y = y;

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

        var found = [];

        for (var i = 0; i < this.directions.length; ++i) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

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
class Sanitar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.healt = 100;
        this.kerac = 0;
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

        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }
    moveSanitar() {

        var emptyCells0 = this.chooseCell(0);
        var emptyCells1 = this.chooseCell(1);

        if (emptyCells0.length != 0) {

            var randomCells = random(emptyCells0);
            var x = randomCells[0];
            var y = randomCells[1];



            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }
        else if (emptyCells1.length != 0) {

            var randomCells = random(emptyCells1);
            var x = randomCells[0];
            var y = randomCells[1];



            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;


        }

    }
    eatSanitar() {
        var emptyCells = this.chooseCell(4);
        if (emptyCells.length != 0) {


            var randomCells = random(emptyCells);
            var x = randomCells[0];
            var y = randomCells[1];



            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;

            this.healt += 58;
            this.kerac++;

            for (var i in virusArr) {
                if (this.x == virusArr[i].x && this.y == virusArr[i].y) {
                    virusArr.splice(i, 1);
                    break;
                }

            }
            this.multSanitar();
        }
        else {
            this.moveSanitar();
            this.dieSanitar();
            this.healt -= 5;
        }
    }

    dieSanitar() {
        if (this.healt <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in sanitArr) {
                if (this.x == sanitArr[i].x && this.y == sanitArr[i].y) {

                    sanitArr.splice(i, 1);

                    break;
                }
            }
        }
    }
    multSanitar() {
        if (this.healt >= 185 && this.kerac >= 3) {

            var emptyCells = this.chooseCell(0);

            if (emptyCells.length != 0) {

                var rand = random(emptyCells);
                var x = rand[0];
                var y = rand[1];

                var newSanitar = new Sanitar(x, y);
                sanitArr.push(newSanitar);

                matrix[y][x] = 5;
                this.healt = 100;
                this.kerac = 0;
            }
        }
    }
}