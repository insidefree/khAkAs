import { Store } from './Store'
export class CircleStore extends Store {
    // static store = []

    static addCircle(circle) {
        CircleStore.store.push(circle)
    }

    static addCircles(circles) {
        CircleStore.store = circles
    }

    static *getOverlappingCircles(circle) {
        let tmp = []
        // yield* CircleStore.store.map(elem => {
        //     return elem.isOverLapping(circle) ? tmp.push(elem) : false
        // })
        for (let el of CircleStore.store) {
            el.isOverLapping(circle) ? tmp.push(el) : ""
            yield tmp
        }
    }

    static showStore() {
        console.log(" *** CircleStore *** ")
        console.log(CircleStore.store)
        console.log(" *** ")
    }

    static resultArr(circle, cb) {
        for (let arr of CircleStore.getOverlappingCircles(circle)) {
            cb(arr)
        }
    }
}

CircleStore.store = []
