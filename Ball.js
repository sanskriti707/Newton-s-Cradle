class Ball{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitutiuon:1,
            friction:0,
            density:0.8
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,(this.radius)/2,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push ();
        translate(pos.x,pos.y);
        fill ("pink");
        ellipse(0,0,this.radius,this.radius);
        pop ();
    }
}