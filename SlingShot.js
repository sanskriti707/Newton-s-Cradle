class SlingShot{
    constructor(body1, body2,offsetX ,offsetY){
            this.offsetX=offsetX;
            this.offsetY=offsetY;
            var options={
                bodyA: body1,
                bodyB: body2,
               pointB:{x:this.offsetX, y:this.offsetY}
            }
    
        
        //this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    
   // fly(){
     //   this.sling.bodyA = null;
    //}

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        
       
            
            
            
            stroke("green");
             var a1x=pointA.x;
             var a1y=pointB.y;
             var a2x=pointB.y+this.offsetX;
             var a2y=pointB.x+this.offsetY;
            
            line (a1x,a1y,a2x,a2y);
           
            
            
        
    }
    
}