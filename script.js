    // htmldeki divi oluştur
  //row
  //rowun özelliklerini ayarla
  let row = document.createElement("div");
  let box = document.createElement("div");
  const container = document.querySelector("#container");

  //button
  let btn = document.querySelector("button");
  container.style.display = "flex";
  container.style.flex ="1";
    container.style.width = "500px";
    container.style.minWidth = "500px";
  container.style.height = "500px";
  container.style.flexDirection = "column";
  container.style.flexWrap = "wrap";
  container.style.marginLeft = "150px";
  row.style.display = "flex";
  //container
  let board = 16;
  
  function gameZone(){
    document.addEventListener("click",()=>{
      board = parseInt(prompt("how x ? "));
      if(board<=100){
        container.innerHTML = "";
      }
      else{
        return;
      }

        
    gameZone();
    });
   
    for(let j = 0; j<board; j++){ 
      row = document.createElement("div");
      for (let i = 0; i <board; i++) {
      box = document.createElement("div");
      
     
      box.style.width = 500 / board + "px";
      box.style.height = 500 /board + "px";
      box.style.border = "0.1px solid black";
      row.style.display = "flex";
      row.style.flexDirection = "row";
      row.style.flexWrap = "wrap";
      row.style.boxSizing = "border-box";
      box.style.boxSizing = "border-box";

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



