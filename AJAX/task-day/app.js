const subBtn = document.querySelector('.submit')
const un = document.querySelector('.uName')
const ps = document.querySelector('.pswrd')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
let obj = {}

document.addEventListener('DOMContentLoaded', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'package.json', true)

    xhr.onload = function(){
        obj = JSON.parse(this.responseText)
    }

    xhr.send()
})

subBtn.addEventListener('click', () =>{
    const uEnter = un.value
    const pEnter = ps.value
    let flag = false

    un.value = ''
    ps.value = ''

    for(let i = 0; i < obj.data.length; i++){
        if(uEnter === obj.data[i].uName && pEnter === obj.data[i].pswrd){
            flag = true;
            break;
        }
    }

    if(flag){
        green.classList.add('show')
        red.classList.remove('show')
        setTimeout(() => {
            green.classList.remove('show')
            red.classList.remove('show')
        }, 1500);
    }else{
        red.classList.add('show')
        green.classList.remove('show')
        setTimeout(() => {
            red.classList.remove('show')
            green.classList.remove('show')
        }, 1500);
    }
})