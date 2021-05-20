// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }


    get diameter(){
        return this.radius * 2
    }

    set diameter(diameter) {
        this._diameter = diameter
        this.radius = this._diameter/2
    }

    get circumference(){
        return Math.PI * this.radius * 2
    }

    set circumference(circumference) {
        this._circumference = circumference
        this.radius = this._circumference/(2*Math.PI)
    }


    get area(){
        return Math.PI * this.radius**2
    }

    set area(area) {
        this._area = area
        this.radius = (this._area / (Math.PI))**(1/2)
    }
}