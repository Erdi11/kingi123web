function validation(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;


var valid_name_regex = /^[A-Za-z]+$/;
var valid_age_regex = /^[0-9]+$/;


if(!(name.match(valid_name_regex)) || !(age.match(valid_age_regex)) || (city == "")){


if(!(name.match(valid_name_regex))){
    document.getElementById("name_error").style.visibility = "visible";
    document.getElementById("name").style.borderColor = "red";
}else{
    document.getElementById("name_error").style.visibility = "hidden";
    document.getElementById("name").style.borderColor = "black";
    return false;
}


if(!(age.match(valid_age_regex))){
    document.getElementById("age_error").style.visibility = "visible";
    document.getElementById("age").style.borderColor = "red";
}else{
    document.getElementById("age_error").style.visibility = "hidden";
    document.getElementById("age").style.borderColor = "black";
}

if(city == ""){
    document.getElementById("city_error").style.visibility= "visible";
    document.getElementById("city_").style.visibility= "red";
}else{
    document.getElementById("city_error").style.visibility= "hidden";
    document.getElementById("city_").style.visibility= "black";
}

return false;


}else{
    document.getElementById("name_error").style.visibility = "hidden";
    document.getElementById("name").style.borderColor = "black";
    document.getElementById("age_error").style.visibility = "hidden";
    document.getElementById("age").style.borderColor = "black";
    document.getElementById("city_error").style.visibility= "hidden";
    document.getElementById("city_").style.visibility= "black";
    return true;
}
}
