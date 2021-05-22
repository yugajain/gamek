class Lab{
    constructor(){
        this.scientist = loadImage("person.png")
    }
    display(){
        var base = createSprite(400,200,800,400)
        var people = createSprite(200,200,50,100)
        people.addImage(this.scientist)
    // people.shapeColor = "red"
        textSize(17)
        stroke("green")
        fill("orange")
        text("OK now i have created the world's first size shrinking formula,   uhh uhh why am i coughing.", 10, 320)
        stroke("orange")
        text("DIES*", 20,350)
    }

    update(state){
        gameState = state;
    }
    remove(){

    }

}
