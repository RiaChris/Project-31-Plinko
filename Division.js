class Division{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,5,200,{isStatic : true});
        World.add(world,this.body);

    }

    display(){
        rectMode(CENTER);
        fill("cyan");
        rect(this.body.position.x,this.body.position.y,5,200);
    }
}