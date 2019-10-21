class Menu extends ScreenObject{
  constructor(){
    super();
    this.options = [];
  }

  addOption(anOption){
    this.options.push(anOption);
  }

  setPosition(x,y){
    this.x = x; this.y = y;
    let currentY = y;
    for(let i=0;i<this.options.length;i++){
      this.options[i].setPosition(x,currentY);
      currentY += this.options[i].height;
    }
  }

  update(){
    //
  }

  render(screen){
    this.options.forEach(anOption => { anOption.render(screen); });
  }

  get width(){
    return this.options[0].width;
  }

  get height(){
    let sum = 0;
    this.options.forEach(anOption => {
      sum += anOption.height;
    });
    return sum;
  }

  click(screen,x,y){
    let option = this.optionAt(x,y);
    option.click(screen);
  }

  optionAt(x,y){
    let option = null;
    for(let i=0;i<this.options.length;i++){
      if(this.options[i].isAt(x,y)){
        option = this.options[i];
        break;
      }
    }
    return option;
  }

  isMenu(){
    return true;
  }
}
