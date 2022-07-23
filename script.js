  // htmldeki divi oluştur
 //row
 //rowun özelliklerini ayarla
 let row = document.createElement("div");
 //container
 const container = document.querySelector("#container")
 
 function row_squares(){
    for (let i = 0; i <16; i++) {
    let childRow = document.createElement("div")
    childRow = document.createElement("div");
    childRow.style.width = "10px";
    childRow.style.height = "10px";
    childRow.style.border = "3px solid red"
    childRow.style.display = "flex";
    childRow.style.flexDirection = "row";
    container.appendChild(row);
    row.appendChild(childRow);
}

 
}
row_squares();
 //cells
const cells = document.createElement("div");
 //256 kere çalışacak bir div oluştur
  for(let i = 0; i<16; i++){
      let div = document.createElement("div");
      
      div.style.width = "10px";
      div.style.height = "10px";
      div.style.border = "3px solid red";
      
      document.getElementById("container").appendChild(div);
    }
   

 // bir div oluştur




