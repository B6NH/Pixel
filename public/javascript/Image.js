class Image extends ScreenObject{
  constructor(width,height,color){
    super();
    this.width=width; this.height=height;
    this.pixels = [];this.color = color;
    for(let i=0;i<height;i++){
      this.pixels.push([]);
      for(let j=0;j<width;j++){
        this.pixels[i].push(new Pixel(j,i,color));
      }
    }
  }

  render(screen){
    this.pixels.forEach(row => {
      row.forEach(pixel => {
        pixel.renderAt(this.x,this.y,screen);
      });
    });
  }

  setPosition(x,y){ this.x = x; this.y = y; }

  update(){
    //
  }

  click(screen,x,y){
    console.log("Image");
  }

  setAsBackground(){
    this.isBackground = true;
  }

  pixelAt(x,y){
    return this.pixels[y][x];
  }

  setPixel(x,y,color){
    let pixel = this.pixelAt(x,y);
    pixel.setColor(color);
  }

}
