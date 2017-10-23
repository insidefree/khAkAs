import { Figure } from './Figure'

export class Square extends Figure {
    show() { 
        console.log("sqгare")
    }
    whoAmI (){
        console.log(this, "fuck off")
    }
}