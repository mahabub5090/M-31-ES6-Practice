class Instructor{
    name;
    designation = "Web Couese Instructor"
    team = "Web Team"
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    sartSupportSessuion(time) {
        console.log(`abc`)
    }
    createQuiz(module) {
        console.log(`xyz`)
    }
}

console.log(new Instructor("amir khan", "rajshahi"))