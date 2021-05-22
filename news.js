class News {
    constructor(){
       
    }

    display(){
        fill("black")
        stroke("red")
        textSize(24)
        text("scientists make blunder, a new virus has been created", 200, 50)
        text("day 1:100 people ",200,100)
        text("day 2 : 200 people", 200, 150)
        text("day 3: 399 people", 200, 200)
        text("day 4: 437 people", 200, 250)
        text("day 5: 548 people",200,300)
        text("The Virus is Named LAPIS Virus", 200, 350)
        text("the scientists have been arrested and are being interrogated.",150, 390)
        text("REPORTER", 45, 50)

        reportingImg = createSprite(400, 250, 0, 0)
        reportingImg.addImage("bg",reportingBgImg)
        reporter = createSprite(100, 130, 0, 0);
        reporter.addImage(reporterImg)
        reporter.scale = 0.7

    }
}