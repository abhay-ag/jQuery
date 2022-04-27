const subBtn = document.querySelector('.submit')
const un = document.querySelector('.uName')
const ps = document.querySelector('.pswrd')
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
        alert("User Found")
    }else{
        alert("User not found")
    }
})