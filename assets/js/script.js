let rows = 3;
let columns = 3;

let currTile;
let otherTile;

let turns = 0;

// let imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// creating a random sequence to shuffle pattern, keeping blank tile last.
let imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];


window.onload = function () {

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            let tile = document.createElement('img');
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);
        }
    }
};