class Window extends ScreenObject{
  constructor(){
    super();
    this.image = new Image(5,5,"pink");
  }

  setPosition(x,y){
    this.image.setPosition(x,y);
  }

  update(){
    //
  }

  render(screen){
    this.image.render(screen);
  }

  get x(){
    return this.image.x;
  }

  get y(){
    return this.image.y;
  }

  get width(){
    return this.image.width;
  }

  get height(){
    return this.image.height;
  }

  click(screen,x,y){
    console.log("Window");
  }

  isWindow(){
    return true;
  }
}
