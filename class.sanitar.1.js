class MegaVirus extends Base {
    constructor(x, y) {
        super(x,y)
        this.kerac=0;
        this.healt=100;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
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
           /* [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],*/
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

        } */
        return super.chooseCell(character);

    }
    moveMegaVirus() {
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
            console.log("Sharjvum");
        }
        else if (emptyCells1.length != 0) {

            var randomCells = random(emptyCells1);
            var x = randomCells[0];
            var y = randomCells[1];



            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            console.log("Sharjvum");

        }

    }
    eatMegaVirus() {
        var emptyCells5 = this.chooseCell(5);
        var emptyCells4 = this.chooseCell(4);
        var emptyCells3 = this.chooseCell(3);
        var emptyCells2 = this.chooseCell(2);
        var emptyCells1 = this.chooseCell(1);

        if (emptyCells1.length != 0) {


            var randomCells = random(emptyCells1);

            var x = randomCells[0];
            var y = randomCells[1];



            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.kerac++;
     
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }

            }
            this.multMegaVirus();
            console.log("eat1");
        }
        else if (emptyCells2.length != 0) {


            var randomCells = random(emptyCells2);

            var x = randomCells[0];
            var y = randomCells[1];


            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;

            this.kerac++;
            for (var i in grassEater) {
                if (this.x == grassEater[i].x && this.y == grassEater[i].y) {
                    grassEater.splice(i, 1);
                    break;
                }

            }
            this.multMegaVirus();
            console.log("eat1");
        }
        
        else if (emptyCells3.length != 0) {


            var randomCells = random(emptyCells3);

            var x = randomCells[0];
            var y = randomCells[1];



            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.kerac++;
     
            for (var i in predArr) {
                if (this.x == predArr[i].x && this.y == predArr[i].y) {
                    predArr.splice(i, 1);
                    break;
                }

            }
            this.multMegaVirus();
            console.log("eat1");
        }
        else if (emptyCells4.length != 0) {


            var randomCells = random(emptyCells4);

            var x = randomCells[0];
            var y = randomCells[1];



            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.kerac++;
     
            for (var i in virusArr) {
                if (this.x == virusArr[i].x && this.y == virusArr[i].y) {
                    virusArr.splice(i, 1);
                    break;
                }

            }
            this.multMegaVrius();
            console.log("eat1");
        }
        else if (emptyCells5.length != 0) {


            var randomCells = random(emptyCells5);

            var x = randomCells[0];
            var y = randomCells[1];



            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.kerac++;
     
            for (var i in sanitArr) {
                if (this.x == sanitArr[i].x && this.y == sanitArr[i].y) {
                    sanitArr.splice(i, 1);
                    break;
                }

            }
            this.multMegaVirus();
            console.log("eat1");
        }
        else {
            this.moveMegaVirus();
            this.dieMegaVirus();
                this.healt -=15;
        }
    }

    dieMegaVirus() {
        if (this.healt <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in megaVirusArr) {
                if (this.x == megaVirusArr[i].x && this.y == megaVirusArr[i].y) {

                    megaVirusArr.splice(i, 1);

                    break;
                }
            }
        }
    }
    multMegaVirus() {
        if (this.kerac >= 3) {

            var emptyCells = this.chooseCell(0);

            if (emptyCells.length != 0) {

                var rand = random(emptyCells);
                var x = rand[0];
                var y = rand[1];

                var newMegaVirus = new MegaVirus(x, y);
                megaVirusArr.push(newMegaVirus);

                matrix[y][x] = 6;
                this.healt = 100;
                this.kerac = 0;
                console.log("mult");
            }
        }
    }
}
