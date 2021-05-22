class Game {
    constructor() {
        this.bg = createSprite(400, 200, 0, 0)
        this.bg.visible = false;
        this.bgimg = loadImage("images.jpg")
        this.bg.addImage(this.bgimg)
        this.obstaclegroup = new Group();
        this.vaccineGroup = new Group();
        this.sangrp = new Group();
        this.maskImg = loadImage("mask.png")
        this.maskGroup = new Group()
        this.heart3 = createSprite(65, 40, 20, 20)
        this.heart3.visible = false;
        this.ground = createSprite(400, 400, 800, 10)
        this.ground.visible = false;
        this.sc = 0
        this.player = createSprite(30, 280, 20, 60)
        this.player.visible = false;
        this.player.collide(this.ground)
        this.virusImage = loadImage("virus.png")
        this.vaccineImage = loadImage("vaccine img.png")
        this.playerimg = loadImage("run1 (1).png")
        this.sanitizerImg = loadImage("sanitizer.png")

        this.heartimg = loadImage("heart.png")

        this.heart3.addImage(this.heartimg) 

        this.heart3.scale = 0.1
        this.ground.visible = false
        this.player.setCollider("rectangle", 0, 0, 50, 110)
        this.player.debug = true;








    }
    move() {
        this.ground.velocityX = -2;
        if (this.ground.x < 0) {
            this.ground.x = this.ground.width / 2;
        }
        this.player.addImage(this.playerimg)
        this.player.scale = 0.7755
    }
    score() {


        text("Vaccines Required: 1000", 600, 50);
        text("Vaccine Collected: " + this.sc, 600, 100);

    }

    obstacle() {
        if (frameCount % 100 === 0) {
            var obstacle = createSprite(700, 365, 50, 40);
            obstacle.velocityX = -2
            obstacle.debug = true;
            obstacle.x = Math.round(random(200, 300));

            obstacle.addImage(this.virusImage)
            obstacle.scale = 0.08
            obstacle.depth = this.player.depth
            this.obstaclegroup.add(obstacle)
            obstacle.lifetime = 400
            obstacle.setCollider("circle", 0, 0, 140)
        }
    }
    vaccine() {
        if (frameCount % 200 === 0) {
            var vaccine = createSprite(800, 350, 20, 50)
            vaccine.velocityX = -2
            //vaccine.x = Math.round(random(800,400))

            vaccine.addImage(this.vaccineImage)
            vaccine.scale = 0.3
            vaccine.depth = this.player.depth
            vaccine.setCollider("rectangle", 100, 0, 60, 120)

            this.vaccineGroup.add(vaccine)
        }
    }

    jump() {
        if (keyDown("space") && this.player.y >= 300) {
            this.player.velocityY = -15;
        }

    }
    backdown() {
        this.player.velocityY = this.player.velocityY + 0.9
        this.player.collide(this.ground)


    }
    touch() {
        for (var i = 0; i < this.obstaclegroup.length; i++) {
            if (this.player.isTouching(this.obstaclegroup.get(i))) {
                this.heart3.destroy()
                this.ground.velocityX = 0
                this.obstaclegroup.setVelocityXEach(0)
                this.vaccineGroup.setVelocityXEach(0)
                this.maskGroup.setVelocityXEach(0)
                this.sangrp.setVelocityXEach(0)
                this.player.velocityY = 0;
                /*  if(keyDown("space") && this.player.y >= 300) {
                    this.player.velocityY = 0;
                  }
                this.player.velocityY = this.player.velocityY + 0 */

            }
        }

        for (var o = 0; o < this.sangrp.length; o++) {
            if (this.player.isTouching(this.sangrp.get(o))) {
                this.sc = this.sc + 10
                this.sangrp.get(o).destroy()

            }
        }

        for (var s = 0; s < this.vaccineGroup.length; s++) {
            if (this.player.isTouching(this.vaccineGroup.get(s))) {
                this.sc = this.sc + 1
                this.vaccineGroup.get(s).destroy()
            }
        }

        for (var z = 0; z < this.maskGroup.length; z++) {
            if (this.player.isTouching(this.maskGroup.get(z))) {
                this.sc = this.sc + 5
                this.maskGroup.get(z).destroy()
            }
        }




    }

    sanitizers() {
        if (frameCount % 450 === 0) {
            var sanitizer = createSprite(800, 350, 20, 10)
            sanitizer.velocityX = -2
            sanitizer.addImage(this.sanitizerImg)
            sanitizer.scale = 0.08
            this.sangrp.add(sanitizer)

        }
    }

    mask() {
        if (frameCount % 500 === 0) {
            var mask = createSprite(800, 350, 20, 10)
            mask.velocityX = -2
            mask.addImage(this.maskImg)
            mask.scale = 0.2
            mask.setCollider("rectangle", 0, 0, 250, 200)
            this.maskGroup.add(mask)

        }
    }

    gameWin() {
        if (this.sc === 1000) {
            textSize(10)
            text("You won!You have saved the world ", 400, 200)

        }
    }




}