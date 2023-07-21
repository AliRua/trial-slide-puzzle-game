let rows = 3;
let columns = 3;

let currTile;
let otherTile;

let turns = 0;

let imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

window.onload = function () {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            let tile = document.createElement('img');
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            document.getElementById('board').append(tile);
        }
    }
};