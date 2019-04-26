import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;
    }//end of constructor

    render(){
        let circle = document.createElementNS(SVG_NS, 'circle')
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', this.boardWidth / 2)//x posistion
        circle.setAttributeNS(null, 'cy', this.boardHeight / 2)//y posistion
        circle.setAttributeNS(null, 'fill', 'silver');
        svg.appendChild(circle);
    }


}//end of the ball class