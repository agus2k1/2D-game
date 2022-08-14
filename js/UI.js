export class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = "Creepster";
        this.livesImage = lives;
        this.fps = 20;
        this.timeInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.opacity = 0;
        this.addTime = 0.001;
        this.lastTime = 0;
    }
    draw(context){
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = "white";
        context.shadowBlur = 0;
        context.font = this.fontSize + "px " + this.fontFamily;
        context.textAlign = "left";
        context.fillStyle = this.game.fontColor;
        // score
        context.fillText("Score: " + this.game.score, 20, 50);
        // timer
        context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
        if (this.game.gameOver) {
            context.fillText("Time: " + (this.lastTime).toFixed(1), 20, 80);
        } else {
            this.lastTime = this.game.time * this.addTime;
            context.fillText("Time: " + (this.game.time * this.addTime).toFixed(1), 20, 80);
        }
        // lives
        for (let i = 0; i < this.game.lives; i++) {
            context.drawImage(this.livesImage, 30 * i + 20, 95, 25, 25);
        }
        // game over messages
        if (this.game.gameOver){
            context.globalAlpha = this.opacity;
            if (this.frameTimer > this.timeInterval){
                if (this.opacity > 1){
                    this.frameTimer = this.timeInterval + 1;
                } else {
                    this.opacity += 0.1;
                    this.frameTimer = 0;
                } 
            } else {
                this.frameTimer += 10;
            }
            context.textAlign = "center";
            context.font = this.fontSize * 1.5 + "px " + this.fontFamily;
            if (this.game.score >= 0 && this.game.score < 15){
                context.fillText("Game Over", this.game.width * 0.5, this.game.height * 0.5 - 30);
                context.font = this.fontSize * 1.2 + "px " + this.fontFamily;
                context.fillText("Score like 80% of players", this.game.width * 0.5, this.game.height * 0.5 + 20);
                context.font = this.fontSize * 1 + "px " + this.fontFamily;
                context.fillText("Your score: " + this.game.score, this.game.width * 0.5, this.game.height * 0.5 + 70);
            } else if (this.game.score >= 15 && this.game.score < 25){
                context.fillText("Game Over", this.game.width * 0.5, this.game.height * 0.5 - 30);
                context.font = this.fontSize * 1.2 + "px " + this.fontFamily;
                context.fillText("Score like 60% of players", this.game.width * 0.5, this.game.height * 0.5 + 20);
                context.font = this.fontSize * 1 + "px " + this.fontFamily;
                context.fillText("Your score: " + this.game.score, this.game.width * 0.5, this.game.height * 0.5 + 70);
            } else if (this.game.score >= 25 && this.game.score < 35){
                context.fillText("Game Over", this.game.width * 0.5, this.game.height * 0.5 - 30);
                context.font = this.fontSize * 1.2 + "px " + this.fontFamily;
                context.fillText("Score like 40% of players", this.game.width * 0.5, this.game.height * 0.5 + 20);
                context.font = this.fontSize * 1 + "px " + this.fontFamily;
                context.fillText("Your score: " + this.game.score, this.game.width * 0.5, this.game.height * 0.5 + 70);
            } else if (this.game.score >= 35 && this.game.score < 40){
                context.fillText("Game Over", this.game.width * 0.5, this.game.height * 0.5 - 30);
                context.font = this.fontSize * 1.2 + "px " + this.fontFamily;
                context.fillText("Score like 20% of players", this.game.width * 0.5, this.game.height * 0.5 + 20);
                context.font = this.fontSize * 1 + "px " + this.fontFamily;
                context.fillText("Your score: " + this.game.score, this.game.width * 0.5, this.game.height * 0.5 + 70);
            } else if (this.game.score >= 40 && this.game.score < 45){
                context.fillText("Game Over", this.game.width * 0.5, this.game.height * 0.5 - 30);
                context.font = this.fontSize * 1.2 + "px " + this.fontFamily;
                context.fillText("Score like 10% of players", this.game.width * 0.5, this.game.height * 0.5 + 20);
                context.font = this.fontSize * 1 + "px " + this.fontFamily;
                context.fillText("Your score: " + this.game.score, this.game.width * 0.5, this.game.height * 0.5 + 70);
            } else if (this.game.score >= 45 && this.game.score < 50){
                context.fillText("Game Over", this.game.width * 0.5, this.game.height * 0.5 - 30);
                context.font = this.fontSize * 1.2 + "px " + this.fontFamily;
                context.fillText("Score like 5% of players", this.game.width * 0.5, this.game.height * 0.5 + 20);
                context.font = this.fontSize * 1 + "px " + this.fontFamily;
                context.fillText("Your score: " + this.game.score, this.game.width * 0.5, this.game.height * 0.5 + 70);
            } else if (this.game.score >= 50){
                context.fillText("Game Over", this.game.width * 0.5, this.game.height * 0.5 - 30);
                context.font = this.fontSize * 1.2 + "px " + this.fontFamily;
                context.fillText("Score like 1% of players", this.game.width * 0.5, this.game.height * 0.5 + 20);
                context.font = this.fontSize * 1 + "px " + this.fontFamily;
                context.fillText("Your score: " + this.game.score, this.game.width * 0.5, this.game.height * 0.5 + 70);
            }
        }
        context.restore();
    }
}
