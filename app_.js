const numberInput = document.querySelector('#numberInput')
const result = document.querySelector('#result')
const numberResult = document.querySelector('.numberResult')
const regExp = /^1110 \d{3} \d{3} \d{2} \d{2}$/

result.onclick = () => {
    if (regExp.test(numberInput.value )){
        numberResult.innerHTML = 'Ok'
        numberResult.style.color = 'blue'
    }else {
        numberResult.innerHTML = 'Wrong'
        numberResult.style.color = 'red'
    }
}

const idInput = document.querySelector('#idInput')
const resultId = document.querySelector('.resultId')
const personalResult = document.querySelector('.personalResult')
const regExp2 = /^ID \d{3} \d{2} \d{2}$/

resultId.onclick = () =>{
    if (regExp2.test(idInput.value)){
        personalResult.innerHTML = 'Ok'
        personalResult.style.color = 'blue'

    }else {
        personalResult.innerHTML = 'Wrong'
        personalResult.style.color = 'red'
    }
}

//Dz2
let position = 0

const recursionAnimation = () => {
    position = position + 5;
    if (position > 452 ) return;
    document.querySelector('.box').style.left = position + 'px';
    animation()
  
}
function animation() {
    setTimeout(recursionAnimation,50)
    
}
animation()
