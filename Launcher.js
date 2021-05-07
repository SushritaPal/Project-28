class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.004
        }
        this.constraint=Constraint.create(options);
        World.add(world,this.constraint);
        this.pointB=pointB;
        
    }
    display(){
        if(this.constraint.bodyA){
        var pointA=this.constraint.bodyA.position;
        var pointB=this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
      
    }
    fly(){
        this.constraint.bodyA=null;
    }
    attach(body){
        this.constraint.bodyA=body;
    }
}