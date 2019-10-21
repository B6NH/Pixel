class MenuOption extends ScreenObject{
  constructor(width,height,color,menuText){
    super();
    this.width=width;this.height=height;
    this.color = color;this.text = menuText;
    this.image = new Image(width,height,color);
  }

  render(screen){
    this.image.render(screen);
  }

  setPosition(x,y){
    this.image.setPosition(x,y);
  }

  get x(){
    return this.image.x;
  }

  get y(){
    return this.image.y;
  }

  click(screen){
    console.log("Menu option: "+this.text);
    if(this.text=="Open"){
      // ADD WINDOW TO SCREEN
      let wind = new Window();
      screen.addObject(5,5,wind);
    }else if(this.text=="Close"){
      screen.closeWindow();
    }
  }
}
