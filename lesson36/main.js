function search(){
    var input , filter,ul,li,a,i,txtValue;

    input=document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul= document.getElementById("myList");
    li=ul.getElementsById("li");

    for(i=o;i<li.length;i++){
        a = li[i];

        txtValue=a.txtCotent;

        if(txtValue.toUpperCase().indexOf(fillter)>-1){
            li[i].style.display = "block";
        }
        else{
            li[i].style.display="none";
        }
    }
}