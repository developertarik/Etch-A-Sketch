  // htmldeki divi oluştur
 //row
 //rowun özelliklerini ayarla
 let row = document.createElement("div");
 let childRow = document.createElement("div");
 const container = document.querySelector("#container")
//button
let btn = document.querySelector("button");
 container.style.display = "flex";
 container.style.flexDirection = "column";
 container.style.width = "600px";
 container.style.height = "420px";
 container.style.flexWrap = "wrap";
 container.style.boxSizing = "border-box";
 container.style.marginLeft = "350px";
 //container
 
 function gameZone(){
  
    for (let i = 0; i <16; i++) {
    childRow = document.createElement("div");
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
    
  }

}
btn.addEventListener("click",open_32x32);


function open_32x32(){
  for (let i = 0; i<32; i++){
  childRow = document.createElement("div");
  childRow.style.width = "15px";
  childRow.style.height = "10px";
  childRow.style.border = "1.5px solid black";
}}

 //cells

//cells function
for(i = 0; i<16; i++){
  gameZone();
}



 // bir div oluştur




