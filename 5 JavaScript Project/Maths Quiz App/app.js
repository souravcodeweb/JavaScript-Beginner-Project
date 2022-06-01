let n1 =  Math.floor(Math.random()*10+1);
let n2 =  Math.floor(Math.random()*10+1);


document.getElementById("v1").value = n1;
document.getElementById("v2").value = n2;

let ans = n1 + n2;


const jsGAme = () => {
    var a = document.getElementById("answ").value;

    if(a == ans){
        alert('Well Done! Correct answer');
    } else{
        alert('Correct answer is' + ans + ". Try Again..");
    }
    
    document.getElementById('answ').value = "";
     n1 =  Math.floor(Math.random()*10+1);
     n2 =  Math.floor(Math.random()*10+1);


    document.getElementById("v1").value = n1;
    document.getElementById("v2").value = n2;

     ans = n1 + n2;

}