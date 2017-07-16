function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;

    this.setAllProperties = function(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    };
    this.getAllProperties = function() {
        console.log(this.name + " " + this.age + " " + this.sex + " ");
    };
};

let human = new Person("July", 20, "female");
human.getAllProperties();
console.log(Object.prototype.toLocaleString.call(human));

var a = new Number(3);
console.log(Object.prototype.toLocaleString.call(a));

const date = new Date;

console.log(date.toString( )); // Sat Nov 28 2015 14:56:44 GMT+0100

console.log(date.toLocaleString( )); // 28.11.2015, 14:56:44
