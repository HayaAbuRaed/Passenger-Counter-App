
let count= 0
let countEl= document.getElementById("count-element")
function increment(){
  count++
  countEl.innerText= count
}


let saveEl= document.getElementById("save-el")
let clickCount = 0
function save(){
  clickCount++
  let val= " - " + count
  if(clickCount==1){
    val = count
  }
  saveEl.textContent += val
  count=0
  countEl.innerText= count
}

