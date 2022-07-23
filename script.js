  // htmldeki divi oluştur
 //row
 //rowun özelliklerini ayarla
 let row = document.createElement("div");
 let childRow = document.createElement("div");
 const container = document.querySelector("#container")
 container.style.display = "flex";
 container.style.flexDirection = "column";

 //container
 
 function row_squares(){
    for (let i = 0; i <16; i++) {
    childRow = document.createElement("div");
    childRow.style.width = "20px";
    childRow.style.height = "20px";
    childRow.style.border = "3px solid black"
    row.style.display = "flex";
    row.style.flexDirection = "row";
    //rowu konteynere şutla
    container.appendChild(row);
    //childRow u row a şutla
    row.appendChild(childRow);
}
}
row_squares();
 //cells
let cells = document.createElement("div");
let childCells = document.createElement("div");
//cells function
function cells_squares(){
 //256 kere çalışacak bir div oluştur
 
  for(let i = 0; i<16; i++){
    childCells = document.createElement("div");
      
    childCells.style.width = "20px";
    childCells.style.height = "20px";
    childCells.style.border = "3px solid black";
    cells.style.display = "flex";
    cells.style.flexDirection = "row";
      cells.appendChild(childCells);
      
      row.appendChild(cells);
      container.appendChild(cells);


    }
}
cells_squares();

 // bir div oluştur




