const dispBtn = document.querySelector('.btn-secondary')

// using a third party api
dispBtn.addEventListener('click', () => {
    console.log("You clicked the display button");
    const xhr = new XMLHttpRequest()

    // using a rest api
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/employees', true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }else{
            console.log("Error occurred");
        }
    }
    prmtrs = '{"name": "Ram", "Salary": "12000", "age": "25"}'

    xhr.send()
})