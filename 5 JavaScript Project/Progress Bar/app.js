let container = document.querySelector(".container");
let output = document.querySelector(".output");
let fill = document.querySelector(".fill");
let click = document.querySelector("button");

click.addEventListener('click', ()=>{
    var a = 0;
    var run = setInterval(frames,50)
    function frames (){
        a = a+1;
        if(a == 101){
            clearInterval(run);
            container.style.display = "none";
            output.style.display = "block";
        }
        else{
            var counter = document.querySelector(".counter");
            counter.textContent = a + "%";
            fill.style.width = a + "%";
        }
    }
})