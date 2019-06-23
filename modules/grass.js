const Base = require("./base")
const random = require("./random")

module.exports = class Grass extends Base {
    constructor(x, y) {
        super(x, y)
        this.multiply = 3;
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


    mult() {

        if (weather >= 12 && weather<16) {
            this.multiply=0;
        }
        else if (weather >= 4 && weather<8){
            this.multiply=this.multiply+2;
      
          var emptyCells = this.chooseCell(0);
            
            if (emptyCells.length != 0 && this.multiply >= 3) {

                var randomCells = random(emptyCells);
                var x = randomCells[0];
                var y = randomCells[1];

                var newGrass = new Grass(x, y);
                grassArr.push(newGrass);
                matrix[y][x] = 1;
                // console.log(grassArr);
            }
        }
        else{ 
            this.multiply++    
            var emptyCells = this.chooseCell(0);
            
            if (emptyCells.length != 0 && this.multiply >= 5) {
                var randomCells = random(emptyCells);
                grassHashiv++
                var x = randomCells[0];
                var y = randomCells[1];

                var newGrass = new Grass(x, y);
                grassArr.push(newGrass);

                matrix[y][x] = 1;
                // console.log(grassArr);
            }
        }
    }
}
   
            
