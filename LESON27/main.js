var programmingLanguages = ['java','php','python'];


console.log(programmingLanguages)


console.log(programmingLanguages[3])

programmingLanguages.push('js');
console.log(programmingLanguages);

programmingLanguages.pop();
console.log(programmingLanguages);

programmingLanguages.shift('c#');
console.log(programmingLanguages);

// programmingLanguages.unshift();
// console.log(programmingLanguages);

programmingLanguages.splice(0,2,'ruby');
console.log(programmingLanguages);

console.log(Math.random()*5);
console.log(Math.floor(Math.random()*5));

var students = ["john",'drin','filan'];


var [s1,s2,s3] = students;


console.log(s1);
console.log(s2);
console.log(s3);

var places = ["finland" , "prishtina" , "berlin" , "paris"];

var [firstplace,secondplace,thirdplalce,fourthplace]=places;

console.log(firstplace);
console.log(thirdplalce);
console.log(secondplalce);
console.log(fourthplalce);

var number=[1,2,3,4,5,6,7,8,9,10];
var numberplaces=[firstnumber,secondnumber,thirdnumber,fourthnumber,fifthnumber,othernumber]=Number;

console.log(firstnumber);
console.log(secondnumber);
