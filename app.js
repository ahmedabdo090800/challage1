let inp1 =  document.getElementById("inp1").value;
let inp2 =  document.getElementById("inp2").value;
let output_ran = document.getElementById('output_ran');
let button_ran = document.getElementById('button_ran');


function getRan(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let x= Math.floor(Math.random() * (max - min) + min);
    output_ran.innerText=x;
    
}

/*
button_ran.addEventListener('click',()=>{
    output_ran.innerText=getRan(inp1, inp2);

});

*/  

const points = [16,28,362,3278,21,12,11,2,4,];
document.getElementById("demo").innerHTML = points;  


function sorting() {
    points.sort(function(a, b){return a - b});
    document.getElementById("demo").innerHTML = points;
  }
