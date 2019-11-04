class Pixel{
  constructor(x,y,color){
    this.x = x; this.y = y;
    this.color = color;
  }

  renderAt(x,y,screen){
    screen.setPixel(x+this.x,y+this.y,this.color);
  }

  setColor(color){
    this.color = color;
  }
}
