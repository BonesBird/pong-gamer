import { SVG_NS } from '../settings';

export default class Paddle {

    constructor(boardHeight, width, height, x, y, up, down) {
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = 20;
        this.score = 0;

        document.addEventListener("keydown", event => {
            switch (event.key) {
                case up:
                    this.up();
                    break;
                case down:
                    this.down();
                    break;
            }
        });
    }//END OF CONSTRuCTOR

    up() {
        //get you max number
        //either 0 or the y posistion minus speed
        //current y posistion of the paddle - 10x everytime the game loop is running
        this.y = this.y - this.speed;
        this.y = Math.max(0, this.y - this.speed);
    }

    down() {
        this.y = this.y + this.speed;
        this.y = Math.min( this.boardHeight - this.height, this.y + this.speed);
    }


    render(svg) {
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', 'blue');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'x', this.x); // x of the top left corner
        rect.setAttributeNS(null, 'y', this.y); // y of the top left corner
        svg.appendChild(rect);
    }

}