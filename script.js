  // htmldeki divi oluştur
 //row
 //rowun özelliklerini ayarla
 let row = document.createElement("div");
 let childRow = document.createElement("div");
 const container = document.querySelector("#container")
//button
let btn = document.querySelector("button");
 container.style.display = "flex";
 container.style.width = "600px";
 container.style.height = "400px";
 container.style.flex = "2 1 0;"
 container.style.flexDirection = "column";
 container.style.flexWrap = "wrap";
 container.style.boxSizing = "border-box";
 container.style.marginLeft = "150px";
 //container
 let board = 16;
 let newNumber;
 let select = document.addEventListener("click",()=>{
   newNumber = prompt("how x?");
   console.log(newNumber)
 })
 function gameZone(){
  for(let j = 0; j<board; j++){
    for (let i = 0; i <board; i++) {
    childRow = document.createElement("div");
    row.classList.add("row");
    childRow.classList.add("hover")    
                                  

    childRow.style.width = "30px";
    childRow.style.height = "20px";
    childRow.style.border = "3px solid black";
    row.style.display = "flex";
    row.style.flexDirection = "row";
    row.style.flexWrap = "wrap";

    //rowu konteynere şutla
    container.appendChild(row);
    row.appendChild(childRow); 
    //childRow u row a şutla
    
    childRow.addEventListener("mouseover",function(e){
      e.target.style.backgroundColor = "black";
    })
  };
    
  }
 


};

 //cells

//cells function
    gameZone();



 // bir div oluştur




