class Window extends ScreenObject{
  constructor(){
    super();
    this.image = new Image(7,7,"pink");
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

  setImagePixel(x,y,color){
    this.image.setPixel(x,y,color);
  }

  click(screen,x,y){
    this.setImagePixel(x-this.x,y-this.y,"black");
    console.log("Window");
  }

  isWindow(){
    return true;
  }
}
