class DropBox{
    constructor(ctx,x,y,imagen){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.img = imagen;
        this.drawDropBox();
    }

    drawDropBox(){

        this.ctx.beginPath();
        this.ctx.rect(this.x-15,this.y-15,35,35);
        this.ctx.strokeStyle = "rgba(66, 166, 214, 0.89)";
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.drawImage(this.img, this.x -15, this.y-15, 35, 35);
    }

    checkPos(x,y){
        return (((x > this.x - 15) && (x < this.x + 15))&&((y > this.y - 15) && (y < this.y + 15)));//checkeo que las x e y que me mandan esten dentro de el dropbox
    }
}