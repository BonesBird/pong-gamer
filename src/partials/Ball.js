import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;
        this.reset();
    }//end of constructor

    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
        //movement for ball
        this.vy = 0;
        while (this.vy === 0) {
            this.vy = Math.floor(Math.random() * 10 - 5);
        }
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }
    //used to reset ball after use

    wallCollision() {
        const hitLeft = this.x - this.radius <= 0;
        const hitRight = this.x + this.radius >= this.boardWidth;
        const hitTop = this.y - this.radius <= 0;
        const hitBottom = this.y + this.radius >= this.boardHeight;
        if (hitLeft || hitRight) {
            this.vx = -this.vx;
            //left and righ
        } else if (hitTop || hitBottom) {
            this.vy = - this.vy;
            //up and down
        }
    }


    render(svg, player1, player2) {

        //update x posistion with Vdirection 60 times per sec
        this.x += this.vx
        this.y += this.vy

        this.wallCollision();

        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', this.x / 2);//x posistion
        circle.setAttributeNS(null, 'cy', this.y / 2);//y posistion
        circle.setAttributeNS(null, 'fill', 'orange');
        svg.appendChild(circle);
    }


}//end of the ball class