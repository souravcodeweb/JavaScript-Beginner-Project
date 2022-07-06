const nextEl = document.getElementById('next');
const prevEi = document.getElementById('prev');



const progresEi = document.querySelector('.progress-bar-front');
const stepsEi = document.querySelectorAll('.step'); 


let currentChecked = 1

nextEl.addEventListener("click", () =>{
    currentChecked++;
    if(currentChecked > stepsEi.length){
        currentChecked = stepsEi.length;
    }
    updateStepProgress()
});

prevEi.addEventListener("click", () =>{
    currentChecked--;
    if(currentChecked < 1){
        currentChecked = 1;
    }
    updateStepProgress()
});

function updateStepProgress(){
    stepsEi.forEach((stepEi, idx)=>{
        if(idx < currentChecked){
            stepEi.classList.add("checked");
            stepEi.innerHTML = `
            <i class="bx bx-check"></i>
            <small>${idx === 0 ? "Start" : idx === stepsEi.length - 1 ? "Final" : "Step" + idx}</small>
            `
        } else{
            stepEi.classList.remove("checked");
            stepEi.innerHTML = `
            <i class="bx bx-x"></i>
            `;
        }
    });

    const checkeNumber = document.querySelectorAll(".checked");
    progresEi.style.width = ((checkeNumber.length -1) / (stepsEi.length - 1)) * 100 + "%"; 
    
}