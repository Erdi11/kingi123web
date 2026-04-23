var input = document.getElementById('input_id');
var buttom = document.getElementById('btn_id');
var text = document.getElementById('teksti_id');

button.onclick=function(){
    text.innerHTML = input.value;
}

//search()
var text = "the best school in the world is Digital School";
var result = text.search("Digital School");
document.getElementById('result1').innerHTML = result;

var text = "the best school in the world is Digital School";
var result = text.search(/Digital School/);
document.getElementById('result2').innerHTML = result

var text = "the best school is the world is Digital School";
var result = text.replace(/Digital School/, "Another School");
document.getElementById('result3').innerHTML = result;

//test

var text = "abcdef";
var regex = new RegExp('abc');
document.getElementById("result4").innerHTML = regex.test(text);

// match()
// me shtu edhe ni fjale shool qitu posht bohet si list.
var text = "my school is the best in the world";
var regex = /school/g;
document.getElementById("result5").innerHTML = text.match(regex);

//qikjo i shfaq veq shkronjen i neper fjale.
var text = "my school is the best in the world";
var regex = /i/g;
document.getElementById("result5").innerHTML = text.match(regex);

var text = "Digital School is the school in the world";
var regex= /[abc]/g;
document.getElementById("result7").innerHTML = text.match(regex);

var text = "Digital schoo5l is in the top 10 best schools in6 the world";
var regex = /[0-9]/g;
document.getElementById("result8").innerHTML = text.match(regex);

var text = "Digital School is in top 10 best schools in the world";
var regex = /(top|best|schoo)/g;
document.getElementById("result9").innerHTML = text.match(regex);

var text = "100 percent!";
var regex = /\d/g;
document.getElementById("result10").innerHTML = text.match(regex);

var text = "Digital is in top 10 best schools in the world";
var regex = /\s/g;
document.getElementById("result11").innerHTML = text.match(regex);


var text = "heyy , how aore you";
var regex = /e+/g;
document.getElementById("result12").innerHTML = text.match(regex);

var text = "so , i hope we will see each other again soon...";
var regex = /so*/g;
document.getElementById("result13").innerHTML = text.match(regex);

var text = "hey , hi , hiiii!!!";
var regex = /hi?/g;
document.getElementById("result14").innerHTML = text.match(regex);

var text = "hello,hello , hellooooooo!!!";
var regex = /o{2}/g;
document.getElementById("result15").innerHTML = text.match(regex);

var text = "hello , hello , helloooo, helloooooo, hellooooooo";
var regex = /o{3,5}/g;
document.getElementById("result16").innerHTML = text.match(regex);

var text = "bestfriend , boyfriend , girlfriend";
var regex = /end$/g;
document.getElementById("result17").innerHTML = text.match(regex);

var text = "cat , catalog , category";
var regex = /^cat/g;
document.getElementById("result18").innerHTML = text.match(regex);