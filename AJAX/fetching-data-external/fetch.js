const btn = document.querySelector('.class')

btn.addEventListener('click', () =>{
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'fetching-data-external/data.json', true)

    xhr.onload = function() {
        const obj = JSON.parse(this.responseText)

        console.log(obj);  
     }
     xhr.send()
})