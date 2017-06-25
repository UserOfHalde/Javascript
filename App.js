function Person(name, alter) {
    this.name = name;
    this.alter = alter;
    this.setPersonalDetails = function(name, alter) {
        this.name = name;
        this.alter = alter;
    }
}
Person.prototype.getPersonalDetails = function() { // Prototyp-Methode
    console.log(this.name + '\n' + this.alter);
}

let Max = new Person("Max", 34);
let July = new Person();

Max.getPersonalDetails();
console.log(Max.hasOwnProperty('setPersonalDetails'));

July.setPersonalDetails("July", 33);
July.getPersonalDetails();
