class Animation extends ScreenObject{
  constructor(){
    super();
    this.frames = [];
    this.currentFrame = 0;
  }

  addFrame(anImage){
    if(this.frames.length==0){
      this.width = anImage.width;
      this.height = anImage.height;
    }
    this.frames.push(anImage);
  }

  setPosition(x,y){
    this.x = x; this.y = y;
    this.frames.forEach(aFrame => { aFrame.setPosition(x,y); });
  }

  render(screen){
    this.frames[this.currentFrame].render(screen);
  }

  update(){
    this.currentFrame++;
    if(this.currentFrame>=this.frames.length){
      this.currentFrame = 0;
    }
  }

  click(screen,x,y){
    console.log("Animation");
  }
}
