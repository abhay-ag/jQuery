const disp1Btn = document.querySelector('.fetch')

// using a third party api
disp1Btn.addEventListener('click', () => {
    console.log("You clicked the display button");
    const xhr = new XMLHttpRequest()

    // using a rest api
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }else{
            console.log("Error occurred");
        }
    }

    prmtrs = '{"name": "Ram", "Salary": "12000", "age": "25"}'
    xhr.send(prmtrs)
    console.log("Work done ..... ");
})