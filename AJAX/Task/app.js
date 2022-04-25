const getBtn = document.querySelector('.get')
const sendBtn = document.querySelector('.send')
const fetchBtn = document.querySelector('.fetch')
const grt35 = document.querySelector('.grt35')
const grt10000 = document.querySelector('.grt10000')
let obj = {}

getBtn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'package.json', true)

    xhr.onload = function() {
        obj = JSON.parse(this.responseText);
    }
    
    xhr.send()
})
sendBtn.addEventListener('click', () =>{
    let str = ''

    let data = obj.data
    for (let i = 0; i < data.length; i++){
        if(data[i].age > 35){
            str += `<li>${data[i].name}</li>`
        }
    }

    grt35.innerHTML = str
})

fetchBtn.addEventListener('click', () => {
    let str = ''

    let data = obj.data
    for( let i =0; i < data.length; i++){
        if(data[i].salaray > 10000){
            str += `<li>${data[i].name}, ${data[i].age}</li>`
        }
    }
    grt10000.innerHTML = str
})