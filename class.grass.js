class Grass extends Base {
    constructor(x, y) {
        super(x,y)
        this.multiply = Math.round(Math.random(0, 4));
       
    
    
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