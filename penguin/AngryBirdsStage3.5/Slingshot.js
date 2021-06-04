class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
        fly(){
        this.sling.bodyA=null;
        }
    display(){
        if(this.sling.bodyA){

        
        var poinA = this.sling.bodyA.position;
        var poinB = this.pointB
        strokeWeight(4);
        line(poinA.x, poinA.y, poinB.x, poinB.y);
    }
}  
}