const dispBtn = document.querySelector('.btn-secondary')

// using a third party api
dispBtn.addEventListener('click', () => {
    console.log("You clicked the display button");
    const xhr = new XMLHttpRequest()

    // using a rest api
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true)

    xhr.onload = function(){
        if(this.status === 200){
            // parsing the recieved text
            let obj = JSON.parse(this.responseText)
            // console.log(obj);

            // publishing dynamically through JS
            let str = ''
            let data = obj.data
            let lst = document.querySelector("#list")
            for(let i = 0; i < data.length ; i++){
                str += `<li>${obj.data[i].employee_name} </li>`
            }
            // rendering onto the screen
            lst.innerHTML = str
        }else{
            console.log("Error occurred");
        }
    }

    xhr.send()
})