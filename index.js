let countEL = document.getElementById("count-el")
let count=0;
function increment (){
  
    count = count+1
    countEL.textContent= count
    
}



function save(){
  let saveEL = document.getElementById("save-el")
  let countstr = count + " - "
  saveEL.textContent +=  countstr
  countEL.textContent =  0 
  count = 0
}