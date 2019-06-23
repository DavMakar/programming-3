const Base =require("./base");
const random = require("./random")
const GrassEater=require("./grassEater")
const Pred= require("./predator")


module.exports = class Sanitar extends Base {
    constructor(x, y) {
        super(x,y)
        this.healt = 100;
        this.kerac = 0;
      
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

            this.healt += 50;
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
                    var RNG = random(10);
                    if (RNG >= 7) {
                        matrix[this.y][this.x] = 2;
                        grassEaterArr.push(new GrassEater(this.x, this.y));
                        grassEaterHashiv++
                    }
                    else{
                        matrix[this.y][this.x] = 3;
                        predArr.push(new Pred(this.x, this.y));
                        predHashiv++
                    }
                    break;
                }
            }
        }
    }
    multSanitar() {
        if (this.healt >= 120 && this.kerac >= 2) {

            var emptyCells = this.chooseCell(0);

            if (emptyCells.length != 0) {

                var rand = random(emptyCells);
                sanitarHashiv++;
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