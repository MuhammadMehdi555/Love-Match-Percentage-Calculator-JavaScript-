var male= document.getElementById('yourm')
var female= document.getElementById('yourf')
var per= document.getElementById('per')
var pers = document.getElementById('pers')




function abc(){
    pers.style.marginTop="10px"
    pers.style.fontSize="20px"
    per.style.display="block"
    var random=Math.floor(Math.random()*10)+1
    
    if(random===0){
        per.innerText="0%"
    }
     else  if(random===1){
        per.innerText="10%"
    }
     else  if(random===2){
        per.innerText="20%"
    }
     else  if(random===3){
        per.innerText="30%"
    }
     else  if(random===4){
        per.innerText="40%"
    }
     else  if(random===5){
        per.innerText="50%"
    }
         else  if(random===6){
        per.innerText="60%"
    }
         else  if(random===7){
        per.innerText="70%"
    }
         else  if(random===8){
        per.innerText="80%"
    }
         else  if(random===9){
        per.innerText="90%"
    }
     else if(random===10){
        per.innerText="100%"
    }
    
}