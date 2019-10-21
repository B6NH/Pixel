class ScreenObject{
  constructor(){
    this.isBackground = false;
  }
  isMenu(){
    return false;
  }
  isWindow(){
    return false;
  }
  isAt(x,y){
    return (x>=this.x)&&(x<this.x+this.width)&&(y>=this.y)&&(y<this.y+this.height)
  }
}
