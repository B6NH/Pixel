class Screen{
  constructor(width,height){
    this.mainTable = document.getElementById("mainTable");
    this.objects = [];
    let row = this.createRow(width); let tableContent = "";
    for(let i=0;i<height;i++){ tableContent += row; }
    document.getElementById("tableBody").innerHTML = tableContent;
    this.setClickEvents();
  }

  setClickEvents(){
    let scr = this;
    for(let i=0;i<this.mainTable.rows.length; i++){
      for(let j=0;j<this.mainTable.rows[i].cells.length;j++){
        this.mainTable.rows[i].cells[j].onclick = function(){
          let row = this.closest('tr');
          scr.clickAt(this.cellIndex, row.rowIndex);
        };
      }
    }
  }

  clickAt(x,y){
    if(this.isMenuOpened()){
      let menu = this.getMenu();
      if(menu.isAt(x,y)){
        menu.click(this,x,y);
      }
      this.closeMenu();
    }
    else{
      let objectFound = this.objectAt(x,y);
      if(objectFound.isBackground){
        this.openMenu(x,y);
      }else{
        objectFound.click(this,x,y);
      }
    }
  }

  openMenu(x,y){
    let menu = new Menu();
    let option1 = new MenuOption(8,2,"purple","Open");
    let option2 = new MenuOption(8,3,"white","Edit");
    let option3 = new MenuOption(8,4,"orange","Close");
    menu.addOption(option1);
    menu.addOption(option2);
    menu.addOption(option3);
    this.addObject(x,y,menu);
  }

  objectAt(x,y){
    let answer = null;
    for(let i=this.objects.length-1;i>=0;i--){
      if(this.objects[i].isAt(x,y)){
        answer = this.objects[i];
        break;
      }
    }
    return answer;
  }

  createRow(size){
    let row = "<tr>";
    for(let i=0;i<size;i++){ row += "<td></td>"; }
    row += "</tr>";
    return row;
  }

  render(){
    this.objects.forEach(anObject => anObject.render(this));
  }

  addObject(x,y,anObject){
    anObject.setPosition(x,y);
    this.objects.push(anObject);
  }

  setPixel(x,y,color){
    mainTable.rows[y].cells[x].style.backgroundColor = color;
  }

  update(){
    this.objects.forEach(anObject => anObject.update());
  }

  isMenuOpened(){
    let ans = false;
    for(let i=0;i<this.objects.length;i++){
      if(this.objects[i].isMenu()){
        ans = true; break;
      }
    }
    return ans;
  }

  getMenu(){
    let menu;
    for(let i=0;i<this.objects.length;i++){
      if(this.objects[i].isMenu()){
        menu = this.objects[i]; break;
      }
    }
    return menu;
  }

  closeMenu(){
    let menuIndex = this.objects.findIndex(menuCandidate => {
      return menuCandidate.isMenu();
    });
    this.objects.splice(menuIndex,1);
  }

  closeWindow(){
    let windowIndex = this.objects.findIndex(windowCandidate => {
      return windowCandidate.isWindow();
    });
    if(windowIndex!=-1){
      this.objects.splice(windowIndex,1);
    }
  }
}
