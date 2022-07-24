  // htmldeki divi oluştur
 //row
 //rowun özelliklerini ayarla
 let row = document.createElement("div");
 let childRow = document.createElement("div");
 const container = document.querySelector("#container")

 container.style.display = "flex";
 container.style.flexDirection = "column";
 container.style.width = "600px";
 container.style.height = "420px";
 container.style.flexWrap = "wrap";
 container.style.boxSizing = "border-box";

 //container
 
 function gameZone(){
  
    for (let i = 0; i <16; i++) {
    childRow = document.createElement("div");
    childRow.classList.add("hover")                                  

    childRow.style.width = "30px";
    childRow.style.height = "20px";
    childRow.style.border = "3px solid black";
    childRow.classList.add("square");
    row.style.display = "flex";
    row.style.flexDirection = "row";
    row.style.flexWrap = "wrap";

    //rowu konteynere şutla
    container.appendChild(row);
    row.appendChild(childRow); 
    //childRow u row a şutla
    
    childRow.addEventListener("click",()=>{
      childRow.classList.add("hover") 

      console.log("hovering");  
    })
  }


}




 //cells

//cells function
for(i = 0; i<16; i++){
  gameZone();
}



 // bir div oluştur




