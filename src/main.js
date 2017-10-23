import 'babel-polyfill'
import { Circle } from './figure/Circle'
import { CircleStore } from './store/CircleStore'

let circles = Circle.getRandomCircles(1000, 1, 6, -10, 10, -10, 10)
// console.log(circles)
CircleStore.addCircles(circles)
// CircleStore.showStore()
// 1-th example with callback 
// CircleStore.resultArr(new Circle(5, 8, 8), arr => console.log(arr))

// 2-nd  example with pure generator
for (let arr of CircleStore.getOverlappingCircles(new Circle(5, 8, 8))) {
    console.log(arr)
    if(arr.length == 20) break
}

