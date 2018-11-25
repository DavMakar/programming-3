/*class AntiSanitar extends Base {
    constructor(x, y) {
        super(x,y)
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

      /*  var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        } 
        return super.chooseCell(character);

    }
    moveAntiSanitar() {

        var emptyCells0 = this.chooseCell(0);
        var emptyCells1 = this.chooseCell(1);

        if (emptyCells0.length != 0) {

            var randomCells = random(emptyCells0);
            var x = randomCells[0];
            var y = randomCells[1];



            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }
        else if (emptyCells1.length != 0) {

            var randomCells = random(emptyCells1);
            var x = randomCells[0];
            var y = randomCells[1];



            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;


        }

    }
    eatAntiSanitar() {
        var emptyCells = this.chooseCell(5);
        if (emptyCells.length != 0) {


            var randomCells = random(emptyCells);
            var x = randomCells[0];
            var y = randomCells[1];



            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;

            this.healt += 80;
            this.kerac++;

            for (var i in sanitArr) {
                if (this.x == sanitArr[i].x && this.y == sanitArr[i].y) {
                    sanitArr.splice(i, 1);
                    break;
                }

            }
            this.multAntiSanitar();
        }
        else {
            this.moveAntiSanitar();
            this.dieAntiSanitar();
            this.healt -= 5;
        }
    }

    dieAntiSanitar() {
        if (this.healt <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in antiSanitArr) {
                if (this.x == antiSanitArr[i].x && this.y == antiSanitArr[i].y) {

                    antiSanitArr.splice(i, 1);

                    break;
                }
            }
        }
    }
    multAntiSanitar() {
        if (this.healt >= 200 && this.kerac >= 3) {

            var emptyCells = this.chooseCell(0);

            if (emptyCells.length != 0) {

                var rand = random(emptyCells);
                var x = rand[0];
                var y = rand[1];

                var newAntiSanitar = new AntiSanitar(x, y);
                antiSanitArr.push(newAntiSanitar);

                matrix[y][x] = 6;
                this.healt = 100;
                this.kerac = 0;
            }
        }
    }
}
*/