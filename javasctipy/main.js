function showmessage() {
    alert("Hello World");
}

showmessage();

function sum(number1, number2){
    return number1 + number2;
}
    
    
console.log(sum(25,4));      

var arrowfunction=() => alert("hello");
arrowfunction();
var arrowFunction=name=> alert("Hello ${name}");
arrowFunction("blini");

function dsFunction(){
    var localVar="I am a local variable";
    alert(localVar);

}
dsFunction();

var car={
    make:"audi",
    model:"a6",
    year:2026,
    kilometers:0,
}
 
var car1={
    make:"mercedes",
    model:"c class",
    year:2026,
    kilometers:0,
    startEngine:function(){
        alert("vroom vroom");
    }
}

car.startEngine();

var computer=new Object();

computer.name = "Macbook Pro";
computer.cpu = "ryzen 5 7600x";
computer.ram = "32gb";
computer.gpu = "rtx 4070";
computer.type=function(){
    return this.name +','+this.cpu +','+this.ram +','+this.gpu;
}
alert(computer.gpu());
console.log(computer.type());

delete computer.gpu;
function Computer(name, cpu, ram, gpu){
    this.name = name;
    this.cpu = cpu;
    this.ram = ram;
    this.gpu = gpu;
}

var computer1 = new Computer("Macbook Pro","ryzen 5 7600x","32gb","rtx 4070");
var computer2 = new Computer("Dell XPS","i7 12700k","16gb","rtx 3060");
console.log(computer1);
console.log(computer2);