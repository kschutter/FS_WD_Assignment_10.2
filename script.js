class Airplane {
    // Default constructor
    constructor(name, occupancy, speed) {
        this.name = name;
        this.occupancy = occupancy;
        this.speed = speed;
    }

    // Setters check if values are what is expected, getters just return value
    set name(name) {
        if (name == "") throw new Error("Name cannot be empty!");
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set occupancy(occ) {
        if (occ < 0 || occ == null || occ > 180) throw new Error("Occupancy out of range!");
        this._occupancy = occ;
    }
    get occupancy() {
        return this._occupancy;
    }
    set speed(speed) {
        if (speed < 0 || speed == null || speed > 900) throw new Error("Speed out of range!");
        this._speed = speed;
    }
    get speed() {
        return this._speed;
    }

    // Prints to console all airplane properties
    status() {
        console.log("Airplane: " + this.name + " with " + this.occupancy + " occupancy, is moving at " + this.speed + " km/hr");
    }

    // Increase speed of plane by given value
    increaseSpeed(inc) {
        this.speed += inc;
    }

    // Decrease speed of plane by given value
    decreaseSpeed(dec) {
        this.speed -= dec;
    }
}

// Various tests
var plane1 = new Airplane("Cessna", 50, 450);
var plane2 = new Airplane("Boeing", 100, 300);
var plane3 = new Airplane("Speedyboi 3000", 20, 699);
plane1.status();
plane2.status();
plane3.status();
plane1.increaseSpeed(200);
plane2.increaseSpeed(200);
plane3.increaseSpeed(200);
plane1.status();
plane2.status();
plane3.status();