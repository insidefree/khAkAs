import { Figure } from './Figure'

export class Circle extends Figure {
    constructor(x, y, r) {
        super()
        this.x = x
        this.y = y
        this.r = r
    }

    isOverLapping(circle) {
        // Just take the vector difference between the centers
        var dx = circle.x - this.x;
        var dy = circle.y - this.y;

        // compute the length of this vector
        // var L = Math.sqrt(dx * dx + dy * dy);

        // // compute the amount you need to move
        // var step = r1 + r2 - L;

        // // if there is a collision you will have step > 0
        // if (step > 0) {
        //     // In this case normalize the vector
        //     dx /= L; dy /= L;

        //     // and then move the two centers apart
        //     x1 -= dx * step / 2; y1 -= dy * step / 2;
        //     x2 += dx * step / 2; y2 += dy * step / 2;
        // }
        // console.log(this.x, circle.x, this.figure, circle.figure)
        // console.log(this.x, circle.x, this.figure, circle.figure)
        // console.log("sdfdf")
        return this.x == circle.x
    }

    static *circleGen(count, minX, maxX, minY, maxY, minR, maxR) {
        let i = 0
        while (i < count) {
            i++
            yield new Circle(Circle.randomGen(minX, maxX), Circle.randomGen(minY, maxY), Circle.randomGen(minR, maxR))
        }
    }

    static randomGen(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }

    static getRandomCircles(count, minX, maxX, minY, maxY, minR, maxR) {
        let tmp = []
        for (let circle of Circle.circleGen(count, minX, maxX, minY, maxY, minR, maxR)) {
            tmp.push(circle)
        }
        return tmp
    }
}