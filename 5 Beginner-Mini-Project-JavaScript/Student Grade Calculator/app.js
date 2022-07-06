const res = () =>{
    let html = document.getElementById('html').value;
    let css = document.getElementById('css').value;
    let js = document.getElementById('js').value;
    let py = document.getElementById('py').value;
    let grades = "";

    let total = parseFloat (html) + parseFloat (css)
     + parseFloat (js) + parseFloat(py);


    let prec = (total/400) * 100; 

    if(prec <= 100 && prec >= 80){
        grades = 'A';
    }else if(prec <= 79 && prec >= 60){
        grades = 'B';
    } else if(prec <= 59 && prec >= 40){
        grades = 'C';
    }else{
        grades = 'F';
    }

   if (prec >= 39){
    document.getElementById('showData').innerHTML = `  out of 400 your total
    is ${total} and percentage is ${prec}%. <br/> your grade is ${grades}. You Are pass`
   }
   else{
    document.getElementById('showData').innerHTML = `  Out of 400 your total
    is ${total} and percentage is ${prec}%. <br/> your grade is ${grades}. You Are Fall`
   } 
}


