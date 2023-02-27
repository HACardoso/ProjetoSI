let searchalg = 0;

let searchChoosed = false;

let bfsButton;
let dfsButton;
let gsButton;
let ucsButton;
let axsButton;

function setup() {
    createCanvas(400, 400);
    map = new MAP();
    noiseDetail(2, 0.1);
    map.config();


}

function startMenu(){
  background("grey");
  textSize(30);
  textAlign(CENTER);
  text("Search Algorithm:", 50,50,300,100);
  
  bfsButton = createButton("BFS");
  bfsButton.position(180,100);
  
  dfsButton = createButton("DFS");
  dfsButton.position(180,150);
  
  gsButton = createButton("Greedy Search");
  gsButton.position(150,200);
  
  ucsButton = createButton("Uniform Cost Search");
  ucsButton.position(135,250);
  
  axsButton = createButton("A* Search");
  axsButton.position(165,300);
  
  bfsButton.mousePressed(setSearch);
  dfsButton.mousePressed(setSearch);
  gsButton.mousePressed(setSearch);
  ucsButton.mousePressed(setSearch);
  axsButton.mousePressed(setSearch);
  
  
}

// function setAlgToBFS(){
//   searchalg = 1;
// }
// function setAlgToDFS(){
//   searchalg = 2;
// }
// function setAlgToGS(){
//   searchalg = 3;
// }
// function setAlgToUCS(){
//   searchalg = 4;
// }
// function setAlgToAXS(){
//   searchalg = 5;
// }

function setSearch(){
  if(!searchChoosed) {
    if(this.elt.innerText == "BFS"){
      searchalg = 1;
    } else if(this.elt.innerText == "DFS"){
      searchalg = 2;
    } else if(this.elt.innerText == "Greedy Search"){
      searchalg = 3;
    } else if(this.elt.innerText == "Uniform Cost Search"){
      searchalg = 4;
    } else if(this.elt.innerText == "A* Search"){
      searchalg = 5;
    }
    
    searchChoosed = true;
    
  } 
}

function draw() {
    
    switch(searchalg){
      case 0:
        startMenu();
        break;
      case 1:
        map.bfs();
        map.show();
        break;
      case 2:
        map.dfs();
        map.show();
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      default:
        break;
    }
    //map.dfs();
    //map.show();
}