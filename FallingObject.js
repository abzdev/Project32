class FallingObject {
    constructor(x,y,w,h) {
        this.body = Bodies.rectangle(x,y,w,h,{restitution:0.001});
        World.add(world,this.body);
        this.w = w;
        this.h = h;
        this.frames = 0;
    }
    display() {
        push();
        rectMode(CENTER);
        rotate(this.body.angle);
        fill('purple');
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
        this.frames++;
        if(this.frames>600) {
            World.remove(world,this.body);
        }
    }
}