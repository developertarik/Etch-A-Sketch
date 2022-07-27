  // htmldeki divi oluştur
 //row
 //rowun özelliklerini ayarla
 let row = document.createElement("div");
 let box = document.createElement("div");
 const container = document.querySelector("#container")
//button
let btn = document.querySelector("button");
 container.style.display = "flex";
 container.style.width = "500px";
 container.style.height = "500px";
 container.style.flexDirection = "column";
 container.style.flexWrap = "wrap";
 container.style.boxSizing = "border-box";
 container.style.marginLeft = "150px";
 row.style.display = "flex";
 //container
 let board = 16;
 
 function gameZone(){
  for(let j = 0; j<board; j++){
    row = document.createElement("div");
    for (let i = 0; i <board; i++) {
    box = document.createElement("div");
    row.classList.add("row");
    box.classList.add("hover")    
                                  
    row.style.height = "%100";
    box.style.width = "30px";
    box.style.height = "20px";
    box.style.border = "3px solid black";
    row.style.display = "flex";
    row.style.flexDirection = "row";
    row.style.flexWrap = "wrap";

    //rowu konteynere şutla
    container.appendChild(row);
    row.appendChild(box); 
    //childRow u row a şutla
    
    box.addEventListener("mouseover",function(e){
      e.target.style.backgroundColor = "black";
    })
  };
    
  }
 


};

 //cells

//cells function
    gameZone();



 // bir div oluştur



