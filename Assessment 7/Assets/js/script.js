var x= document.getElementById("form1");
var y= document.getElementById('form2');
var z= document.getElementById('form3');

// var p= document.getElementById('next1');
// var q= document.getElementById('next2');

// var r= document.getElementById('back1');
// var s= document.getElementById('back2');

function first(){
    
    x.style.display="none";
    y.style.display="block";
}

function nextpg(){
    x.style.display="none";
    y.style.display = "none";
    z.style.display = "block";
}
function prev1(){
    x.style.display='block';
    y.style.display='none';
    z.style.display='none';
}
function prev2(){
    x.style.display='none';
    y.style.display='block';
    z.style.display='none';

}